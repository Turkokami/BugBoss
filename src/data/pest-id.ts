// ---------------------------------------------------------------------------
// PEST IDENTIFICATION TABLE DATA — Keystone v3.2 §4.3 (snippet-shape contract).
//
// Template T6 (pest profile) declares its snippet shape as TABLE: a definition
// paragraph, then an identification table, then a signs list. This file is the
// table. It is kept separate from src/data/pests.ts rather than folded into the
// Pest interface because it is a different kind of content — short, factual,
// comparable across entries — and it is easier to review and keep consistent
// when every row of every pest sits in one place.
//
// Rules for editing:
//   * Sizes are body length for mammals and total length for insects, metric
//     first, because that is how the extension services publish them. Where a
//     figure people actually use exists in imperial (a quarter-inch gap, a
//     half-inch hole), keep it.
//   * `look` is what distinguishes it from the thing people confuse it with.
//     That contrast is the whole value of the row.
//   * `risk` is honest. Several of these say "none" or "harmless", and those
//     are the most useful rows in the file.
//   * The `active` row is not here — it comes from Pest.season, which already
//     exists and is already used in the page eyebrow.
// ---------------------------------------------------------------------------

export interface PestId {
  /** Body/total length, with the comparison people actually use. */
  size: string;
  /** Distinguishing appearance, framed against the usual mis-ID. */
  look: string;
  /** Where in and around a Northeast Wisconsin property it turns up. */
  where: string;
  /** What it actually does — including "nothing", where that is the truth. */
  risk: string;
}

