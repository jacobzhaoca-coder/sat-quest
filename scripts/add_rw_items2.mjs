/* SAT Quest — batch 2 of ORIGINAL R&W items: fills the remaining thin cells so
   every skill-tier has >= 6 items. Same rules: all content original to this app,
   nothing copied/adapted from any official test or prep book.
   Idempotent: items already present (matched by text) are skipped. */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const C = (a, b, c, d) => [{ letter: 'A', text: a }, { letter: 'B', text: b }, { letter: 'C', text: c }, { letter: 'D', text: d }];
const q = (skill, tier, text, choices, answer, explanation, whyWrong) => ({ skill, tier, text, choices, answer, explanation, whyWrong });

const II = [
/* evidence-text t3 (+2) */
q('evidence-text', 3,
`A researcher argues that a songbird\'s complex melodies serve mainly to defend territory rather than to attract mates.\n\nWhich finding, if true, would most strongly support this argument?`,
C('Males sing more elaborate songs during the breeding season.', 'Males sing most intensely at territory borders and fall silent once rival males withdraw.', 'Females can distinguish the songs of different males.', 'Song complexity varies from one region to another.'),
'B', 'Territorial defense predicts singing aimed at rivals at boundaries that stops when rivals leave—exactly what this finding shows.',
{ A: 'Breeding-season singing fits the mate-attraction view the researcher opposes.', C: 'Female discrimination supports mate attraction, not territory defense.', D: 'Regional variation does not indicate the song\'s function.' }),

q('evidence-text', 3,
`A scholar contends that a poet\'s late works reflect a hard-won serenity rather than the restlessness of her youth.\n\nWhich line from a late poem would most directly support the scholar\'s claim?`,
C('"I hurl my questions at the silent sky,"', '"At last I let the river take its course,"', '"My heart still races at each closing door,"', '"I pace the floor until the candle dies,"'),
'B', 'Letting "the river take its course" conveys acceptance and calm—the serenity the scholar describes.',
{ A: 'Hurling questions suggests restlessness, the opposite claim.', C: 'A racing heart signals agitation, not serenity.', D: 'Pacing until the candle dies conveys unrest.' }),

/* evidence-quant t3 (+2) */
q('evidence-quant', 3,
`A student writes: "The survey shows that satisfaction rose with wait times up to a point, then fell." A table lists satisfaction scores of 60 (0-min wait), 75 (5-min), 82 (10-min), 70 (20-min), and 55 (30-min).\n\nWhich choice best completes the student\'s claim with accurate data?`,
C('satisfaction peaked around a 10-minute wait before declining.', 'satisfaction fell steadily as wait times increased.', 'the longest waits produced the highest satisfaction.', 'wait time had no effect on satisfaction.'),
'A', 'Scores climb to 82 at 10 minutes, then drop to 70 and 55—so satisfaction peaks near 10 minutes, matching the described pattern.',
{ B: 'Scores first rose (60→75→82), so the decline was not steady throughout.', C: 'The 30-minute wait scored lowest (55).', D: 'There is a clear rise-then-fall relationship.' }),

q('evidence-quant', 3,
`A report finds that a tutoring program raised average math scores by 15 points for students who attended at least 10 sessions but by only 3 points for those who attended fewer.\n\nWhich conclusion is best supported, and appropriately limited, by these data?`,
C('The program\'s benefit was much larger for students who attended more sessions.', 'The program had no effect on any students.', 'Attending fewer than 10 sessions lowered students\' scores.', 'Every student who attended 10 sessions gained exactly 15 points.'),
'A', 'A 15-point gain with high attendance versus 3 points with low attendance supports a larger benefit for frequent attendees, while both groups still improved.',
{ B: 'Both groups gained points, so there was some effect.', C: 'A 3-point gain is still an increase, not a decline.', D: '15 points is an average, not a guaranteed individual result.' }),

/* inferences t1 (+5) */
q('inferences', 1,
`Antarctic fish survive in water cold enough to freeze most animals\' blood. Their bodies produce special proteins that latch onto tiny ice crystals and stop them from growing.\n\nWhich choice most logically completes the text?`,
C('these proteins keep the fish from freezing solid.', 'these fish prefer warmer water than other species.', 'the fish cannot survive in cold water.', 'ice crystals never form near these fish.'),
'A', 'If the proteins stop ice crystals from growing, they most logically prevent the fish from freezing solid.',
{ B: 'The passage says they thrive in very cold water.', C: 'They clearly do survive the cold.', D: 'Crystals do form; the proteins stop them from growing.' }),

q('inferences', 1,
`The bookstore kept its lights on and doors open an hour later than any shop nearby. Students filled its armchairs each evening, reading long after other stores had closed.\n\nWhich choice most logically completes the text?`,
C('the store\'s late hours made it a popular evening spot for students.', 'the store sold more coffee than books.', 'students disliked reading in the store.', 'the store closed earlier than its neighbors.'),
'A', 'Staying open latest and drawing students who read into the evening most logically means the late hours made it a popular student spot.',
{ B: 'Coffee sales are never mentioned.', C: 'Students filling the chairs to read shows they liked it.', D: 'It stayed open later, not earlier, than neighbors.' }),

q('inferences', 1,
`After the town installed streetlights along the river path, evening joggers who had once avoided the route began using it regularly.\n\nWhich choice most logically completes the text?`,
C('the added lighting made joggers feel safer on the path.', 'joggers preferred running in the dark.', 'the path was closed at night.', 'streetlights discouraged people from exercising.'),
'A', 'Joggers returning to a once-avoided route after lights were added most logically means the lighting made them feel safer.',
{ B: 'They had avoided the dark route before.', C: 'They now use it in the evening, so it is open.', D: 'The lights increased use, not discouraged it.' }),

q('inferences', 1,
`The recipe had been in the family for generations, but no one had ever written it down. When the grandmother fell ill, her children realized they could not recreate her famous stew.\n\nWhich choice most logically completes the text?`,
C('the recipe existed only in the grandmother\'s memory.', 'the stew was easy for anyone to make.', 'the family disliked the stew.', 'the recipe had been published in a cookbook.'),
'A', 'If no one wrote it down and only she could make it, the recipe most logically lived only in her memory.',
{ B: 'They could not recreate it, so it was not easy for them.', C: 'It was "famous," implying it was liked.', D: 'It was never written down, so not published.' }),

q('inferences', 1,
`The desert plant\'s roots spread wide but shallow, just beneath the surface. When rare rains fall, the plant can soak up water across a large area before the sun dries the ground.\n\nWhich choice most logically completes the text?`,
C('the shallow, wide roots help the plant capture scarce rainfall quickly.', 'the plant grows best in constantly wet soil.', 'the plant\'s roots reach deep underground water.', 'rain harms the desert plant.'),
'A', 'Wide, shallow roots that soak up water over a large area before it dries most logically help the plant capture scarce rain fast.',
{ B: 'It is adapted to a dry desert, not constant wetness.', C: 'The roots are shallow, not deep.', D: 'The plant uses the rain, so rain helps it.' }),

/* inferences t2 (+3) */
q('inferences', 2,
`Researchers gave two groups the same puzzle. One group was told the task measured intelligence; the other was told it was just a game. The "game" group solved more puzzles and reported enjoying the task more.\n\nWhich choice most logically completes the text based on the results?`,
C('framing a task as low-stakes may improve both performance and enjoyment.', 'intelligence has no relationship to puzzle-solving.', 'the two groups received different puzzles.', 'people always perform worse when relaxed.'),
'A', 'The only difference was the framing, and the "just a game" framing led to better, more enjoyable performance—so low-stakes framing may help both.',
{ B: 'The study is about framing, not the intelligence-puzzle link.', C: 'Both groups got the same puzzle.', D: 'The relaxed "game" group did better, contradicting this.' }),

q('inferences', 2,
`A city replaced its oldest water pipes, which were made of lead. In the following year, the amount of lead detected in children\'s blood across those neighborhoods dropped noticeably.\n\nWhich choice most logically completes the text?`,
C('the old lead pipes had been a source of the lead in the children\'s blood.', 'lead is harmless to children.', 'the new pipes increased lead exposure.', 'the children moved to different neighborhoods.'),
'A', 'Replacing lead pipes followed by a drop in children\'s blood lead most logically indicates the pipes were a source of that lead.',
{ B: 'The concern over blood lead implies it is harmful.', C: 'Levels dropped after the new pipes, not rose.', D: 'Nothing suggests the children relocated.' }),

q('inferences', 2,
`The novelist wrote her first drafts by hand, filling notebooks with crossed-out lines and margins crowded with alternatives. Only when a chapter felt finished did she type it out.\n\nWhich choice most logically completes the text?`,
C('she used handwriting as a stage for reworking her ideas before finalizing them.', 'she never revised her writing.', 'she preferred typing to handwriting for drafting.', 'she typed her drafts before writing them by hand.'),
'A', 'Crossed-out lines and margin alternatives in handwritten drafts, typed only when finished, most logically show handwriting was her reworking stage.',
{ B: 'The crossings-out show heavy revision.', C: 'She drafted by hand and typed only when done.', D: 'The order is reversed—handwriting came first.' }),

/* inferences t3 (+4) */
q('inferences', 3,
`In one experiment, ravens hid food while a second raven watched, then later moved the food when the observer was gone. When no raven had watched, they left the food in place.\n\nWhich choice most logically completes the text?`,
C('the ravens seemed to adjust their behavior based on whether they had been observed.', 'ravens cannot remember where they hide food.', 'ravens hide food only when alone.', 'the observing ravens always stole the food.'),
'A', 'Moving food only after being watched, but not otherwise, most logically suggests ravens adjusted their behavior to being observed.',
{ B: 'Returning to move the food shows they remembered its location.', C: 'They hid food even while watched, then relocated it.', D: 'The passage does not say the observer stole anything.' }),

q('inferences', 3,
`A study of ancient pottery found that vessels from a coastal town contained clay from mountains far inland, while inland towns used only local clay. No roads connected the regions at that time.\n\nWhich choice most logically completes the text?`,
C('the coastal town likely obtained inland clay through some form of trade or exchange.', 'the coastal town had no access to any clay.', 'inland towns imported clay from the coast.', 'the two regions never had any contact.'),
'A', 'Coastal vessels made of distant inland clay, without roads, most logically imply the clay reached the coast through trade or exchange.',
{ B: 'They made pottery, so they had clay.', C: 'Inland towns used only local clay.', D: 'The shared clay implies some contact, not none.' }),

q('inferences', 3,
`Economists noted that when a factory automated its assembly line, it employed fewer assembly workers but hired more technicians to maintain the machines. Total employment at the plant barely changed.\n\nWhich choice most logically completes the text?`,
C('automation shifted the kinds of jobs at the plant more than it reduced their number.', 'automation eliminated all jobs at the plant.', 'the factory hired no new workers of any kind.', 'automation had no effect on the workforce.'),
'A', 'Fewer assemblers but more technicians, with total employment steady, most logically means automation changed job types rather than cutting headcount.',
{ B: 'Total employment barely changed, so jobs were not eliminated.', C: 'It hired more technicians.', D: 'The mix of jobs shifted, so there was an effect.' }),

q('inferences', 3,
`Readers of a translated novel praised its vivid rhythm, unaware that the original prose was famously plain. Critics who knew both versions credited the translator\'s bold choices for the effect.\n\nWhich choice most logically completes the text?`,
C('the translation\'s admired style may owe more to the translator than to the original author.', 'the original novel was already known for vivid rhythm.', 'translators must copy the original word for word.', 'readers disliked the translated novel.'),
'A', 'If the plain original gained vivid rhythm that critics credit to the translator, the admired style most logically comes from the translator.',
{ B: 'The original was "famously plain," not vivid.', C: 'The translator\'s "bold choices" show departure, not copying.', D: 'Readers praised it.' }),
];

