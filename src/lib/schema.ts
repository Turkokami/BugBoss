// ---------------------------------------------------------------------------
// SCHEMA — the JSON-LD entity graph (audit §Phase 1, defect H4/G4).
//
// Builds a single connected @graph so BugBoss reads as ONE entity ranking
// across a county, not a pile of unrelated pages. Core nodes (Organization,
// LocalBusiness, Person, WebSite, Services) are sitewide; each page adds its
// own WebPage node, plus optional FAQPage and BreadcrumbList.
// ---------------------------------------------------------------------------

import { business, fullAddress, sameAs } from '@/data/business';
import { services } from '@/data/services';
import { areaServedNames, counties } from '@/data/towns';

const ID = {
  org: `${business.url}/#organization`,
  local: `${business.url}/#localbusiness`,
  person: `${business.url}/#brian`,
  website: `${business.url}/#website`,
};

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.zip,
  addressCountry: business.address.country,
};

const areaServed = [
  ...counties.map((c) => ({ '@type': 'AdministrativeArea', name: c, address: { '@type': 'PostalAddress', addressRegion: 'WI' } })),
  ...areaServedNames.map((name) => ({ '@type': 'City', name: `${name}, WI` })),
];

function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ID.org,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    email: business.email,
    telephone: business.phoneTollFreeE164,
    foundingDate: String(business.foundingYear),
    founder: { '@id': ID.person },
    logo: `${business.url}/images/logo.png`,
    sameAs,
  };
}

function localBusinessNode() {
  return {
    '@type': ['LocalBusiness', 'PestControlService'],
    '@id': ID.local,
    name: business.name,
    parentOrganization: { '@id': ID.org },
    url: business.url,
    email: business.email,
    telephone: business.phoneTollFreeE164,
    priceRange: '$$',
    image: `${business.url}/images/hero-truck-spraying.jpg`,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    founder: { '@id': ID.person },
    employee: { '@id': ID.person },
    areaServed,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    },
    sameAs,
  };
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': ID.person,
    name: business.owner.name,
    jobTitle: business.owner.role,
    image: `${business.url}/images/brian-headshot.jpg`,
    worksFor: { '@id': ID.org },
    knowsAbout: ['Pest control', 'Wildlife removal', 'Bat exclusion', 'Rodent exclusion', 'Integrated pest management'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: `Wisconsin Commercial Pesticide Applicator (Cert #${business.owner.licenseNumber})`,
    },
    sameAs: [business.social.tiktok, business.social.youtube],
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: business.url,
    name: business.name,
    publisher: { '@id': ID.org },
    inLanguage: 'en-US',
  };
}

function serviceNodes() {
  return services.map((s) => ({
    '@type': 'Service',
    '@id': `${business.url}/${s.slug}/#service`,
    name: s.name,
    serviceType: s.name,
    description: s.answer,
    provider: { '@id': ID.local },
    areaServed: areaServed,
    url: `${business.url}/${s.slug}/`,
  }));
}

// The sitewide core — present on every page.
export function coreNodes() {
  return [organizationNode(), localBusinessNode(), personNode(), websiteNode(), ...serviceNodes()];
}

// Per-page WebPage node.
export function webPageNode(opts: { url: string; name: string; description: string; primaryEntityId?: string }) {
  const node: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': ID.website },
    about: { '@id': opts.primaryEntityId ?? ID.local },
    inLanguage: 'en-US',
  };
  return node;
}

export interface FaqItem {
  q: string;
  a: string;
}

// FAQPage node — drives Google FAQ rich results and AI answer citation (H3).
export function faqPageNode(url: string, faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbNode(url: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

// Assemble a complete @graph for a page.
export function buildGraph(pageNodes: object[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [...coreNodes(), ...pageNodes],
  };
}
