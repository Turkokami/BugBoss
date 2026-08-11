// ---------------------------------------------------------------------------
// REVIEWS — real, verbatim 5-star Google Business Profile reviews for BugBoss
// The X-Terminator (transcribed from the public GBP, 2026). The
// AggregateRating (4.9 / 95) in business.ts is the real GBP figure.
//
// Longer reviews are lightly trimmed to a representative excerpt (marked with
// an ellipsis) and punctuation is tidied, but wording is not changed. Reviewer
// names are the public display names shown on Google. No locations are shown
// because Google does not publish reviewer towns — we do not invent them.
//
// NOTE on schema: we deliberately do NOT emit individual Review JSON-LD. Google
// does not support self-hosted Review/AggregateRating markup for a business's
// own LocalBusiness page for rich results, so displaying these unschemad is the
// correct, guideline-safe choice.
// ---------------------------------------------------------------------------

export interface Review {
  name: string;
  stars: number;
  text: string;
  source: string; // where the review was left, e.g. 'Google'
}

export const reviews: Review[] = [
  {
    name: 'Tiffani Pfefferle',
    stars: 5,
    text: 'Called Brian to come take care of our mouse problem — we were finding multiple mice daily. Brian came out and after he left we no longer had any issues with mice! 10/10 recommend him for any bug/rodent services you need. Very affordable and great customer service.',
    source: 'Google',
  },
  {
    name: 'Donny Bee',
    stars: 5,
    text: "We had bees build a nest under our camper. Brian came right out and eliminated the bees, removing the nest — very quick response. Fair pricing. Definitely will be using again and recommending to the other campers.",
    source: 'Google',
  },
  {
    name: 'Robert Jones',
    stars: 5,
    text: "We've had BugBoss at our house for a few seasons now. Service has always been good — they'll drop by and chat if you're home, or just get it done if you're not. They've always been very respectful about dogs and kids, and making sure our fences get closed so everyone stays safe. Good communication, price is good, and I haven't seen a mosquito in my yard since 2022. I mean it, zero.",
    source: 'Google',
  },
  {
    name: 'Jody Kelly',
    stars: 5,
    text: 'I highly recommend BugBoss for all your pest removal needs. BugBoss did a great job helping us mouse & bug proof our house. In no time the mice were gone from our house. Then we tried the mosquito abatement and we had a great summer enjoying our yard for the first time.',
    source: 'Google',
  },
  {
    name: 'Angela G',
    stars: 5,
    text: 'Bug Boss showed up on a Saturday and had to crawl under our residence and locate a carcass after we got skirting on our house — and he did this in 45 minutes! 100% recommended! Very friendly, very personable, very timely.',
    source: 'Google',
  },
  {
    name: 'Michele Herter',
    stars: 5,
    text: "I've been very happy with BugBoss and would highly recommend them to anyone looking for pest control services… Their prices are fair, their service is reliable, and I've always had great results. In all the time I've used them, I've never had to call for a respray — something I struggled with using other companies… It's hard to find a company these days that consistently shows up, does what they say they're going to do, and charges a fair price. BugBoss checks all those boxes.",
    source: 'Google',
  },
];
