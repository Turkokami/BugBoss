// ---------------------------------------------------------------------------
// RESIDENTIAL SERVICES — the spokes under the /residential-pest-control/ hub.
// Mirrors the commercial hub-and-spoke model: the hub lists these as cards,
// each drives one /residential-pest-control/<slug>/ page with a 40-60 word AEO
// answer, "what's included" list, linked pest-library pages, and an FAQ
// (FAQPage schema). `pests` are pest-library slugs (src/data/pests.ts).
// ---------------------------------------------------------------------------

export interface ResidentialService {
  slug: string;
  name: string;        // full page/H1 name
  short: string;       // card + nav label
  group: string;       // hub section heading
  answer: string;      // 40-60 word AEO direct answer
  summary: string;     // intro paragraph
  bullets: string[];   // what's included
  pests: string[];     // pest-library slugs handled under this service
  faqs: { q: string; a: string }[];
  photo?: { src: string; alt: string }; // real field photo for the spoke page
}

export const residentialServices: ResidentialService[] = [
  {
    slug: 'general-pest-control',
    name: 'General & Recurring Pest Control',
    short: 'General Pest Control',
    group: 'Core home protection',
    answer:
      'BugBoss general pest control protects Northeast Wisconsin homes from the everyday nuisance pests — ants, spiders, crickets, silverfish, centipedes, earwigs, and flies. We treat inside and out, target the source instead of blanket spraying, and offer recurring seasonal service with no long-term contract.',
    summary:
      'This is the backbone service most homes start with: a thorough interior and exterior treatment that knocks down the common insects and keeps them from working their way back in. Rural Wisconsin homes get pressure from the fields and woods year-round, so many families move to a recurring seasonal plan — but there is never a contract requirement, and one-time visits are always an option.',
    bullets: [
      'Full inspection of the home inside and out',
      'Targeted interior treatment plus an exterior barrier',
      'Harborage and entry-point work, not just surface spraying',
      'Recurring seasonal plans or one-time visits — your choice',
      'No long-term contract, no cancellation fee',
    ],
    pests: ['ants', 'spiders', 'crickets', 'silverfish', 'centipedes', 'earwigs', 'flies', 'gnats'],
    photo: { src: '/images/field-interior-baseboard.webp', alt: 'BugBoss treating interior baseboards during a residential pest control visit in Northeast Wisconsin' },
    faqs: [
      { q: 'What does general pest control cover?', a: 'It covers the common household insects — ants, spiders, crickets, silverfish, centipedes, earwigs, and nuisance flies — with an interior treatment and an exterior barrier. Specialty problems like bed bugs, rodents, and stinging insects have their own dedicated service.' },
      { q: 'How often should I have my home treated?', a: 'Many rural homes do best on a recurring seasonal schedule because pressure from surrounding fields and woods is constant. That said, some problems are solved in a single visit — BugBoss will recommend the lightest plan that actually keeps the pests out.' },
      { q: 'Is recurring service a contract?', a: 'No. BugBoss does not require long-term contracts and charges no cancellation fee. You can stay on a seasonal plan for as long as it is working for you and stop whenever you like.' },
      { q: 'Are the treatments safe for kids and pets?', a: 'BugBoss uses targeted, professional products applied by a licensed applicator and advises on any re-entry timing for treated areas. We treat the specific problem areas rather than blanketing the whole home.' },
    ],
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control & Exclusion',
    short: 'Rodent Control',
    group: 'Core home protection',
    answer:
      'BugBoss rodent control removes mice and rats from Northeast Wisconsin homes, farmhouses, cabins, and outbuildings, then seals the building so they cannot return. Mice enter through gaps as small as a dime. We find and close entry points, remove the active population, and set up monitoring — exclusion, not just trapping.',
    summary:
      'Rodents are the number-one cold-weather problem in rural Wisconsin. Mice fit through a gap the width of a pencil and a pair can produce dozens of offspring in a season, so a small fall problem becomes a winter infestation fast. Trapping alone treats the symptom — the lasting fix is exclusion, sealing the structure so the next wave from the fields cannot get in. BugBoss handles farmhouse, cabin, pole-barn, and outbuilding rodent work as a core rural service.',
    bullets: [
      'Full inspection to find every entry point',
      'Sealing and exclusion — the part that actually stops re-entry',
      'Removal of the active mouse or rat population',
      'Monitoring so you are not fighting the same battle each winter',
      'Farmhouse, cabin, pole-barn, and outbuilding experience',
    ],
    pests: ['mice', 'rats', 'deer-mice', 'voles', 'chipmunks', 'shrews'],
    faqs: [
      { q: 'What is the difference between trapping and exclusion?', a: 'Trapping removes the rodents already inside; exclusion seals the gaps so more cannot enter. Lasting control needs both — which is why BugBoss finds and closes entry points rather than just setting traps and leaving.' },
      { q: 'Why do I get mice every fall?', a: 'As outdoor temperatures drop, mice push in from the surrounding fields, pasture, and woodlots seeking warmth and food. Rural homes sit right in their path, so fall re-invasion is annual unless the building is sealed.' },
      { q: 'Do you handle rodents in pole barns and outbuildings?', a: 'Yes. Farmhouse and outbuilding rodent exclusion is one of our core rural services — we seal the structure, remove the active population, and set monitoring around feed and storage areas.' },
      { q: 'Are deer mice more of a concern than house mice?', a: 'Deer mice are the main hantavirus carrier in this region, so droppings and nests should be cleaned up carefully. BugBoss removes them, seals the structure, and advises on safe cleanup of contaminated areas.' },
    ],
  },
  {
    slug: 'ant-control',
    name: 'Ant & Carpenter Ant Control',
    short: 'Ant Control',
    group: 'Core home protection',
    answer:
      'BugBoss treats nuisance ants and structural carpenter ants in Northeast Wisconsin homes. Nuisance ants trail indoors for food and moisture; carpenter ants tunnel into moist wood and cause real damage. We identify the species, treat the colony at its source rather than the trail, and address the moisture that feeds carpenter ants.',
    summary:
      'Not all ant problems are the same. Most are nuisance species trailing in for food and water, and spraying the trail only kills foragers while the nest keeps producing. Carpenter ants are a different, structural concern — they excavate moist wood in framing, trim, and decks and need the parent and satellite nests found and treated. BugBoss identifies which one you have and treats the colony, not just the ants you see.',
    bullets: [
      'Species identification — nuisance ants vs. carpenter ants',
      'Colony treatment at the source, not just the visible trail',
      'Locating parent and satellite carpenter ant nests',
      'Identifying the moisture problem feeding carpenter ants',
      'No long-term contract required',
    ],
    pests: ['ants', 'carpenter-ants'],
    photo: { src: '/images/field-interior-bench.webp', alt: 'BugBoss treating along an interior wall for ants during a home service call' },
    faqs: [
      { q: 'How do I know if I have carpenter ants or regular ants?', a: 'Carpenter ants are large (up to about half an inch) and dark, and seeing them indoors in winter — when other ants are dormant — points to an indoor nest. Coarse sawdust-like frass and springtime winged swarmers are further signs.' },
      { q: 'Why does spraying ant trails not work?', a: 'It kills the foragers you see but not the colony, so the nest keeps producing more. Effective control targets the nest, often with baits the ants carry back to the queen.' },
      { q: 'Do carpenter ants eat wood?', a: 'No — they excavate it to build nesting galleries and push the debris out as frass. The damage still accumulates over years, so catching them early and correcting the moisture source limits the cost.' },
      { q: 'How do I keep ants out?', a: 'Keep food sealed and surfaces clean, fix moisture problems, and seal entry gaps. Persistent or large infestations benefit from professional colony treatment, and carpenter ants nearly always do.' },
    ],
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    short: 'Cockroach Control',
    group: 'Core home protection',
    answer:
      'BugBoss controls German and American cockroaches in Northeast Wisconsin homes with targeted baiting and treatment plus sanitation — not surface sprays, which German roaches resist. German cockroaches breed explosively in kitchens; American roaches favor drains and warm, damp spaces. Both are health and allergy concerns, so professional treatment with follow-up is usually needed.',
    summary:
      'The German cockroach is the serious indoor pest: small, fast-breeding, and tied to kitchens and food areas, it can build a large hidden population quickly. American cockroaches are larger and associated with drains, basements, and warm mechanical spaces. Both contaminate surfaces and trigger asthma and allergies. Surface sprays often scatter German roaches and make things worse — control means targeted gel baiting, treating harborage and drains, and follow-up.',
    bullets: [
      'Identification of German vs. American cockroaches',
      'Targeted gel baiting for German roaches — not scatter-prone sprays',
      'Drain, harborage, and moisture treatment for American roaches',
      'Sanitation guidance to remove the food and water that sustain them',
      'Follow-up to confirm the infestation is gone',
    ],
    pests: ['cockroaches'],
    faqs: [
      { q: 'How do I get rid of cockroaches for good?', a: 'German cockroaches need targeted gel baiting, sanitation, and follow-up — surface sprays often make them worse by scattering them. American roaches are addressed by treating drains, harborage, and moisture. An established infestation usually needs professional treatment.' },
      { q: 'Are cockroaches a health risk?', a: 'Yes. They contaminate food and surfaces, and their droppings and shed skins are a known asthma and allergy trigger — which matters in homes with children or anyone with respiratory sensitivity.' },
      { q: 'Why do I have roaches in a clean house?', a: 'German cockroaches often arrive in boxes, groceries, used appliances, or through shared walls in multi-family buildings, then establish wherever there is food and moisture. It is not simply a cleanliness issue.' },
    ],
  },
  {
    slug: 'stinging-insects',
    name: 'Stinging Insect & Wasp Removal',
    short: 'Stinging Insects',
    group: 'Seasonal & specialty services',
    answer:
      'BugBoss safely removes paper wasp, yellow jacket, and bald-faced hornet nests from Northeast Wisconsin homes, eaves, soffits, and the ground. Colonies grow all summer and turn most aggressive in late summer, when most stings happen. We treat hidden wall-void and soffit colonies carefully so they are not driven into the living space.',
    summary:
      'Stinging insects are a summer-into-fall hazard around homes with sheltered eaves, soffits, and overhangs, and around farms and outbuildings. Paper wasps hang open combs under overhangs; yellow jackets nest in the ground, wall voids, and soffits and can number in the thousands by August; bald-faced hornets build the large gray paper nests. A wall-void or soffit colony should never be sealed from the outside — the insects can chew through into the living space — so it needs proper treatment first, then sealing.',
    bullets: [
      'Safe removal of paper wasp, yellow jacket, and hornet nests',
      'Careful treatment of hidden wall-void and soffit colonies',
      'High and hard-to-reach nests on homes, barns, and outbuildings',
      'Advice on sealing soffit and siding gaps to reduce re-nesting',
      'Confirmation the colony is gone before the job is done',
    ],
    pests: ['wasps-hornets'],
    photo: { src: '/images/field-hornet-nest.webp', alt: 'A bald-faced hornet nest built on the vented soffit of a Northeast Wisconsin home' },
    faqs: [
      { q: 'When are wasps and hornets most dangerous?', a: 'Late summer, roughly August into September. The colony is at its largest, food sources are dwindling, and the insects are most defensive and likely to sting — which is why late summer is peak call season.' },
      { q: 'Is it safe to remove a wasp nest myself?', a: 'Professional treatment is safest, especially for yellow jackets and hornets, nests near entrances, or nests high on the structure. DIY sprays often agitate the colony without eliminating it and can lead to multiple stings.' },
      { q: 'Are yellow jackets in the wall dangerous?', a: 'Yes. A wall-void or soffit colony should not be sealed from the outside, because the insects may chew through into the living space. It needs proper treatment first, then sealing.' },
      { q: 'Can you reach a nest high on my house or barn?', a: 'Yes. Barns, pole barns, and outbuildings are prime nesting sites, and safely reaching high or hidden nests is exactly the kind of work BugBoss does across the rural Clintonville area.' },
    ],
  },
  {
    slug: 'fall-invaders',
    name: 'Fall & Occasional Invaders',
    short: 'Fall Invaders',
    group: 'Seasonal & specialty services',
    answer:
      'BugBoss controls the fall invaders that swarm Northeast Wisconsin homes every autumn — cluster flies, boxelder bugs, Asian lady beetles, brown marmorated stink bugs, and conifer seed bugs. They mass on warm south and west walls, then slip into attics and wall voids to overwinter. We treat exterior harborage in early fall and seal entry points.',
    summary:
      'The fall-invader complex is the defining pest problem of rural Wisconsin homes. These insects do not breed indoors — they come from the surrounding fields, lawns, and trees, gather on sun-warmed walls in September and October, and work into attics, soffits, and wall cavities to spend the winter. On the first warm days of late winter they wake up and appear at your windows by the dozens. The fix is an early-fall exterior treatment on the walls they gather on, paired with sealing the gaps that let them in.',
    bullets: [
      'Early-fall exterior treatment on the walls they gather on',
      'Sealing of gaps at windows, soffits, utilities, and the roofline',
      'Coverage for the whole complex, not just one insect',
      'Annual programs for the large rural walls that get hit hardest',
      'Timed to your schedule, including seasonal cabins',
    ],
    pests: ['cluster-flies', 'boxelder-bugs', 'asian-lady-beetles', 'brown-marmorated-stink-bugs', 'western-conifer-seed-bugs'],
    photo: { src: '/images/field-exterior-foundation.webp', alt: 'BugBoss treating the exterior walls and foundation of a home against fall invaders in Northeast Wisconsin' },
    faqs: [
      { q: 'When is the best time to treat fall invaders?', a: 'Early fall, before they enter the structure. A late-summer to early-September exterior treatment on the south and west walls, combined with sealing entry points, stops the bulk of them from getting inside for the winter.' },
      { q: 'Why do they come back every spring?', a: 'The insects that entered your walls in fall never left — they are overwintering in the voids. Warm late-winter and early-spring days wake them, and they move toward the light at your windows.' },
      { q: 'Are fall invaders harmful?', a: 'They do not bite, spread disease, or damage the structure, and they do not breed indoors. They are nuisance pests, though large numbers can stain surfaces and attract other pests that feed on the dead insects.' },
      { q: 'Do you treat seasonal cabins for cluster flies?', a: 'Yes. Seasonal and lakeside properties around Iola, Manawa, and the Chain O’ Lakes are prime cluster-fly territory. We time treatment to your closing schedule so the cabin is protected while it sits empty over winter.' },
    ],
  },
  {
    slug: 'mosquito-tick',
    name: 'Mosquito & Tick Yard Programs',
    short: 'Mosquito & Tick',
    group: 'Seasonal & specialty services',
    answer:
      'BugBoss treats mosquito and tick habitat around Northeast Wisconsin homes, cabins, and rural properties so families and pets can use the yard. Mosquitoes breed in standing water; deer ticks, which can carry Lyme disease, wait along the edges where lawn meets woods and tall grass. Seasonal programs keep pressure down through the summer.',
    summary:
      'Yards near the region’s rivers, lakes, wetlands, and woodlots take heavy mosquito and tick pressure. Mosquitoes need only a little standing water to breed and rest in shaded, humid vegetation; deer ticks concentrate in the transition zones between lawn and woods or tall grass, where Lyme-disease risk is highest. A seasonal yard program targets breeding and resting sites and those edge habitats to lower the number of mosquitoes and ticks in the areas people and pets actually use.',
    bullets: [
      'Treatment of mosquito resting and breeding areas',
      'Tick treatment focused on the lawn-and-woods edge habitat',
      'Seasonal programs that maintain control through the summer',
      'Well suited to wooded lots, cabins, and rural acreages',
      'Timed treatments ahead of outdoor events and gatherings',
    ],
    pests: ['mosquitoes', 'ticks', 'fleas'],
    photo: { src: '/images/field-ac-exterior.webp', alt: 'BugBoss treating the exterior around a home, AC unit, and yard edge for mosquitoes and ticks' },
    faqs: [
      { q: 'Can a yard treatment reduce Lyme disease risk?', a: 'Reducing the tick population in the areas people use lowers the chance of encounters and bites. It is one layer of protection alongside repellents, tick checks, and landscaping, and it focuses on the edge habitats where deer ticks concentrate.' },
      { q: 'Do mosquito treatments last all summer?', a: 'A single treatment reduces adults for a period of weeks; seasonal programs with repeat visits maintain lower populations across the whole mosquito season. Lakeside and riverside properties benefit most from an ongoing program.' },
      { q: 'How can I reduce mosquitoes in my yard?', a: 'Eliminate standing water in containers, gutters, and low spots, and treat the shaded vegetation where adults rest. A seasonal program maintains control through the summer.' },
      { q: 'Can you treat before an outdoor event?', a: 'Yes. We can time treatments ahead of gatherings at homes, cabins, and event spaces to knock populations down when it matters most.' },
    ],
  },
  {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    short: 'Bed Bug Treatment',
    group: 'Seasonal & specialty services',
    answer:
      'BugBoss inspects, confirms, and treats bed bug infestations in Northeast Wisconsin homes. Bed bugs are hitchhikers that arrive in luggage and used furniture and hide near beds, biting at night. They are not a DIY pest — partial treatment lets them rebound — so BugBoss uses a thorough, professional approach with preparation guidance and follow-up.',
    summary:
      'Bed bugs are hitchhikers, not a sign of an unclean home, and they can appear anywhere people sleep or sit. They hide in mattress seams, headboards, furniture, and wall voids, emerging at night to feed, and they are resilient and reproduce quickly. Because they hide in so many places, DIY efforts usually miss enough to let the population rebound — effective control takes a thorough, professional treatment, proper preparation, and follow-up to reach every hiding place.',
    bullets: [
      'Professional inspection to confirm the infestation',
      'Thorough treatment that reaches the many hiding places',
      'Clear preparation instructions so treatment is effective',
      'Follow-up to catch any survivors before they rebound',
      'Discreet service with no long-term contract',
    ],
    pests: ['bed-bugs', 'carpet-beetles'],
    faqs: [
      { q: 'How did I get bed bugs?', a: 'Almost always by hitchhiking — in luggage after travel, on used furniture, or from another infested location. They are not related to cleanliness and can affect any home.' },
      { q: 'Can I get rid of bed bugs myself?', a: 'Rarely. Bed bugs hide in many places and are hard to reach completely, so DIY efforts usually miss enough to let the population rebound. Professional treatment with follow-up is the reliable path.' },
      { q: 'How do I know if I have bed bugs?', a: 'Look for bites in lines or clusters, blood and dark fecal spotting on bedding, shed skins along mattress seams, and the bugs themselves in seams and crevices. A professional inspection confirms it — and rules out look-alikes like carpet beetles.' },
      { q: 'How should I prepare for treatment?', a: 'BugBoss provides specific preparation instructions — typically laundering and bagging items and reducing clutter — so treatment can reach all the hiding places effectively.' },
    ],
  },
];

// Hub section order.
export const residentialGroupsOrder = ['Core home protection', 'Seasonal & specialty services'];

export const getResidentialService = (slug: string) => residentialServices.find((s) => s.slug === slug);
