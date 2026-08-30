// ---------------------------------------------------------------------------
// RESPONSIVE WEBP GENERATION — Master Plan Standard 04 / §8.1
// ("Images WebP and lazy-loaded", "Mobile Core Web Vitals green, LCP < 2.5s").
//
//   node scripts/images-to-webp.mjs             # generate variants
//   node scripts/images-to-webp.mjs --replace   # ...and delete the jpg/png
//
// Why this is not a plain format swap: the source JPEGs were already well
// compressed, so converting them at the same dimensions saved ~13% and made
// several files LARGER. The actual waste is resolution — the homepage hero is
// 1500x2000 but renders in a column under 500px wide, so a phone downloads
// roughly four times the pixels it can display.
//
// So each image gets a set of widths, and the markup picks with srcset/sizes.
// Two outputs per source:
//   name.webp        full size, canonical — the stable URL used by schema and
//                    og:image, which must not change when the width list does
//   name-{w}.webp    responsive variants for srcset
// ---------------------------------------------------------------------------

import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const DIR = 'public/images';
// 600 exists because a 412px phone at DPR 1.5 needs ~620px and would
// otherwise jump to the 800 file.
// 200 covers the header logo (renders ~65px) and the expert-block thumbnail
// (72px) at 2x DPR; the rest cover phone, tablet and desktop columns.
const WIDTHS = [200, 400, 600, 800, 1200];
const QUALITY = 72;
const replace = process.argv.includes('--replace');
const kb = (n) => Math.round(n / 1024);

const sources = readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
const manifest = {};
let before = 0;
let after = 0;

for (const file of sources) {
  const src = join(DIR, file);
  const name = basename(file, extname(file));
  const meta = await sharp(src).metadata();

  // Alpha means a mark or overlay, not a photograph. Flat colour with hard
  // edges rings badly under lossy compression, so keep those lossless.
  const opts = meta.hasAlpha ? { lossless: true, effort: 6 } : { quality: QUALITY, effort: 6 };

  // Canonical full-size.
  const canonical = join(DIR, `${name}.webp`);
  await sharp(src).webp(opts).toFile(canonical);

  // Only generate variants narrower than the source — upscaling is pointless
  // and would ship more bytes than the original for no visual gain.
  const widths = WIDTHS.filter((w) => w < meta.width);
  const variants = [];
  for (const w of widths) {
    const out = join(DIR, `${name}-${w}.webp`);
    await sharp(src).resize({ width: w }).webp(opts).toFile(out);
    variants.push({ w, bytes: statSync(out).size });
  }
  variants.push({ w: meta.width, bytes: statSync(canonical).size });

  manifest[`${name}.webp`] = {
    width: meta.width,
    height: meta.height,
    widths: variants.map((v) => v.w).sort((a, b) => a - b),
  };

  const sizeBefore = statSync(src).size;
  before += sizeBefore;
  // Compare against the variant a phone would actually fetch, not the biggest.
  const mobile = variants.reduce((a, b) => (Math.abs(b.w - 800) < Math.abs(a.w - 800) ? b : a));
  after += mobile.bytes;

  console.log(
    `${String(kb(sizeBefore)).padStart(5)}KB → ${String(kb(mobile.bytes)).padStart(5)}KB @${String(mobile.w).padStart(4)}w  ` +
      `${String(Math.round((1 - mobile.bytes / sizeBefore) * 100)).padStart(3)}%  ` +
      `[${variants.map((v) => v.w).join(', ')}]  ${file}`,
  );

  if (replace) unlinkSync(src);
}

writeFileSync(join(DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(
  `\n${sources.length} sources → ${readdirSync(DIR).filter((f) => f.endsWith('.webp')).length} webp files.`,
);
console.log(
  `What a phone downloads: ${kb(before)}KB → ${kb(after)}KB ` +
    `(${Math.round((1 - after / before) * 100)}% smaller, ${kb(before - after)}KB saved)`,
);
console.log('Wrote public/images/manifest.json (dimensions + available widths).');
if (!replace) console.log('Originals kept. Re-run with --replace to remove them.');
