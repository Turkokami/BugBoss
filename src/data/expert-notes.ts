// ---------------------------------------------------------------------------
// EXPERT NOTES — the first-person line inside the named-expert E-E-A-T block
// on each Pest Library page (Master Plan §4.1 block 2).
//
// One note per pest, in Brian's voice, saying something specific to THAT pest
// as he actually encounters it in the field here. Rule 6 forbids template
// variables in body copy, so these are written individually — never generated
// from the pest name. If a slug has no note the block is omitted rather than
// filled with boilerplate: a generic quote attributed to a named expert is
// worse than no quote at all.
// ---------------------------------------------------------------------------

export const expertNotes: Record<string, string> = {
  // --- Fall invaders ---
  'cluster-flies':
    'If you only book one visit a year on a farmhouse, make it the early-September exterior. Once these are in the wall void, everything I can do is cleanup rather than control.',
  'boxelder-bugs':
    'Nine times out of ten I can stand in the yard and point at the boxelder or silver maple that is feeding the population before I ever walk the foundation.',
  'asian-lady-beetles':
    'People scald them with soapy water and then wonder about the stain on the ceiling. Do not crush them — vacuum them, and let me handle the outside wall in September.',
  'brown-marmorated-stink-bugs':
    'These showed up here later than downstate and they are still spreading. I treat them on the same September timing as cluster flies, because they use the same warm walls.',
  'western-conifer-seed-bugs':
    'I get calls about these because they buzz like a hornet when they fly. They cannot hurt you. If you have spruce or pine in the yard, expect them every October.',

  // --- Structural and wood-destroying ---
  'carpenter-ants':
    'Frass under a windowsill is the tell. I trace it to the moisture that softened the wood first, because killing the colony without fixing the wet spot just buys you a season.',
  termites:
    'Termites are genuinely uncommon this far north, and I will tell you honestly when what you have is carpenter ants instead. When it is termites, it is almost always around Waupaca or the warmer river corridors.',
  'carpenter-bees':
    'The bee is not the real damage — it is the woodpecker that hears the larvae and opens up your fascia to get at them. Treat the galleries before the birds find them.',

  // --- Ants, spiders and general crawlers ---
  ants: 'Ant control here lives or dies on identification. Pavement ants and carpenter ants get completely different treatments, and a hardware-store spray makes both of them worse.',
  spiders:
    'Spiders are a symptom. When I clear a spider problem for good it is because I cut off the insects they were eating, not because I sprayed the webs.',
  centipedes:
    'House centipedes are unsettling and almost entirely harmless — they are actually eating your other pests. Finding them means you have a moisture problem in the basement.',
  millipedes:
    'The mass migrations catch people off guard. Hundreds arrive at the foundation over two damp nights in fall, and then they are dead on the basement floor by morning.',
  springtails:
    'Every springtail call I go on is a water call wearing a costume. Find the damp — a leaking hose bib, a bad grade, an over-mulched bed — and the springtails go with it.',
  'sowbugs-pillbugs':
    'These cannot survive indoors for long, which is the good news. If you are finding them alive in the basement week after week, there is standing moisture down there.',
  'clover-mites':
    'The rust-colored smear when you wipe them is the giveaway. They come off a lush lawn that runs right up to the siding, and a bare strip along the foundation solves most of it.',
  earwigs:
    'Earwigs do not crawl in your ear and they do not bite. They ride in on mulch, firewood, and damp leaf litter piled against the house.',
  silverfish:
    'Silverfish tell me about humidity. In old farmhouses around here it is usually a dirt-floor crawlspace or an unvented bathroom feeding them.',
  crickets:
    'Camel crickets in the basement and field crickets at the door are two different jobs. The camel crickets mean damp; the field crickets mean your exterior lighting is doing the recruiting.',
  'carpet-beetles':
    'People assume moths ate the wool. Half the time I find carpet beetle larvae in a floor register or under a rarely-moved dresser instead.',
  mites:
    'This is the call that comes a week after somebody evicts a bird or squirrel themselves. The host left and the mites came looking for you — which is exactly why removal and cleanup belong together.',

  // --- Flying and biting insects ---
  'wasps-hornets':
    'A bald-faced hornet nest at head height by the back door is an emergency. A ground nest at the far fence line in September usually is not — and I will say so.',
  mosquitoes:
    'You cannot spray your way out of standing water. I walk the property for the tarp, the plugged gutter, and the old tire before I treat a single shrub.',
  ticks:
    'The lawn edge where mown grass meets brush is where people pick up almost every tick I hear about. That transition strip is what I treat.',
  fleas:
    'Fleas in a house with no pet almost always mean a raccoon, squirrel, or feral cat was living in the attic or under the deck first.',
  flies:
    'Flies are a source problem. On a dairy or a hobby farm I would rather spend an hour finding the breeding material than a day fogging the barn.',
  gnats: 'Fungus gnats, fruit flies, and drain flies get mistaken for each other constantly, and the fix for one does nothing for the other two. Identification first.',
  moths:
    'Bring me the moth, not just the hole. Pantry moths and clothes moths look similar to most people and the treatment is completely different.',
  'pantry-pests':
    'The bag of birdseed or the forgotten flour in the back of the cabinet is the source almost every time. I find it, and the problem ends with the trash run.',
  'japanese-beetles':
    'These fly in from a wide area, so nobody eliminates them from one yard. What I can do is protect the plants you care about and time it right.',
  cockroaches:
    'German roaches in rural Wisconsin nearly always arrived in something — a used appliance, a delivery, a moving box. Knowing which species you have tells me where to look.',
  'bed-bugs':
    'Do not throw out the mattress before I get there. It rarely helps, it costs you hundreds, and it can spread them to the next room.',

  // --- Rodents ---
  mice: 'I have crawled enough Wisconsin farmhouse foundations to say it plainly: baiting without sealing is a subscription, not a solution.',
  'deer-mice':
    'Deer mice are the hantavirus species, and they are the ones in the cabin and the pole barn. That changes how I clean up, not just how I trap.',
  rats: 'Rats here are a feed-and-harborage story. Show me where the spilled grain is and I can usually show you the burrows within twenty feet.',
  voles: 'The winter runways people find under the snowmelt in March are voles, not moles. No mounds means it is not a mole, and that saves you treating for the wrong animal.',
  chipmunks:
    'One chipmunk is charming. Six of them tunneling under a stoop or a retaining wall is a structural problem, and by then it is an exclusion job.',
  shrews:
    'A shrew is not a mouse — it is an insectivore, it is venomous to its prey, and standard mouse bait is not the answer for it.',

  // --- Wildlife ---
  bats: 'Bat work is legally timed in Wisconsin. I will not seal a maternity colony in during summer — flightless pups die in the wall, and that becomes a much worse problem than the bats.',
  raccoons:
    'A raccoon in the chimney between March and June is a mother with kits. Getting the young out is the whole job; trapping the adult alone leaves you with a wall full of noise.',
  squirrels:
    'Gray squirrels chew back in within a foot of where you patched, every time. Heavy-gauge hardware cloth and a run of the whole roofline is the only thing that holds.',
  'flying-squirrels':
    'When somebody describes the attic noise as gliding or scampering right at dusk, I am already thinking flying squirrel. They live in colonies, so it is never just one.',
  skunks: 'Under-the-deck skunks are a trenching-and-screening job. Trap the animal and leave the void open and you will have a new skunk by the following spring.',
  opossums:
    'Opossums are the least destructive animal I get called about, and they eat a remarkable number of ticks. Usually the honest answer is exclusion, not removal.',
  groundhogs:
    'A groundhog burrow under a shed or a barn ramp is an undermining problem before it is a garden problem. That is when I want to be called.',
  moles: 'Mole mounds and vole runways get confused constantly. Moles are after grubs and earthworms in the soil, and killing your lawn grubs will not move them out.',
  snakes: 'Every snake I have been called out for in this part of Wisconsin has been harmless. What matters is why the rodents are there, because that is what brought the snake.',
  woodpeckers:
    'A woodpecker drumming on cedar siding is usually telling you there are insect larvae in it. I check the wood before I ever talk about deterrents.',
  muskrats: 'Muskrat damage shows up as bank collapse and a leaking pond dam, not as a sighting. By the time you see the animal the burrow system is already established.',
  beavers:
    'A beaver dam is a water-level problem and a property-line problem at the same time. I work these with the flow device first, because removal alone just invites the next colony.',
  coyotes:
    'Coyotes are almost never a removal job here — they are a food-source and hazing job. I would rather secure your chickens and your feed than set a trap.',
  'nuisance-birds':
    'Starlings and sparrows in a barn or a warehouse are an exclusion and netting job. Anything else you do is temporary, and the mites they leave behind are their own problem.',
  porcupines:
    'Porcupines chew anything salty — tool handles, plywood, brake lines, deck rails. The damage rarely looks like an animal problem until you see the tooth marks.',
  'weasels-mink':
    'A weasel gets through a gap the width of your thumb. If you lost birds overnight and the coop looks sealed, it is almost certainly not sealed.',
  foxes:
    'A fox den under a shed in spring is a six-week problem that solves itself if you can wait. If you cannot, we do it with exclusion after the kits are mobile.',
  rabbits:
    'Rabbit damage is a fencing question. Everything sold as a repellent washes off in the next rain, and the clean angled cut on your shrubs tells me it was rabbits and not deer.',
};

/**
 * The note for a pest, or a null-safe empty string. Callers should skip the
 * expert block entirely when this is empty rather than render a generic quote.
 */
export const expertNote = (slug: string, _name?: string): string => expertNotes[slug] ?? '';
