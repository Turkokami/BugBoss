# Legacy bugbosswi.com URLs and the 301 map

## Source

The authoritative list is `https://www.bugbosswi.com/sitemap.xml`, supplied by the
owner in August 2026 — **116 URLs**. The live domain is blocked from the build
environment (the agent proxy answers 403 CONNECT for both apex and www, and
archive.org is not on the egress allowlist), so it could not be fetched here.

Before that, 36 URLs were harvested from web search. **12 of those are NOT in the
sitemap** — they are indexed but unlisted, which usually means orphaned pages from
an earlier build of the site. They still hold index presence and inbound links, so
they are redirected too. See "Orphans" below.

## What the sitemap showed

The live site runs several URL patterns at once:

- `/{pest}-control` and `/{animal}-removal` — 35 pest pages
- `/{vertical}-pest-control` — 15 commercial verticals
- `/{town}-pest-control`, plus `-residential-`, `-commercial-`, `-wildlife-removal`
  variants for the larger towns — 15 towns
- 24 blog posts at flat root-level slugs
- Hubs: `/pest-control`, `/residential-pest-control`, `/commercial-pest-control`,
  `/wildlife-removal`, `/pest-library`, `/service-area`, `/blog`, `/contact`,
  `/terms-conditions`, `/privacy-policy`

Plus the orphans, which use a *sixth* pattern:
`/{town}-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial`.

Both `www.` and apex resolve. The sitemap declares `www.`, so **www is canonical
on the live site** — the new deployment needs a host-level decision and redirect
either way, which is separate from the path redirects here.

## Coverage

All 116 sitemap URLs are handled:

- **109** get an explicit 301 in `vercel.json`
- **8** keep the same path in the new build (`/residential-pest-control`,
  `/commercial-pest-control`, `/wildlife-removal`, `/pest-library`,
  `/service-area`, `/blog`, `/contact`, and `/pest-control` — see below).
  `trailingSlash: 'always'` means Vercel resolves the slashless form.
- **0** unhandled

Plus 12 orphan redirects, for **165 total**.

## The /pest-control collision

The legacy `/pest-control` is a *services* hub. Our build had a **neighborhoods**
hub at `/pest-control/` — two unrelated pages one trailing slash apart, on the
same domain, with a legacy redirect pointing at one of them.

That is the taxonomy inconsistency flagged earlier (a top-level segment whose name
collides with the three service hubs, flattening pages that belong under a city).
The neighborhoods hub moved to **`/neighborhoods/`**, which removes the collision
and lets `/pest-control` redirect cleanly to `/residential-pest-control/`.

## Judgement calls in the mapping

- **Pest pages** go to a residential service spoke where we have one
  (`/ant-control` → `/residential-pest-control/ant-control/`), because the old page
  was selling a service rather than describing an animal. Everything else goes to
  the Pest Library profile.
- **`/rose-chafer-control`** → Japanese beetles. No rose chafer profile; both are
  scarab garden beetles handled the same way.
- **`/beetle-control`** → the Pest Library hub. It is the generic page and the site
  lists the specific beetles separately, so the hub is the honest destination.
- **Towns with no page yet** (Neenah, Suamico, Howard, Kaukauna) → `/service-area/`.
  **De Pere and Appleton** → `/neighborhoods/`, where their neighborhood pages live.
  Re-point these if those towns get built.
- **Blog posts** go to the closest equivalent new post, or to the relevant pest or
  service page where no equivalent exists.

## Maintenance

`scripts/audit.mjs` fails the build on `redirect-target-missing`, so a later rename
cannot silently turn a 301 into a 404 — which is worse than no redirect, because it
wastes the link equity the redirect existed to preserve.
