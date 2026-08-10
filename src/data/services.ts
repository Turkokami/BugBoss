// ---------------------------------------------------------------------------
// SERVICES — the core service hubs (spokes of the hub-and-spoke model).
// Drives the top-level service pages and the Service nodes in the entity graph.
// ---------------------------------------------------------------------------

export interface Service {
  slug: string;
  name: string;
  short: string;      // nav / card label
  answer: string;     // 40-60 word AEO direct answer
  summary: string;    // intro paragraph
  bullets: string[];  // what's included
}

export const services: Service[] = [
  {
    slug: 'residential-pest-control',
    name: 'Residential Pest Control',
    short: 'Residential',
    answer:
      'BugBoss residential pest control protects Northeast Wisconsin homes from ants, spiders, mice, wasps, cluster flies, boxelder bugs, and more. We inspect, treat the problem at its source, and seal entry points so pests stay out. Service is available year-round with no long-term contract required.',
    summary:
      'Your home is the biggest reason people call us, and rural Wisconsin homes have their own pest calendar — carpenter ants in spring, wasps in summer, cluster flies and mice every fall, overwintering pests in the walls all winter. BugBoss treats the pest you called about and finds the entry points that let it in, so the problem does not just come back next season.',
    bullets: [
      'Full-home inspection inside and out',
      'Targeted treatment for the specific pest, not a blanket spray',
      'Exclusion work: sealing entry points, not just killing what is inside',
      'Seasonal programs for fall invaders and overwintering pests',
      'No long-term contract, no cancellation fee',
    ],
  },
  {
    slug: 'commercial-pest-control',
    name: 'Commercial Pest Control',
    short: 'Commercial',
    answer:
      'BugBoss provides commercial pest control for restaurants, food processing, grocery, retail, lodging, schools, healthcare, warehouses, agricultural operations, and more across Northeast Wisconsin. We deliver documented, inspection-ready service with discreet scheduling and treatment plans built around your industry’s compliance requirements.',
    summary:
      'Commercial work is not residential work scaled up — a restaurant, a dairy operation, a school, and a warehouse each have different pests, different regulations, and different tolerances. BugBoss builds a program around your building and your industry, with the documentation you need when an inspector or auditor asks for it.',
    bullets: [
      'Industry-specific programs (food service, agricultural, healthcare, lodging, retail, and more)',
      'Inspection-ready service documentation',
      'Discreet, scheduled visits that work around your operating hours',
      'Rodent, insect, and stored-product pest management',
      'Single point of contact — you talk to the owner, not a call center',
    ],
  },
  {
    slug: 'wildlife-removal',
    name: 'Wildlife Removal & Exclusion',
    short: 'Wildlife',
    answer:
      'BugBoss removes and excludes wildlife — bats, raccoons, squirrels, skunks, groundhogs, moles, voles, snakes, and woodpeckers — across Northeast Wisconsin. We trap or evict humanely, seal the animal out permanently, and clean up the damage. Bat exclusion follows Wisconsin DNR maternity-season timing (exits must stay open June 1–July 31).',
    summary:
      'Wildlife in the attic, chimney, barn, or crawlspace is exclusion work, not a spray. BugBoss finds how the animal is getting in, removes it humanely, and seals the structure so it cannot return — and for bats, we work within Wisconsin’s DNR maternity-season rules so the job is done legally and permanently.',
    bullets: [
      'Bats, raccoons, squirrels, skunks, groundhogs, moles, voles, snakes, woodpeckers',
      'Humane trapping and eviction',
      'Permanent exclusion and entry-point sealing',
      'Attic, chimney, soffit, barn, and crawlspace work',
      'Wisconsin DNR-compliant bat exclusion timing (exits kept open June 1–July 31)',
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
