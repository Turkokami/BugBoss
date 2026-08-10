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
  businessLicense: '535382', // WI business registration
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

  // Human-readable hours. TODO: confirm exact hours with Brian.
  // GBP lists a 24-hour attribute; emergency line is answered around the clock.
  hours: '24-hour emergency line; office Mon–Fri 8am–5pm',

  // --- Trust / reputation (GBP live data, July 2026 per audit) ---
  rating: { value: 4.9, count: 95 },

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

  // --- Web / social ---
  url: 'https://bugbosswi.com',
  social: {
    facebook: 'https://www.facebook.com/BugBossTheXTerminator',
    tiktok: 'https://www.tiktok.com/@bugbossbrian',
    instagram: 'https://www.instagram.com/bugboss_the_x_terminator/',
    youtube: 'https://www.youtube.com/channel/UCFMDVz_npS6z-aPUxQLJA1Q',
    // TODO: confirm exact Google Maps + Yelp profile URLs
    googleMaps: 'https://www.google.com/maps/search/BugBoss+The+X-Terminator+Clintonville+WI',
    yelp: 'https://www.yelp.com/biz/bugboss-the-x-terminator-clintonville',
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
