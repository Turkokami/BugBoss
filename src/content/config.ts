import { defineCollection, z } from 'astro:content';

const faq = z.array(z.object({ q: z.string(), a: z.string() }));

// Deep long-form body for a town hub (matched to src/data/towns.ts by `town`).
const towns = defineCollection({
  type: 'content',
  schema: z.object({
    town: z.string(),
    title: z.string(),
    answer: z.string(),
    faqs: faq.default([]),
  }),
});

// Deep long-form body for a pest (matched to src/data/pests.ts by `pest`).
const pests = defineCollection({
  type: 'content',
  schema: z.object({
    pest: z.string(),
    title: z.string(),
    answer: z.string(),
    faqs: faq.default([]),
  }),
});

// Rural specialty + problem-specific guides (standalone deep pages).
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    answer: z.string(),
    category: z.string().default('Guide'),
    order: z.number().default(100),
    faqs: faq.default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    window: z.string().default(''),
    // Master Plan §3.4: every post feeds one service spoke. Keys live in
    // src/data/blog-clusters.ts; the build fails loudly on an unknown key.
    cluster: z.enum([
      'fall-invaders', 'rodent-control', 'ant-control', 'stinging-insects',
      'mosquito-tick', 'bed-bug-treatment', 'cockroach-control',
      'wildlife-removal', 'general-pest-control',
    ]),
    faqs: faq.default([]),
  }),
});

// Tier 3 metro-edge neighborhood pages (long-tail, per audit strategy).
const neighborhoods = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    county: z.string(),
    answer: z.string(),
    order: z.number().default(100),
    faqs: faq.default([]),
  }),
});

// Problem-specific micro pages (pest × situation long-tail intent).
const problems = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    answer: z.string(),
    category: z.string().default('Problem'),
    order: z.number().default(100),
    faqs: faq.default([]),
  }),
});

// Industry-by-industry commercial vertical pages.
const commercial = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industry: z.string(),      // short label for cards/nav
    category: z.string(),      // group heading on the hub
    answer: z.string(),
    order: z.number().default(100),
    faqs: faq.default([]),
  }),
});

// Deep long-form body for a residential service spoke
// (matched to src/data/residential-services.ts by `service`).
const residential = defineCollection({
  type: 'content',
  schema: z.object({
    service: z.string(),
    title: z.string(),
    answer: z.string(),
    faqs: faq.default([]),
  }),
});

// Compliance / code / tenant-law pages (Master Plan §3.4 page type 5, T8).
// These state a rule plainly rather than selling a service, so they carry a
// source citation and a review date (Rule 7) as required frontmatter — not
// optional, because an out-of-date legal page is worse than none.
const compliance = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    short: z.string(),          // nav/card label
    audience: z.string(),       // who the rule applies to, for the card
    answer: z.string(),
    order: z.number().default(100),
    source: z.string(),         // authority the rule comes from
    sourceUrl: z.string().optional(),
    reviewed: z.string(),       // display date of last review
    faqs: faq.default([]),
  }),
});

// Pest × city crossing pages (Master Plan §3.3 `/locations/{city}/{service}/`,
// Phase 3). Deliberately NOT generated as a full lattice: Rule 5 gates geo
// pages on having genuinely unique content to write, and Rule 6 forbids
// template-assembled body copy. So a page exists only where the pest is a real
// named pressure for that town and there was something specific to say — the
// file existing IS the capacity gate. Filename is `{town}--{pest}`.
const townpests = defineCollection({
  type: 'content',
  schema: z.object({
    town: z.string(),           // town slug, must exist in towns.ts
    pest: z.string(),           // pest slug, must exist in pests.ts
    title: z.string(),
    answer: z.string(),
    faqs: faq.default([]),
  }),
});

// Case studies (Master Plan §4.2 T9) — "the highest-trust, most citation-friendly
// asset type in the system, and the one most often missing." Structured as
// pest x property type x place x method x outcome, which is what makes one
// simultaneously a geo page, a service page and a proof asset.
//
// `town` is optional and currently unset on all four: these came from Brian's
// written answers, which gave the pest, the property and the outcome but not
// the location. Adding the real town to each is a one-line change and would
// materially strengthen them — do not invent one.
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pest: z.string(),          // pest slug, for cross-linking to the library
    pestLabel: z.string(),
    propertyType: z.string(),
    town: z.string().optional(),
    outcome: z.string(),       // one-line result, shown on the card
    answer: z.string(),
    order: z.number().default(100),
    faqs: faq.default([]),
  }),
});

// Deep bodies for the /service-area/{town}/{residential|commercial|wildlife}/
// spokes. Without one, a spoke renders as a template mad-lib on the town name
// -- around 400 words that competes with its own 3,700-word parent hub. The
// template only renders the spoke's own copy as a fallback; where a body
// exists here, it carries the page.
const townservices = defineCollection({
  type: 'content',
  schema: z.object({
    town: z.string(),
    service: z.enum(['residential', 'commercial', 'wildlife']),
    title: z.string(),
    answer: z.string(),
    faqs: faq.default([]),
  }),
});

export const collections = { towns, pests, guides, blog, neighborhoods, problems, commercial, residential, compliance, townpests, caseStudies, townservices };
