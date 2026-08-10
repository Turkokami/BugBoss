// ---------------------------------------------------------------------------
// GEO DATA MODEL — the core of the hub-and-spoke geographic strategy.
//
// `cluster` controls how many pages a town gets:
//   'full'   = hub + residential + commercial + wildlife  (4 pages)
//   'triple' = hub + residential + wildlife               (3 pages)
//   'single' = one deep hub page                          (1 page)
//   'area'   = no dedicated page yet; listed in areaServed only (Tier 2-4)
//
// Tier 1 towns carry genuinely differentiated `local` content so Google does
// NOT treat them as duplicate template pages (audit risk: thin-content penalty).
// ---------------------------------------------------------------------------

export type Cluster = 'full' | 'triple' | 'single' | 'area';

export interface TownLocal {
  distanceMi: number;          // approx miles from Clintonville HQ
  direction: string;           // compass direction from HQ
  intro: string;               // 1-2 true sentences of local context
  pestPressures: string[];     // pests that matter most locally
  housing: string;             // dominant housing / building stock
  landmarks: string[];         // real local reference points
}

export interface Town {
  slug: string;
  name: string;
  county: string;
  tier: 1 | 2 | 3 | 4;
  cluster: Cluster;
  incorporated: boolean;
  lat?: number;
  lng?: number;
  local?: TownLocal;
}

