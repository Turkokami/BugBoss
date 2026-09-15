// ---------------------------------------------------------------------------
// WHAT AN INSPECTOR OR AUDITOR ACTUALLY LOOKS AT — Keystone v3.2 §4.3.
//
// Template T7 (industry vertical) declares its snippet shape as TABLE, and the
// spec's table is "what auditors look for". Note what this file is and is not:
// it describes what a *third party* checks at the reader's facility. It makes
// no claim about what BugBoss produces. Those are different sentences, and the
// site has been wrong about the difference before.
//
// Rows are ordered by where a finding is most likely, not alphabetically.
// ---------------------------------------------------------------------------

export interface AuditRow {
  /** Where they look. */
  area: string;
  /** What they are checking for there. */
  checks: string;
}

export const commercialAudit: Record<string, AuditRow[]> = {
  'restaurants-food-service': [
    { area: 'Floor drains and the dish pit', checks: 'Biofilm inside the drain, standing water, and drain fly activity. These are the most frequently cited conditions in a Wisconsin kitchen and among the easiest to fix.' },
    { area: 'Under and behind the line', checks: 'Grease and food debris under the cook line, behind the reach-ins and inside equipment legs — which is where German cockroaches actually live.' },
    { area: 'The back door and the dock', checks: 'Whether it is propped, whether the sweep seals, and what the gap underneath measures. A quarter inch is enough for a mouse.' },
    { area: 'Dry storage', checks: 'Product off the floor and off the wall, stock rotation, and evidence of rodent or stored-product insect activity.' },
    { area: 'Your pest records', checks: 'Whether a current service record is on site, and whether the findings from the last visit were acted on rather than repeated.' },
  ],
  'grocery-convenience': [
    { area: 'Receiving dock and seals', checks: 'Dock seal and leveler gaps, door bottoms, and whether the door stands open through a delivery.' },
    { area: 'Back room, baler and cardboard', checks: 'Cardboard stacked against the wall, the baler area, and the cull bin — harborage and a food source in the same place.' },
    { area: 'Bulk aisle and produce prep', checks: 'Spillage under the bulk bins and residue in the produce drains, the two sources behind most fly and beetle findings in a store.' },
    { area: 'Coolers and condensate', checks: 'Standing water, condensate lines, and the condition of the door gaskets.' },
    { area: 'Service records', checks: 'Whether the record is on site and current, and whether the last set of findings was closed.' },
  ],
  'food-processing': [
    { area: 'Building envelope and docks', checks: 'Door seals, dock levelers, utility penetrations, and any daylight visible from inside. The highest-scoring exclusion item in a plant audit.' },
    { area: 'Monitoring devices', checks: 'Whether stations are present, numbered, intact and serviced, and whether the record matches what is on the wall. A station with no number and no service record fails on paperwork alone.' },
    { area: 'Production and packaging zones', checks: 'Whether any pesticide has been applied over lines, ingredients, packaging or allergen zones, and whether interior placement is crack-and-crevice and mechanical only.' },
    { area: 'Stored-product monitoring', checks: 'Pheromone monitor counts read across visits, and whether a rising count in one zone was traced to a source rather than noted.' },
    { area: 'Corrective actions', checks: 'Whether findings from the last audit and the last service visit were closed, and closed with evidence rather than an assurance.' },
  ],
  'dairy-cheese-processing': [
    { area: 'Drains, floors and wet areas', checks: 'Drain condition and standing water throughout the plant. The Listeria environmental program and the fly program are looking at the same places for different reasons.' },
    { area: 'Exterior interception', checks: 'Rodent stations along the foundation, docks and dumpster areas — and whether any toxicant has been placed inside, anywhere near product.' },
    { area: 'Raw receiving and whey handling', checks: 'Fly pressure at the intake, the whey lines and the load-out, which is where the heaviest pressure in a dairy plant sits.' },
    { area: 'Dry storage and ingredient rooms', checks: 'Stored-product insect monitoring wherever dry goods, cultures and packaging are held.' },
    { area: 'The record set', checks: 'A service report for every visit, and whether the rest of the package your scheme requires exists, is current, and matches the plant.' },
  ],
  'warehousing-distribution': [
    { area: 'The dock bank', checks: 'Seals, levelers, door bottoms and side gaps, plus dock discipline. A bay standing open is the single highest-value finding in the building.' },
    { area: 'The perimeter line', checks: 'Whether stations are present, numbered, intact and serviced, and whether spacing matches what the scheme expects along the foundation, docks and dumpsters.' },
    { area: 'Racking and the floor beneath it', checks: 'Spillage and residue under and behind racking, and pallets in direct contact with the floor and the wall.' },
    { area: 'Stored-product monitoring', checks: 'Pheromone trap counts through storage areas, and whether a rising count actually located a source.' },
    { area: 'High bay and roof line', checks: 'Bird roosting and nesting, droppings on racking and product, and the roof-line entries that let them in.' },
  ],
  manufacturing: [
    { area: 'Docks and personnel doors', checks: 'Seals, sweeps, bottoms and side gaps. Docks are where an industrial building leaks, and where the points are lost.' },
    { area: 'Perimeter stations', checks: 'Present, numbered, intact, serviced, and spaced at audit-appropriate intervals along the foundation, docks and dumpster areas.' },
    { area: 'Break rooms and locker areas', checks: 'Where interior infestations in a plant actually start, and where an auditor expects sanitation feedback to appear in the record.' },
    { area: 'Production floor placement', checks: 'Whether any toxicant sits inside a food-contact or production space, and whether monitoring there is mechanical.' },
    { area: 'High bay and roof line', checks: 'Bird roosting, nesting and droppings, and the entries above the crane rail that nobody inspects.' },
  ],
  'healthcare-senior-living': [
    { area: 'Dietary and dish areas', checks: 'The kitchen, servery, dish room and dry storage, held to food-service standards inside a healthcare building.' },
    { area: 'Resident rooms and soft furnishings', checks: 'Bed bug evidence in beds, recliners and lift chairs. This is the finding with the fastest reputational cost attached to it.' },
    { area: 'Soiled utility and waste rooms', checks: 'Fly pressure, drain condition and container discipline.' },
    { area: 'Product, timing and notice', checks: 'What was applied, where and when, and whether occupied areas were treated outside occupancy with appropriate notice.' },
    { area: 'The service record', checks: 'A dated report for every visit, and evidence that the conducive conditions flagged were actually closed by facilities.' },
  ],
  'schools-education': [
    { area: 'Kitchen and servery', checks: 'Held to the same food-code expectations as a restaurant, drains and dish area included.' },
    { area: 'Lockers, classrooms and lost property', checks: 'Where food actually accumulates in a school, and the usual source of an ant or rodent complaint.' },
    { area: 'Dumpster pads and grounds', checks: 'Placement, lid discipline, and how far the pad sits from the kitchen door.' },
    { area: 'Notification and posting', checks: 'Wis. Stat. 94.715 requires schools to notify and post for pesticide applications. Missing notice is a finding on its own, independent of the treatment.' },
    { area: 'Timing and product choice', checks: 'Whether application happened outside occupied hours, and whether low-impact and non-chemical measures were tried first.' },
  ],
  'hotels-lodging': [
    { area: 'Guest rooms', checks: 'Bed bug evidence at mattress seams, box springs, headboards and frame joints — and whether the adjacent rooms were inspected, not only the room that was reported.' },
    { area: 'Laundry and housekeeping flow', checks: 'Whether linens from a reported room are bagged at the door rather than carried down a corridor to the chute.' },
    { area: 'Kitchen, bar and breakfast service', checks: 'Food-service expectations apply in full, drains included.' },
    { area: 'Exterior and entry points', checks: 'Door sweeps, line-set and utility penetrations, and the autumn fall-invader pressure on the warm elevations.' },
    { area: 'Response protocol', checks: 'Whether staff have written instructions for a guest bed bug report, and whether the last report was documented and followed.' },
  ],
  'property-management': [
    { area: 'Scope of the last treatment', checks: 'Whether the units beside, above and below a reported unit were inspected — or only the unit that complained. This is where most multi-unit jobs fail.' },
    { area: 'Shared walls, chases and hallways', checks: 'The routes bed bugs, cockroaches and rodents use to move between units, and whether any of them have been sealed.' },
    { area: 'Common areas and mechanical rooms', checks: 'Boiler and laundry rooms, refuse rooms and storage — the reservoir that quietly reseeds the units.' },
    { area: 'Access and unit preparation', checks: 'Whether units were prepared and access obtained. One un-entered unit is enough to keep a building job running for a year.' },
    { area: 'The record across units', checks: 'Findings unit by unit over time, which is what shows a recurring source unit or a spreading front rather than a run of unrelated complaints.' },
  ],
  'retail-stores': [
    { area: 'Receiving and the dock door', checks: 'Gaps, sweeps, and whether the door stands open. Autumn rodent pressure enters here first.' },
    { area: 'Stockroom and cardboard', checks: 'Cardboard against walls, pallets on the floor, and the storage nobody has moved in a year.' },
    { area: 'Stored product on the floor', checks: 'Pet food, birdseed, candy and seasonal grocery — the categories that grow stored-product insects in a non-grocery store.' },
    { area: 'Sales floor presentation', checks: 'Visible devices, webbing in corners, and cluster flies at the front windows in October. On a retail floor, appearance is part of the finding.' },
    { area: 'The service record', checks: 'On site, current, and matching what is actually on the walls.' },
  ],
  offices: [
    { area: 'Break rooms and kitchenettes', checks: 'Where essentially every office infestation starts: the sink, the microwave, the recycling, and the refrigerator nobody cleans out.' },
    { area: 'Refuse and recycling handling', checks: 'Container discipline, the dumpster pad, and how close it sits to the entrance people actually use.' },
    { area: 'Entry doors and vestibule', checks: 'Sweeps, thresholds, and the automatic door that does not quite close in cold weather.' },
    { area: 'Warm elevations in autumn', checks: 'Cluster flies and lady beetles at the south and west windows, which is what building occupants actually complain about.' },
    { area: 'Server and mechanical rooms', checks: 'Mice following the cable runs, and the penetrations nobody sealed when the cabling went in.' },
  ],
  'veterinary-kennels': [
    { area: 'Boarding runs and drains', checks: 'Drain condition, standing water, and filth fly pressure in spaces holding live animals.' },
    { area: 'Feed and bedding storage', checks: 'Rodent evidence and stored-product insects wherever feed, treats and bedding are held.' },
    { area: 'Flea and tick pressure', checks: 'Whether the building is being reinfested from the runs, from the exercise yard, or simply from patients arriving through the door.' },
    { area: 'Product and placement', checks: 'Whether any material is applied where animals can contact it, and whether the label permits that use in that setting.' },
    { area: 'The service record', checks: 'A work order for every visit with findings and device readings — which an AAHA accreditation review will ask to see.' },
  ],
  'museums-cultural': [
    { area: 'The monitoring grid', checks: 'Whether blunder traps are in place through collection, storage and display space, and whether they are being read and identified rather than simply replaced.' },
    { area: 'Incoming and quarantine', checks: 'Whether new acquisitions and returning loans are isolated and inspected before they enter collection space. Nearly every museum infestation arrives this way.' },
    { area: 'Collection materials at risk', checks: 'Wool, silk, fur, feather, paper, adhesive and wood — the substrates carpet beetles, clothes moths, silverfish, booklice and powderpost beetles work on.' },
    { area: 'Environment', checks: 'Relative humidity and temperature in storage, which decide whether an introduction stays an introduction or becomes an infestation.' },
    { area: 'Treatment approach', checks: 'Whether anything has been broadcast near artifacts. That is the finding that ends the conversation with a conservator.' },
  ],
};

export function getAuditRows(slug: string): AuditRow[] {
  return commercialAudit[slug] ?? [];
}
