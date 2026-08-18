// ---------------------------------------------------------------------------
// BUSINESS — single source of truth for NAP, contact, brand, and identity.
// Every JSON-LD node and every rendered NAP string reads from here, so the
// site is byte-identical to the Google Business Profile (fixes audit H2/H1).
//
// PLACEHOLDER tokens are marked TODO — swap the real value in one place.
// ---------------------------------------------------------------------------

export const business = {
  name: 'BugBoss The X-Terminator',
  shortName: 'BugBoss',
  legalName: 'BugBoss The X-Terminator', // Registered name; DBA "The BugBoss".
  dba: 'The BugBoss',
  // NOTE: a WI business registration #535382 was previously published here.
  // Brian did not recognise it when asked (Aug 2026), so it is unverified and
  // has been removed rather than left on 239 pages. An unverifiable credential
  // is worse than no credential. Restore only if it can be confirmed.
  tagline: 'Pest Control & Wildlife Removal in Northeast Wisconsin',
  foundingYear: 2021, // Founded April 2021 by Brian & Amber Zahringer.
  foundingMonth: 'April',
  cofounder: 'Amber Zahringer',

  // --- Contact / NAP ---
  // 866-BUGBOSS is the single primary number everywhere (vanity + numeric of the same line).
  phoneVanity: '866-BUGBOSS',
  phoneTollFree: '866-284-2677',
  phoneTollFreeE164: '+18662842677',
  email: 'office@bugbosswi.com',

  // --- Lead form ---
  // LIVE: Brian's GoHighLevel (LeadConnector) form is embedded on /contact/, so
  // submissions flow into his existing lead tracking + AI follow-up exactly as on
  // the old site. To point at a different form, copy the form ID from GHL
  // (Form builder → Integrate/Embed) into `ghlFormId`.
  ghlDomain: 'https://link.bugbosswi.com',
  ghlFormId: 'SrYJFJnTgR63djgpcblC',
  leadEmail: 'office@bugbosswi.com', // used for the crawlable email fallback
  // Fallback handler if the GHL embed is ever swapped for a native form (see README):
  formEndpoint: 'https://formsubmit.co/office@bugbosswi.com',

  address: {
    street: '600 S. Main St.',
    city: 'Clintonville',
    state: 'WI',
    stateName: 'Wisconsin',
    zip: '54929', // Audit H2: ZIP added — footer/schema now match GBP.
    country: 'US',
  },
  geo: { lat: 44.6216, lng: -88.7626 },

  // Confirmed by Brian, August 2026. Must stay byte-identical to the Google
  // Business Profile — if it changes there, change it here and nowhere else.
  hours: '24-hour emergency line; office Mon–Fri 8am–5pm',

  // Machine-readable mirror of the line above, for openingHoursSpecification
  // (Master Plan §5.1: LocalBusiness carries hours). Keep these two in sync —
  // if the office hours change, change them in both places here and nowhere else.
  hoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
  ],

  // --- Trust / reputation (GBP live data, July 2026 per audit) ---
  rating: { value: 4.9, count: 95 },
  // Opens the Google review box directly rather than the profile — one tap
  // fewer, which matters when review velocity is the weakest dimension on the
  // scorecard and the only one the build itself cannot improve.
  reviewUrl: 'https://g.page/r/CfLwJA8GPIIxEBE/review',

  // --- Owner / named expert (E-E-A-T) ---
  owner: {
    name: 'Brian Zahringer',
    role: 'Owner & Lead Technician',
    // WI commercial pesticide applicator certification (verified)
    licenseNumber: '103689',
    applicatorType: 'Commercial',
    applicatorCategories: ['005.0 Aquatic & Mosquito', '007.1 Structural'],
    certExpires: '2027-10-31',
    social: { tiktok: '@bugbossbrian' },
  },

  attributes: ['Family-owned & operated', 'Licensed & insured', 'No long-term contracts'],

  // --- Service area -------------------------------------------------------
  // Confirmed by Brian, August 2026: a 60-mile STRAIGHT-LINE radius from
  // downtown Clintonville (44.620 N, 88.762 W). Straight-line, not drive time —
  // actual travel distance to the outer edge is longer, so the copy says
  // "about 60 miles" rather than implying a surveyed boundary.
  //
  // A county is listed if any part of it falls inside the radius, which means
  // the far corners of the outer counties are marginal. This is the marketing
  // service area, not a GIS boundary; treat edge communities as "call and ask".
  serviceRadiusMiles: 60,
  serviceCounties: [
    'Waupaca County', 'Shawano County', 'Outagamie County', 'Menominee County',
    'Oconto County', 'Brown County', 'Marathon County', 'Portage County',
    'Waushara County', 'Winnebago County', 'Calumet County', 'Fond du Lac County',
    'Green Lake County', 'Marquette County', 'Wood County', 'Adams County',
    'Langlade County',
  ],
  // The counties the rural-corridor strategy actually targets with content.
  // Serving 17 counties and writing deep content for 6 is not a contradiction:
  // the audit's whole thesis is to avoid competing head-on in the Fox Valley
  // and Green Bay metros while still covering them.
  coreCounties: [
    'Waupaca County', 'Shawano County', 'Outagamie County',
    'Waushara County', 'Oconto County', 'Langlade County',
  ],

  // --- Insurance (certificate on file, Aug 2026) --------------------------
  // Published because commercial prospects — food processing, healthcare,
  // schools, property management — routinely ask before they will book.
  // Policy numbers and the agency contact are deliberately NOT here; a
  // certificate is issued on request instead.
  insurance: {
    generalLiabilityCarrier: 'West Bend Insurance Company',
    workersCompCarrier: 'SFM Mutual Insurance Company',
    eachOccurrence: '$1,000,000',
    generalAggregate: '$2,000,000',
    productsCompletedOps: '$2,000,000',
    certificateAvailable: true,
  },

  // Rule 7: factual claims carry a review date. This is the date the Pest
  // Library and guide content was last reviewed by the named expert; it feeds
  // both the visible expert block and `dateModified` in the Article node.
  contentReviewDate: '2026-08-16',
  contentReviewDateDisplay: 'August 2026',

  // --- Web / social ---
  url: 'https://bugbosswi.com',
  social: {
    facebook: 'https://www.facebook.com/BugBossTheXTerminator',
    tiktok: 'https://www.tiktok.com/@bugbossbrian',
    instagram: 'https://www.instagram.com/bugboss_the_x_terminator/',
    youtube: 'https://www.youtube.com/channel/UCFMDVz_npS6z-aPUxQLJA1Q',
    // Confirmed by Brian, August 2026.
    googleMaps: 'https://g.page/r/CfLwJA8GPIIxEBE',
    yelp: 'https://www.yelp.com/biz/bugboss-the-x-terminator-clintonville-2',
  },
} as const;

// Convenience formatters ---------------------------------------------------
export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;
export const cityState = `${business.address.city}, ${business.address.state}`;

// sameAs cluster for the entity graph (audit H4).
export const sameAs = [
  business.social.facebook,
  business.social.tiktok,
  business.social.instagram,
  business.social.youtube,
  business.social.googleMaps,
  business.social.yelp,
];
