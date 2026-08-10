# BugBoss The X-Terminator — New Website

A rebuild of bugbosswi.com on **Astro**, structured around the *Smart Site Audit & Market Analysis 2026*. This is a brand-new site (not an edit of the Duda template), built to execute the audit's hub-and-spoke geographic strategy and lift the scorecard from **39 → 91**.

## The strategy, in one line

Stop fighting for the saturated Fox Valley. Become the undisputed pest & wildlife authority for the **uncontested rural corridor** around Clintonville — where the largest competitor has 17 reviews and BugBoss already has 95, a storefront, and the Pest Library.

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # static output to /dist
npm run preview    # preview the production build
```

The build is 100% static (63 pages today) — deploy `/dist` to any host (Netlify, Cloudflare Pages, Vercel, S3, or a plain web server). Fully portable off Duda.

## How the code is organized

Everything flows from **data files** so content stays consistent and the site scales to hundreds of pages without copy-paste.

```
src/
  data/
    business.ts     ← single source of truth for NAP, phones, socials, owner, rating
    towns.ts        ← the GEO MODEL: every town, its tier, cluster type, and local details
    services.ts     ← the 3 service hubs
    pests.ts        ← the Pest Library (17 pests today; each with AEO answer + FAQs)
    reviews.ts      ← testimonials (placeholders — see TODOs)
  lib/
    schema.ts       ← the 7-node JSON-LD @graph (Organization → LocalBusiness → Person → WebSite → Service → WebPage → FAQPage)
    geo.ts          ← builds *differentiated* local copy + FAQs per town
  components/        ← Header, Footer, PhoneBar, AnswerBox, Faq, Reviews, Cta
  layouts/BaseLayout.astro  ← injects the entity graph on every page
  pages/             ← the actual routes (see below)
  styles/global.css  ← the design system
