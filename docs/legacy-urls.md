# Legacy bugbosswi.com URLs — search-harvested, INCOMPLETE

**How this was gathered.** The live domain is blocked from the build environment
(the agent proxy answers 403 CONNECT for both `bugbosswi.com` and
`www.bugbosswi.com`, and archive.org is not on the egress allowlist), so
`sitemap.xml` could not be fetched directly. These URLs come from web search
results, August 2026.

**Therefore: this list is a starting point, not an inventory.** Search only
surfaces indexed pages that ranked for the queries I ran. The real set is
certainly larger — blog posts in particular are almost entirely missing (only
one turned up). Before launch, get the authoritative list from one of:

- `https://bugbosswi.com/sitemap.xml` (open it in a browser and save it)
- Google Search Console → Indexing → Pages → Export
- Any site crawler (Screaming Frog free tier does 500 URLs)

## Patterns observed on the live site

The live site does **not** use one taxonomy. At least five coexist:

1. `/{town}-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial`
2. `/{town}-pest-control`
3. `/{town}-residential-pest-control` · `/{town}-commercial-pest-control`
4. `/{town}-wisconsin-residential-pest-control-management` · `/{town}-wisconsin-commercial-pest-control`
5. Bare vertical slugs: `/warehouses`, `/manufacturing`, `/colleges`, `/agricultural`
   — which ALSO exist as `/retail-shops-pest-control-service`,
   `/colleges-pest-control-service`, `/agricultural-pest-control`

Several towns therefore have three or more live URLs describing the same thing.
Green Bay alone has at least four. This is exactly the failure the Smart Site
Master Plan §3.3 calls a P0 blocker ("four incompatible URL patterns coexisting
on one domain").

**Both `www.` and apex are indexed**, which splits authority for the same entity
and needs a canonical decision plus a host-level redirect regardless of anything
else here.

## Harvested URLs

### Core / service
- /
- /pest-control
- /home-pest-control
- /commercial-pest-control
- /agricultural-pest-control
- /agricultural
- /service-area
- /contact-bugboss

### Commercial verticals (duplicated across two patterns)
- /restaurant-pest-control-service
- /retail-shops-pest-control-service
- /colleges-pest-control-service
- /colleges
- /warehouses
- /manufacturing

### Town pages — long pattern
- /clintonville-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /new-london-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /green-bay-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /appleton-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /menasha-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /de-pere-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /suamico-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /hortonville-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /howard-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial
- /kaukauna-wisconsin-pest-animal-wildlife-control-exterminator-residential-commercial

### Town pages — short pattern
- /green-bay-pest-control
- /shawano-pest-control
- /howard-pest-control
- /hortonville-pest-control
- /suamico-pest-control

### Town × service
- /shawano-residential-pest-control
- /shawano-commercial-pest-control
- /new-london-commercial-pest-control
- /green-bay-wisconsin-residential-pest-control-management
- /green-bay-wisconsin-commercial-pest-control
- /appleton-wisconsin-residential-pest-control-management

### Blog (almost certainly incomplete — only one surfaced)
- /battling-ant-infestations-in-wisconsin-how-bugboss-the-x-terminator-can-help

## Towns named in live copy but with no URL harvested yet

Neenah, Bonduel, Marion, Little Chute, Wrightstown. Each may have one or more
pages under any of the five patterns above.