// --- TIER 1 — THE MOAT (0-20 mi from Clintonville). Build first. ---
export const towns: Town[] = [
  {
    slug: 'clintonville',
    name: 'Clintonville',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'full',
    incorporated: true,
    lat: 44.6216,
    lng: -88.7626,
    local: {
      distanceMi: 0,
      direction: 'home base',
      intro:
        'Clintonville is home base for BugBoss — our storefront sits at 600 S. Main St., so a Clintonville call is a same-town response, not a truck dispatched from an hour away in the Fox Valley.',
      pestPressures: [
        'boxelder bugs and cluster flies overwintering in older homes',
        'mice moving indoors every fall',
        'carpenter ants in mature trees along the Pigeon River',
        'wasp and hornet nests on eaves and outbuildings',
      ],
      housing:
        'a mix of century-old downtown homes, mid-century neighborhoods, and farm properties on the edge of town',
      landmarks: ['the Pigeon River', 'Olen Park', 'downtown Main Street'],
    },
  },
  {
    slug: 'marion',
    name: 'Marion',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'triple',
    incorporated: true,
    lat: 44.6733,
    lng: -88.9015,
    local: {
      distanceMi: 12,
      direction: 'northwest',
      intro:
        'Marion straddles the Waupaca and Shawano county line in the heart of dairy country, where pole barns, grain storage, and older farmhouses drive most of the pest and rodent work.',
      pestPressures: [
        'barn and farmhouse mice and rats',
        'cluster flies and Asian lady beetles in fall',
        'bats roosting in older barn and attic spaces',
        'wasps in outbuildings',
      ],
      housing: 'farmsteads, pole barns, and modest village homes',
      landmarks: ['the Marion mill pond', 'Main Street'],
    },
  },
  {
    slug: 'manawa',
    name: 'Manawa',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'triple',
    incorporated: true,
    lat: 44.4661,
    lng: -88.9198,
    local: {
      distanceMi: 14,
      direction: 'southwest',
      intro:
        'Manawa sits on the Little Wolf River with a strong mix of lakeside and rural properties, plus a downtown business strip that needs commercial-grade pest management.',
      pestPressures: [
        'cluster flies and boxelder bugs on river-facing homes',
        'mice and rodents in rural properties',
        'mosquitoes near the Little Wolf River and Bear Lake',
        'wasp and hornet nests',
      ],
      housing: 'river and lake homes, village housing, and surrounding farms',
      landmarks: ['the Little Wolf River', 'Bear Lake', 'the Mid-Western Rodeo grounds'],
    },
  },
  {
    slug: 'iola',
    name: 'Iola',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'triple',
    incorporated: true,
    lat: 44.5061,
    lng: -89.1290,
    local: {
      distanceMi: 18,
      direction: 'west',
      intro:
        'Iola is a Waupaca County village surrounded by the Chain O’ Lakes region and heavy seasonal-cabin country, which makes opening and closing service a year-round need here.',
      pestPressures: [
        'cabin and seasonal-property mice and cluster flies',
        'bats in cabin and cottage attics',
        'wasps and hornets on seasonal structures',
        'ticks in wooded lots',
      ],
      housing: 'lake cabins, seasonal cottages, and village homes',
      landmarks: ['the Chain O’ Lakes area', 'the Iola Car Show grounds', 'the Tomorrow River'],
    },
  },
  {
    slug: 'tigerton',
    name: 'Tigerton',
    county: 'Shawano County',
    tier: 1,
    cluster: 'triple',
    incorporated: true,
    lat: 44.7333,
    lng: -89.0579,
    local: {
      distanceMi: 17,
      direction: 'north',
      intro:
        'Tigerton is a small Shawano County village along the Embarrass River, ringed by farmland and woodlots where rodent exclusion and fall invaders are the primary concern.',
      pestPressures: [
        'farmhouse and pole-barn rodents',
        'cluster flies and boxelder bugs',
        'bats in older structures',
        'overwintering pests in walls',
      ],
      housing: 'farmhouses, village homes, and agricultural outbuildings',
      landmarks: ['the Embarrass River', 'surrounding dairy farms'],
    },
  },
  {
    slug: 'embarrass',
    name: 'Embarrass',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'triple',
    incorporated: true,
    lat: 44.6650,
    lng: -88.7060,
    local: {
      distanceMi: 6,
      direction: 'north',
      intro:
        'Embarrass is a small village just north of Clintonville along the Embarrass River, close enough that it gets true same-day response for both pest and wildlife calls.',
      pestPressures: [
        'mice and rodents in rural homes',
        'cluster flies and Asian lady beetles',
        'wasps and hornets',
        'bats in attics and outbuildings',
      ],
      housing: 'rural homes, farmsteads, and riverside properties',
      landmarks: ['the Embarrass River'],
    },
  },
  // --- Single deep-page Tier 1 towns ---
  {
    slug: 'bear-creek',
    name: 'Bear Creek',
    county: 'Outagamie County',
    tier: 1,
    cluster: 'single',
    incorporated: true,
    lat: 44.5280,
    lng: -88.7240,
    local: {
      distanceMi: 9,
      direction: 'south',
      intro:
        'Bear Creek is an Outagamie County village in dairy-farm country south of Clintonville, where farmhouse rodent exclusion and fall invaders drive most calls.',
      pestPressures: ['farmhouse mice and rats', 'cluster flies', 'wasps', 'bats in barns'],
      housing: 'farmsteads and village homes',
      landmarks: ['surrounding dairy farms'],
    },
  },
  {
    slug: 'caroline',
    name: 'Caroline',
    county: 'Shawano County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 15,
      direction: 'north',
      intro:
        'Caroline is a rural Shawano County community north of Clintonville, where woodland properties and farmsteads see steady rodent and fall-invader pressure.',
      pestPressures: ['farmhouse rodents', 'cluster flies and boxelder bugs', 'bats', 'ticks'],
      housing: 'farms and rural homes',
      landmarks: ['area woodlots and farmland'],
    },
  },
  {
    slug: 'big-falls',
    name: 'Big Falls',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: true,
    local: {
      distanceMi: 16,
      direction: 'west',
      intro:
        'Big Falls is a tiny Waupaca County village on the Little Wolf River, where riverside and rural homes deal with seasonal invaders and rodents.',
      pestPressures: ['mice and rodents', 'cluster flies', 'mosquitoes near the river', 'wasps'],
      housing: 'riverside and rural homes',
      landmarks: ['the Little Wolf River falls'],
    },
  },
  {
    slug: 'scandinavia',
    name: 'Scandinavia',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: true,
    local: {
      distanceMi: 20,
      direction: 'west',
      intro:
        'Scandinavia is a Waupaca County village near the Chain O’ Lakes, with a strong mix of farm properties and seasonal homes that need rodent and overwintering-pest work.',
      pestPressures: ['cabin and farmhouse rodents', 'cluster flies', 'bats', 'ticks'],
      housing: 'farms and seasonal properties',
      landmarks: ['nearby Chain O’ Lakes'],
    },
  },
  {
    slug: 'ogdensburg',
    name: 'Ogdensburg',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: true,
    local: {
      distanceMi: 19,
      direction: 'west',
      intro:
        'Ogdensburg is a small Waupaca County village on the Tomorrow River, surrounded by farmland where rodent exclusion and fall invaders are the main pest concerns.',
      pestPressures: ['farmhouse rodents', 'cluster flies and boxelder bugs', 'wasps', 'bats'],
      housing: 'village homes and farmsteads',
      landmarks: ['the Tomorrow River'],
    },
  },
  {
    slug: 'symco',
    name: 'Symco',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 8,
      direction: 'southwest',
      intro:
        'Symco is a rural unincorporated community in the town of Union, Waupaca County, known regionally for its thresheree grounds and surrounded by working farms.',
      pestPressures: ['farmhouse and barn rodents', 'cluster flies', 'wasps', 'bats in outbuildings'],
      housing: 'farmsteads and rural homes',
      landmarks: ['the Symco thresheree grounds'],
    },
  },
  {
    slug: 'northport',
    name: 'Northport',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 13,
      direction: 'southwest',
      intro:
        'Northport is a rural Waupaca County community near Manawa, where farm properties and rural homes see steady rodent and seasonal-invader pressure.',
      pestPressures: ['farmhouse rodents', 'cluster flies', 'wasps', 'bats'],
      housing: 'rural homes and farms',
      landmarks: ['the Little Wolf River valley'],
    },
  },
  {
    slug: 'pella',
    name: 'Pella',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 12,
      direction: 'northwest',
      intro:
        'Pella is a rural township community in Waupaca County near Bear Creek and Marion, dominated by farmland and rural residences.',
      pestPressures: ['farmhouse rodents', 'cluster flies and boxelder bugs', 'bats', 'wasps'],
      housing: 'farmsteads and rural homes',
      landmarks: ['area farmland'],
    },
  },
  {
    slug: 'larrabee',
    name: 'Larrabee',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 7,
      direction: 'west',
      intro:
        'Larrabee is a rural town in Waupaca County immediately west of Clintonville, made up of farms and rural homes that get fast BugBoss response.',
      pestPressures: ['farmhouse rodents', 'cluster flies', 'wasps', 'bats'],
      housing: 'farms and rural residences',
      landmarks: ['surrounding farmland'],
    },
  },
  {
    slug: 'matteson',
    name: 'Matteson',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 15,
      direction: 'southwest',
      intro:
        'Matteson is a rural town in Waupaca County near Manawa, characterized by dairy farms and scattered rural homes.',
      pestPressures: ['barn and farmhouse rodents', 'cluster flies', 'bats', 'wasps'],
      housing: 'farmsteads and rural homes',
      landmarks: ['area dairy farms'],
    },
  },
  {
    slug: 'dupont',
    name: 'Dupont',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 10,
      direction: 'north',
      intro:
        'Dupont is a rural town in northern Waupaca County near Marion and Tigerton, with farmland and woodlots that see steady rodent and fall-invader activity.',
      pestPressures: ['farmhouse rodents', 'cluster flies and boxelder bugs', 'bats', 'ticks'],
      housing: 'farms and rural homes',
      landmarks: ['area woodlots and farmland'],
    },
  },
  {
    slug: 'union',
    name: 'Union',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 9,
      direction: 'southwest',
      intro:
        'Union is a rural Waupaca County town that includes the community of Symco, dominated by working farms and rural residences.',
      pestPressures: ['barn and farmhouse rodents', 'cluster flies', 'wasps', 'bats'],
      housing: 'farmsteads and rural homes',
      landmarks: ['the Symco area'],
    },
  },
  {
    slug: 'royalton',
    name: 'Royalton',
    county: 'Waupaca County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 16,
      direction: 'southwest',
      intro:
        'Royalton is a rural Waupaca County town along the Wolf River south of Manawa, with river properties and farmland driving pest and rodent work.',
      pestPressures: ['rodents', 'cluster flies', 'mosquitoes near the Wolf River', 'wasps'],
      housing: 'river and rural homes',
      landmarks: ['the Wolf River'],
    },
  },
  {
    slug: 'bear-creek-township',
    name: 'Bear Creek Township',
    county: 'Outagamie County',
    tier: 1,
    cluster: 'single',
    incorporated: false,
    local: {
      distanceMi: 10,
      direction: 'south',
      intro:
        'Bear Creek Township surrounds the village of Bear Creek in Outagamie County, an agricultural area where farmhouse and pole-barn rodent exclusion is the primary need.',
      pestPressures: ['farmhouse and barn rodents', 'cluster flies', 'bats', 'wasps'],
      housing: 'farmsteads and rural homes',
      landmarks: ['surrounding dairy farms'],
    },
  },

  // --- TIER 2 — THE RING (20-35 mi). areaServed only for now. ---
  { slug: 'shawano', name: 'Shawano', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'new-london', name: 'New London', county: 'Waupaca County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'waupaca', name: 'Waupaca', county: 'Waupaca County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'weyauwega', name: 'Weyauwega', county: 'Waupaca County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'fremont', name: 'Fremont', county: 'Waupaca County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'wittenberg', name: 'Wittenberg', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'birnamwood', name: 'Birnamwood', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'bonduel', name: 'Bonduel', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'cecil', name: 'Cecil', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'gresham', name: 'Gresham', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'bowler', name: 'Bowler', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'mattoon', name: 'Mattoon', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'wild-rose', name: 'Wild Rose', county: 'Waushara County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'hortonville', name: 'Hortonville', county: 'Outagamie County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'seymour', name: 'Seymour', county: 'Outagamie County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'black-creek', name: 'Black Creek', county: 'Outagamie County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'nichols', name: 'Nichols', county: 'Outagamie County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'shiocton', name: 'Shiocton', county: 'Outagamie County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'krakow', name: 'Krakow', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: false },
  { slug: 'pulaski', name: 'Pulaski', county: 'Brown County', tier: 2, cluster: 'single', incorporated: true },
  { slug: 'angelica', name: 'Angelica', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: false },
  { slug: 'navarino', name: 'Navarino', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: false },
  { slug: 'briarton', name: 'Briarton', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: false },
  { slug: 'leopolis', name: 'Leopolis', county: 'Shawano County', tier: 2, cluster: 'single', incorporated: false },

  // --- TIER 3 — METRO EDGE (35-55 mi). Long-tail only; areaServed for now. ---
  { slug: 'appleton', name: 'Appleton', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'neenah', name: 'Neenah', county: 'Winnebago County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'menasha', name: 'Menasha', county: 'Winnebago County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'kaukauna', name: 'Kaukauna', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'little-chute', name: 'Little Chute', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'kimberly', name: 'Kimberly', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'combined-locks', name: 'Combined Locks', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'greenville', name: 'Greenville', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: false },
  { slug: 'grand-chute', name: 'Grand Chute', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: false },
  { slug: 'freedom', name: 'Freedom', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: false },
  { slug: 'wrightstown', name: 'Wrightstown', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'de-pere', name: 'De Pere', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'green-bay', name: 'Green Bay', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'howard', name: 'Howard', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'suamico', name: 'Suamico', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'ashwaubenon', name: 'Ashwaubenon', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'bellevue', name: 'Bellevue', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'allouez', name: 'Allouez', county: 'Brown County', tier: 3, cluster: 'area', incorporated: true },
  { slug: 'oneida', name: 'Oneida', county: 'Outagamie County', tier: 3, cluster: 'area', incorporated: false },
  { slug: 'oconto', name: 'Oconto', county: 'Oconto County', tier: 3, cluster: 'single', incorporated: true },
  { slug: 'oconto-falls', name: 'Oconto Falls', county: 'Oconto County', tier: 3, cluster: 'single', incorporated: true },
  { slug: 'gillett', name: 'Gillett', county: 'Oconto County', tier: 3, cluster: 'single', incorporated: true },
  { slug: 'suring', name: 'Suring', county: 'Oconto County', tier: 3, cluster: 'single', incorporated: true },
  { slug: 'lena', name: 'Lena', county: 'Oconto County', tier: 3, cluster: 'single', incorporated: true },

  // --- TIER 4 — EXTENDED RURAL (55-75 mi). Opportunistic; areaServed for now. ---
  { slug: 'antigo', name: 'Antigo', county: 'Langlade County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'wausau', name: 'Wausau', county: 'Marathon County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'schofield', name: 'Schofield', county: 'Marathon County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'weston', name: 'Weston', county: 'Marathon County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'merrill', name: 'Merrill', county: 'Lincoln County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'stevens-point', name: 'Stevens Point', county: 'Portage County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'plover', name: 'Plover', county: 'Portage County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'amherst', name: 'Amherst', county: 'Portage County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'rosholt', name: 'Rosholt', county: 'Portage County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'wautoma', name: 'Wautoma', county: 'Waushara County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'redgranite', name: 'Redgranite', county: 'Waushara County', tier: 4, cluster: 'single', incorporated: true },
  { slug: 'berlin', name: 'Berlin', county: 'Green Lake County', tier: 4, cluster: 'single', incorporated: true },
];

// --- Helpers ---
export const townsWithPages = towns.filter((t) => t.cluster !== 'area');

export const getTown = (slug: string) => towns.find((t) => t.slug === slug);

export const hasResidentialSpoke = (t: Town) =>
  t.cluster === 'full' || t.cluster === 'triple';
export const hasCommercialSpoke = (t: Town) => t.cluster === 'full';
export const hasWildlifeSpoke = (t: Town) =>
  t.cluster === 'full' || t.cluster === 'triple';

// areaServed list for JSON-LD — every town/city we claim, all tiers.
export const areaServedNames = Array.from(
  new Set(towns.map((t) => t.name))
);

// Counties we operate across, for schema + copy.
export const counties = Array.from(new Set(towns.map((t) => t.county)));
