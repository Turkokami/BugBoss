// ---------------------------------------------------------------------------
// REVIEWS — fixes audit C2 (empty testimonial section, worst conversion defect).
//
// The AggregateRating (4.9 / 95) in business.ts is REAL GBP data. The quotes
// below are PLACEHOLDERS written to match BugBoss's real positioning and MUST
// be swapped for verbatim Google Business Profile reviews before launch —
// only then should individual Review JSON-LD be emitted. Displaying them
// unschemad (as we do now) is honest; marking up fabricated reviews is not.
// ---------------------------------------------------------------------------

export interface Review {
  name: string;
  location: string;
  stars: number;
  text: string;
  placeholder: boolean; // true until replaced with a verbatim GBP review
}

export const reviews: Review[] = [
  {
    name: 'Sample — replace with real GBP review',
    location: 'Clintonville, WI',
    stars: 5,
    text: 'Having an X-Terminator right here in Clintonville works out great for our rural community. Brian knows exactly what we deal with out here and shows up fast.',
    placeholder: true,
  },
  {
    name: 'Sample — replace with real GBP review',
    location: 'Marion, WI',
    stars: 5,
    text: 'We had mice getting into the farmhouse every fall. Brian sealed up the entry points instead of just setting traps, and the problem actually stopped.',
    placeholder: true,
  },
  {
    name: 'Sample — replace with real GBP review',
    location: 'Manawa, WI',
    stars: 5,
    text: 'Bats in the attic. He handled it the right way, waited for the legal window, sealed everything, and cleaned up. No contract, no runaround.',
    placeholder: true,
  },
  {
    name: 'Sample — replace with real GBP review',
    location: 'Iola, WI',
    stars: 5,
    text: 'Cluster flies took over our lake cabin every year. First season with BugBoss and it was a completely different fall. Highly recommend for seasonal places.',
    placeholder: true,
  },
  {
    name: 'Sample — replace with real GBP review',
    location: 'Tigerton, WI',
    stars: 5,
    text: 'Fast, honest, and local. You talk to the owner, not a call center in another state. That matters out here.',
    placeholder: true,
  },
  {
    name: 'Sample — replace with real GBP review',
    location: 'Shawano, WI',
    stars: 5,
    text: 'Wasp nest on the eaves and a follow-up for boxelder bugs. Both done right the first time. No pressure to sign up for anything long-term.',
    placeholder: true,
  },
];