const CS = [
/* structure t1 (+1) */
q('structure', 1,
`The following text is from a guide for new gardeners.\n\nFirst, loosen the soil with a fork. Next, mix in compost. Finally, plant the seeds at the depth listed on the packet.\n\nWhich choice best describes the overall structure of the text?`,
C('It gives steps in the order they should be done.', 'It compares two gardening methods.', 'It argues that gardening is difficult.', 'It lists reasons compost is useful.'),
'A', 'The words "First," "Next," and "Finally" mark a sequence of steps in order.',
{ B: 'Only one method is described.', C: 'No claim about difficulty is made.', D: 'Compost is one step, not a list of its benefits.' }),

/* structure t3 (+2) */
q('structure', 3,
`The following text is from an essay on architecture.\n\nThe cathedral rewards the patient eye. From the plaza, it reads as a single soaring mass. Step inside, and it dissolves into parts—ribbed vaults, stained glass, a lace of stone. Look longer still, and those parts resolve again into one deliberate whole.\n\nWhich choice best describes the overall structure of the text?`,
C('It guides the reader through shifting perceptions of the building, from whole to parts and back to whole.', 'It lists cathedrals in different cities.', 'It argues cathedrals are outdated.', 'It explains how cathedrals are funded.'),
'A', 'The passage moves the viewer from the whole (plaza) to the parts (inside) and back to a unified whole—a structured shift in perception.',
{ B: 'Only one cathedral is described.', C: 'No claim of obsolescence appears.', D: 'Funding is not discussed.' }),

q('structure', 3,
`The following text is from a science essay.\n\nThe claim seemed absurd: that invisible creatures caused disease. For decades it was mocked. Then microscopes improved, cultures were grown, and one by one the objections fell. What had been ridiculed became the foundation of modern medicine.\n\nWhich choice best describes the overall structure of the text?`,
C('It traces an idea\'s path from ridicule to acceptance as evidence accumulated.', 'It lists symptoms of several diseases.', 'It compares two competing microscopes.', 'It argues that mockery is always wrong.'),
'A', 'The passage follows the germ idea from being mocked to becoming foundational as evidence mounted—a rejection-to-acceptance arc.',
{ B: 'No symptoms are listed.', C: 'Microscopes are a detail, not a comparison.', D: 'It makes no general claim about mockery.' }),

/* cross-text t1 (+2) */
q('cross-text', 1,
`Text 1: School uniforms reduce distractions and help students focus on learning rather than fashion.\n\nText 2: Uniforms can strain families\' budgets and limit students\' ability to express themselves.\n\nBased on the texts, the authors would most likely disagree about whether uniforms\n\nWhich choice best completes the statement?`,
C('are, on balance, good for students.', 'are worn by any students at all.', 'cost money to purchase.', 'are made of fabric.'),
'A', 'Text 1 praises uniforms; Text 2 highlights drawbacks—so they would disagree about whether uniforms are, overall, good.',
{ B: 'Both assume students wear uniforms.', C: 'Both would agree uniforms cost money.', D: 'Neither disputes basic facts about fabric.' }),

q('cross-text', 1,
`Text 1: Video games can sharpen problem-solving and quick decision-making.\n\nText 2: Long hours of gaming can crowd out sleep and exercise, which young people need.\n\nBased on the texts, both authors would most likely agree that video games\n\nWhich choice best completes the statement?`,
C('have effects worth considering.', 'should be banned for everyone.', 'have no impact on players.', 'are only harmful.'),
'A', 'Text 1 notes benefits and Text 2 notes costs, so both agree games have real effects worth weighing.',
{ B: 'Text 1 sees value, so neither calls for a ban.', C: 'Both describe impacts.', D: 'Text 1 lists benefits, so not "only harmful."' }),

/* cross-text t3 (+2) */
q('cross-text', 3,
`Text 1: A philosopher argues that true courage requires feeling fear and acting well despite it; the fearless are merely reckless.\n\nText 2: Another thinker holds that the most admirable figures feel no fear at all, having trained themselves until danger no longer moves them.\n\nBased on the texts, the two thinkers most fundamentally disagree about\n\nWhich choice best completes the statement?`,
C('whether fear is necessary for genuine courage.', 'whether courage is ever admirable.', 'whether danger exists.', 'whether training is possible.'),
'A', 'Text 1 says courage requires fear; Text 2 admires the fearless—so they split on whether fear is necessary for courage.',
{ B: 'Both treat courage as admirable.', C: 'Neither denies danger exists.', D: 'Text 2 assumes training works; it is not the dispute.' }),

q('cross-text', 3,
`Text 1: A curator argues that museums should return artifacts to the communities they came from, even at the cost of thinner collections.\n\nText 2: Another argues that great museums preserve and share world heritage in one place, making artifacts accessible to millions who could never travel to see them.\n\nBased on the texts, the authors primarily disagree about\n\nWhich choice best completes the statement?`,
C('where artifacts can best serve people.', 'whether artifacts have any value.', 'whether museums charge admission.', 'how old the artifacts are.'),
'A', 'Text 1 favors returning artifacts to origin communities; Text 2 favors centralized access—their dispute is where artifacts best serve people.',
{ B: 'Both assume artifacts are valuable.', C: 'Admission fees are not discussed.', D: 'Artifact age is not the issue.' }),
];