```

## Scale (current)

**195 pages**, all statically generated. Highlights this round:
- **Full commercial section — 16 industry pages** (`/commercial-pest-control/<industry>/`) plus an
  industry-directory hub. Each is 3,000–4,500 words, compliance-heavy with accurately-cited
  standards (FDA FSMA / 21 CFR 117, WI Food Code ATCP 75, PMO/DATCP for dairy, OSHA 1910.141,
  FSMA Sanitary Transportation, SQF/BRC/AIB audits, DPI & school IPM, Joint Commission/CMS
  42 CFR 482.41 & 483.90 for healthcare, ATCP 72 lodging, ATCP 134.09 tenant-entry, museum-IPM
  best practices), with AEO answers, 12–15 FAQs, schema, and full internal linking. Covers
  restaurants, food processing, grocery, dairy/cheese processing, manufacturing, warehousing,
  offices, hotels/lodging, retail, property management, schools, healthcare/senior living,
  agricultural, grain/feed/seed, veterinary/kennels, and museums.
- **Swappable images:** all photos are drop-in files in `/public/images/` with clean names —
  changing any one is a one-line edit in the relevant page.

### Earlier: 179 pages — Highlights:
- **Full pest & wildlife library — 42 pages**, every one deep (≈3,000–4,500 words) with local
  WI ecology, 12–15 FAQs, and schema. Covers the original site's pest list plus audit priority
  additions (fall-invader complex, deer mice/voles/chipmunks/shrews, groundhogs/moles/snakes/
  woodpeckers/opossums/muskrats/beavers/coyotes/nuisance birds, cockroaches, fleas, carpet
  beetles, and more).
- **Rural takeover — 61 town pages**: Tier 1 + Tier 2 + Tier 4 (Antigo, Wausau, Stevens Point,
  Merrill, Wautoma, Berlin, …) + rural Oconto County (Oconto, Gillett, Suring, Lena, …), each a
  deep, researched, hyperlocal page. Fox Valley/Green Bay metros stay neighborhood/long-tail
  only, per the plan.
- **Brand match:** rebranded to BugBoss's neon-green / black / white identity with the real
  logo, bolder modern styling (neon accents, glows, gradient headline, hover motion).
- **Our Story** page (Brian & Amber, founded April 2021) and verified credentials wired in:
  WI Commercial Applicator Cert #103689 (Aquatic & Mosquito + Structural), business reg #535382.

### Earlier milestone: 136 pages Deep, research-grounded, hyperlocal long-form
content lives in Astro content collections (`src/content/`):

- **9 Tier 3 neighborhood pages** (`/pest-control/`) — Appleton (Historic Central, Highlands,
  North Side, East Side) and Green Bay/De Pere (Astor, Preble, Allouez, De Pere E/W),
  1,600–2,300 words each, positioned honestly as the rural specialist reaching the metro edge.
- **22 problem-specific pages** (`/pest-problems/`) — long-tail "I have THIS problem" intent
  (mice in the pole barn, bats in the attic, cluster flies in windows, wasp nest in soffit,
  raccoon in chimney, etc.), 1,300–1,900 words each with FAQs + schema.
- **Anti-slop pass done:** cross-page duplicate sentences on town pages cut 74 → 39; the
  remaining repeats are unavoidable facts (NAP line, DNR bat-law statement, section headings).
  Process/CTA/positioning prose is now unique per town.


- **44 town pages** — all 20 Tier 1 (the moat) + 24 Tier 2 (the Ring), each ~2,600 words of
  unique local body plus 12–15 town-specific FAQs (≈3,000–3,800 words of unique text/page),
  grounded in real geography, housing stock, ecology, and landmarks researched per town.
- **8 rural specialty guides** (`/guides/`) — 3,000–3,600 words each: WI bat-exclusion law,
  fall invaders, farmhouse rodent exclusion, cabin/seasonal, dairy-farm IPM, tick/Lyme yard
  programs, campground/RV/marina, attic wildlife. These are the AEO/GEO crown jewels.
- **15 pest-library pages** — 8 flagship pests deepened to ~2,850 words with 12–15 FAQs;
  7 more with solid entries (expand next).
- **6 seasonal blog posts** on the Wisconsin trigger calendar.
- **9 real photos** wired in (hero, About + gallery, service pages), web-optimized w/ alt text.

### Content quality notes / next refinements
- The **per-town local content is genuinely unique**; the shared "our process," "why local,"
  and closing-CTA lines repeat across town pages (normal boilerplate, ~8% of a page). To
  maximize the anti-slop signal, vary or templatize those shared blocks (a dedup pass is the
  recommended next step).
- Town **prose bodies average ~2,630 words**; to hit a strict 3,000–4,000-word *body* target,
  each can be extended with a neighborhood/area section and a longer local-ecology section.
- Remaining pest pages (ticks, mosquitoes, squirrels, skunks, ants, spiders, bed bugs) still
  use their shorter data-file entries — deepen to match the flagship eight.

## What's built (structure + all Tier 1 & Tier 2 towns)

**Core & trust cluster** — Homepage, Residential / Commercial / Wildlife hubs, About Brian (Person entity), Reviews, Our Guarantee, No Contracts, Contact, Privacy, Terms, Blog index.

**Pest Library** — index + 17 programmatic pest pages. Flagship rural pests (cluster flies, boxelder bugs, Asian lady beetles, mice, bats, wasps/hornets, carpenter ants, raccoons) are written to full depth with an 8-question FAQ each; the rest have solid entries to expand in Phase 3 (target: 55).

**Tier 1 geo layer (the moat)** — 20 town hub pages, each with *genuinely differentiated* local content (distance, direction, county, local pest pressures, housing stock, landmarks). Clintonville gets the full 4-page cluster (hub + residential + commercial + wildlife); Marion, Manawa, Iola, Tigerton, and Embarrass get hub + residential + wildlife; the remaining Tier 1 towns get a single deep hub page.

## How this fixes the audit defects

| Audit defect | Fix in this build |
|---|---|
| C1 — "Founded 2021" + "6 years" contradiction | One value: `foundingYear: 2021` in `business.ts`. The "6 years" claim is gone sitewide. |
| C2 — empty testimonial section | `Reviews` component + real `AggregateRating` (4.9/95). *(Quotes are placeholders — see TODOs.)* |
| C3 — dead "Learn More" links | Verified: **0 dead internal links** across all pages. |
| C4 — nav injected into page body | Clean `Header` component, nav in the header only. |
| C5 — inverted geo targeting | Tier model builds the rural moat first; metros are Tier 3 long-tail. |
| H1 — 866-only phone | Local **715** line published alongside the 866 vanity number *(placeholder — see TODOs)*. |
| H2 — footer missing ZIP | ZIP **54929** in footer + schema on all 63 pages; NAP byte-consistent. |
| H3 — no FAQ / answer boxes | `AnswerBox` (40–60 word answer under every H1) + `Faq` with **FAQPage schema** everywhere. |
| H4 — no entity graph | Connected 7-node JSON-LD `@graph` on every page; `areaServed` covers 92 places. |
| H5 — HQ had no spokes | Clintonville is the full 4-page cluster template. |
| H6 — duplicate homepage cards | Rebuilt from data — no duplicates. |
| M2/M4/M5 — alt text, 1920w images, iframe form | Alt text on components; no oversized images; native crawlable contact form (replaces the GHL iframe). |

## ⚠️ TODOs before launch (search the code for `TODO`)

1. **Local 715 phone number** — `src/data/business.ts` (`phoneLocal`). Currently `715-000-0000`.
2. **WI pesticide applicator license #** — `src/data/business.ts` (`owner.licenseNumber`).
3. **Real Google reviews** — replace the placeholder quotes in `src/data/reviews.ts` with verbatim GBP reviews, then enable individual `Review` JSON-LD.
4. **Contact form — LIVE, wired to Brian's GoHighLevel.** The `/contact/` page embeds Brian's
   existing GoHighLevel (LeadConnector) form (`link.bugbosswi.com/widget/form/SrYJFJnTgR63djgpcblC`),
   so submissions flow into his current lead tracking + AI follow-up exactly as on the old site —
   no separate inbox or activation needed. The form ID and domain live in `src/data/business.ts`
   (`ghlFormId`, `ghlDomain`); the `form_embed.js` script on the page auto-resizes the iframe. To
   swap forms, paste a new form ID from GHL. A crawlable call/email fallback sits under the embed.
   *(A native FormSubmit form + `/thank-you/` page remain in the repo as a documented fallback if
   he ever wants to move off the iframe — see `formEndpoint`.)*
5. **Photos** — 9 real BugBoss photos are wired in (`/public/images/`). Swap/add more anytime; the About page and service pages are set up to feature them. A professional headshot of Brian would still be a nice upgrade over the current field photo.
6. **Legal entity name & exact hours** — confirm in `business.ts`.
7. **Confirm Google Maps / Yelp profile URLs** in `business.ts`.

## Next phases (from the audit roadmap)

- **Done:** Foundation + entity graph, Tier 1 moat (deep), Tier 2 Ring (deep), 8 specialty
  guides, flagship pest library, seasonal blog, photos.
- **Phase 2 remaining** — Tier 3 metro long-tail *neighborhood* pages (Appleton/Green Bay
  districts — deliberately NOT full town pages, per the audit), Tier 4 test towns (Antigo first).
- **Phase 3 remaining** — Pest Library → 55, 30 problem-specific micro pages, pest×city
  crossing pages, blog to 8–10 posts/month.
- **Phase 4** — review velocity 95→300, TikTok/YouTube `VideoObject` schema, chamber/association links.
- **Polish pass** — vary shared town boilerplate; deepen remaining pest pages; extend town bodies to 3,500+ words.
