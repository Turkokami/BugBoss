// ---------------------------------------------------------------------------
// GEO CONTENT — builds genuinely differentiated copy and FAQs per town from the
// `local` data in towns.ts. This is the guard against the audit's #1 risk:
// templated town pages treated as duplicate/thin content. Every town's page
// varies by distance, direction, pest pressure, housing stock, and landmarks.
// ---------------------------------------------------------------------------

import { business } from '@/data/business';
import type { Town } from '@/data/towns';

// Safe fallback local data so a town page never crashes the build even if its
// deep content file is missing. Deep collection content overrides all of this.
export function genericLocal(t: Town): NonNullable<Town['local']> {
  return {
    distanceMi: 30,
    direction: 'in the region',
    intro: `${t.name} is one of the ${t.county} communities BugBoss The X-Terminator serves across rural Northeast and Central Wisconsin.`,
    pestPressures: [
      'mice and rodents pushing indoors in fall',
      'cluster flies and boxelder bugs overwintering',
      'wasps and hornets in summer',
      'bats and wildlife in attics and outbuildings',
    ],
    housing: 'a mix of village homes, farmsteads, and rural properties',
    landmarks: ['the surrounding countryside'],
  };
}

export function proximityLine(t: Town): string {
  if (!t.local) {
    return `${t.name} is part of BugBoss's ${t.county} service area, reached from our Clintonville home base.`;
  }
  const L = t.local!;
  if (L.distanceMi === 0) {
    return `${t.name} is BugBoss’s home town — our storefront is right here at ${business.address.street}.`;
  }
  return `${t.name} sits about ${L.distanceMi} miles ${L.direction} of BugBoss’s Clintonville home base in ${t.county}.`;
}

export function townHubFaqs(t: Town) {
  const L = t.local ?? genericLocal(t);
  const near = L.distanceMi === 0 ? 'right here in town' : `about ${L.distanceMi} miles away in Clintonville`;
  return [
    {
      q: `Does BugBoss provide pest control in ${t.name}, WI?`,
      a: `Yes. BugBoss The X-Terminator serves ${t.name} in ${t.county} for residential and commercial pest control and wildlife removal. We’re based ${near}, so ${t.name} is squarely within our core service area.`,
    },
    {
      q: `What pests are most common in ${t.name}?`,
      a: `In and around ${t.name}, the pests we deal with most are ${L.pestPressures.slice(0, 3).join(', ')}, and ${L.pestPressures.slice(3).join(', ') || 'other seasonal invaders'}. ${L.intro}`,
    },
    {
      q: `How fast can BugBoss get to ${t.name}?`,
      a:
        L.distanceMi <= 8
          ? `${t.name} is very close to home base, so response is fast — often same-day. Call ${business.phoneVanity} to check availability.`
          : `At roughly ${L.distanceMi} miles from Clintonville, ${t.name} is well within our regular route. Call ${business.phoneVanity} and we’ll schedule you quickly.`,
    },
    {
      q: `Does BugBoss handle wildlife in ${t.name}?`,
      a: `Yes. Around ${t.name}, ${L.housing} mean wildlife work — bats, raccoons, squirrels, and skunks — is common, including DNR-compliant bat exclusion. BugBoss does both pest and wildlife work, which most companies out here don’t.`,
    },
    {
      q: `Is there a contract for service in ${t.name}?`,
      a: `No. BugBoss never locks ${t.name} customers into long-term contracts or cancellation fees. You get the problem solved and choose whether to continue with seasonal service.`,
    },
  ];
}

// A town-scoped Service node so each geo page contributes a real entity edge.
export function townServiceNode(t: Town, url: string) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Pest Control & Wildlife Removal in ${t.name}, WI`,
    serviceType: 'Pest control and wildlife removal',
    provider: { '@id': `${business.url}/#localbusiness` },
    areaServed: {
      '@type': 'City',
      name: `${t.name}, WI`,
      ...(t.lat && t.lng ? { geo: { '@type': 'GeoCoordinates', latitude: t.lat, longitude: t.lng } } : {}),
      containedInPlace: { '@type': 'AdministrativeArea', name: t.county },
    },
    url,
  };
}