const EI = [
/* transitions t3 (+1) */
q('transitions', 3,
`The startup\'s app drew millions of downloads within weeks. ______, without a way to earn revenue from those users, the company burned through its funding and folded within a year.\n\nWhich choice completes the text with the most logical transition?`,
C('Consequently,', 'Yet,', 'Likewise,', 'For instance,'),
'B', 'Massive downloads followed by collapse is an unexpected reversal, so the contrastive "Yet," fits.',
{ A: '"Consequently" implies the downloads caused the collapse directly.', C: '"Likewise" signals similarity.', D: '"For instance" introduces an example.' }),

/* synthesis t1 (+2) */
q('synthesis', 1,
`A student took these notes about a lighthouse:\n\n• It was built in 1875.\n• Its light could be seen 20 miles out to sea.\n• It guided ships safely past a dangerous reef.\n\nThe student wants to explain the lighthouse\'s purpose. Which choice most effectively uses the notes to accomplish this goal?`,
C('With a light visible 20 miles away, the lighthouse guided ships safely past a dangerous reef.', 'The lighthouse was built in 1875.', 'The lighthouse is a tall structure.', 'Many ships sail near reefs.'),
'A', 'This choice combines the light\'s range with its role guiding ships past the reef, explaining the purpose.',
{ B: 'The date does not state a purpose.', C: 'Height is not in the notes and gives no purpose.', D: 'This is a vague generality, not the lighthouse\'s purpose.' }),

q('synthesis', 1,
`A student took these notes about a chef:\n\n• He grows vegetables in a garden behind the restaurant.\n• He changes the menu with each season.\n• Diners praise how fresh the dishes taste.\n\nThe student wants to explain why the chef\'s dishes taste fresh. Which choice most effectively uses the notes to accomplish this goal?`,
C('Because the chef grows his own vegetables and updates the menu each season, diners praise how fresh his dishes taste.', 'The chef changes the menu each season.', 'The chef has a garden.', 'The restaurant is popular.'),
'A', 'This choice links the garden and seasonal menu to the fresh taste diners praise, meeting the goal.',
{ B: 'This gives only the seasonal menu detail.', C: 'This gives only the garden detail.', D: 'Popularity is not in the notes and does not explain freshness.' }),

/* synthesis t3 (+2) */
q('synthesis', 3,
`A student researching two artists took these notes:\n\n• Artist X worked slowly, finishing a few large canvases a year.\n• Artist Y painted quickly, producing hundreds of small studies.\n• Both are now praised for capturing fleeting light.\n\nThe student wants to introduce an essay contrasting the artists\' methods while noting their shared aim. Which choice most effectively uses the notes to accomplish this goal?`,
C('Though one labored over a few large canvases while the other dashed off hundreds of small studies, both artists are praised for capturing fleeting light.', 'Artist X finished a few large canvases each year.', 'Both artists are praised today.', 'Artist Y made many small studies.'),
'A', 'This choice contrasts the two methods and unites them under the shared aim of capturing fleeting light—exactly the goal.',
{ B: 'This introduces only Artist X.', C: 'This gives the shared praise but omits the contrast.', D: 'This introduces only Artist Y.' }),

q('synthesis', 3,
`A student researching a bridge took these notes:\n\n• Engineers doubted the design would hold.\n• The builder tested each cable under heavy loads before installing it.\n• The bridge has stood for over a century without major repair.\n\nThe student wants to argue that careful testing answered the engineers\' doubts. Which choice most effectively uses the notes to accomplish this goal?`,
C('Though engineers doubted the design, the builder\'s testing of each cable under heavy loads produced a bridge that has stood for over a century without major repair.', 'The bridge has stood for over a century.', 'Engineers doubted the design.', 'The builder tested the cables.'),
'A', 'This choice ties the doubts, the rigorous cable testing, and the century of durability into an argument that testing answered the doubts.',
{ B: 'This gives only the outcome, not the testing or doubts.', C: 'This gives only the doubts.', D: 'This gives only the testing step.' }),
];

