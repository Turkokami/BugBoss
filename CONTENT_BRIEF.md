# BugBoss Content Brief — READ THIS BEFORE WRITING ANY PAGE

You are writing deep, hyperlocal, expert content for **BugBoss The X-Terminator**, a
family-owned pest control & wildlife company in Clintonville, WI. Target: **3,000–4,000
words per page**, and it must read like it was written by a working local exterminator who
knows these towns — NOT like generic AI filler.

## THE ANTI-SLOP RULES (non-negotiable)

1. **Specifics over vibes.** Never write "in today's world, pests can be a nuisance." Lead
   with concrete, checkable facts: real rivers, real housing eras, real local industry,
   real pest biology, real WI timing. If you can't be specific, cut the sentence.
2. **No padding.** Do not repeat the same idea in three ways to hit word count. Depth comes
   from covering MORE real ground (season-by-season, building type by building type, pest by
   pest), not from inflating sentences.
3. **Vary structure and rhythm.** Do not start every town page with the same sentence shape.
   Mix short punchy sentences with longer technical ones. Avoid the "Firstly/Moreover/In
   conclusion" cadence.
4. **Real building science + entomology.** Explain HOW pests get in (gaps, weep holes,
   sill plates, soffit returns), WHY they behave seasonally, and WHAT actually fixes it
   (exclusion vs. spray). This technical specificity is what defeats "AI slop" perception.
5. **Do NOT invent specific false facts.** Do not fabricate named neighborhoods, street
   names, or businesses you haven't verified. Verified regional facts below are safe to use.
   For small towns with thin public info, lean on genuinely-true regional ecology, housing
   patterns, and building science rather than made-up landmarks.
6. **Research each town** you write with WebSearch before writing (county seat? on a river?
   lake community? dairy country? population? founded when? known for what?). Use what's real.

## BUSINESS FACTS (use verbatim; single source of truth)

- Name: **BugBoss The X-Terminator**; owner/lead tech **Brian Zahringer** (you deal with Brian directly).
- HQ storefront: **600 S. Main St., Clintonville, WI 54929** (Waupaca County).
- Phones: local **715-000-0000** (placeholder), toll-free **866-284-2677 (866-BUGBOSS)**.
- Founded **2021**. Family-owned, licensed & insured. Rated **4.9 / 95 reviews**.
- **No long-term contracts, no cancellation fees.** You reach the owner, not a call center.
- Does BOTH pest control AND wildlife removal/exclusion — rare among rural competitors.
- Positioning: the local rural authority vs. national brands (Orkin/Terminix/Greenix) that
  dispatch from the Fox Valley, lock people into contracts, and don't do wildlife.

## VERIFIED REGIONAL FACTS (safe to use)

- **Clintonville**: Waupaca County; pop ~4,591 (2020); elev 814 ft; on the **Pigeon River**;
  settled 1855 by Norman Clinton; Menominee name meant "place where pigeons are hunted."
  **Four Wheel Drive (FWD) Auto Company** founded here 1909; **Seagrave Fire Apparatus** plant;
  Wisconsin Central / North Central Airlines began at the municipal airport (1944).
- **Region**: rural Waupaca / Shawano / Outagamie / Waushara / Oconto / Langlade counties.
  Dairy farms, pole barns, older farmhouses, woodlots, glacial terrain, rivers (Wolf, Little
  Wolf, Embarrass, Pigeon, Tomorrow), and the **Waupaca Chain O' Lakes** (22 spring-fed glacial
  lakes near Waupaca/Iola) — heavy seasonal-cabin country.
- Housing skews older: pre-war farmhouses, mid-century village homes, seasonal lake cabins,
  agricultural outbuildings. These have many pest entry points (fieldstone/block foundations,
  balloon framing, soffit/fascia gaps, unsealed sill plates).

## WISCONSIN PEST FACTS (verified; use accurately)

- **Bat exclusion is legally restricted during the maternity season.** Per Wisconsin DNR, do
  NOT restrict bat exits **June 1 through July 31** (one-way doors must stay open then).
  Humane exclusion is done outside that window (spring before June 1, and August onward).
  Four cave bat species are **state-threatened** (little brown, big brown, northern long-eared
  [also federally endangered], tricolored). **White-nose syndrome** hit WI in 2014. Process:
  find exits at dusk → one-way doors → wait ≥1 week → seal. Never seal bats in.
