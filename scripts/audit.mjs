// ---------------------------------------------------------------------------
// ACCEPTANCE GATE — Smart Site Master Plan §8.1, run against the built output.
//
//   npm run build && npm run audit
//
// Every check here is one of the plan's per-page checklist items that can be
// verified mechanically from the HTML. Judgement items (does the Quick Answer
// actually answer the query, is the local content genuinely local) still need a
// human. Exits non-zero if any page fails, so it can gate a deploy.
// ---------------------------------------------------------------------------

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const failures = [];
const counts = { pages: 0 };
// Cross-page state for the link checks in §8.1: "links up to parent and
// laterally to siblings; not orphaned".
const existingPaths = new Set();
const linkTargets = new Map(); // href -> Set of pages linking to it
const inboundLinks = new Map(); // page -> count of other pages linking in
const outboundLinks = new Map(); // page -> Set of pages it links to
const noindexPages = new Set();

function walk(dir, ext = '.html') {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p, ext));
    else if (!ext || entry.endsWith(ext)) out.push(p);
  }
  return out;
}

const fail = (page, check, detail) => failures.push({ page, check, detail });

const files = walk(DIST);

// First pass: every path this build actually produced — pages and assets alike,
// so link targets resolve against reality rather than a hand-maintained route
// list. Assets count: a dead stylesheet or favicon link is still a dead link.
for (const f of walk(DIST, '')) existingPaths.add('/' + relative(DIST, f).replace(/index\.html$/, ''));