export const pestId: Record<string, PestId> = {
  'cluster-flies': {
    size: '8–10 mm — noticeably larger and slower than a house fly.',
    look: 'Dull dark gray with golden-tan hairs on the thorax, and wings that overlap scissor-fashion at rest.',
    where: 'Sunny south and west walls in fall; attics, soffit voids, wall cavities and upstairs window frames through winter.',
    risk: 'Nuisance only. No bite, no disease, no structural damage, and it cannot breed indoors.',
  },
  'boxelder-bugs': {
    size: '11–14 mm.',
    look: 'Flat black with three red stripes across the thorax and red edging on the folded wings; nymphs are bright red.',
    where: 'Boxelder, maple and ash through summer; sun-warmed south and west walls, siding gaps and window frames from late September.',
    risk: 'Nuisance. Does not bite or damage the structure, but fecal spots stain light-colored surfaces and crushing one leaves a mark and an odor.',
  },
  'asian-lady-beetles': {
    size: '6–8 mm.',
    look: 'Orange to red with variable spotting and a white "M" or "W" marking behind the head — that marking is what separates it from the native ladybug.',
    where: 'Crop fields and treelines in summer; sunny walls, attics and wall voids from late September.',
    risk: 'Mostly nuisance, with three exceptions: it can pinch, it stains with a yellow defensive fluid, and large indoor populations trigger allergies in some people.',
  },
  mice: {
    size: '6–9 cm body plus a tail about the same length — and it fits through a quarter-inch gap.',
    look: 'Gray-brown above with a lighter belly, large ears, a pointed muzzle and a near-hairless tail. A young rat has proportionally much larger feet and head.',
    where: 'Kitchens, pantries, wall voids, basements and attics from October; garages, sheds and pole barns year-round.',
    risk: 'Contaminates food and insulation, gnaws wiring, breeds year-round once indoors, and sheds pathogens in droppings and urine.',
  },
  bats: {
    size: 'Big brown and little brown bats: 8–13 cm body, 22–33 cm wingspan — and a gap of about 3/8 inch is enough.',
    look: 'Brown fur and black leathery wings. The droppings are the usual evidence: guano crumbles to shiny insect fragments, where mouse droppings stay hard.',
    where: 'Attics, soffit voids, ridge vents, chimneys and behind shutters, with staining at the exterior gap and emergence at dusk.',
    risk: 'Protected in Wisconsin, so the calendar governs the work. Accumulated guano is a histoplasmosis concern, and any direct contact with a person is a rabies question for the health department.',
  },
  'wasps-hornets': {
    size: '12–25 mm depending on species.',
    look: 'Paper wasps are slim and fly with their legs dangling; bald-faced hornets are black and white; yellowjackets are stocky and brightly black-and-yellow.',
    where: 'Eaves, porch ceilings, soffit voids, sheds and playsets. Yellowjackets go into ground cavities, wall voids and under siding instead.',
    risk: 'Stings repeatedly and defends the nest. A nest at a doorway, at head height, or anywhere on a property with a sting allergy is the version that cannot wait.',
  },
  'carpenter-ants': {
    size: '6–13 mm, the largest ant in Wisconsin; queens reach 19 mm.',
    look: 'Black, or black with a red thorax. One node at the waist and an evenly rounded thorax in profile — a swarming termite has a straight waist and four equal wings.',
    where: 'Wood that is or has been wet: sill plates, window and door frames, roof leaks, bath surrounds. The satellite nest is indoors; the parent colony is usually a stump or tree outside.',
    risk: 'Excavates galleries in structural wood rather than eating it. The more useful signal is the moisture — the wood was soft before the ants found it.',
  },
  raccoons: {
    size: '4–12 kg (10–25 lb), body 40–70 cm.',
    look: 'Grizzled gray-brown with a black facial mask and a ringed tail. The five-toed tracks look like small handprints.',
    where: 'Attics, chimneys, and the voids under decks, porches and sheds; garbage and pet food outdoors.',
    risk: 'The most destructive attic animal here — it tears soffit, ductwork and insulation, and it builds a fixed latrine in one spot. Raccoon roundworm and rabies are both real considerations.',
  },
  ants: {
    size: '2.5–5 mm for the species that come indoors here.',
    look: 'Pavement ants are dark brown with a grooved head and paired spines; odorous house ants are brown-black and smell of rotten coconut when crushed. Both are far smaller than a carpenter ant.',
    where: 'Trailing along counters, sink edges and baseboards, from nests under slabs, in wall voids, and beneath pavers and stone.',
    risk: 'Contaminates food and marks an access point or a moisture source. Unlike carpenter ants, these species do not damage the structure.',
  },
  spiders: {
    size: '5–25 mm body for the species found indoors in Northeast Wisconsin.',
    look: 'Cellar spiders have very long thin legs; sac spiders are pale yellow; the common house spider is tan with a bulbous abdomen. The northern black widow is uncommon here and the brown recluse is not established in Wisconsin.',
    where: 'Basements, garages, window wells, soffit corners and undisturbed storage; webs outdoors around exterior lights.',
    risk: 'Nearly all are harmless and useful. A spider population indoors is mostly a readout of the insects it is eating.',
  },
  ticks: {
    size: 'A deer tick nymph is 1–3 mm and an unfed adult 3–5 mm; engorged adults reach 10 mm.',
    look: 'The deer (blacklegged) tick has a solid dark shield and an orange-red body. The American dog tick is larger and mottled brown and white.',
    where: 'Tall grass, brush edges, woodland leaf litter, and the boundary line where lawn meets treeline. Most arrive on a pet or a trouser leg.',
    risk: 'The deer tick transmits Lyme disease and anaplasmosis in Wisconsin. Transmission risk climbs sharply once a tick has been attached roughly 24–36 hours, which is why the daily check matters more than any spray.',
  },
  mosquitoes: {
    size: '3–6 mm.',
    look: 'Slender, long-legged, one pair of wings and a long piercing proboscis. Aedes species show white banding on the legs.',
    where: 'Breeding in any standing water that holds for a week — clogged gutters, tarps, tires, planter saucers, a low spot in the yard. The adults rest by day in shaded shrubs and tall grass.',
    risk: 'Biting nuisance, plus West Nile virus and, rarely in Wisconsin, La Crosse and Jamestown Canyon encephalitis.',
  },
  squirrels: {
    size: 'Gray squirrel: 23–30 cm body plus a bushy tail nearly as long, 400–700 g. Red squirrels are noticeably smaller.',
    look: 'Gray with a pale belly and a plumed tail; the red squirrel is rust-colored and much louder for its size.',
    where: 'Attics, soffit voids and chimneys, reached from an overhanging limb or a power line. Active at dawn and dusk and silent overnight — which is how you tell it from a raccoon.',
    risk: 'Gnaws wiring, which is a genuine fire risk, and opens soffit and fascia. The nesting material and droppings in the insulation are the cleanup half of the job.',
  },
  'bed-bugs': {
    size: '4–5 mm as an adult — about an apple seed. Eggs are 1 mm and white.',
    look: 'Flat rust-brown oval when unfed, swollen and darker after feeding; nymphs are translucent. Carpet beetle larvae are the usual mis-ID.',
    where: 'Mattress seams, box spring, headboard, bed frame joints, outlet plates and baseboards — almost always within a few feet of where someone sleeps.',
    risk: 'Bites and serious sleep disruption; no known disease transmission. In a shared building it travels wall voids and plumbing chases, which is why unit-by-unit treatment fails.',
  },
  skunks: {
    size: '2.5–6 kg, body 33–46 cm.',
    look: 'Black with the familiar white stripe pattern, a bushy tail and long front claws. The cone-shaped divots in a lawn are often the first sign.',
    where: 'Burrowed under decks, porches, sheds and concrete steps; foraging for grubs across the lawn at night.',
    risk: 'The spray, and rabies — the skunk is one of Wisconsin’s primary rabies reservoir species. The burrowing also undermines slabs and steps.',
  },
  rats: {
    size: 'Norway rat: 20–25 cm body plus a 16–20 cm tail, 200–500 g — several times the mass of a mouse.',
    look: 'Coarse brown-gray fur, blunt muzzle, small ears, and a thick scaly tail shorter than the body. A mouse has a proportionally longer tail and bigger ears.',
    where: 'Burrows along foundations and under sheds, decks and slabs; basements, crawlspaces and dumpster pads.',
    risk: 'Gnaws structure and wiring, contaminates stored food, and carries leptospirosis and salmonella. A rat seen in daylight usually means an established burrow and a large population.',
  },
  'brown-marmorated-stink-bugs': {
    size: '12–17 mm.',
    look: 'Mottled brown shield shape with alternating light and dark bands on the antennae and along the edge of the abdomen — the banding is the identifier.',
    where: 'Fruit trees, gardens and field edges in summer; south and west walls, window frames and attics from late September.',
    risk: 'A nuisance indoors and an agricultural pest outdoors. It releases a cilantro-like odor when crushed or drawn through a vacuum.',
  },
  'western-conifer-seed-bugs': {
    size: '16–20 mm — one of the largest insects that comes indoors here.',
    look: 'Long, narrow and reddish-brown, with a widened leaf-like flare on the hind legs and a faint white zigzag across the wings.',
    where: 'Pine and spruce through summer; sunny interior walls, attics and window frames from late September.',
    risk: 'Harmless. It does not bite, feed indoors, or damage anything — it is loud in flight and smells piney when handled, and that is the whole of it.',
  },
  'japanese-beetles': {
    size: '10–13 mm.',
    look: 'Metallic green head and thorax with copper-brown wing covers, and five tufts of white hair along each side of the abdomen.',
    where: 'Roses, lindens, birch, grapes and raspberries from late June through August; the grub stage lives in lawn thatch.',
    risk: 'Skeletonises the leaves of ornamentals and fruit. The grubs damage turf and draw skunks and raccoons that dig the lawn up to get at them.',
  },
  centipedes: {
    size: 'House centipede: 25–40 mm body with 15 pairs of very long legs, so it looks considerably bigger than it is.',
    look: 'Yellow-gray with three dark stripes down the back and banded legs. Very fast. A millipede is cylindrical, slow, and has two pairs of legs per segment.',
    where: 'Damp basements, floor drains, crawlspaces, bathrooms and the underside of stored boxes.',
    risk: 'A moisture indicator before it is a pest, and a predator of other insects. A bite is possible but rare and minor.',
  },
  earwigs: {
    size: '12–20 mm.',
    look: 'Flat and reddish-brown with prominent rear pincers — curved on the male, straight on the female.',
    where: 'Under mulch, stone, boards and planters outdoors; indoors in damp basements and bathrooms and at door thresholds, usually after heavy rain or a drought.',
    risk: 'Nuisance, plus some feeding damage to seedlings and flower petals. The pincers cannot do anything meaningful to a person, and it does not get into ears.',
  },
  silverfish: {
    size: '12–19 mm.',
    look: 'Teardrop-shaped and silver-gray with metallic scales, long antennae and three tail filaments, moving in a fish-like wriggle.',
    where: 'Bathrooms, basements, attics, and inside stored paper, cardboard and books.',
    risk: 'Damages paper, book bindings, wallpaper paste and starched or stored fabric. Harmless to people, and another reliable damp indicator.',
  },
  crickets: {
    size: '15–25 mm.',
    look: 'Field crickets are glossy black with long antennae. Camel crickets are tan, humpbacked, wingless and silent, with very long hind legs — no chirp, because they have no wings to rub.',
    where: 'Field crickets around doors, garages and window wells in late summer; camel crickets in damp basements, crawlspaces and window wells year-round.',
    risk: 'Noise and nuisance, with occasional damage to stored fabric and paper. Neither bites, and neither builds large indoor populations.',
  },
  fleas: {
    size: '1.5–3 mm.',
    look: 'Flattened side to side, dark reddish-brown and wingless, with powerful hind legs. It jumps; it does not fly.',
    where: 'Pet bedding, carpet, upholstery and floor cracks — and just as often from wildlife nesting in a crawlspace, attic or under a deck.',
    risk: 'Bites people and pets and transmits tapeworm to pets. It reinfests for weeks after treatment because pupae in the carpet are protected and hatch on their own schedule.',
  },
  flies: {
    size: 'House fly 6–7 mm; blow flies and cluster flies are larger.',
    look: 'The house fly is dull gray with four dark stripes on the thorax. Blow flies are metallic blue or green — that metallic sheen is the one worth recognizing.',
    where: 'Garbage, drains, compost, manure and carcasses; indoors at windows and light fixtures.',
    risk: 'Mechanically carries bacteria onto food surfaces. A sudden indoor hatch of metallic blow flies in winter almost always means an animal has died in a wall, attic or chimney.',
  },
  gnats: {
    size: '2–5 mm.',
    look: 'Fungus gnats are dark and mosquito-like with long legs; drain flies are fuzzy and moth-like; fruit flies are tan with red eyes.',
    where: 'Fungus gnats in overwatered houseplant soil; drain flies in the biofilm inside floor and sink drains; fruit flies at ripe produce, recycling and bar mats.',
    risk: 'Nuisance — but each of the three points at a specific source, and it is finding the source rather than spraying the adults that ends it.',
  },
  moths: {
    size: '6–10 mm body; 12–20 mm wingspan.',
    look: 'The webbing clothes moth is plain buff-gold and runs from light. The Indian meal moth has a two-tone wing — pale at the base, coppery at the tip — and flies around the kitchen in the evening.',
    where: 'Clothes moths in wool, stored natural fibers and under furniture; Indian meal moths in flour, cereal, pet food, birdseed and dried fruit.',
    risk: 'The larvae do the damage, not the adults you see: holes in wool and silk, or webbing and contamination through stored food.',
  },
  cockroaches: {
    size: 'German cockroach 13–16 mm; the native wood cockroach that wanders in is 20–30 mm.',
    look: 'The German cockroach is tan with two dark parallel stripes behind the head. The wood roach is chestnut brown with pale edging on its front margin — and it is the harmless one.',
    where: 'German cockroaches stay within a few meters of food and warmth: under and behind appliances, in motor housings, hinges and cabinet voids. Wood roaches arrive with firewood and leaf litter in early summer.',
    risk: 'The German cockroach contaminates food and is a documented asthma and allergy trigger. It moves through shared walls in multi-unit buildings, and a bug bomb scatters it rather than ending it.',
  },
  'carpet-beetles': {
    size: '2–4 mm as an adult; the larva is a similar length.',
    look: 'Adults are rounded and either mottled black, white and orange or solid black. The larva is the damaging stage — bristly, tan and carrot-shaped — and it leaves shed skins behind.',
    where: 'Wool carpet and rugs, stored clothing, felt, taxidermy, dried flowers, and the lint under baseboards and in vents. Adults appear at windows in spring.',
    risk: 'Larvae damage wool, silk, fur and feather. The shed skins are usually the first evidence, and they are the reason this gets mistaken for bed bugs.',
  },
  'deer-mice': {
    size: '7–10 cm body plus a 6–10 cm tail.',
    look: 'Sharply two-toned: warm brown above, clean white belly and feet, with a bicoloured tail. Bigger eyes and ears than a house mouse, and much more clearly marked.',
    where: 'Cabins, outbuildings, sheds, campers and seasonal property on the edge of woodland and field — far more than year-round houses in town.',
    risk: 'The primary hantavirus reservoir in Wisconsin. That is why droppings in a closed cabin or shed should be wetted down and wiped up rather than swept or vacuumed dry.',
  },
  voles: {
    size: '9–13 cm body with a short 2–6 cm tail.',
    look: 'Stocky and blunt-nosed with small eyes and short ears nearly buried in chestnut-brown fur. A mouse is slimmer, longer-tailed and larger-eared.',
    where: 'Not the house. Surface runways in lawn thatch, under mulch and under snow cover, along foundations, and through orchards and gardens.',
    risk: 'Runways across the lawn and girdled bark on young trees and shrubs, all of it revealed at once when the snow melts. It rarely enters buildings.',
  },
  chipmunks: {
    size: '13–15 cm body plus an 8–10 cm tail, 70–140 g.',
    look: 'Reddish-brown with five dark stripes down the back and stripes across the face; a ground squirrel has no facial stripes.',
    where: 'Burrow entrances beside foundations, patios, retaining walls and steps — clean, about 5 cm across, with no soil mound. Active in daylight.',
    risk: 'The burrowing undermines slabs, steps and retaining walls over a few seasons. It gets into crawlspaces and garages but rarely into living space.',
  },
  shrews: {
    size: '5–10 cm — among the smallest mammals in Wisconsin.',
    look: 'Slate-gray to near-black velvet fur, a very long pointed snout, tiny eyes and almost no visible ears. It is not a rodent, and the snout is what gives it away.',
    where: 'Leaf litter, mulch and lawn thatch, and occasionally into basements and garages at ground level.',
    risk: 'Mostly beneficial — it eats insects and mice. Wisconsin’s short-tailed shrew has venomous saliva it uses on prey; a bite to a person is rare, painful and not dangerous.',
  },
  groundhogs: {
    size: '2.5–6 kg, body 40–65 cm.',
    look: 'Heavy-bodied and grizzled brown with short legs and a bushy flattened tail, often sitting upright at the burrow mouth.',
    where: 'Burrow systems with a prominent soil mound at the main entrance, under sheds, decks, barns and concrete slabs, along field and woodland edges.',
    risk: 'Burrows undermine foundations, slabs, steps and equipment paths, and there is always more than one entrance. Heavy garden and crop damage on top of that.',
  },
  moles: {
    size: '12–20 cm.',
    look: 'Cylindrical and velvety gray-black with no visible eyes or ears and enormous outward-facing front feet. A vole looks like a mouse; a mole does not.',
    where: 'Entirely underground in lawn and garden soil — raised surface ridges and volcano-shaped soil mounds. It never enters the building.',
    risk: 'Turf and root damage from tunnelling. Moles eat grubs and earthworms rather than plants, so the damage is mechanical, and bait shaped like a worm is the only bait with a rationale.',
  },
  snakes: {
    size: '40–130 cm depending on species.',
    look: 'The common garter snake is dark with three yellow stripes. The fox snake is checkered and gets mistaken for a rattlesnake constantly; the milk snake is blotched and does the same.',
    where: 'Rock walls, woodpiles, window wells, crawlspaces and unsealed basement gaps — usually following the rodents in.',
    risk: 'Wisconsin has two venomous snakes, the timber rattlesnake and the eastern massasauga. Both are confined to the southwest of the state and both are protected. Effectively every snake found at a home in this corridor is harmless.',
  },
  woodpeckers: {
    size: '15–48 cm depending on species — a downy woodpecker at the small end, a pileated at the large.',
    look: 'Black-and-white barring with red head markings on most species; the pileated is crow-sized with a red crest.',
    where: 'Cedar, LP and stained wood siding, fascia and trim, plus metal flashing, gutters and vents used for drumming rather than feeding.',
    risk: 'Holes in siding and fascia, and the moisture and insect problem that follows them. Native woodpeckers are federally protected, so the toolkit is deterrence, exclusion, insect control and repair — never removal.',
  },
  opossums: {
    size: '2–6 kg, body 38–50 cm.',
    look: 'Coarse gray-white fur, a pointed white face, naked ears and a long naked prehensile tail. Fifty teeth, and a habit of showing all of them.',
    where: 'Under decks, sheds, porches and in crawlspaces; at garbage and pet food after dark.',
    risk: 'Low. It is rarely aggressive, it plays dead rather than fighting, and its low body temperature makes rabies very uncommon. The problems are the smell, the mess and the void it has moved into.',
  },
  muskrats: {
    size: '0.7–1.8 kg, body 25–35 cm plus a 20–25 cm tail.',
    look: 'Dark brown and densely furred with a laterally flattened, nearly hairless tail. A beaver is far larger with a broad flat paddle of a tail.',
    where: 'Ponds, ditches, creeks and lake shoreline — bank burrows at the waterline, or dome-shaped cattail lodges out in the marsh.',
    risk: 'Bank burrowing undermines pond banks, dams, dikes and shoreline structures, and the damage is usually well advanced before it is visible from the top.',
  },
  beavers: {
    size: '16–32 kg — the largest rodent in North America.',
    look: 'Heavy dark brown body, broad flat scaly tail, orange incisors. The felled trees have a characteristic hourglass cut.',
    where: 'Streams, culverts, drainage ditches and pond outlets: dams, bank lodges, and girdled or felled trees along the water.',
    risk: 'A dammed culvert floods roads, fields and basements, and mature shoreline trees are lost quickly. Dam removal and water-level devices are regulated work in Wisconsin.',
  },
  coyotes: {
    size: '9–20 kg, standing 58–66 cm at the shoulder.',
    look: 'Gray-brown with rusty legs and ears and a narrow muzzle. The tail is bushy and carried low when running, where a dog carries it up — that is the most reliable field mark at distance.',
    where: 'Field edges, woodlots, creek corridors and, increasingly, suburban greenways. Heard far more often than seen.',
    risk: 'Small pets and poultry are the real exposure. Attacks on people are very rare, and nearly every conflict traces back to an available food source.',
  },
  'nuisance-birds': {
    size: 'House sparrow 15 cm, European starling 20 cm, rock pigeon 30–35 cm.',
    look: 'Starlings are glossy black, pale-speckled in winter, with a yellow bill in spring; pigeons are gray with an iridescent neck; the male house sparrow has a black bib.',
    where: 'Signage, awnings, ledges, vents and rooftop units, and inside soffit and gable voids; loading docks and feed buildings.',
    risk: 'Droppings corrode metal and masonry and create a slip hazard, nests block vents and start fires, and the nests carry bird mites that move indoors when the birds leave. These three species are not federally protected — almost every other bird is.',
  },
  termites: {
    size: 'Eastern subterranean termite: 3–6 mm worker, swarmers about 10 mm with wings.',
    look: 'Creamy-white soft-bodied workers. Swarmers are dark with four equal-length wings and a straight waist — a swarming ant has a pinched waist and two wing sizes.',
    where: 'Uncommon in Northeast Wisconsin but present in the state. Look for soil-to-wood contact, mud shelter tubes on foundation walls, and damage in sill plates and crawlspace piers.',
    risk: 'Genuine structural damage where it occurs. Most termite calls in this corridor turn out to be carpenter ants, so identification comes before any treatment is quoted.',
  },
  'carpenter-bees': {
    size: '20–25 mm.',
    look: 'Looks like a bumblebee until you see the abdomen, which is shiny black and hairless rather than furry. The male has a pale face patch, hovers aggressively, and has no sting at all.',
    where: 'Perfectly round half-inch holes in unpainted or weathered softwood: fascia, rafter tails, deck rails, railings and outbuilding trim, usually with staining running below the hole.',
    risk: 'The galleries are extended and reused every year rather than started fresh. The larger damage is usually the woodpecker that opens the wood up chasing the larvae.',
  },
  'pantry-pests': {
    size: '2–10 mm — Indian meal moths, sawtoothed grain beetles, flour beetles and weevils.',
    look: 'Small beetles and one two-tone moth. In practice the identifier is not the insect but what it leaves: webbing, clumping and fine powder in the product.',
    where: 'Flour, cereal, rice, spices, pet food, birdseed, dried fruit and nuts — most often a forgotten package at the back of a cabinet or a bag of birdseed in the garage.',
    risk: 'Contaminates stored food rather than damaging the building. It almost always arrives inside a packaged product rather than getting in from outside.',
  },
  springtails: {
    size: '1–2 mm.',
    look: 'Tiny, soft-bodied, dark or pale. It jumps when disturbed by flicking a forked appendage under the abdomen, and the jumping is what people notice first.',
    where: 'Damp soil and mulch outdoors; indoors wherever moisture persists — a bathroom, a basement, around a leaking pipe, in overwatered potted soil.',
    risk: 'None. It does not bite, damage or infest. It is a moisture readout, and it leaves when the moisture does.',
  },
  'sowbugs-pillbugs': {
    size: '8–15 mm.',
    look: 'Gray, segmented and armored with seven pairs of legs. Pillbugs roll into a ball; sowbugs cannot. Both are crustaceans rather than insects.',
    where: 'Under mulch, leaf litter, stone and boards; indoors along basement walls, in window wells and in garages at ground level.',
    risk: 'None to the building or to people. They eat decaying plant matter and need damp to survive, so indoors they usually die within a few days.',
  },
  millipedes: {
    size: '20–40 mm.',
    look: 'Cylindrical, brown to black, with two pairs of legs per body segment, curling into a flat spiral when disturbed or dead. A centipede is flattened, fast, and has one pair per segment.',
    where: 'Leaf litter, mulch and damp soil, migrating indoors in numbers during a wet autumn and turning up along basement walls and in window wells.',
    risk: 'Harmless — no bite and no damage. A defensive fluid can stain and irritate skin. Another damp indicator rather than a pest problem.',
  },
  'clover-mites': {
    size: 'Under 1 mm — about the size of a pin head.',
    look: 'Bright red to red-brown, with one pair of very long front legs carried forward like antennae. Crushing one leaves a red smear, which is how most people discover them.',
    where: 'Sunny south and west walls in early spring and again in fall, coming in around window frames. Worst where new or heavily fertilized turf runs right up to the foundation.',
    risk: 'None. It does not bite and cannot breed indoors, feeding only on grass and clover. The only real damage is the staining when they are wiped rather than vacuumed.',
  },
  mites: {
    size: 'Under 1 mm — visible as a moving speck rather than an identifiable animal.',
    look: 'Pale gray, reddening after a blood meal. Usually noticed as specks on walls, ceilings and bedding near the nest rather than identified on sight.',
    where: 'Radiating out of an abandoned bird nest in a soffit or vent, or a rodent nest in a wall void, into the room next to or below it.',
    risk: 'Bites and irritation that people reliably mistake for bed bugs. It cannot complete its life cycle on a person, so the fix is finding and removing the nest — treating the bedroom alone does nothing.',
  },
  'flying-squirrels': {
    size: '13–15 cm body plus a flat 9–12 cm tail, 55–140 g.',
    look: 'Soft gray-brown with very large black eyes, a flattened tail, and a loose fold of skin between wrist and ankle.',
    where: 'Attics and soffit voids. Strictly nocturnal and colonial in winter, so one attic can hold a dozen or more; heard as light scampering and soft chirps after dark.',
    risk: 'Gnawing, wiring damage and droppings concentrated in one part of the attic. The colony size is why an entry closed in daylight can seal animals inside.',
  },
  porcupines: {
    size: '5–14 kg, body 60–90 cm.',
    look: 'Heavy, slow and dark, with up to 30,000 quills across the back and tail. The quills are not thrown — they detach on contact.',
    where: 'Woodland and woodlot edges; under sheds, cabins, decks and outbuildings; gnawing on plywood, tool handles and anything salt-treated.',
    risk: 'A dog is the usual reason for the call. Beyond that it debarks trees and gnaws structural plywood, siding and vehicle brake lines.',
  },
  'weasels-mink': {
    size: 'Weasels 15–25 cm; mink 30–45 cm plus tail.',
    look: 'Long, low and tubular with short legs. Weasels are brown above and white below and turn white in winter; mink are uniformly dark chocolate with a white chin patch.',
    where: 'Mink along creeks, ponds and lake shoreline. Weasels in stone walls, woodpiles, outbuildings and chicken coops, following the rodents in.',
    risk: 'Poultry losses, and they are severe — one animal can kill an entire coop in a night. It gets through a gap barely over an inch, so coop exclusion has to be hardware cloth rather than poultry netting.',
  },
  foxes: {
    size: '3.5–7 kg, body 45–70 cm.',
    look: 'The red fox is rusty with black legs and a white-tipped bushy tail. The gray fox is grizzled with a black-tipped tail, and it climbs trees.',
    where: 'Dens under sheds, decks, porches and outbuildings, especially in spring once the kits arrive; field and woodland edges the rest of the year.',
    risk: 'Low to people. Poultry and very small pets are at risk. A spring den under a deck usually needs to be tolerated for a few weeks rather than treated — the family leaves on its own.',
  },
  rabbits: {
    size: 'Eastern cottontail: 1–1.8 kg, body 35–43 cm.',
    look: 'Gray-brown with a rusty nape and a white cottony tail. The droppings are round, uniform and dry.',
    where: 'Brush piles, shrub beds, and the void under decks and sheds; feeding at dawn and dusk.',
    risk: 'Clean 45-degree angled cuts on stems and girdled bark on young trees and shrubs above the snow line. The damage is to the garden and the orchard, never to the building.',
  },
};

export function getPestId(slug: string): PestId | undefined {
  return pestId[slug];
}