- **Fall invaders** (cluster flies, boxelder bugs, Asian lady beetles, brown marmorated stink
  bugs): mass on warm S/W walls Sept–Oct, overwinter in wall voids/attics, reappear on warm
  late-winter days. Cluster fly larvae parasitize earthworms (so rural lawn/field homes get
  them regardless of cleanliness). Best control = early-fall EXTERIOR treatment + exclusion.
- **Mice**: enter gaps ~1/4" (dime), peak Sept–Nov; deer mice (hantavirus concern) common on
  farms/cabins. Exclusion (sealing) is the real fix, not just traps.
- **Carpenter ants**: excavate (don't eat) moisture-damaged wood; parent nest often outdoors,
  satellites indoors; winged swarmers in spring; indoor winter sightings = indoor nest.
- **Ticks** (deer/blacklegged → Lyme): edge habitat where lawn meets woods/tall grass; peak
  late spring & fall.

## PAGE FORMAT (Astro content collection markdown)

Write a `.md` file with YAML frontmatter, then the long body. Use `##` and `###` headings.
Use short bulleted lists sparingly (mostly prose). Bold key terms. Link internally where noted.

### Town hub file → `src/content/towns/<slug>.md`
```
---
town: <slug>            # MUST match the slug in src/data/towns.ts
title: "Pest Control & Wildlife Removal in <Town>, WI"
answer: "<40-60 word direct answer naming the town, county, BugBoss, and 2-3 local pests>"
faqs:
  - q: "..."
    a: "..."            # 12-15 FAQs, all localized to the town
---
<3,000-4,000 word body>
```
Recommended town sections (adapt, don't robotically repeat):
- Intro: the town, its setting, and why that shapes pest pressure here (grounded in real geo).
- A season-by-season pest calendar for THIS town (Spring / Summer / Fall / Winter), 250-350 words each.
- Housing & building stock here → specific entry points & problems (farmhouses vs. lake cabins vs. village homes vs. ag outbuildings).
- Local geography & ecology → which pests each feature drives (rivers→mosquitoes/cluster flies, woods→ticks/carpenter ants/wildlife, farmland→rodents).
- Wildlife in <Town> (bats + DNR law, raccoons, squirrels, skunks) — exclusion, not spray.
- Commercial pest control in <Town> (if the town has a business district / ag operations).
- Why a local company beats the national brands here (no-contract, owner-direct, wildlife too).
- The BugBoss process (inspect → treat source → exclude → follow up).
- Nearby communities we also serve (link 4-6 neighboring town pages by slug: /service-area/<slug>/).

### Pest page file → `src/content/pests/<slug>.md`
Frontmatter: `pest: <slug>` (matches src/data/pests.ts), title, answer, faqs (12-15).
Sections: what it is / identification; WI-specific biology & lifecycle; the season here;
signs of infestation; health &/or structural risk; why DIY usually fails; the BugBoss
process; prevention & exclusion; when to call. Link related pest pages and the relevant
service page (/residential-pest-control/, /wildlife-removal/).

### Specialty guide file → `src/content/guides/<slug>.md`
Frontmatter: `title`, `answer`, `category`, `faqs`. These are the deepest, most authoritative
pages — treat them as the definitive local reference on the topic.

### Blog post file → `src/content/blog/<slug>.md`
Frontmatter: `title`, `description`, `pubDate` (YYYY-MM-DD), `window` (e.g. "Sep–Oct"), `faqs` (optional).

## INTERNAL LINKING (do this — it's the hub-and-spoke)
- Link pest mentions to `/pest-library/<slug>/`.
- Link service mentions to `/residential-pest-control/`, `/commercial-pest-control/`, `/wildlife-removal/`.
- Town pages link to 4-6 neighboring towns and to relevant specialty guides `/guides/<slug>/`.
- Use markdown links: `[cluster flies](/pest-library/cluster-flies/)`.

## VOICE
Confident, plain-spoken, rural-Wisconsin practical. Brian talks straight and knows his trade.
Never salesy or breathless. No emojis. No "unleash," "elevate," "in today's fast-paced world."