for (const file of files) {
  const page = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  counts.pages++;
  if (/name="robots"[^>]*noindex/.test(html)) noindexPages.add(page);

  // --- Internal links -------------------------------------------------------
  for (const href of html.match(/href="\/[^"]*"/g) ?? []) {
    const target = href.slice(6, -1).split(/[#?]/)[0];
    if (!target.startsWith('/')) continue;
    (linkTargets.get(target) ?? linkTargets.set(target, new Set()).get(target)).add(page);
    (outboundLinks.get(page) ?? outboundLinks.set(page, new Set()).get(page)).add(target);
    if (target !== page) inboundLinks.set(target, (inboundLinks.get(target) ?? 0) + 1);
  }

  // --- Structure -----------------------------------------------------------
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(page, 'one-h1', `found ${h1s.length}`);

  // Rule 3: footer and nav widget labels are never heading elements.
  const footer = html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? '';
  const footerHeadings = footer.match(/<h[1-6][\s>]/g) ?? [];
  if (footerHeadings.length) fail(page, 'footer-headings', `${footerHeadings.length} heading(s) in footer`);

  // --- Markup / schema -----------------------------------------------------
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) {
    fail(page, 'schema-present', 'no JSON-LD block');
  } else {
    let graph;
    try {
      graph = JSON.parse(ld[1])['@graph'];
    } catch (e) {
      fail(page, 'schema-valid-json', e.message);
    }
    if (graph) {
      const types = graph.flatMap((n) => (Array.isArray(n['@type']) ? n['@type'] : [n['@type']]));
      const ids = graph.map((n) => n['@id']).filter(Boolean);

      // No duplicate nodes.
      const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
      if (dupes.length) fail(page, 'no-duplicate-nodes', [...new Set(dupes)].join(', '));

      // Exactly one FAQPage, and it matches the visible FAQ block.
      const faqNodes = graph.filter((n) => n['@type'] === 'FAQPage');
      if (faqNodes.length > 1) fail(page, 'one-faqpage', `${faqNodes.length} FAQPage nodes`);
      // Count only the FAQ disclosures inside <main> — the header's mobile-menu
      // toggle is also a <summary> and must not be mistaken for a question.
      const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? html;
      const visibleQs = (main.match(/<summary[\s\S]*?<\/summary>/g) ?? []).length;
      if (faqNodes.length === 1) {
        const schemaQs = faqNodes[0].mainEntity?.length ?? 0;
        if (visibleQs && schemaQs !== visibleQs) {
          fail(page, 'faq-matches-visible', `schema ${schemaQs} vs visible ${visibleQs}`);
        }
      }

      // The required backbone (§5.1). ImageObject/Article are page-type
      // dependent, so only the always-on nodes are hard requirements.
      // Breadcrumbs are an index-surface signal, so they are required only on
      // indexable pages — the 404 and the noindex legal/utility pages are out.
      const noindex = /name="robots"[^>]*noindex/.test(html);
      const required = ['WebSite', 'LocalBusiness', 'ImageObject'];
      if (page !== '/404.html') {
        required.push('WebPage');
        if (!noindex) required.push('BreadcrumbList');
      }
      for (const node of required) {
        if (!types.includes(node)) fail(page, 'node-missing', node);
      }

      // Every @id reference resolves to a node declared in this graph.
      const refs = [];
      const collect = (v) => {
        if (Array.isArray(v)) v.forEach(collect);
        else if (v && typeof v === 'object') {
          if (Object.keys(v).length === 1 && v['@id']) refs.push(v['@id']);
          else Object.values(v).forEach(collect);
        }
      };
      collect(graph);
      for (const ref of [...new Set(refs)]) {
        if (!ids.includes(ref)) fail(page, 'dangling-id-ref', ref);
      }

      // NAP in schema matches visible NAP character for character.
      const lb = graph.find((n) => (n['@id'] ?? '').endsWith('#localbusiness'));
      if (lb?.address) {
        const nap = `${lb.address.streetAddress}, ${lb.address.addressLocality}, ${lb.address.addressRegion} ${lb.address.postalCode}`;
        const text = html.replace(/<[^>]+>/g, ' ').replace(/&#8217;/g, '’').replace(/\s+/g, ' ');
        if (!text.includes(nap)) fail(page, 'nap-matches-visible', nap);
      }
    }
  }

  // --- Content & performance -----------------------------------------------
  const imgs = html.match(/<img\b[^>]*>/g) ?? [];
  for (const img of imgs) {
    // Rule 4: every image has descriptive alt text.
    if (!/\salt="[^"]+"/.test(img)) fail(page, 'img-alt', img.slice(0, 90));

    // Standard 04: images are WebP and lazy-loaded, with intrinsic dimensions
    // so nothing reflows once they arrive.
    const src = img.match(/\ssrc="([^"]+)"/)?.[1] ?? '';
    if (/\.(jpe?g|png|gif)(\?|$)/i.test(src)) fail(page, 'img-not-webp', src);
    if (!/\swidth="\d+"/.test(img) || !/\sheight="\d+"/.test(img)) {
      fail(page, 'img-no-dimensions', src);
    }
    // Eager loading is correct above the fold — the LCP image and the header
    // logo. Below-the-fold images must be lazy, so anything eager that is not
    // one of those two is flagged.
    const eager = !/\sloading="lazy"/.test(img);
    const aboveFold = /\sfetchpriority="high"/.test(img) || /\sclass="[^"]*brand-logo/.test(img);
    if (eager && !aboveFold) fail(page, 'img-eager-below-fold', src);
    if (!/\ssrcset="/.test(img)) fail(page, 'img-no-srcset', src);
  }
  // At most one high-priority image per page — more than one and they compete
  // for bandwidth and none of them wins.
  const priority = imgs.filter((i) => /fetchpriority="high"/.test(i)).length;
  if (priority > 1) fail(page, 'multiple-lcp-candidates', `${priority} fetchpriority=high images`);

  // Rule 6: no unresolved template variables left in the output.
  const leak = html.match(/\{\{[^}]{1,40}\}\}|\$\{[a-zA-Z][^}]{0,40}\}|\bundefined\b(?=[<\s.,])/);
  if (leak) fail(page, 'template-leak', leak[0]);

  // Known-failure catalog: staging links, about:blank, preview URLs.
  if (/about:blank/.test(html)) fail(page, 'about-blank-link', 'about:blank present');
  if (/href="https?:\/\/[^"]*(staging|\.local|localhost|preview)[^"]*"/.test(html)) {
    fail(page, 'staging-link', 'non-production link in output');
  }
}

