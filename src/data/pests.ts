// ---------------------------------------------------------------------------
// PEST LIBRARY — BugBoss's topical-authority backbone (audit §1.2: genuine
// strength, better coverage than any local competitor). Each entry drives one
// /pest-library/<slug>/ page with a 40-60 word AEO answer and an 8-Q FAQ
// (FAQPage schema). Flagship rural pests are written to full depth; the plan
// (Phase 3) grows this library 35 → 55 and adds pest × city crossing pages.
// ---------------------------------------------------------------------------

export type PestCategory = 'insect' | 'rodent' | 'wildlife';

export interface Pest {
  slug: string;
  name: string;
  category: PestCategory;
  season: string;
  flagship?: boolean;
  answer: string;        // 40-60 word AEO answer under H1
  overview: string;      // 1-2 paragraph body
  signs: string[];
  faqs: { q: string; a: string }[];
}

export const pests: Pest[] = [
  {
    slug: 'cluster-flies',
    name: 'Cluster Flies',
    category: 'insect',
    season: 'September–October (peak), warm winter days',
    flagship: true,
    answer:
      'Cluster flies are large, sluggish flies that swarm the sunny south and west walls of Northeast Wisconsin homes every fall, then squeeze into attics, wall voids, and window frames to overwinter. They reappear on warm winter days. BugBoss treats exterior harborage in early fall and seals entry points so they stop getting in.',
    overview:
      'Cluster flies are the defining fall pest of rural Wisconsin. Unlike house flies, they do not breed in garbage — the larvae parasitize earthworms in the soil around your property, which is why farmhouses and homes surrounded by fields and lawn get hit hardest. In September and October the adults gather on warm exterior walls and work their way into attics, soffits, and wall cavities to spend the winter. On the first warm day of late winter or early spring, they wake up and appear at your windows by the dozens.',
    signs: [
      'Sluggish flies clustering on sunny exterior walls in fall',
      'Flies appearing at upstairs windows on warm winter days',
      'Groups of dead flies on windowsills and in light fixtures',
      'A faint sweetish odor from large numbers in wall voids',
    ],
    faqs: [
      { q: 'What causes cluster flies in my house?', a: 'Cluster fly larvae develop in earthworms in the soil around your home. Properties surrounded by lawn, pasture, and fields — most of rural Northeast Wisconsin — produce large local populations, and the adults move to your warm walls to overwinter each fall.' },
      { q: 'When is the best time to treat for cluster flies?', a: 'Early fall, before they enter the structure. A late-summer to early-September exterior treatment on south and west walls, combined with sealing entry points, stops the bulk of them from getting inside for the winter.' },
      { q: 'Why do cluster flies come back every spring?', a: 'The flies that entered your walls in fall never left — they are hibernating in the voids. Warm late-winter and early-spring days wake them, and they move toward light, which is why they show up at your windows.' },
      { q: 'Are cluster flies harmful?', a: 'They do not bite, spread disease, or damage your home, and they do not breed indoors. They are a nuisance pest — but large overwintering populations can stain surfaces and attract other pests that feed on the dead flies.' },
      { q: 'Can I get rid of cluster flies permanently?', a: 'You can dramatically reduce them with an annual early-fall exterior treatment plus exclusion work — sealing gaps around windows, soffits, utility penetrations, and the roofline. Because they re-invade from the surrounding land, most rural homes benefit from a yearly fall visit.' },
      { q: 'What is the difference between cluster flies and house flies?', a: 'Cluster flies are larger, darker, slower, and have golden hairs on the thorax. They move sluggishly and gather in groups on walls and windows, while house flies are quick and breed in decaying material indoors and out.' },
      { q: 'Do cluster flies mean my house is dirty?', a: 'No. Cluster flies are tied to the soil and earthworms outside, not to sanitation. Spotless rural homes get them just as often as any other — it is about location, not housekeeping.' },
      { q: 'Does BugBoss handle cluster flies in seasonal cabins?', a: 'Yes. Seasonal and lakeside properties around Iola, Manawa, and the Chain O’ Lakes are prime cluster-fly territory. We time treatment to your closing schedule so the cabin is protected while it sits empty over winter.' },
    ],
  },
  {
    slug: 'boxelder-bugs',
    name: 'Boxelder Bugs',
    category: 'insect',
    season: 'September–October, warm spring days',
    flagship: true,
    answer:
      'Boxelder bugs are black-and-red insects that mass on warm south-facing walls in fall before slipping into wall voids and attics to overwinter in Northeast Wisconsin homes. They cluster near boxelder, maple, and ash trees. BugBoss treats harborage in early fall and seals entry points so they cannot move indoors.',
    overview:
      'Boxelder bugs feed on boxelder, maple, and ash seeds through the summer, then migrate to sun-warmed buildings as the weather cools. They gather in huge numbers on the south and west sides of homes in late September and October, working into cracks, siding gaps, and window frames to overwinter. Like cluster flies, they become active again on warm days and appear indoors. They do not bite or damage the structure, but their numbers and their staining can make them a serious nuisance.',
    signs: [
      'Black-and-red bugs massed on sunny exterior walls in fall',
      'Bugs emerging indoors on warm winter and spring days',
      'Boxelder, maple, or ash trees on or near the property',
      'Reddish stains on light-colored surfaces where they gather',
    ],
    faqs: [
      { q: 'Why do I have boxelder bugs?', a: 'They feed on boxelder, maple, and ash seeds nearby, then move to warm walls in fall to overwinter. Homes with these trees on or near the property — common across rural Waupaca and Shawano counties — see the largest numbers.' },
      { q: 'When should boxelder bugs be treated?', a: 'Early fall, as they begin gathering on exterior walls but before they enter. An exterior treatment plus sealing of entry points is far more effective than trying to control them once they are inside the walls.' },
      { q: 'Do boxelder bugs bite or cause damage?', a: 'No. They do not bite, sting, or damage the structure of your home. Their fecal spots can stain curtains, siding, and light-colored surfaces, and crushing them leaves a stain and odor.' },
      { q: 'Should I remove my boxelder tree?', a: 'Removing a female (seed-bearing) boxelder tree can reduce local populations, but it is rarely necessary or practical, and bugs travel from neighboring trees. Exterior treatment and exclusion usually solve the problem without removing trees.' },
      { q: 'Why are boxelder bugs suddenly inside in winter?', a: 'They entered your walls in fall and are hibernating there. A warm, sunny day raises the temperature in the wall void and wakes them, and they move toward the warmth and light of your living space.' },
      { q: 'How do I stop boxelder bugs from getting in?', a: 'Seal cracks around windows, doors, siding, soffits, and utility lines, and repair damaged screens. Pairing that exclusion work with a fall exterior treatment is the most reliable long-term fix.' },
      { q: 'Are boxelder bugs the same as stink bugs?', a: 'No, but they are often confused. Boxelder bugs are black with red markings; brown marmorated stink bugs are shield-shaped and brown. Both overwinter in homes, and BugBoss handles both with a similar fall exclusion approach.' },
      { q: 'Can BugBoss treat boxelder bugs on a rural acreage?', a: 'Yes. Large rural walls facing open fields are the toughest cases, and they are exactly what we specialize in across the Clintonville area. We focus treatment on the sun-warmed walls where the bugs congregate.' },
    ],
  },
  {
    slug: 'asian-lady-beetles',
    name: 'Asian Lady Beetles',
    category: 'insect',
    season: 'September–October',
    flagship: true,
    answer:
      'Asian lady beetles are orange, ladybug-like beetles that swarm warm walls on the first cool days of fall and push into Northeast Wisconsin homes to overwinter. They can bite lightly and leave yellow stains. BugBoss treats exterior harborage in early fall and seals gaps so they cannot get into wall voids and attics.',
    overview:
      'Often mistaken for native ladybugs, Asian lady beetles are an introduced species that overwinters inside buildings. On warm, sunny days in late fall they gather by the hundreds on light-colored, south-facing walls, then find their way into attics, wall voids, and window frames. Indoors they can give a mild nip and, when disturbed, release a yellow, foul-smelling fluid that stains. They are part of the same fall invader complex as cluster flies and boxelder bugs.',
    signs: [
      'Orange beetles clustering on sunny walls in fall',
      'Beetles crawling on ceilings and windows indoors',
      'Yellow staining fluid where beetles are disturbed',
      'Beetles reappearing on warm late-winter days',
    ],
    faqs: [
      { q: 'What attracts Asian lady beetles to my house?', a: 'Warmth and contrast. On cool, sunny fall days they seek out warm, light-colored, south- and west-facing walls, then enter through gaps to overwinter. Rural homes near fields and woodlots see the heaviest numbers.' },
      { q: 'Do Asian lady beetles bite?', a: 'They can deliver a mild nip that is startling but harmless. Their bigger nuisance is the yellow defensive fluid they release when handled or crushed, which stains and smells unpleasant.' },
      { q: 'When is the best time to treat Asian lady beetles?', a: 'Early fall, before they cluster and enter. An exterior treatment of the walls they gather on, combined with sealing entry points, prevents most of them from getting inside for the winter.' },
      { q: 'Are Asian lady beetles the same as ladybugs?', a: 'They look similar but are a different, introduced species. Native ladybugs do not invade homes in large numbers to overwinter. Asian lady beetles have a small "M"-shaped marking behind the head.' },
      { q: 'How do I get Asian lady beetles out of my house?', a: 'Vacuum the ones you see (empty the bag promptly to avoid the odor) and do not crush them. For the source, an exterior fall treatment and sealing of entry points stops the ongoing invasion.' },
      { q: 'Why do they come back in late winter?', a: 'Beetles that entered in fall are hibernating in wall voids and attics. Warm days rouse them, and they move toward light and warmth, appearing at windows and in living spaces.' },
      { q: 'Do Asian lady beetles damage the house?', a: 'No structural damage, but their staining fluid can mark walls, curtains, and fixtures, and large dead accumulations can attract other pests. They are primarily a nuisance and staining problem.' },
      { q: 'Can BugBoss prevent Asian lady beetles every year?', a: 'Yes. Because they re-invade from the surrounding landscape, an annual early-fall exterior treatment plus exclusion is the reliable approach for rural Northeast Wisconsin homes.' },
    ],
  },
  {
    slug: 'mice',
    name: 'Mice',
    category: 'rodent',
    season: 'Year-round; peak entry September–November',
    flagship: true,
    answer:
      'House mice and deer mice invade Northeast Wisconsin homes, farmhouses, and outbuildings every fall as temperatures drop, entering through gaps as small as a dime. They contaminate food, gnaw wiring, and breed fast. BugBoss finds and seals entry points, removes the active population, and sets up monitoring so they stay out.',
    overview:
      'Mice are the number-one cold-weather pest in rural Wisconsin. A house mouse fits through a gap the width of a pencil, and deer mice — common around farms, woodpiles, and cabins — carry additional health concerns. They enter around utility penetrations, foundation gaps, garage doors, and where siding meets the foundation, then nest in walls, attics, and stored items. Because a pair can produce dozens of offspring in a season, a small fall problem becomes a large winter one quickly. The lasting fix is exclusion — sealing the building — not just trapping what is already inside.',
    signs: [
      'Droppings along walls, in cupboards, and in drawers',
      'Gnaw marks on food packaging, wiring, and wood',
      'Scratching or scurrying in walls and ceilings at night',
      'Nests of shredded paper, insulation, or fabric',
      'A musky odor in enclosed spaces',
    ],
    faqs: [
      { q: 'How are mice getting into my house?', a: 'Through gaps as small as a dime — around utility and pipe penetrations, foundation cracks, garage door corners, and where siding meets the sill. Older farmhouses and rural homes have many such openings, which is why exclusion is the core of the fix.' },
      { q: 'What is the best way to get rid of mice?', a: 'Remove the active population and seal the building so more cannot enter. Trapping alone treats the symptom; sealing entry points is what actually stops the problem, especially in fall when mice are pushing in from the fields.' },
      { q: 'Why do I get mice every fall?', a: 'As outdoor temperatures drop, mice seek warm shelter and food. Rural homes surrounded by fields, pasture, and woodlots sit right in their path, so fall re-invasion is annual unless the building is sealed.' },
      { q: 'Are mice dangerous?', a: 'Yes. Mice contaminate food and surfaces with droppings and urine, can spread diseases, and gnaw electrical wiring — a documented fire risk. Deer mice in particular are associated with hantavirus, so cleanup should be done carefully.' },
      { q: 'How do I keep mice out of my pole barn or garage?', a: 'Seal the gaps around doors and along the base, keep stored feed and seed in metal containers, reduce clutter and nesting material, and set up monitoring. BugBoss handles farmhouse, pole-barn, and outbuilding rodent exclusion across the area.' },
      { q: 'How quickly do mice multiply?', a: 'Very quickly. A single female can have five to ten litters a year with several pups each. That is why a few mice in October can become an infestation by January if the entry points are not closed.' },
      { q: 'Do mice go away on their own in spring?', a: 'Some may move back outdoors, but any that have established a warm, food-rich nest indoors have no reason to leave. Relying on them leaving on their own usually means a larger population the next fall.' },
      { q: 'Does BugBoss offer rodent exclusion for farmhouses?', a: 'Yes — farmhouse and outbuilding rodent exclusion is one of our core rural services. We seal the structure, remove the active population, and set monitoring so you are not fighting the same battle every winter.' },
    ],
  },
  {
    slug: 'bats',
    name: 'Bats',
    category: 'wildlife',
    season: 'Removal spring & fall; exits kept open June 1–July 31 (WI DNR)',
    flagship: true,
    answer:
      'Bats roost in attics, soffits, and barns across Northeast Wisconsin, entering through gaps as small as half an inch. Wisconsin protects them, so exclusion is legally restricted during the summer maternity season — the DNR requires exits stay open June 1 through July 31. BugBoss performs humane, DNR-compliant bat exclusion — sealing every entry after the bats have left, not trapping them inside.',
    overview:
      'Bats are beneficial animals and are legally protected in Wisconsin, which makes bat work a specialized job, not a simple removal. If you find bats in your attic during the summer maternity season, sealing the building can trap flightless pups inside — which is both illegal and a bigger problem. The correct approach is exclusion: installing one-way devices that let bats leave but not return, then permanently sealing every entry once the colony is out, at the right time of year. BugBoss handles bat exclusion within Wisconsin DNR timing rules and cleans up the guano contamination they leave behind.',
    signs: [
      'Bats seen flying out from the roofline at dusk',
      'Dark staining and guano below entry points or in the attic',
      'Scratching or squeaking in walls and attic at dusk and dawn',
      'A bat found inside the living space',
      'A strong ammonia odor from accumulated guano',
    ],
    faqs: [
      { q: 'Is it legal to remove bats in Wisconsin?', a: 'Bats are protected in Wisconsin. Removal must be done by exclusion, not extermination. The DNR requires that bat exits stay open during the maternity season — June 1 through July 31 — when flightless pups are present. BugBoss works within DNR rules.' },
      { q: 'When can bats be excluded from my house?', a: 'Outside the June 1–July 31 maternity window — in spring before June, or from August onward once pups can fly. Sealing during maternity season can trap and kill pups, which is illegal and creates odor and secondary pest problems.' },
      { q: 'How do bats get into an attic?', a: 'Through gaps as small as half an inch — at the roofline, gable vents, soffit and fascia junctions, chimney flashing, and where different building materials meet. Older farmhouses and barns typically have several such openings.' },
      { q: 'What is the right way to get bats out?', a: 'One-way exclusion devices let bats exit to feed but block re-entry. Once the colony is confirmed out, every entry point is sealed permanently and the guano is cleaned up. Simply sealing the building without exclusion can trap bats inside.' },
      { q: 'Are bats in the attic dangerous?', a: 'Bats can carry rabies, and their accumulated guano can harbor a fungus that causes histoplasmosis. Direct contact should be avoided, and any bat found in a room where someone was sleeping should be handled carefully and reported to health authorities.' },
      { q: 'Do I need to clean up bat guano?', a: 'Yes. Guano accumulations damage insulation, produce a strong odor, and pose a health risk. BugBoss includes guano cleanup and decontamination as part of a complete bat job, not just the exclusion.' },
      { q: 'Will the bats come back after exclusion?', a: 'Not if the exclusion is done thoroughly. Because bats can reuse traditional roosts, the key is sealing every possible entry — not just the obvious one — which is why a complete inspection matters more than a quick patch.' },
      { q: 'Why choose BugBoss for bat work in rural Wisconsin?', a: 'Bat and wildlife exclusion is a core BugBoss specialty, done to DNR timing and with full cleanup. It is exactly the kind of high-skill exclusion work rural properties around Clintonville, Shawano, and Waupaca need and rarely get locally.' },
    ],
  },
  {
    slug: 'wasps-hornets',
    name: 'Wasps & Hornets',
    category: 'insect',
    season: 'May–October (peak July–September)',
    flagship: true,
    answer:
      'Paper wasps, yellow jackets, and bald-faced hornets build nests on eaves, in soffits, and in the ground around Northeast Wisconsin homes and farms, becoming most aggressive in late summer. Stings can be dangerous to allergic people. BugBoss safely removes nests, treats hidden colonies, and advises on keeping structures from being re-nested.',
    overview:
      'Stinging insects are a summer-into-fall hazard, especially around farms, outbuildings, and homes with sheltered eaves and soffits. Paper wasps hang open combs under overhangs; yellow jackets nest in the ground, in wall voids, and in soffits and can number in the thousands by August; bald-faced hornets build the large gray paper nests seen in trees and on buildings. Colonies grow all summer and become most defensive in late summer when the nest is largest, which is when most stings happen. Nests in wall voids and soffits require careful treatment to avoid driving the colony into the living space.',
    signs: [
      'Wasps repeatedly flying to one spot on the eaves or soffit',
      'A visible paper nest under an overhang or in a tree',
      'Yellow jackets entering a hole in the ground or in siding',
      'Increased indoor wasp sightings in late summer',
    ],
    faqs: [
      { q: 'How do I get rid of a wasp nest safely?', a: 'Professional treatment is safest, especially for yellow jackets and hornets or nests near entrances and high on the structure. DIY sprays often agitate the colony without eliminating it and can lead to multiple stings.' },
      { q: 'When are wasps most dangerous?', a: 'Late summer, roughly August into September. The colony is at its largest, food sources are dwindling, and the insects are most defensive and likely to sting — which is why late-summer is peak call season.' },
      { q: 'What is the difference between wasps, yellow jackets, and hornets?', a: 'Paper wasps build small open combs under eaves; yellow jackets are ground- and void-nesters with large, aggressive colonies; bald-faced hornets build large enclosed gray paper nests. All sting, and BugBoss treats each with the right method.' },
      { q: 'Why do wasps keep nesting on my house every year?', a: 'Sheltered eaves, soffits, and overhangs are ideal nest sites, and old nest locations are attractive to new queens. Treating and knocking down nests, plus sealing soffit gaps, reduces repeat nesting.' },
      { q: 'Are yellow jackets in the wall dangerous?', a: 'Yes. A wall-void or soffit yellow jacket colony should not be sealed from the outside, because the insects may chew through into the living space. It needs proper treatment first, then sealing.' },
      { q: 'How long does it take to get rid of wasps?', a: 'A treated nest usually dies off within a day or two as returning workers contact the treatment. Large ground or void colonies may need a follow-up. BugBoss confirms the colony is gone before considering the job done.' },
      { q: 'Can I prevent wasp nests?', a: 'You can reduce them by knocking down early-season starter nests, sealing soffit and siding gaps, and keeping food and trash covered outdoors. Farms and rural homes with many outbuildings will still see some activity each year.' },
      { q: 'Does BugBoss handle wasps on barns and outbuildings?', a: 'Yes. Barns, pole barns, and outbuildings are prime nesting sites, and reaching high or hidden nests safely is exactly the kind of work we do across the rural Clintonville area.' },
    ],
  },
  {
    slug: 'carpenter-ants',
    name: 'Carpenter Ants',
    category: 'insect',
    season: 'April–September (swarmers in spring)',
    flagship: true,
    answer:
      'Carpenter ants are large black ants that tunnel into moist or damaged wood in Northeast Wisconsin homes, hollowing out framing, trim, and decks over time. They do not eat wood but excavate it for nests. BugBoss locates the parent and satellite nests, treats the colony at its source, and identifies the moisture problem feeding it.',
    overview:
      'Carpenter ants are the most damaging structural pest in the region after termites, which are rare this far north. They prefer wood softened by moisture — around roof leaks, plumbing, windows, decks, and where wood contacts soil — and they establish a parent nest (often outdoors in a tree or stump) plus satellite nests indoors. Spotting large black ants indoors in winter or early spring, or seeing winged swarmers, usually means an established nest. Effective control means finding and treating the nests, not just killing the foragers you see, and correcting the moisture that attracted them.',
    signs: [
      'Large black ants indoors, especially in winter and spring',
      'Piles of coarse sawdust-like frass below wood',
      'Faint rustling in walls at night',
      'Winged swarmers near windows in spring',
      'Hollow-sounding or soft wood around moisture areas',
    ],
    faqs: [
      { q: 'Do carpenter ants eat wood?', a: 'No. They excavate wood to build smooth galleries for nesting and push the debris out as coarse frass. The damage accumulates over time and, unlike termite galleries, carpenter ant tunnels are clean and smooth inside.' },
      { q: 'How do I know if I have carpenter ants or just occasional ants?', a: 'Carpenter ants are large (up to about half an inch) and black or dark, and seeing them indoors in winter — when other ants are dormant — strongly suggests an indoor nest. Frass piles and swarmers are further signs.' },
      { q: 'What attracts carpenter ants to a house?', a: 'Moisture-damaged wood. Roof and plumbing leaks, poor drainage, wood-to-soil contact, and damp crawlspaces create the soft wood they prefer. Correcting moisture is a key part of long-term control.' },
      { q: 'Can I get rid of carpenter ants myself?', a: 'Surface sprays kill foragers but rarely reach the nest, so the colony persists. Effective control requires locating the parent and satellite nests and treating the colony directly, which is where professional treatment matters.' },
      { q: 'Where do carpenter ants nest?', a: 'The parent nest is often outdoors in a tree, stump, or woodpile, with satellite nests indoors in moist wall voids, around windows, in decks, and in damp framing. Both usually need to be addressed.' },
      { q: 'Are carpenter ants a serious problem?', a: 'They can be. Left untreated for years, they weaken structural wood, trim, and decks. Catching them early and correcting the moisture source limits the damage and the cost.' },
      { q: 'When are carpenter ants most active?', a: 'From spring through late summer. Winged swarmers appear in spring, and foraging peaks in warm months. Indoor sightings during cold months indicate a nest living inside the heated structure.' },
      { q: 'Does BugBoss treat carpenter ants in rural homes and cabins?', a: 'Yes. Cabins, older homes, and homes near mature trees and woodlots are prime carpenter ant territory across the Clintonville and Chain O’ Lakes area, and we treat the colony at its source.' },
    ],
  },
  {
    slug: 'raccoons',
    name: 'Raccoons',
    category: 'wildlife',
    season: 'Year-round; denning spring, activity peaks summer–fall',
    flagship: true,
    answer:
      'Raccoons den in attics, chimneys, and outbuildings across Northeast Wisconsin, tearing insulation and leaving droppings that carry roundworm. Females with young are common in spring. BugBoss removes raccoons humanely, seals entry points, and cleans up contamination — handling the animal and the damage, not just trapping.',
    overview:
      'Raccoons are strong, dexterous, and quick to exploit chimneys, attic vents, soffits, and outbuildings as den sites, especially females looking for a safe place to raise young in spring. Once inside they tear insulation, damage ductwork, and create latrines whose droppings can carry raccoon roundworm, a genuine health concern. Removing a raccoon — particularly a mother with kits — takes care and knowledge of Wisconsin wildlife rules, followed by sealing the entry and decontaminating the site so the problem does not recur.',
    signs: [
      'Heavy nighttime noise — thumping and movement — in the attic or chimney',
      'Torn soffits, vents, or shingles at the entry point',
      'Droppings concentrated in a latrine area',
      'Tipped bins and raided feed around the property',
      'Chittering sounds from young in spring',
    ],
    faqs: [
      { q: 'How do I get a raccoon out of my attic or chimney?', a: 'It takes humane removal followed by sealing the entry, and in spring you must account for kits that cannot yet leave on their own. BugBoss removes the animals, seals the structure, and cleans up the mess.' },
      { q: 'Are raccoons in the attic dangerous?', a: 'They can be. Raccoons can carry rabies and their droppings can contain raccoon roundworm, which is hazardous to people and pets. Their tearing also damages insulation, wiring, and ductwork.' },
      { q: 'Why do raccoons get into houses in spring?', a: 'Females seek warm, protected den sites to give birth and raise kits, and attics, chimneys, and outbuildings are ideal. That is why spring raccoon calls often involve a mother and young.' },
      { q: 'How are raccoons getting in?', a: 'They exploit weak points — uncapped chimneys, attic and gable vents, soffit gaps, and loose or rotted roof edges — and can tear open surprisingly sturdy materials with their hands.' },
      { q: 'Will a raccoon leave on its own?', a: 'A denning raccoon, especially a mother with kits, has strong reason to stay. Waiting usually means more damage and contamination. Proper removal and exclusion is faster and cheaper than the accumulating damage.' },
      { q: 'Do I need to clean up after a raccoon?', a: 'Yes. Raccoon latrines and soiled insulation are a health hazard and should be professionally cleaned and decontaminated. BugBoss includes cleanup and exclusion as part of a complete job.' },
      { q: 'How do I keep raccoons from coming back?', a: 'Cap the chimney, seal and reinforce vents and soffits, secure trash and pet food, and remove easy den sites. Sealing every entry after removal is what prevents a repeat.' },
      { q: 'Does BugBoss handle raccoons in barns and outbuildings?', a: 'Yes. Barns, sheds, and outbuildings are common raccoon den sites on rural properties, and outbuilding wildlife removal and exclusion is part of our core service across the area.' },
    ],
  },
  // --- Additional current-library pests (lighter entries; expand in Phase 3) ---
  {
    slug: 'ants',
    name: 'Ants',
    category: 'insect',
    season: 'April–October',
    answer:
      'Pavement ants, odorous house ants, and other nuisance ants trail into Northeast Wisconsin kitchens and bathrooms in search of food and moisture. BugBoss identifies the species, treats the colony at its source rather than just the trail, and helps close off the entry points that let them in.',
    overview:
      'Most ant problems are nuisance species trailing indoors for food and water. The key to control is identifying the species and treating the colony, because spraying a visible trail only kills foragers while the nest keeps producing. Carpenter ants (see their own page) are a separate, structural concern.',
    signs: ['Trails of ants along counters, baseboards, or foundations', 'Ants around sinks and moisture', 'Small dirt piles at pavement cracks'],
    faqs: [
      { q: 'Why do I suddenly have ants indoors?', a: 'Ants forage indoors when they find accessible food and moisture, often in spring and summer. A visible trail marks a scent path from the nest to a food source.' },
      { q: 'Does spraying ant trails work?', a: 'Only temporarily. It kills the ants you see but not the colony. Effective control targets the nest, often with baits the ants carry back to the queen.' },
      { q: 'How do I keep ants out?', a: 'Keep food sealed and surfaces clean, fix moisture problems, and seal entry gaps. Persistent or large infestations benefit from professional colony treatment.' },
      { q: 'Are these ants damaging my house?', a: 'Nuisance ants do not damage structures. Carpenter ants do — if the ants are large and black and appearing in winter, see our carpenter ant page.' },
    ],
  },
  {
    slug: 'spiders',
    name: 'Spiders',
    category: 'insect',
    season: 'Year-round; peak late summer–fall',
    answer:
      'Common house and cellar spiders move indoors in Northeast Wisconsin as fall arrives, following the other insects they feed on. Most local spiders are harmless nuisances. BugBoss reduces spiders by treating harborage, removing webs, and controlling the insect prey that draws them inside.',
    overview:
      'Spiders are predators that follow their food, so a spider problem is often a symptom of another insect problem. The vast majority of Wisconsin spiders are harmless. Control focuses on reducing insect prey, removing webs and egg sacs, and treating the corners, basements, and eaves where spiders shelter.',
    signs: ['Webs in corners, basements, and eaves', 'Egg sacs in sheltered spots', 'Increased sightings in fall'],
    faqs: [
      { q: 'Why do I have so many spiders in fall?', a: 'Fall invaders and other insects move toward homes in autumn, and spiders follow their prey. Reducing the insects reduces the spiders.' },
      { q: 'Are Wisconsin spiders dangerous?', a: 'The overwhelming majority are harmless nuisance spiders. Wisconsin has very few medically significant species, and bites are rare.' },
      { q: 'How do I get rid of spiders?', a: 'Remove webs and egg sacs, reduce clutter and exterior lighting that attracts prey insects, and treat harborage areas. Controlling the underlying insect population is key.' },
      { q: 'Does BugBoss treat spiders as part of general pest service?', a: 'Yes. Because spiders track other insects, our general exterior and harborage treatment reduces spiders along with the pests they hunt.' },
    ],
  },
  {
    slug: 'ticks',
    name: 'Ticks',
    category: 'insect',
    season: 'April–October (peak late spring & fall)',
    answer:
      'Deer ticks and wood ticks are widespread across rural Northeast Wisconsin, and deer ticks can transmit Lyme disease. They wait on tall grass and brush at the edges of yards and woods. BugBoss treats tick habitat around homes, cabins, and rural properties to reduce the population where people and pets spend time.',
    overview:
      'Ticks are a serious health concern in wooded and rural Wisconsin because deer ticks (blacklegged ticks) can carry Lyme disease and other pathogens. They concentrate along the transition zones between lawn and woods or tall grass. Yard tick programs target these edge habitats to lower the number of ticks in the areas where families and pets actually spend time.',
    signs: ['Ticks found on people or pets after time outdoors', 'Property bordered by woods, brush, or tall grass', 'Deer and rodent activity nearby'],
    faqs: [
      { q: 'Where are ticks most common on my property?', a: 'Along the edges where lawn meets woods, brush, or tall grass, and in leaf litter and shaded, humid areas. These transition zones are where yard tick treatment focuses.' },
      { q: 'Can a yard treatment reduce Lyme disease risk?', a: 'Reducing the tick population in the areas people use lowers the chance of encounters and bites. It is one layer of protection alongside repellents, tick checks, and landscaping.' },
      { q: 'When should ticks be treated?', a: 'Treatments are timed to the active season, with emphasiz on late spring and again in fall. A seasonal yard program keeps pressure on the population through the peak months.' },
      { q: 'Does BugBoss offer tick programs for rural properties and cabins?', a: 'Yes. Wooded lots, cabins, and rural acreages are exactly where tick pressure is highest, and we treat the edge habitats that matter most.' },
    ],
  },
  {
    slug: 'mosquitoes',
    name: 'Mosquitoes',
    category: 'insect',
    season: 'May–September',
    answer:
      'Mosquitoes breed in standing water and thrive near the rivers, lakes, and wetlands of Northeast Wisconsin, making yards and lakeside properties hard to enjoy in summer. BugBoss treats resting and breeding areas and offers seasonal programs that knock down mosquito populations around homes, cabins, and event spaces.',
    overview:
      'Mosquitoes need only small amounts of standing water to breed, and the region’s rivers, lakes, wetlands, and rain-filled containers provide plenty. Control combines reducing breeding sites with treating the shaded, humid vegetation where adults rest during the day. Seasonal programs are especially valuable for lakeside cabins and properties that host outdoor gatherings.',
    signs: ['Heavy mosquito activity at dawn and dusk', 'Standing water in the yard or containers', 'Property near water or wetland'],
    faqs: [
      { q: 'How can I reduce mosquitoes in my yard?', a: 'Eliminate standing water in containers, gutters, and low spots, and treat the shaded vegetation where adults rest. A seasonal program maintains control through the summer.' },
      { q: 'Do mosquito treatments last all summer?', a: 'A single treatment reduces adults for a period of weeks; seasonal programs with repeat visits maintain lower populations across the whole mosquito season.' },
      { q: 'Are mosquitoes worse near lakes and rivers?', a: 'Yes. Lakeside and riverside properties around Manawa, the Chain O’ Lakes, and the Wolf River have abundant breeding habitat, so they benefit most from ongoing programs.' },
      { q: 'Does BugBoss treat for events and gatherings?', a: 'Yes. We can time treatments ahead of outdoor events at homes, cabins, and gathering spaces to knock populations down when it matters most.' },
    ],
  },
  {
    slug: 'squirrels',
    name: 'Squirrels',
    category: 'wildlife',
    season: 'Year-round; entry peaks fall & late winter',
    answer:
      'Gray and red squirrels nest in attics and soffits across Northeast Wisconsin, gnawing entry holes and chewing wiring inside. They are most active entering in fall and late winter. BugBoss removes squirrels, seals the gnawed entry points, and repairs the access they create so they cannot return.',
    overview:
      'Squirrels seek warm, protected nesting sites and readily chew their way into attics and soffits through weak roof edges, vents, and gaps. Once inside they gnaw — including on wiring, a fire risk — and build nests. Because they can re-open old entries, thorough removal and durable exclusion are essential.',
    signs: ['Daytime scampering and scratching in the attic', 'Gnawed holes at the roofline or vents', 'Chewed wires or stored items', 'Nest material in the attic'],
    faqs: [
      { q: 'How do squirrels get into an attic?', a: 'They chew and exploit weak roof edges, gable and soffit vents, and gaps, enlarging small openings into entry holes. They are persistent and can reopen previous entries.' },
      { q: 'Are squirrels in the attic a fire risk?', a: 'They can be. Squirrels gnaw constantly, including on electrical wiring, which is a documented cause of attic fires, in addition to insulation and stored-item damage.' },
      { q: 'When are squirrels most likely to move in?', a: 'Entry peaks in fall as they seek winter shelter and again in late winter around breeding. Those are the most common times for squirrel calls.' },
      { q: 'How do you keep squirrels from coming back?', a: 'Remove the animals, then seal and reinforce every entry with durable materials they cannot chew through, and trim branches that give roof access. BugBoss handles removal, exclusion, and repair.' },
    ],
  },
  {
    slug: 'bed-bugs',
    name: 'Bed Bugs',
    category: 'insect',
    season: 'Year-round',
    answer:
      'Bed bugs are small, reddish-brown insects that hide near beds and travel home in luggage and used furniture. They bite at night and spread quickly if untreated. BugBoss inspects, confirms the infestation, and treats thoroughly — bed bugs are not a DIY pest, and partial treatment lets them rebound.',
    overview:
      'Bed bugs are hitchhikers, not a sign of uncleanliness, and they can appear anywhere people sleep or sit. They hide in mattress seams, headboards, furniture, and wall voids, emerging at night to feed. Because they are resilient and reproduce quickly, effective control requires a thorough, professional approach and follow-up.',
    signs: ['Itchy bites in lines or clusters on skin', 'Small blood or dark fecal spots on bedding', 'Shed skins near mattress seams and headboards', 'A sweet, musty odor in heavy infestations'],
    faqs: [
      { q: 'How did I get bed bugs?', a: 'Almost always by hitchhiking — in luggage after travel, on used furniture, or from another infested location. They are not related to cleanliness and can affect any home.' },
      { q: 'Can I get rid of bed bugs myself?', a: 'Rarely. Bed bugs hide in many places and are hard to reach completely, so DIY efforts usually miss enough to let the population rebound. Professional treatment with follow-up is the reliable path.' },
      { q: 'How do I know if I have bed bugs?', a: 'Look for bites in lines or clusters, blood and dark fecal spotting on bedding, shed skins along mattress seams, and the bugs themselves in seams and crevices. A professional inspection confirms it.' },
      { q: 'How should I prepare for bed bug treatment?', a: 'BugBoss provides specific preparation instructions — typically laundering and bagging items and reducing clutter — so treatment reaches all the hiding places effectively.' },
    ],
  },
  {
    slug: 'skunks',
    name: 'Skunks',
    category: 'wildlife',
    season: 'Year-round; denning late winter–spring',
    answer:
      'Skunks den under decks, sheds, porches, and outbuildings across rural Northeast Wisconsin, digging for grubs and spraying when threatened. They can carry rabies. BugBoss removes skunks humanely, seals off the den sites under structures, and helps prevent the digging and odor problems they cause.',
    overview:
      'Skunks look for sheltered ground-level denning sites — under decks, porches, sheds, and outbuildings — especially in late winter and spring. Beyond the obvious odor, they dig up lawns hunting for grubs and can carry rabies. Removal plus sealing and screening the spaces beneath structures prevents recurring problems.',
    signs: ['Persistent skunk odor near the house or outbuildings', 'Cone-shaped holes dug in the lawn', 'A den opening under a deck, shed, or porch', 'Skunk sightings at dusk'],
    faqs: [
      { q: 'How do I get a skunk out from under my deck or shed?', a: 'Humane removal followed by sealing and screening the space so it cannot re-den. Timing matters in spring when young may be present. BugBoss handles removal and exclusion together.' },
      { q: 'Are skunks dangerous besides the smell?', a: 'They can carry rabies and their digging damages lawns and landscaping. Their spray can also cause temporary eye irritation to people and pets.' },
      { q: 'Why is a skunk digging up my yard?', a: 'Skunks dig for grubs and insects in the soil, leaving small cone-shaped holes. Reducing grubs and removing den sites discourages them.' },
      { q: 'How do I keep skunks from coming back?', a: 'Seal and screen the gaps under decks, sheds, and porches, secure food sources, and address the grubs that draw them. Exclusion after removal is what prevents a repeat.' },
    ],
  },
  {
    slug: 'rats',
    name: 'Rats',
    category: 'rodent',
    season: 'Year-round; pressure highest fall & winter',
    answer:
      'Norway rats infest farms, outbuildings, grain and feed storage, and older structures across rural Northeast Wisconsin, burrowing along foundations and gnawing their way inside. They contaminate feed, spread disease, and damage buildings. BugBoss removes the population, seals the structure, and sets up monitoring so rats stay out for good.',
    overview:
      'The Norway rat is the rat of rural Wisconsin — a burrowing rodent that thrives around barns, grain bins, feed storage, dumpsters, and older foundations. Rats are larger, warier, and more destructive than mice, and they reproduce quickly, so a small problem around a farm or outbuilding becomes a large one fast. As with mice, the lasting fix is exclusion and sanitation — removing food and harborage and sealing the structure — not just baiting.',
    signs: [
      'Large (½–¾ inch) capsule-shaped droppings near feed or walls',
      'Burrows along foundations, under slabs, and near outbuildings',
      'Gnaw damage on feed bags, wood, and wiring',
      'Grease/rub marks along walls and runways',
      'Nighttime noise and sightings around barns and bins',
    ],
    faqs: [
      { q: 'What kind of rats are in Wisconsin?', a: 'The Norway rat (brown rat) is the species found on Wisconsin farms and in towns. It burrows along foundations and around outbuildings and feed storage, and it is a bigger, more destructive rodent than the house mouse.' },
      { q: 'How do I get rid of rats on a farm?', a: 'Remove and secure the food source (spilled feed, grain, garbage), eliminate burrows and harborage, seal entry points into buildings, and run a monitored control program. BugBoss handles farm and outbuilding rat work as a core rural service.' },
      { q: 'Are rats dangerous?', a: 'Yes. Rats contaminate feed and surfaces, can spread disease, gnaw wiring (a fire risk), and undermine structures with their burrowing. They are a genuine health and property concern, not just a nuisance.' },
      { q: 'Why do I have rats around my outbuildings?', a: 'Rats concentrate where food and shelter meet — feed and grain storage, dumpsters, woodpiles, and cluttered outbuildings with foundation gaps. Rural properties with livestock feed are prime rat habitat.' },
      { q: 'Will baiting alone solve a rat problem?', a: 'Rarely. Baiting reduces numbers but does not fix the food, harborage, and entry points that support the population. Lasting control combines removal with sanitation and exclusion, which is how BugBoss approaches it.' },
    ],
  },

  // --- Library expansion (Phase 3): deep content lives in src/content/pests/ ---
  {
    slug: 'brown-marmorated-stink-bugs', name: 'Brown Marmorated Stink Bugs', category: 'insect',
    season: 'September–October; warm spring days',
    answer: 'Brown marmorated stink bugs are shield-shaped fall invaders that mass on warm walls in autumn and overwinter in Northeast Wisconsin wall voids and attics, reappearing on warm winter days. Crushing them releases an odor. BugBoss treats exterior harborage in early fall and seals entry points.',
    overview: 'An introduced shield bug that has spread through Wisconsin, the brown marmorated stink bug joins cluster flies, boxelder bugs, and lady beetles in the fall-invader complex. It gathers on sun-warmed south and west walls in autumn and works into the structure to overwinter, then wakes on warm days indoors.',
    signs: ['Shield-shaped brown bugs on warm exterior walls in fall', 'Bugs at windows on warm winter days', 'A pungent odor when disturbed or crushed'],
    faqs: [
      { q: 'Are brown marmorated stink bugs harmful?', a: 'They do not bite, sting, or damage the home, and they do not breed indoors. They are a nuisance overwintering pest, though their odor and numbers can be significant.' },
      { q: 'How do I keep stink bugs out?', a: 'Seal cracks around windows, soffits, and utility lines and pair that with an early-fall exterior treatment of the walls they gather on — the same approach that controls the rest of the fall-invader complex.' },
      { q: 'Why do stink bugs come back in winter?', a: 'They entered the walls in fall and are overwintering there. A warm day heats the void and they move toward the light at your windows.' },
    ],
  },
  {
    slug: 'western-conifer-seed-bugs', name: 'Western Conifer Seed Bugs', category: 'insect',
    season: 'September–October',
    answer: 'Western conifer seed bugs are large, leaf-footed fall invaders common near pines across Northeast Wisconsin. They enter homes to overwinter in autumn and are often mistaken for stink bugs or kissing bugs, though they are harmless. BugBoss treats exterior harborage and seals entry points before they get in.',
    overview: 'A big, slow, leaf-footed bug tied to conifers, the western conifer seed bug is a classic Wisconsin fall invader in properties with pines and spruces nearby. It seeks warm buildings to overwinter and can buzz loudly in flight, alarming homeowners, but it does not bite or damage the home.',
    signs: ['Large brown leaf-footed bugs indoors in fall and on warm winter days', 'Loud buzzing flight', 'Pines or spruces on or near the property'],
    faqs: [
      { q: 'Is the western conifer seed bug dangerous?', a: 'No. It is harmless — it does not bite people, sting, or damage the home. It is sometimes mistaken for the kissing bug, which does not establish in Wisconsin homes.' },
      { q: 'Why are they in my house?', a: 'Homes near pines and spruces produce local populations, and the adults move indoors to overwinter as the weather cools, just like other fall invaders.' },
      { q: 'How do I stop them?', a: 'Seal entry points and treat exterior harborage in early fall. Reducing gaps around windows, soffits, and the roofline is the durable fix.' },
    ],
  },
  {
    slug: 'japanese-beetles', name: 'Japanese Beetles', category: 'insect',
    season: 'Late June–August',
    answer: 'Japanese beetles are metallic-green beetles that skeletonize garden and landscape plants across Northeast Wisconsin in midsummer, while their grubs damage lawns. BugBoss helps manage adult pressure and grub activity with targeted timing, since these beetles fly in from a wide area each summer.',
    overview: 'A widespread summer pest, the Japanese beetle feeds in groups on the foliage of roses, lindens, fruit trees, and many ornamentals, leaving a lacy skeletonized look. The white grubs feed on turf roots, so heavy years mean both leaf damage above ground and lawn damage below.',
    signs: ['Metallic green-and-copper beetles clustered on plants in summer', 'Skeletonized, lacy leaves', 'Brown patches of lawn with loose turf (grubs)'],
    faqs: [
      { q: 'How do I control Japanese beetles?', a: 'Timing matters — targeting adults during their midsummer flight and addressing grubs in the turf. Because adults fly in from a wide area, complete elimination is unrealistic, but pressure can be reduced.' },
      { q: 'Do Japanese beetle traps work?', a: 'Lure traps often attract more beetles to your yard than they catch. A targeted plant-protection and grub approach is usually more effective.' },
      { q: 'Are the grubs the same pest?', a: 'Yes — the white grubs in your lawn are the larval stage. Managing grubs reduces next year’s local emergence and protects the turf.' },
    ],
  },
  {
    slug: 'centipedes', name: 'Centipedes', category: 'insect',
    season: 'Year-round indoors; damp areas',
    answer: 'House centipedes turn up in damp Northeast Wisconsin basements, bathrooms, and crawlspaces, where they hunt other insects. They are startling but largely harmless. Their presence usually signals excess moisture and other prey pests. BugBoss reduces centipedes by treating harborage and addressing the underlying insect and moisture problem.',
    overview: 'Fast, many-legged, and unsettling to find, the house centipede is a predator that lives where it is damp and where other insects are available to eat. Finding them regularly points to a moisture issue and a supply of prey insects rather than to a centipede problem on its own.',
    signs: ['Fast, many-legged insects in basements, bathrooms, and crawlspaces', 'Damp or humid conditions', 'Other insects present as prey'],
    faqs: [
      { q: 'Are centipedes dangerous?', a: 'House centipedes are essentially harmless to people and rarely bite. They are a nuisance, and their presence mostly indicates dampness and other insects to feed on.' },
      { q: 'How do I get rid of centipedes?', a: 'Reduce moisture (dehumidify, fix leaks, improve drainage), control the prey insects they feed on, and treat harborage areas. Fixing the damp conditions is the key long-term step.' },
      { q: 'Why do I keep seeing them?', a: 'Persistent centipedes mean consistent moisture and a steady food supply of other insects. Address both and the centipedes decline.' },
    ],
  },
  {
    slug: 'earwigs', name: 'Earwigs', category: 'insect',
    season: 'Summer; damp conditions',
    answer: 'Earwigs are pincered insects that gather in damp mulch, under debris, and along foundations in Northeast Wisconsin, sometimes moving indoors in summer. They are harmless to people despite the pincers. BugBoss reduces earwigs by treating exterior harborage and reducing the moisture and debris that draw them.',
    overview: 'Earwigs like it dark and damp — mulch beds, leaf litter, under pots and boards, and the moist zone along the foundation. They occasionally wander indoors, especially in dry spells, but they do not infest homes the way many pests do and the pincers are for defense, not a danger to people.',
    signs: ['Pincered insects under mulch, pots, and debris', 'Occasional earwigs indoors near doors and damp areas', 'Damp mulch or debris against the foundation'],
    faqs: [
      { q: 'Do earwigs pinch or bite people?', a: 'Earwigs can give a harmless nip with their pincers if handled, but they do not meaningfully bite people and are not dangerous. They do not crawl into ears in any medical sense.' },
      { q: 'How do I keep earwigs out?', a: 'Pull mulch and debris back from the foundation, improve drainage and reduce dampness, seal gaps around doors, and treat the exterior harborage zone.' },
      { q: 'Why are earwigs coming inside?', a: 'They usually move indoors during hot, dry weather seeking moisture, entering at ground level. Reducing exterior harborage and sealing entry points limits it.' },
    ],
  },
  {
    slug: 'silverfish', name: 'Silverfish', category: 'insect',
    season: 'Year-round; humid areas',
    answer: 'Silverfish are teardrop-shaped, wingless insects that live in humid Northeast Wisconsin bathrooms, basements, and storage areas, feeding on paper, starches, and stored goods. They signal excess humidity. BugBoss controls silverfish by treating harborage and helping reduce the moisture they depend on.',
    overview: 'Silverfish thrive in humidity and darkness, feeding on the starches in paper, cardboard, book bindings, wallpaper paste, and dry goods. Because they depend on moisture, they are common in damp basements, bathrooms, and boxes stored in humid spaces — and controlling humidity is central to controlling them.',
    signs: ['Silvery, teardrop-shaped insects in bathrooms, basements, and boxes', 'Irregular holes or grazed surfaces on paper and cardboard', 'Yellowish stains or scales'],
    faqs: [
      { q: 'What causes silverfish?', a: 'High humidity plus a food source (paper, cardboard, starches). Damp basements, bathrooms, and stored boxes are prime habitat.' },
      { q: 'Are silverfish harmful?', a: 'They do not bite or spread disease, but they damage paper, books, wallpaper, and dry goods, and large numbers indicate a moisture problem worth fixing.' },
      { q: 'How do I get rid of silverfish?', a: 'Lower humidity (dehumidify, ventilate, fix leaks), store papers and dry goods in sealed containers, and treat harborage. Moisture control is the durable fix.' },
    ],
  },
  {
    slug: 'crickets', name: 'Crickets', category: 'insect',
    season: 'Late summer–fall',
    answer: 'Field and camel crickets move into Northeast Wisconsin basements, crawlspaces, and garages in late summer and fall seeking warmth and moisture. Field crickets chirp; camel crickets are humpbacked and silent. BugBoss controls crickets by treating harborage and sealing the ground-level gaps they enter through.',
    overview: 'As nights cool, crickets migrate toward warm structures. Field crickets are the familiar chirpers; camel crickets (cave crickets) are humpbacked, silent, and common in damp basements and crawlspaces, where they can gather in surprising numbers. Both enter at ground level through gaps and window wells.',
    signs: ['Chirping at night (field crickets)', 'Humpbacked, silent crickets in basements and crawlspaces (camel crickets)', 'Crickets in window wells, garages, and around foundations in fall'],
    faqs: [
      { q: 'Why do I have crickets in my basement?', a: 'Camel crickets favor damp, dark spaces and move in as it cools. Moisture and ground-level entry points are the drivers, so reducing dampness and sealing gaps helps most.' },
      { q: 'Are crickets harmful?', a: 'They do not bite or spread disease, but they can damage fabrics and paper in large numbers, and the chirping and clustering are a nuisance.' },
      { q: 'How do I keep crickets out?', a: 'Seal foundation and window-well gaps, reduce moisture and clutter in basements and crawlspaces, and treat exterior harborage in late summer.' },
    ],
  },
  {
    slug: 'fleas', name: 'Fleas', category: 'insect',
    season: 'Spring–fall (year-round indoors)',
    answer: 'Fleas infest Northeast Wisconsin homes with pets, and also arrive via wildlife like raccoons, opossums, and squirrels. They bite people and animals and breed fast in carpet and bedding. BugBoss treats the environment on the flea life cycle and coordinates with your veterinary pet treatment.',
    overview: 'Fleas complete their life cycle in the home environment as much as on the host, with eggs, larvae, and pupae developing in carpet, bedding, and floor cracks. Wildlife nesting in or under a structure can seed a flea problem even in homes without pets, which is common on rural properties.',
    signs: ['Itchy bites, often around the ankles', 'Pets scratching; flea dirt in fur', 'Tiny jumping insects on floors, carpet, and pet areas'],
    faqs: [
      { q: 'How did I get fleas without pets?', a: 'Wildlife — raccoons, opossums, squirrels, or feral cats nesting in or under the home — can introduce fleas. Removing the wildlife and treating the environment resolves it.' },
      { q: 'Why do fleas keep coming back after I treat?', a: 'Flea pupae are protected and hatch over weeks, so a single treatment misses the next wave. Effective control times treatment to the life cycle, usually with follow-up.' },
      { q: 'Do I need to treat my pet too?', a: 'Yes. Environmental treatment and veterinary pet treatment work together — one without the other tends to fail. BugBoss treats the home and coordinates with your vet plan.' },
    ],
  },
  {
    slug: 'flies', name: 'Flies', category: 'insect',
    season: 'Spring–fall (peak summer)',
    answer: 'House flies and other filth flies breed in manure, garbage, and decaying matter around Northeast Wisconsin homes and farms, spreading contamination. BugBoss controls flies by finding and eliminating the breeding source, plus targeted treatment — sanitation is the foundation, not just spraying adults.',
    overview: 'Filth flies breed in moist decaying organic matter — manure, garbage, compost, silage, and spilled feed — which makes them a special concern on rural and agricultural properties. Because a fly problem is really a breeding-source problem, control starts with locating and eliminating the source.',
    signs: ['Numerous flies indoors or around doors, trash, and animal areas', 'Breeding sites: manure, garbage, compost, silage', 'Small dark specks (fly spots) on surfaces'],
    faqs: [
      { q: 'How do I get rid of house flies?', a: 'Find and eliminate the breeding source (garbage, manure, decaying matter, spilled feed), tighten sanitation, and use targeted treatment and traps for adults. Source control is the key.' },
      { q: 'Why are there so many flies on my farm?', a: 'Manure, silage, spilled feed, and moisture are ideal fly-breeding sites. Rural and agricultural properties need a sanitation-plus-treatment program to keep numbers down.' },
      { q: 'Are flies a health concern?', a: 'Yes. Filth flies move between waste and food surfaces and can spread contamination, which matters especially in food-service and agricultural settings.' },
    ],
  },
  {
    slug: 'gnats', name: 'Gnats & Small Flies', category: 'insect',
    season: 'Year-round indoors',
    answer: 'Fungus gnats, fruit flies, and drain flies are the small flying insects that plague Northeast Wisconsin kitchens, bathrooms, and houseplants. Each breeds in a specific source — overwatered soil, ripe produce, or drain film. BugBoss identifies the source and eliminates the breeding site, which is what actually stops them.',
    overview: 'Tiny flies are almost always a breeding-source problem. Fungus gnats develop in overwatered houseplant soil, fruit flies in ripe or fermenting produce and recycling, and drain flies in the organic film inside drains. Correctly identifying which one you have points straight to the fix.',
    signs: ['Small flies around houseplants (fungus gnats)', 'Small flies around fruit, recycling, and sinks (fruit flies)', 'Fuzzy small flies around drains (drain flies)'],
    faqs: [
      { q: 'How do I get rid of gnats in my house?', a: 'Identify the source: let houseplant soil dry and treat it for fungus gnats, remove ripe produce and clean recycling for fruit flies, and clean the organic film in drains for drain flies. Removing the breeding site is the fix.' },
      { q: 'Why do fruit flies keep coming back?', a: 'They breed in tiny amounts of fermenting material — a forgotten potato, a recycling bin film, a drain. Until every breeding spot is cleaned, they persist.' },
      { q: 'What are the little flies around my drain?', a: 'Likely drain flies, which breed in the gel-like organic film inside drains. Mechanically cleaning the drain to remove that film is what eliminates them.' },
    ],
  },
  {
    slug: 'moths', name: 'Moths', category: 'insect',
    season: 'Year-round indoors',
    answer: 'Pantry moths (Indian meal moths) infest stored food in Northeast Wisconsin kitchens, while clothes moths damage wool and natural fibers in closets. Both are hidden breeders. BugBoss identifies the type, finds the infested source, and treats so the larvae you cannot see are eliminated, not just the adults you can.',
    overview: 'Indoor moths fall into two camps: pantry moths that breed in flour, grains, cereal, pet food, and birdseed, and clothes moths whose larvae eat wool, fur, and other natural fibers in closets and storage. In both cases the damage is done by larvae, so finding and removing the infested source is essential.',
    signs: ['Small moths flying in the kitchen (pantry moths)', 'Webbing or clumping in stored grains, flour, or pet food', 'Holes in wool clothing or larvae in dark closet corners (clothes moths)'],
    faqs: [
      { q: 'How do I get rid of pantry moths?', a: 'Find and discard every infested food item (check flour, grains, cereal, pet food, birdseed, and decorative items), clean the shelves and cracks, store dry goods in sealed containers, and treat. Missing one infested source lets them return.' },
      { q: 'What is eating holes in my wool clothes?', a: 'Likely clothes moth larvae, which feed on wool, fur, and natural fibers. Clean and properly store affected items and treat closets and storage areas.' },
      { q: 'Why do pantry moths keep coming back?', a: 'The larvae hide in an unnoticed food source or in cracks and package folds. Thorough source removal and cleaning is the only durable fix.' },
    ],
  },
  {
    slug: 'cockroaches', name: 'Cockroaches', category: 'insect',
    season: 'Year-round indoors',
    answer: 'German cockroaches infest Northeast Wisconsin kitchens and food areas and breed explosively, while larger American cockroaches favor drains, basements, and warm damp spaces. Both are health concerns. BugBoss controls roaches with targeted baiting and treatment plus sanitation — not surface sprays, which German roaches resist.',
    overview: 'The German cockroach is the serious indoor pest: small, fast-breeding, and tied to kitchens and food-handling areas, it can build large hidden populations quickly. American cockroaches are larger and associated with drains, sewers, basements, and warm mechanical spaces. Both contaminate surfaces and trigger allergies.',
    signs: ['Small roaches in kitchens, around appliances, and in cracks (German)', 'Large reddish-brown roaches in drains, basements, and warm areas (American)', 'Droppings (pepper-like specks), egg cases, and a musty odor'],
    faqs: [
      { q: 'How do I get rid of cockroaches?', a: 'German cockroaches require targeted gel baiting, sanitation, and follow-up — surface sprays often make them worse by scattering them. American roaches are addressed by treating drains, harborage, and moisture. Professional treatment is usually needed for an established infestation.' },
      { q: 'Are cockroaches a health risk?', a: 'Yes. They contaminate food and surfaces and their droppings and shed skins are a known asthma and allergy trigger, which matters in homes, food service, and healthcare.' },
      { q: 'Why do I have roaches in a clean house?', a: 'German cockroaches often arrive in boxes, groceries, used appliances, or shared walls in multi-family buildings, then establish wherever there is food and moisture. It is not simply a cleanliness issue.' },
    ],
  },
  {
    slug: 'carpet-beetles', name: 'Carpet Beetles', category: 'insect',
    season: 'Year-round indoors',
    answer: 'Carpet beetle larvae damage wool, natural fibers, stored dry goods, and even taxidermy across Northeast Wisconsin homes, often mistaken for bed bugs or moths. The tiny adults are drawn to windows. BugBoss identifies the source, treats harborage, and helps protect susceptible items.',
    overview: 'It is the larvae — small, bristly, and slow-moving — that do the damage, feeding on wool, fur, feathers, dead insects, pet hair, and stored grains. Adults are small rounded beetles that fly to windows and light. Because the larvae hide in undisturbed areas, infestations often go unnoticed until damage shows.',
    signs: ['Small bristly larvae or shed larval skins in closets and under furniture', 'Irregular holes in wool, fur, or natural fibers', 'Small rounded beetles at windows'],
    faqs: [
      { q: 'How do I know if it is carpet beetles or bed bugs?', a: 'Carpet beetle larvae are bristly and damage fabrics and stored goods; bed bugs bite people and hide near beds. BugBoss confirms the identification before treating, since the approaches differ completely.' },
      { q: 'Where do carpet beetles come from?', a: 'They enter on cut flowers, secondhand items, and through windows, and feed on natural fibers, pet hair, dead insects, and stored dry goods. Undisturbed areas under furniture and in closets are prime spots.' },
      { q: 'How do I get rid of carpet beetles?', a: 'Find and remove the infested source, clean thoroughly (vacuuming undisturbed areas), protect susceptible items, and treat harborage. Locating the food source is the key step.' },
    ],
  },
  // Rodents / small mammals
  {
    slug: 'deer-mice', name: 'Deer Mice', category: 'rodent',
    season: 'Year-round; peak fall–winter',
    answer: 'Deer mice are the rural Northeast Wisconsin field mouse that invades cabins, farmhouses, and outbuildings, and they are the primary hantavirus concern in the region. They nest in stored items and wall voids. BugBoss removes them, seals the structure, and advises on safe cleanup of contaminated areas.',
    overview: 'Unlike the house mouse, the deer mouse is a native field rodent — bicolored, with a white belly — that moves into rural structures, cabins, and outbuildings, especially in fall. It is the species of greatest hantavirus concern in Wisconsin, so droppings and nests should be cleaned up carefully rather than swept or vacuumed dry.',
    signs: ['Bicolored mice (brown above, white below) in cabins, sheds, and farmhouses', 'Nests in stored items, drawers, and wall voids', 'Droppings in outbuildings and seasonal structures'],
    faqs: [
      { q: 'Are deer mice dangerous?', a: 'Deer mice are the main carrier of hantavirus in this region. Dry droppings and nesting material can release particles when disturbed, so cleanup should follow safe procedures — dampen, avoid sweeping or vacuuming dry, and ventilate.' },
      { q: 'How do deer mice differ from house mice?', a: 'Deer mice are native field mice with a distinct white belly and bicolored tail, and they are more associated with rural, cabin, and outbuilding settings — and with hantavirus — than the house mouse.' },
      { q: 'How do I keep deer mice out of my cabin?', a: 'Seal every gap (they enter through openings the size of a dime), remove food and nesting attractants, and set up monitoring. Sealing the structure is the durable fix, especially for a cabin that sits empty.' },
    ],
  },
  {
    slug: 'voles', name: 'Voles', category: 'rodent',
    season: 'Year-round; damage visible spring',
    answer: 'Voles (meadow mice) tunnel through Northeast Wisconsin lawns, gardens, and orchards, leaving surface runways and girdling trees and shrubs under winter snow. They rarely enter homes. BugBoss manages vole pressure around the property with habitat reduction and targeted control to protect landscaping.',
    overview: 'Voles are stocky, short-tailed rodents that live outdoors in grass, mulch, and ground cover, creating a network of surface runways. Under winter snow they gnaw the bark of young trees and shrubs, sometimes killing them, and their runways and feeding become obvious when the snow melts in spring.',
    signs: ['Surface runways in the lawn revealed at snowmelt', 'Gnawed bark near the base of trees and shrubs', 'Small burrow openings in mulch and ground cover'],
    faqs: [
      { q: 'What is the difference between voles and moles?', a: 'Voles are plant-eating rodents that leave surface runways and gnaw bark; moles are insect-eating mammals that push up soil ridges and mounds tunneling for grubs and worms. The damage and the control differ.' },
      { q: 'How do I protect my trees from voles?', a: 'Keep mulch and ground cover back from trunks, use guards on young trees, reduce dense cover near plantings, and apply targeted control. Habitat reduction is a big part of it.' },
      { q: 'Do voles come into the house?', a: 'Rarely — voles are outdoor rodents. Mice are the ones that invade structures. Vole work focuses on protecting the lawn, garden, and landscaping.' },
    ],
  },
  {
    slug: 'chipmunks', name: 'Chipmunks', category: 'rodent',
    season: 'Spring–fall',
    answer: 'Chipmunks burrow along Northeast Wisconsin foundations, patios, retaining walls, and gardens, and their tunneling can undermine structures. They occasionally enter homes. BugBoss controls chipmunks with trapping and exclusion, sealing burrow access along foundations and hardscapes.',
    overview: 'Cute but destructive in numbers, chipmunks dig extensive burrow systems that often run right along foundations, under patios and steps, and beneath retaining walls, where the tunneling can cause settling and damage over time. They stockpile seed and can raid gardens and bird-feeding areas.',
    signs: ['Small burrow openings (about golf-ball size) with no soil mound', 'Chipmunks running along foundations, walls, and woodpiles', 'Damage to gardens, bulbs, and seed stores'],
    faqs: [
      { q: 'Are chipmunk burrows a problem?', a: 'They can be. Extensive burrowing along foundations, patios, steps, and retaining walls can undermine and settle those structures over time, which is why active burrows near the house are worth addressing.' },
      { q: 'How do I get rid of chipmunks?', a: 'Trapping combined with exclusion and habitat reduction — sealing burrow access, cutting back cover and seed sources near the foundation. BugBoss handles removal and the exclusion that keeps them from re-burrowing.' },
      { q: 'Do chipmunks get into houses?', a: 'Occasionally they enter garages, basements, or crawlspaces through ground-level gaps, but they are mainly an outdoor burrowing nuisance around the structure.' },
    ],
  },
  {
    slug: 'shrews', name: 'Shrews', category: 'rodent',
    season: 'Year-round',
    answer: 'Shrews are tiny, high-metabolism insectivores that occasionally enter Northeast Wisconsin homes, basements, and garages hunting insects. They are not rodents and have a venomous bite used on prey. BugBoss removes shrews and seals the ground-level gaps they use, along with the insect prey drawing them in.',
    overview: 'Often mistaken for mice, shrews are actually tiny insectivorous mammals with pointed snouts and a frantic pace driven by an extreme metabolism. They follow prey — insects and small invertebrates — and sometimes end up indoors at ground level, where they rarely establish but can startle homeowners.',
    signs: ['Tiny mouse-like animals with long pointed snouts', 'Small droppings, often near where insects gather', 'Occasional shrews in basements, garages, and window wells'],
    faqs: [
      { q: 'Are shrews the same as mice?', a: 'No. Shrews are insectivores, not rodents — pointed snout, tiny eyes, and a diet of insects. Their control overlaps with rodent exclusion, but they are drawn by prey insects rather than by food storage.' },
      { q: 'Is a shrew bite dangerous?', a: 'Shrews have a mildly venomous bite used to subdue prey; it is not a serious threat to people but they should not be handled. They can be aggressive for their size.' },
      { q: 'How do I keep shrews out?', a: 'Seal ground-level entry points, reduce the insect prey that attracts them, and cut back dense cover against the foundation. Removal plus exclusion resolves it.' },
    ],
  },
  // Wildlife
  {
    slug: 'groundhogs', name: 'Groundhogs (Woodchucks)', category: 'wildlife',
    season: 'Spring–fall (hibernate winter)',
    answer: 'Groundhogs dig large burrows under Northeast Wisconsin decks, sheds, barns, and slabs, and their tunneling can undermine structures while they raid gardens and crops. BugBoss removes groundhogs and seals and screens the burrow sites beneath structures so they cannot re-den.',
    overview: 'Also called woodchucks, groundhogs are large burrowing rodents whose dens — often placed under decks, sheds, porches, barns, and concrete slabs — can be surprisingly extensive and can undermine footings and foundations. They are strong diggers and voracious feeders on gardens and field crops.',
    signs: ['Large burrow entrances (10–12 inch) with a soil mound, often under structures', 'Garden and crop damage', 'Well-worn paths from the burrow to feeding areas'],
    faqs: [
      { q: 'Are groundhog burrows a structural risk?', a: 'They can be. Burrows under decks, sheds, porches, and slabs undermine the soil that supports those structures, and large den systems can lead to settling and damage. Active burrows against the house are worth addressing promptly.' },
      { q: 'How do I get rid of a groundhog under my shed?', a: 'Removal followed by sealing and screening the space beneath the structure so nothing can re-den, timed to account for young in spring. BugBoss handles removal and the exclusion together.' },
      { q: 'Will a groundhog come back after removal?', a: 'An open, attractive burrow site invites the next animal. That is why BugBoss screens and seals the den access after removal rather than just trapping and leaving the hole.' },
    ],
  },
  {
    slug: 'moles', name: 'Moles', category: 'wildlife',
    season: 'Spring–fall (active year-round)',
    answer: 'Moles tunnel through Northeast Wisconsin lawns hunting earthworms and grubs, leaving raised ridges and soil mounds that damage turf. They are insectivores, not rodents, so baiting rarely works. BugBoss controls moles with proven trapping and helps address the soil insects drawing them.',
    overview: 'A mole is an insect-eating mammal built for digging, and the damage it does is mechanical — surface feeding tunnels that raise ridges across the lawn and deeper runs marked by volcano-shaped soil mounds. Because moles eat worms and grubs rather than seed or bait, control depends on trapping done correctly.',
    signs: ['Raised ridges snaking across the lawn (surface tunnels)', 'Volcano-shaped mounds of soil (deep tunnels)', 'Spongy turf that lifts underfoot'],
    faqs: [
      { q: 'Why doesn’t mole bait work?', a: 'Moles eat earthworms and grubs, not grain or seed baits, so most poison baits are ignored. Correctly placed trapping is the reliable method, which is why professional control succeeds where DIY bait fails.' },
      { q: 'Are moles the same as voles or gophers?', a: 'No. Moles are insectivores that raise ridges and mounds; voles are plant-eating rodents that leave surface runways and gnaw bark. The signs and the control are different.' },
      { q: 'How do I get rid of moles for good?', a: 'Trapping in the active runs, sometimes paired with reducing the grubs and worms they feed on. BugBoss locates active tunnels and traps them out, then advises on keeping pressure down.' },
    ],
  },
  {
    slug: 'snakes', name: 'Snakes', category: 'wildlife',
    season: 'Spring–fall',
    answer: 'Most Northeast Wisconsin snakes — garter, water, and other common species — are harmless and beneficial, but they can unsettle homeowners when they shelter near foundations, in basements, or under decks. BugBoss removes unwanted snakes, seals entry points, and reduces the harborage and prey that draw them.',
    overview: 'Wisconsin’s common snakes are overwhelmingly non-venomous and helpful, feeding on rodents and insects, but people understandably do not want them in the basement or den site by the door. Snakes shelter in cool, damp, rodent-rich spots — under decks, in rock piles and window wells, and in foundations with gaps.',
    signs: ['Shed snake skins near foundations, in basements, or under debris', 'Snakes seen around rock piles, wood piles, and window wells', 'A rodent problem (their food source) present'],
    faqs: [
      { q: 'Are Wisconsin snakes dangerous?', a: 'The snakes people encounter around homes in Northeast Wisconsin are almost always harmless, non-venomous species. They are beneficial rodent predators, but BugBoss will safely remove any you do not want on the property.' },
      { q: 'Why do I have snakes around my house?', a: 'Cool, damp harborage (rock and wood piles, debris, window wells) plus a food supply of rodents and insects. Reducing harborage and controlling rodents makes the property far less attractive.' },
      { q: 'How do I keep snakes out of the basement?', a: 'Seal ground-level entry points, address the rodents they follow, and remove harborage near the foundation. Removal plus exclusion and prey reduction is the approach.' },
    ],
  },
  {
    slug: 'woodpeckers', name: 'Woodpeckers', category: 'wildlife',
    season: 'Spring & fall',
    answer: 'Woodpeckers drum and drill on Northeast Wisconsin homes — especially cedar and wood siding, fascia, and trim — for territory, nesting, or insects in the wood. The damage is real and repeats. BugBoss identifies the cause (often wood-boring insects), deters the birds, and helps protect the structure.',
    overview: 'Woodpecker damage on a house has a few causes: drumming to mark territory in spring, excavating nest holes, or drilling after insect larvae living in the siding. That last cause matters — persistent woodpecker attention on one area often means there are wood-boring insects to address, not just a bird to deter.',
    signs: ['Rows of holes or excavated cavities in siding, fascia, or trim', 'Loud drumming on the house in spring', 'Damage concentrated on cedar or wood siding'],
    faqs: [
      { q: 'Why is a woodpecker pecking my house?', a: 'For territorial drumming (spring), to excavate a nest cavity, or to reach wood-boring insect larvae in the siding. If it keeps returning to one spot, there may be an insect problem in the wood worth investigating.' },
      { q: 'Are woodpeckers protected?', a: 'Native woodpeckers are federally protected, so control focuses on legal deterrents and exclusion rather than harm. BugBoss uses appropriate deterrence and addresses the underlying attractant.' },
      { q: 'How do I stop woodpecker damage?', a: 'Combine deterrents with fixing the cause — repairing damaged siding and addressing any wood-boring insects. Deterrence alone often just moves the bird a few feet if the attractant remains.' },
    ],
  },
  {
    slug: 'opossums', name: 'Opossums', category: 'wildlife',
    season: 'Year-round',
    answer: 'Opossums den under Northeast Wisconsin decks, sheds, and porches and raid garbage, pet food, and coops, sometimes bringing fleas and ticks with them. BugBoss removes opossums humanely, seals off the den sites beneath structures, and helps remove the food attractants that drew them.',
    overview: 'North America’s only marsupial, the opossum is a slow-moving scavenger that shelters in convenient spots — under decks, sheds, porches, and in outbuildings — and follows food: garbage, pet food, compost, and chicken coops. They are not aggressive, but they can carry parasites and make a mess, and a den under the house is worth resolving.',
    signs: ['Opossums seen at night around trash, pet food, or coops', 'Denning under decks, sheds, and porches', 'Raided garbage, compost, or poultry feed'],
    faqs: [
      { q: 'Are opossums dangerous?', a: 'They are generally docile and rarely aggressive, and they even eat ticks and pests. The concerns are the parasites they can carry (fleas, ticks), the mess, and denning under structures.' },
      { q: 'How do I get an opossum out from under my deck?', a: 'Humane removal followed by sealing and screening the space so it cannot re-den, plus removing food attractants like pet food and accessible garbage. BugBoss handles removal and exclusion together.' },
      { q: 'How do I keep opossums away?', a: 'Secure garbage and pet food, close off spaces under decks and sheds, and remove easy shelter. Taking away food and den sites is what keeps them from returning.' },
    ],
  },
  {
    slug: 'muskrats', name: 'Muskrats', category: 'wildlife',
    season: 'Spring–fall',
    answer: 'Muskrats burrow into pond banks, shorelines, and dams around Northeast Wisconsin’s lakes and rivers, and their tunneling damages boathouses, docks, and earthen banks. BugBoss removes muskrats and helps protect shoreline structures on lake and river properties across the Chain O’ Lakes and Wolf River corridor.',
    overview: 'Muskrats are semi-aquatic rodents that build bank burrows and lodges along ponds, lakes, rivers, and drainage systems. On waterfront property their burrowing undermines banks, docks, boathouses, and earthen dams and berms, which is a real concern in this lake- and river-rich part of Wisconsin.',
    signs: ['Burrow openings at or below the waterline in banks and berms', 'Damage to earthen dams, docks, and boathouse footings', 'Muskrats swimming or feeding along the shoreline'],
    faqs: [
      { q: 'Why are muskrats a problem on my shoreline?', a: 'Their bank burrows undermine shorelines, docks, boathouses, and earthen dams, leading to erosion and structural damage — a common issue on Chain O’ Lakes and river properties.' },
      { q: 'How do I get rid of muskrats?', a: 'Targeted removal along the active burrows and shoreline, paired with protecting vulnerable banks and structures. BugBoss handles waterfront muskrat work as part of rural wildlife service.' },
      { q: 'Do muskrats damage docks?', a: 'Their burrowing can undermine the banks and footings that support docks, boathouses, and retaining structures, so active muskrat burrows near those structures should be addressed.' },
    ],
  },
  {
    slug: 'beavers', name: 'Beavers', category: 'wildlife',
    season: 'Year-round',
    answer: 'Beavers dam Northeast Wisconsin streams and culverts, flooding fields, roads, and woodlots, and fell valuable trees along shorelines. BugBoss addresses beaver conflicts with removal and helps protect trees and drainage on rural and waterfront property, working within Wisconsin regulations.',
    overview: 'Beavers are powerful landscape engineers, and on rural property their dam-building can flood fields, driveways, culverts, and woodlots, while their felling takes down mature and ornamental trees along the water. Resolving a beaver conflict means addressing the animals and the flooding they cause within state rules.',
    signs: ['Dams across streams, ditches, and culverts with rising water', 'Felled or gnawed trees along the shoreline', 'Flooded fields, roads, or woodlots'],
    faqs: [
      { q: 'How do I stop beavers from flooding my property?', a: 'Address the beavers and manage the dam and culvert blockage within Wisconsin regulations. BugBoss evaluates the situation and handles removal and the flooding conflict on rural and waterfront property.' },
      { q: 'Can I protect my trees from beavers?', a: 'Yes — valuable and ornamental trees near water can be protected with guards, alongside managing the local beaver activity. BugBoss advises on both.' },
      { q: 'Are beavers regulated in Wisconsin?', a: 'Yes, beaver work is governed by state regulations. BugBoss handles beaver conflicts within those rules rather than with unlawful or ad-hoc measures.' },
    ],
  },
  {
    slug: 'coyotes', name: 'Coyotes', category: 'wildlife',
    season: 'Year-round',
    answer: 'Coyotes range across rural Northeast Wisconsin and can threaten livestock, poultry, and pets, especially near farms and woodland edges. BugBoss addresses coyote conflicts with assessment, deterrence, and removal where warranted, plus guidance on securing animals and removing attractants.',
    overview: 'Coyotes are established throughout rural Wisconsin and usually avoid people, but they become a genuine concern where they prey on poultry, small livestock, and pets, or where they lose their wariness near a food source. Managing a coyote problem combines removing attractants, securing animals, deterrence, and targeted removal when justified.',
    signs: ['Livestock or poultry losses, or missing pets', 'Coyotes seen or heard (howling) near buildings', 'Tracks and scat along field and woodland edges'],
    faqs: [
      { q: 'Are coyotes a threat to pets and livestock?', a: 'They can be, particularly poultry, small livestock, and small pets near farms and woodland edges. Securing animals at night and removing food attractants reduces risk, with targeted removal when there is an active problem.' },
      { q: 'How do I keep coyotes away from my farm?', a: 'Remove attractants (accessible feed, carcasses, garbage), secure poultry and livestock, use deterrence, and address bold or problem individuals directly. BugBoss assesses the situation and advises on the right combination.' },
      { q: 'Will coyotes attack people?', a: 'Attacks on people are very rare; coyotes normally avoid humans. The practical concerns in this area are livestock, poultry, and pets, and coyotes that have lost their fear near a food source.' },
    ],
  },
  {
    slug: 'nuisance-birds', name: 'Nuisance Birds (Starlings, Pigeons & Sparrows)', category: 'wildlife',
    season: 'Year-round',
    answer: 'Starlings, pigeons, and house sparrows nest in Northeast Wisconsin vents, barns, signs, and eaves, and their droppings damage structures and pose a health risk. BugBoss excludes nuisance birds with netting, screening, and deterrents, and cleans up the contaminated nesting sites they leave behind.',
    overview: 'The non-native starling, pigeon, and house sparrow are the birds that cause real building conflicts — nesting in dryer and stove vents, barn eaves, signage, and ledges, where their nests block airflow and their acidic droppings corrode surfaces and carry disease. Control is exclusion: physically denying access to the nesting sites.',
    signs: ['Birds entering vents, soffits, barn eaves, or signage', 'Droppings accumulating below roosting and nesting spots', 'Nesting material blocking vents and gutters'],
    faqs: [
      { q: 'Why are birds in my dryer or stove vent?', a: 'Starlings and sparrows favor vents as sheltered nesting sites, which blocks airflow (a fire and efficiency hazard) and brings droppings and parasites. Exclusion with proper vent guards, after clearing the nest, is the fix.' },
      { q: 'Are bird droppings a health concern?', a: 'Yes. Accumulated droppings from pigeons and starlings can harbor pathogens and are corrosive to buildings, so contaminated sites should be cleaned and decontaminated as part of the job.' },
      { q: 'How do you keep nuisance birds out?', a: 'Exclusion — netting, screening, vent guards, and ledge deterrents that physically deny access — combined with cleanup. Which non-native species are involved matters, and BugBoss handles the exclusion and the decontamination.' },
    ],
  },

  // --- Library completion (Phase 3, 42 → 55): deep content in src/content/pests/ ---
  {
    slug: 'termites', name: 'Termites', category: 'insect',
    season: 'March–June (swarms); feeding year-round',
    answer: 'Eastern subterranean termites are uncommon in Northeast Wisconsin but not absent — scattered infestations occur in warmer river-corridor and southern Waupaca County sites. Swarmers appear in spring and are widely mistaken for carpenter ants. BugBoss inspects, identifies honestly, and refers or treats based on what is actually there.',
    overview: 'Wisconsin sits at the cold northern edge of the eastern subterranean termite’s range, so genuine infestations here are localized and uncommon rather than routine. The pest that most Northeast Wisconsin homeowners actually have is the carpenter ant. Correct identification is the entire first step, because the two insects damage wood in completely different ways and demand completely different treatment.',
    signs: ['Dark, equal-length-winged swarmers in spring, often at windows', 'Pencil-width mud tubes on foundation walls or piers', 'Wood that sounds hollow and holds soil or mud inside galleries', 'Discarded wings in even piles on sills'],
    faqs: [
      { q: 'Are there termites in Wisconsin?', a: 'Yes, but they are uncommon and localized. Eastern subterranean termites reach their northern limit here, with scattered pockets rather than widespread pressure, so most suspected termite calls in Northeast Wisconsin turn out to be carpenter ants.' },
      { q: 'How do I tell termites from carpenter ants?', a: 'Termite swarmers have a straight waist, straight antennae, and four wings of equal length. Carpenter ant swarmers have a pinched waist, elbowed antennae, and front wings noticeably longer than the back pair. Termite galleries hold mud; carpenter ant galleries are clean and produce sawdust-like frass.' },
      { q: 'What are mud tubes?', a: 'Pencil-width earthen tunnels that subterranean termites build across foundation walls and piers to travel between the soil and the wood without drying out. They are the single most reliable field sign of an active subterranean termite infestation.' },
    ],
  },
  {
    slug: 'carpenter-bees', name: 'Carpenter Bees', category: 'insect',
    season: 'May–August',
    answer: 'Carpenter bees drill perfectly round, half-inch holes into unpainted decks, fascia, barn siding, and porch rails across Northeast Wisconsin, tunnelling galleries that widen every year. Woodpeckers then open the wood to reach the larvae. BugBoss treats the galleries, seals them, and advises on finishes that stop re-drilling.',
    overview: 'A carpenter bee looks like a bumble bee with a shiny, hairless black abdomen, and the female excavates a nearly perfect round hole into bare softwood before tunnelling with the grain. A single season’s damage is cosmetic; a decade of reuse and expansion in the same fascia board or barn rafter is structural, and the secondary woodpecker damage is frequently worse than the tunnels.',
    signs: ['Perfectly round half-inch holes in bare wood, often on the underside of boards', 'Coarse sawdust below the holes and yellow staining on the wood beneath', 'Large bees hovering aggressively near eaves, decks, and rails in late spring', 'Woodpecker holes opening up long galleries in fascia or siding'],
    faqs: [
      { q: 'Do carpenter bees sting?', a: 'The male, who does the aggressive hovering, has no stinger at all. The female can sting but is extremely reluctant to and generally has to be handled first. They are far less of a stinging risk than wasps or hornets.' },
      { q: 'How much damage do carpenter bees actually do?', a: 'One year of a single gallery is minor. The problem is that carpenter bees return to the same wood year after year and extend the tunnels, and that woodpeckers hear the larvae and tear the board open to get at them, which turns a small hole into major fascia or siding damage.' },
      { q: 'How do I stop carpenter bees coming back?', a: 'Treat the active galleries, plug them once the treatment has worked, and then finish the wood. Carpenter bees strongly prefer bare or weathered softwood — painted and well-sealed surfaces are far less likely to be drilled.' },
    ],
  },
  {
    slug: 'pantry-pests', name: 'Pantry & Stored Product Pests', category: 'insect',
    season: 'Year-round; peaks in late winter',
    answer: 'Pantry pests — saw-toothed grain beetles, flour beetles, weevils, and drugstore beetles — infest flour, cereal, pet food, birdseed, and spices in Northeast Wisconsin homes, and nearly always arrive inside a packaged product. BugBoss finds the source package, clears the harborage, and shows you how to store food so it does not recur.',
    overview: 'Stored product pests are a source problem: the beetles or weevils were already in something you carried through the door, usually flour, cereal, pet food, birdseed, or an old spice jar. Once established they spread to other packages, and because they can chew or slip into unopened paper and thin plastic, sealed-looking cabinets offer little protection. Finding and discarding the source ends the problem.',
    signs: ['Small beetles crawling in cabinets, on shelves, or inside sealed packages', 'Webbing, clumping, or fine powder in flour, cereal, or pet food', 'Tiny holes in packaging and beetles on the counter near the pantry', 'Adults collecting at nearby windows'],
    faqs: [
      { q: 'Where do pantry bugs come from?', a: 'They come in inside a packaged product, almost without exception — flour, cereal, dry pet food, birdseed, or spices infested at the mill, warehouse, or store. They are not a sign of a dirty kitchen and they do not walk in from outdoors.' },
      { q: 'Do I have to throw everything out?', a: 'No. You need to find and discard the infested source package and any other package showing activity. Uninfested food can be kept, ideally moved into hard, airtight containers so a future arrival cannot spread.' },
      { q: 'Are pantry pests the same as pantry moths?', a: 'They are the same problem from different insects. Beetles and weevils are covered here; the Indian meal moth and other fabric and food moths are covered on the moths page. Identification matters because it tells you which packages to check first.' },
    ],
  },
  {
    slug: 'springtails', name: 'Springtails', category: 'insect',
    season: 'Spring and fall; after heavy rain',
    answer: 'Springtails are tiny jumping arthropods that appear in huge numbers in damp Northeast Wisconsin basements, bathrooms, crawlspaces, and around mulched foundations, especially after heavy rain. They are harmless and cannot damage anything. They are a moisture indicator, so BugBoss treats the water problem behind them, not just the insects.',
    overview: 'Springtails live in soil, mulch, and leaf litter, feeding on mold and decaying plant matter, and they move indoors in numbers when the outside dries out or floods. They jump when disturbed, using a spring-loaded appendage under the abdomen, which is what separates them from fleas at a glance. Every serious springtail call traces back to standing moisture.',
    signs: ['Clouds of tiny jumping specks on damp floors, sinks, or window wells', 'Concentrations near mulch beds, hose bibs, and downspouts', 'Numbers spiking after heavy rain or snowmelt', 'Activity in a bathroom, crawlspace, or basement with a known damp spot'],
    faqs: [
      { q: 'Are springtails harmful?', a: 'No. Springtails do not bite, sting, spread disease, damage the structure, or infest food. They are a nuisance and an indicator — the problem worth solving is the moisture that brought them.' },
      { q: 'Are springtails the same as fleas?', a: 'No, though the jumping causes constant confusion. Fleas are flattened, hard-bodied, and bite; springtails are soft, rounded, do not bite, and are usually found on damp surfaces rather than on pets.' },
      { q: 'How do I get rid of springtails for good?', a: 'Dry the source. Fix grading and downspouts, pull mulch back from the foundation, repair leaks, and dehumidify the basement or crawlspace. Treatment alone knocks numbers down temporarily; drying the habitat is what ends it.' },
    ],
  },
  {
    slug: 'sowbugs-pillbugs', name: 'Sowbugs & Pillbugs', category: 'insect',
    season: 'Spring and fall; after heavy rain',
    answer: 'Sowbugs and pillbugs are gray, armored crustaceans that live under mulch, leaf litter, and landscape timbers and wander into Northeast Wisconsin basements and garages when the ground gets wet. They cannot survive long indoors. Finding them alive week after week means there is standing moisture BugBoss should look at.',
    overview: 'These are land crustaceans rather than insects, breathing through gill-like structures that must stay damp — which is why they die within days on a dry basement floor. Pillbugs roll into a tight ball when disturbed; sowbugs cannot. They feed on decaying plant matter, harm nothing indoors, and are one of the clearest moisture indicators in the field.',
    signs: ['Gray segmented bugs, usually dead, on basement and garage floors', 'Live ones under mulch, boards, stones, and landscape timbers against the house', 'Numbers rising after heavy rain or spring melt', 'Damp sill plates, window wells, or a crawlspace with a bare dirt floor'],
    faqs: [
      { q: 'Are sowbugs and pillbugs dangerous?', a: 'Not at all. They do not bite or sting, carry no disease, do not damage the structure or stored goods, and cannot infest food. They are a moisture nuisance and nothing more.' },
      { q: 'What is the difference between a sowbug and a pillbug?', a: 'Pillbugs roll into a tight ball when touched — the classic roly-poly — and have a more domed shell. Sowbugs are flatter, have two small tail-like appendages at the rear, and cannot roll up. Both want the same damp conditions.' },
      { q: 'Why do I keep finding them dead in the basement?', a: 'Because they cannot survive indoor humidity. They wander in from damp ground against the foundation, dry out within a day or two, and die. A steady supply means the outside conditions and the entry gaps both still need attention.' },
    ],
  },
  {
    slug: 'millipedes', name: 'Millipedes', category: 'insect',
    season: 'September–October; after heavy rain',
    answer: 'Millipedes are slow, dark, many-legged arthropods that migrate against Northeast Wisconsin foundations in mass numbers on damp fall nights, then die on basement floors. They do not bite or damage anything. BugBoss cuts the migrations with perimeter treatment timed to the event, plus moisture and leaf-litter management.',
    overview: 'Millipedes eat decaying plant matter and live in the damp layer under mulch, leaf litter, and lawn thatch. In autumn, and after prolonged rain, they move in large numbers, and a house in their path takes hundreds against the foundation over a couple of nights. They coil when disturbed and can leave a faint stain when crushed, but they cannot live indoors and are harmless.',
    signs: ['Dozens or hundreds of coiled dark millipedes on the basement floor or in window wells', 'Mass movement across driveways and patios on damp fall nights', 'Heavy leaf litter, thatch, or mulch banked against the foundation', 'Activity concentrated on the shaded, wetter side of the house'],
    faqs: [
      { q: 'Are millipedes dangerous?', a: 'No. Millipedes have no venom and do not bite. Some species release a defensive fluid that can irritate skin slightly and stain surfaces if crushed, which is a good reason to sweep or vacuum rather than step on them.' },
      { q: 'Why did hundreds of millipedes show up at once?', a: 'Millipedes migrate en masse in autumn and after heavy rain. If your house is in the path they pile against the foundation and push through any ground-level gap. It is an event, not a resident infestation, and it usually passes within days.' },
      { q: 'How do I stop millipedes getting in?', a: 'Reduce the damp habitat next to the house — pull mulch and leaf litter back from the foundation, dethatch, fix grading and downspouts — and seal ground-level gaps. A perimeter treatment timed to the fall migration handles the rest.' },
    ],
  },
  {
    slug: 'clover-mites', name: 'Clover Mites', category: 'insect',
    season: 'March–May and September–October',
    answer: 'Clover mites are pinhead-sized red mites that mass on sunny Northeast Wisconsin siding and window frames in spring and fall and wander indoors by the thousands. They do not bite or damage anything, but they leave a rust-red smear when crushed. BugBoss treats the exterior and recommends a plant-free strip along the foundation.',
    overview: 'Clover mites feed on grass and clover, not on people or property, and they build enormous populations in lush, well-fertilized lawns that run right up to the foundation. When conditions shift they climb the warm sunny walls and get in around window frames and siding gaps. They are strictly a nuisance, but the staining and sheer numbers make them a genuine complaint.',
    signs: ['Tiny bright red or reddish-brown specks moving on sills, siding, and window frames', 'A rust-colored smear when one is wiped or crushed', 'Concentrations on the sunny south and west walls in early spring', 'Thick, well-fertilized lawn growing right against the foundation'],
    faqs: [
      { q: 'Do clover mites bite?', a: 'No. Clover mites feed only on plants — grasses, clover, and similar lawn vegetation. They cannot bite people or pets, do not spread disease, and do not infest food or damage the structure.' },
      { q: 'What is the red stain when I squash one?', a: 'It is the mite’s own body pigment, not blood. It stains light-colored sills, curtains, carpet, and paint readily, which is why vacuuming is much better than wiping or crushing them.' },
      { q: 'How do I keep clover mites out?', a: 'The most effective single step is a plant-free strip about 18 to 24 inches wide of gravel or bare soil between the lawn and the foundation — clover mites are very reluctant to cross it. Pair that with sealing around windows and an exterior treatment at the spring peak.' },
    ],
  },
  {
    slug: 'mites', name: 'Bird & Rodent Mites', category: 'insect',
    season: 'Following a bird or rodent nest being abandoned',
    answer: 'Bird and rodent mites are near-microscopic parasites that leave the nest and search for a new host when their bird, bat, or rodent host dies or is removed — which is why biting complaints often start days after a DIY eviction. BugBoss removes the nest, treats the site, and closes the entry so it does not repeat.',
    overview: 'These mites live in the nest and feed on the nestlings or the adult rodent. When the host leaves, thousands of hungry mites disperse through wall voids, ceiling fixtures, and vents looking for another warm-blooded animal, and they will bite people even though they cannot survive on us. The bites are a symptom; the nest is the problem, and removing it is the only durable fix.',
    signs: ['Unexplained itchy bites starting days after birds, bats, or rodents left', 'Almost-invisible moving specks on sills, ceilings, or around light fixtures', 'A known nest in a vent, soffit, attic, or wall void', 'Bites concentrated in one room, usually below or beside the nest site'],
    faqs: [
      { q: 'Can bird or rodent mites live on humans?', a: 'No. They cannot complete their life cycle on people and they die off within weeks without their true host. They will bite in the meantime, though, and the biting continues until the nest is removed.' },
      { q: 'Why did the biting start after I removed a nest?', a: 'Removing or evicting the host strands the mites. They leave the nest en masse to find a new blood source and spread into living space. This is the most common reason mite calls follow a DIY bird, bat, or rodent removal.' },
      { q: 'How do you get rid of bird and rodent mites?', a: 'Locate and remove the nest and its material, treat the void and the surrounding surfaces, and permanently seal the entry point so the host cannot return. Treating bites or spraying rooms without removing the nest just delays the problem.' },
    ],
  },
  {
    slug: 'flying-squirrels', name: 'Flying Squirrels', category: 'wildlife',
    season: 'Year-round; peaks October–March',
    answer: 'Northern flying squirrels are small, nocturnal, colony-living squirrels that den in Northeast Wisconsin attics through the winter, often twenty or more together. The tell is scampering and gliding noises starting right at dusk. BugBoss removes the colony with one-way doors and seals the roofline against re-entry.',
    overview: 'Unlike gray and red squirrels, flying squirrels are strictly nocturnal and highly social, so an attic den is rarely one animal — colonies of twenty to thirty overwinter together for warmth. They glide rather than fly, need only a gap the size of a golf ball, and their small size means they exploit roofline defects other squirrels cannot. Their urine and droppings saturate insulation quickly.',
    signs: ['Scampering and light thumping in the attic starting at dusk, not dawn', 'Gliding animals seen against the sky at twilight near the roofline', 'Concentrated latrine areas and soiled insulation in the attic', 'Chewed gaps at soffit corners, gable vents, and roof junctions'],
    faqs: [
      { q: 'Do flying squirrels actually fly?', a: 'No. They glide, using a membrane of skin stretched between the front and back legs, and they steer with a flattened tail. A glide from a tall tree can cover well over a hundred feet, which is how they reach a roof without ever touching the ground.' },
      { q: 'How do I know it is flying squirrels and not gray squirrels?', a: 'Timing is the giveaway. Gray and red squirrels are active at dawn and through the day; flying squirrels are strictly nocturnal, so the noise starts at dusk and continues through the night. Flying squirrels also sound lighter and faster.' },
      { q: 'How many flying squirrels are in an attic?', a: 'Usually many more than people expect. They overwinter communally for warmth, and colonies of twenty to thirty in one attic are routine here. That is why trapping a couple and stopping does not resolve the noise.' },
    ],
  },
  {
    slug: 'porcupines', name: 'Porcupines', category: 'wildlife',
    season: 'Year-round; damage peaks in winter',
    answer: 'Porcupines chew anything salty or sweaty — deck rails, plywood, tool handles, tires, and brake lines — and girdle trees across rural Northeast Wisconsin. They den under sheds, barns, and porches. BugBoss handles removal and exclusion, and protects the structures and trees they keep returning to.',
    overview: 'The porcupine is a large, slow, nocturnal rodent that climbs well and feeds on bark, twigs, and buds through the winter, girdling and sometimes killing trees. Its craving for salt drives most property damage: anything a sweaty hand has gripped or road salt has touched gets chewed. Dogs that investigate one end up with a serious veterinary problem.',
    signs: ['Gnawed plywood, deck rails, tool handles, or vehicle tires and hoses', 'Bark stripped from the upper trunk and branches, with nipped twigs below', 'A well-used den entrance under a shed, barn, or porch with quills and scat nearby', 'Trails worn through snow to and from a den'],
    faqs: [
      { q: 'Can a porcupine throw its quills?', a: 'No — that is a myth. Quills detach very easily on contact, which is why an animal that brushes or bites a porcupine ends up covered in them, but the porcupine cannot project them at anything.' },
      { q: 'Why is a porcupine chewing my deck and tools?', a: 'Salt. Porcupines crave sodium, so plywood glues, sweat-soaked tool handles, road-salted vehicle parts, and treated deck rails all become targets. The chewing looks random until you realize it is following the salt.' },
      { q: 'What do I do if my dog gets quilled?', a: 'Go to a vet, and do not try to pull them yourself. Quills have microscopic barbs, they migrate deeper with time and movement, and removal generally requires sedation. Muzzle-level pain makes home removal both cruel and ineffective.' },
    ],
  },
  {
    slug: 'weasels-mink', name: 'Weasels & Mink', category: 'wildlife',
    season: 'Year-round; conflicts peak in winter',
    answer: 'Weasels and mink are small, slender predators that get through gaps barely wider than a thumb and can kill an entire coop of poultry in a single night across rural Northeast Wisconsin. BugBoss traps the animal and then does the exclusion work — hardware cloth, not chicken wire — that actually keeps them out.',
    overview: 'Long-tailed weasels, short-tailed weasels, and mink all occur here, and their body shape lets them follow rodents into spaces almost nothing else can enter. Mink stay close to water and take poultry and fish; weasels hunt mice and voles and will clear a coop. Surplus killing is normal predator behavior for them, which is why losses arrive all at once.',
    signs: ['Multiple birds killed in one night, often with little eaten', 'Small entry holes at ground level around a coop, barn, or outbuilding', 'Tracks in snow with a distinctive two-print bounding pattern', 'A sudden end to a rodent problem, followed by poultry losses'],
    faqs: [
      { q: 'How small a gap can a weasel get through?', a: 'A weasel can pass through an opening about an inch across — roughly the width of your thumb. If its head fits, the body follows. This is why coops that look sealed to a person are routinely not sealed to a weasel.' },
      { q: 'Why did it kill every bird and eat almost nothing?', a: 'Surplus killing is normal for these predators. Panicked prey in an enclosed space triggers repeated killing responses, and in the wild the animal would cache the surplus. In a coop it simply reads as senseless, but it is instinct, not malice.' },
      { q: 'Will chicken wire keep a weasel out?', a: 'No. Chicken wire is designed to keep birds in, not predators out, and the mesh is far too open. Half-inch hardware cloth, properly fastened and buried or skirted at the base, is the standard that actually works.' },
    ],
  },
  {
    slug: 'foxes', name: 'Foxes', category: 'wildlife',
    season: 'Year-round; den conflicts March–June',
    answer: 'Red and gray foxes den under Northeast Wisconsin sheds, decks, and barn floors in spring, raising kits for about six weeks before moving on. They rarely threaten people but do take poultry. BugBoss handles humane den resolution and the exclusion that stops the same void being used next year.',
    overview: 'Foxes are common and largely beneficial here, eating enormous numbers of mice and voles. Conflicts are seasonal and structural: a vixen picks a sheltered void in March, and by the time you notice the kits it is a short-term situation that resolves naturally in weeks. Poultry losses and denning under an occupied structure are the two cases that need intervention.',
    signs: ['Kits playing outside a hole under a shed, deck, or barn in spring', 'A den entrance about eight inches across with a fan of excavated soil', 'Scattered feathers, bones, and a strong musky odor near the den', 'Poultry taken during daylight, usually one bird at a time'],
    faqs: [
      { q: 'Are foxes dangerous to people or pets?', a: 'Very rarely. Foxes are small, shy, and avoid people; healthy ones do not attack adults or dogs. Cats, poultry, and rabbits are genuinely at risk. A fox out in daylight is normal behavior, not by itself a sign of rabies.' },
      { q: 'There is a fox den under my shed — do I have to do anything?', a: 'Often not. Kits are mobile in about six weeks and the family abandons the den on its own, after which you can permanently seal the void. If you cannot wait, mild harassment usually prompts the vixen to move the litter to one of her alternate dens.' },
      { q: 'How do I protect chickens from foxes?', a: 'Secure housing at night, a covered run, and hardware cloth skirted outward or buried at the base to defeat digging. Foxes are persistent diggers, so the base of the enclosure matters more than its height.' },
    ],
  },
  {
    slug: 'rabbits', name: 'Rabbits', category: 'wildlife',
    season: 'Year-round; damage peaks in winter',
    answer: 'Eastern cottontails girdle shrubs, fruit trees, and ornamentals across Northeast Wisconsin, and the damage is worst in winter when snow lifts them to new bark. The clean 45-degree cut on a stem is the tell. BugBoss handles exclusion fencing and trunk protection, which is the only thing that reliably works.',
    overview: 'Cottontails are abundant, breed rapidly, and cause almost entirely landscape damage rather than structural problems. In summer they clip garden plants and low growth; in winter, with snow cover raising their reach, they strip bark from young trees and shrubs, and a fully girdled trunk dies. Repellents wash off, so physical exclusion is the durable answer.',
    signs: ['Stems and twigs clipped at a clean 45-degree angle', 'Bark gnawed from young trunks up to snow height, with visible tooth grooves', 'Round pea-sized droppings under shrubs and along runs', 'Shallow forms scraped under brush piles, decks, and evergreens'],
    faqs: [
      { q: 'Is it rabbits or deer eating my shrubs?', a: 'Look at the cut. Rabbits have upper and lower incisors and leave a clean, angled, knife-like cut. Deer have no upper front teeth and tear, leaving a ragged, shredded end. Height helps too — rabbit damage stops at snow height, deer damage is well above it.' },
      { q: 'Do rabbit repellents work?', a: 'Briefly. Taste and odor repellents wash off with rain and snowmelt and need constant reapplication, and hungry rabbits in late winter often ignore them. Fencing and trunk guards are what actually hold.' },
      { q: 'How do I protect trees from rabbit girdling?', a: 'Wrap young trunks with quarter-inch hardware cloth cylinders, held an inch or two off the bark and extending well above the expected snow line. For beds, two-foot poultry-wire fencing with the base buried or skirted keeps them out.' },
    ],
  },
];

export const getPest = (slug: string) => pests.find((p) => p.slug === slug);
export const flagshipPests = pests.filter((p) => p.flagship);
export const pestsByCategory = (cat: PestCategory) => pests.filter((p) => p.category === cat);
