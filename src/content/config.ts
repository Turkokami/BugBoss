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

export const collections = { towns, pests, guides, blog, neighborhoods, problems, commercial };