// --- Source lint --------------------------------------------------------------
// Every <img> on the site is emitted by <Photo>, which means it carries Photo's
// Astro scope id rather than the parent page's. A bare `img` selector inside a
// page's scoped <style> therefore silently stops matching — and because the
// global reset already sets max-width/height, the breakage is invisible on any
// image whose natural aspect ratio happens to match. This caught a real
// regression once; the check is here so it cannot happen again quietly.
for (const file of walk('src', '.astro')) {
  if (file.endsWith('Photo.astro')) continue;
  const src = readFileSync(file, 'utf8');
  const styles = src.match(/<style>[\s\S]*?<\/style>/g) ?? [];
  for (const block of styles) {
    for (const line of block.split('\n')) {
      // A selector ending in a bare `img` that is not scope-pierced.
      if (/(^|[\s>+~])img\s*[,{]/.test(line) && !/:global\(\s*img/.test(line)) {
        fail(file, 'scoped-img-selector', line.trim().slice(0, 80));
      }
    }
  }
}

// American English. The site sells in Wisconsin, and British spellings read as
// foreign — worse, as outsourced — on a local-intent page. A batch of them was
// cleaned out once; this keeps them out. Stems only, so American-in-both words
// (franchise, premises, harborage, cancellation) are never matched.
const BRITISH = /\b(grey|colour|odour|vapour|armour|harbour|honour|behaviour|favour|defence|neighbourhood|labour|mould|moult|metre|litre|fibre|centre|licence|tyres?|storeys?|enquir|sulphur|aluminium|draught|whilst|amongst|programme|realis(e|ed|es|ing)|recognis(e|ed|es|ing)|prioritis(e|ed|es|ing)|fertilis(e|ed|es|ing)|organis(e|ed|es|ing|ation)|analys(e|ed|es|ing)|labelled|travelling|cancelled)/i;
for (const file of [...walk('src', '.md'), ...walk('src', '.astro'), ...walk('src', '.ts')]) {
  for (const [i, line] of readFileSync(file, 'utf8').split('\n').entries()) {
    const hit = line.match(BRITISH);
    if (hit) fail(`${file}:${i + 1}`, 'british-spelling', hit[0]);
  }
}

// --- Cross-page link checks -------------------------------------------------
for (const [target, sources] of linkTargets) {
  if (!existingPaths.has(target)) {
    fail([...sources][0], 'dead-internal-link', `${target} (from ${sources.size} page(s))`);
  }
}
// Orphan check: every indexable page should be reachable from somewhere else.
// noindex utility pages are exempt — /thank-you/ is reached by form redirect
// and is deliberately not linked from the navigation.
//
// Counting raw inbound links is not enough: a new cluster whose pages link to
// each other and to their own hub satisfies that test while being unreachable
// from the rest of the site. So reachability is computed properly, by walking
// out from the home page.
const reachable = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  const here = queue.shift();
  for (const target of outboundLinks.get(here) ?? []) {
    if (!reachable.has(target) && existingPaths.has(target)) {
      reachable.add(target);
      queue.push(target);
    }
  }
}
for (const path of existingPaths) {
  if (!path.endsWith('/')) continue;
  if (noindexPages.has(path)) continue;
  if (!inboundLinks.get(path)) fail(path, 'orphaned-page', 'no inbound internal links');
  else if (!reachable.has(path)) {
    fail(path, 'unreachable-from-home', 'linked, but not reachable by following links from /');
  }
}

// --- Report ----------------------------------------------------------------
const byCheck = failures.reduce((acc, f) => ((acc[f.check] ??= []).push(f), acc), {});
console.log(`\nAcceptance gate — ${counts.pages} pages checked\n`);
if (!failures.length) {
  console.log('  PASS — all mechanical checks clean.\n');
  process.exit(0);
}
for (const [check, items] of Object.entries(byCheck).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  FAIL ${check} (${items.length})`);
  for (const i of items.slice(0, 6)) console.log(`       ${i.page}  ${i.detail}`);
  if (items.length > 6) console.log(`       … and ${items.length - 6} more`);
}
console.log(`\n  ${failures.length} failure(s) across ${new Set(failures.map((f) => f.page)).size} page(s).\n`);
process.exit(1);
