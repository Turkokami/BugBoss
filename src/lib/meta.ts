// ---------------------------------------------------------------------------
// META DESCRIPTION LENGTH
//
// Every template passes its on-page Quick Answer straight through as the meta
// description. Those two things have different jobs and different budgets: the
// Quick Answer is a 40-60 word answer meant to be read on the page, and a meta
// description has roughly 155-160 characters before a search result clips it.
//
// The October 2026 GSC export showed 219 of 255 pages shipping a description
// over 300 characters -- median 355. On every one of them more than half the
// text never rendered in a result, and the half that was lost was always the
// same half: the closing sentence saying what BugBoss actually does about it.
//
// This trims to whole sentences under the budget rather than cutting mid-word.
// Where the first sentence alone is already over budget it falls back to a word
// boundary with an ellipsis, which is still better than letting Google do it.
//
// A page can skip all of this by passing `metaDescription` explicitly, and the
// pages that earn the most impressions should: a hand-written description
// beats a trimmed one every time. The trim is the floor, not the target.
// ---------------------------------------------------------------------------

/** Google clips a desktop result around 920px; 158 characters is the usual
 *  safe proxy, and leaves room for the odd wide character. */
export const META_MAX = 158;

export function metaDescription(text: string, max = META_MAX): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;

  // Whole sentences first. Split on terminal punctuation followed by a space,
  // keeping the punctuation, so "No. 1" style abbreviations do not get cut.
  const sentences = clean.match(/[^.!?]+[.!?]+(?:\s|$)/g) ?? [];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= 80) return out;

  // One very long sentence. Cut at the last word boundary that fits, leaving
  // room for the ellipsis.
  const hard = clean.slice(0, max - 1);
  const cut = hard.lastIndexOf(' ');
  return (cut > 0 ? hard.slice(0, cut) : hard).replace(/[,;:\s]+$/, '') + '…';
}