const SEC = [
/* boundaries t3 (+1) */
q('boundaries', 3,
`Choose the option that conforms to Standard English conventions.\n\nThe expedition faced one great ______ crossing the glacier before the spring thaw made it impassable.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('obstacle:', 'obstacle', 'obstacle,', 'obstacle;'),
'A', 'A colon introduces the explanation of the "one great obstacle."',
{ B: 'No punctuation runs the explanation together.', C: 'A comma is too weak to introduce this explanatory phrase.', D: 'A semicolon needs an independent clause after it; a phrase follows.' }),
];

/* ===================== write out (shared logic) ===================== */
const DOMAINS = {
  'rw-ii': { file: 'information-ideas.js', varName: 'RW_BANK_II', items: II },
  'rw-cs': { file: 'craft-structure.js', varName: 'RW_BANK_CS', items: CS },
  'rw-ei': { file: 'expression-ideas.js', varName: 'RW_BANK_EI', items: EI },
  'rw-sec': { file: 'conventions.js', varName: 'RW_BANK_SEC', items: SEC },
};
const ctx = { console, Math };
vm.createContext(ctx);
for (const d of Object.values(DOMAINS)) vm.runInContext(fs.readFileSync(path.join(root, 'js/data/rw', d.file), 'utf8'), ctx);
const allExisting = [].concat(vm.runInContext('RW_BANK_II', ctx), vm.runInContext('RW_BANK_CS', ctx), vm.runInContext('RW_BANK_EI', ctx), vm.runInContext('RW_BANK_SEC', ctx));
const existingTexts = new Set(allExisting.map(x => x.text));
const seq = {};
for (const x of allExisting) {
  const m = /-t(\d)-(\d+)$/.exec(x.id || '');
  const key = `${x.skill}-${x.tier}`;
  seq[key] = Math.max(seq[key] || 0, m ? parseInt(m[2], 10) : 0);
}
let added = 0, skipped = 0;
for (const [domain, d] of Object.entries(DOMAINS)) {
  const existing = vm.runInContext(d.varName, ctx);
  const fresh = [];
  for (const it of d.items) {
    if (existingTexts.has(it.text)) { skipped++; continue; }
    const key = `${it.skill}-${it.tier}`;
    seq[key] = (seq[key] || 0) + 1;
    fresh.push({ id: `${it.skill}-t${it.tier}-${String(seq[key]).padStart(2, '0')}`,
      domain, skill: it.skill, tier: it.tier, text: it.text, choices: it.choices,
      answer: it.answer, explanation: it.explanation, whyWrong: it.whyWrong });
    added++;
  }
  const combined = existing.concat(fresh);
  const body = combined.map(o => '  ' + JSON.stringify(o, null, 2).split('\n').join('\n  ')).join(',\n');
  const header = fs.readFileSync(path.join(root, 'js/data/rw', d.file), 'utf8').split('const ' + d.varName)[0];
  fs.writeFileSync(path.join(root, 'js/data/rw', d.file), `${header}const ${d.varName} = [\n${body},\n];\n`);
  console.log(`${d.file}: +${fresh.length} → ${combined.length}`);
}
console.log(`\nAdded ${added}, skipped ${skipped}. New total: ${allExisting.length + added}`);
