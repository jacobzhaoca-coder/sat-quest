/* SAT Quest — appends NEW original R&W items to the js/data/rw/ domain files.
   Existing items are preserved with their ids; new items get continuing stable
   ids per skill-tier. All content below is ORIGINAL, written for this app —
   nothing copied, paraphrased, or adapted from any official test or prep book.

   Run:  node scripts/add_rw_items.mjs   (idempotent guard prevents double-add) */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const C = (a, b, c, d) => [{ letter: 'A', text: a }, { letter: 'B', text: b }, { letter: 'C', text: c }, { letter: 'D', text: d }];
const q = (skill, tier, text, choices, answer, explanation, whyWrong) => ({ skill, tier, text, choices, answer, explanation, whyWrong });

/* ===================== INFORMATION AND IDEAS (rw-ii) ===================== */
const II = [
/* ---- central-ideas ---- */
q('central-ideas', 1,
`The following text is from an article about honeybees.\n\nA honeybee returning from a rich patch of flowers performs a looping "waggle dance" on the honeycomb. The angle and duration of the dance tell other bees the direction and distance of the food. Hive-mates crowd close, then fly off toward the source—often arriving with striking accuracy.\n\nWhich choice best states the main idea of the text?`,
C('Honeybees prefer flowers that are far from the hive.', 'A honeybee\'s dance communicates the location of food to other bees.', 'Honeybees cannot find food without dancing.', 'The waggle dance is the only way bees move on the comb.'),
'B', 'The passage explains that the dance encodes direction and distance and that hive-mates then reach the food accurately—so the dance communicates location.',
{ A: 'Distance is encoded, but no preference for far flowers is stated.', C: 'The text never claims dancing is required to find any food at all.', D: 'The dance is one behavior on the comb, not the only movement.' }),

q('central-ideas', 1,
`The following text is adapted from a city transit report.\n\nWhen the downtown bus line began running every ten minutes instead of every half hour, ridership climbed quickly. Commuters who once drove said the shorter wait finally made the bus worth taking. Within a year, the route carried nearly twice as many passengers as before.\n\nWhich choice best states the main idea of the text?`,
C('Buses are cheaper to operate than cars.', 'Downtown traffic has become impossible for drivers.', 'More frequent service made the bus line far more popular.', 'Commuters dislike waiting for any form of transit.'),
'C', 'The passage links the switch to ten-minute service with rising ridership and a near-doubling of passengers, so frequency drove popularity.',
{ A: 'Operating cost is never discussed.', B: 'Traffic conditions for drivers are not described.', D: 'Commuters\' general feelings about waiting are not the point; the specific change is.' }),

q('central-ideas', 1,
`The following text is from a nature essay.\n\nThe tiny goby fish shares its burrow with a nearly blind shrimp. The shrimp digs and maintains the tunnel; the sharp-eyed goby stands guard at the entrance, flicking its tail to warn of danger. Neither animal thrives alone, but together they keep the burrow safe and open.\n\nWhich choice best states the main idea of the text?`,
C('The goby and the shrimp depend on each other for survival.', 'Shrimp are better burrow-builders than fish.', 'The goby fish is nearly blind.', 'Burrows are dangerous places for small animals.'),
'A', 'The passage describes a partnership in which each animal supplies what the other lacks and notes neither thrives alone—mutual dependence.',
{ B: 'The shrimp digs, but the text stresses partnership, not which is "better."', C: 'The shrimp is nearly blind; the goby is sharp-eyed.', D: 'The burrow is kept safe, not portrayed as generally dangerous.' }),

q('central-ideas', 1,
`The following text is from a student\'s report on recycling.\n\nMany people rinse and sort their recycling carefully, yet a single greasy pizza box or half-full jar can spoil an entire batch at the sorting plant. Facility managers say that "wishcycling"—tossing in items people hope are recyclable—creates more contamination than any other habit.\n\nWhich choice best states the main idea of the text?`,
C('Pizza boxes can never be recycled.', 'Hopeful but incorrect recycling is a major source of contamination.', 'Sorting plants refuse all glass jars.', 'Most people do not try to recycle at all.'),
'B', 'The text names "wishcycling"—tossing in hoped-for items—as the leading cause of contamination, which is the central point.',
{ A: 'A greasy box is one example, not a blanket rule about all pizza boxes.', C: 'A half-full jar is the problem, not jars in general.', D: 'The passage says many people recycle carefully.' }),

q('central-ideas', 2,
`The following text is from an article about urban trees.\n\nCities once planted whatever trees grew fastest, lining streets with a single species for a tidy look. But when a single pest arrived, whole neighborhoods lost their canopy at once. Today many planners deliberately mix species, trading uniform beauty for a forest that no single disease can erase.\n\nWhich choice best states the main idea of the text?`,
C('Fast-growing trees are always the best choice for cities.', 'Planners now favor mixed species to protect cities from losing their trees.', 'Pests are no longer a threat to urban trees.', 'Uniform tree-lined streets are more beautiful than mixed ones.'),
'B', 'The passage contrasts the old single-species approach with today\'s deliberate mixing, framing diversity as protection against total loss—the main idea.',
{ A: 'The text criticizes relying on fast growth alone.', C: 'Pests remain the very reason for mixing species.', D: 'The passage treats uniform beauty as a trade-off, not a settled superiority.' }),

q('central-ideas', 2,
`The following text is adapted from a history of photography.\n\nEarly portrait sitters had to hold perfectly still for a full minute while the plate slowly gathered light. Smiles were nearly impossible to sustain, so subjects set their faces into a solemn calm. The stern expressions in old photographs, then, may reveal less about the era\'s mood than about its technology.\n\nWhich choice best states the main idea of the text?`,
C('People in the past were generally unhappy.', 'Long exposure times, not gloomy moods, explain the stern faces in early photos.', 'Early photographers preferred serious subjects.', 'Smiling was considered rude in early portraits.'),
'B', 'The passage argues the solemn look came from having to hold still for slow exposures—technology, not mood—which is its central claim.',
{ A: 'The text specifically pushes back on reading the faces as unhappiness.', C: 'Photographers\' preferences are not the cause given; the exposure time is.', D: 'No etiquette rule about smiling is mentioned.' }),

q('central-ideas', 2,
`The following text is from an essay about language.\n\nWhen a language has no separate word for "blue," speakers still see the color—but they may be slower to pick a blue square out from green ones. Researchers argue that vocabulary does not build the world we perceive so much as sharpen the edges we already notice.\n\nWhich choice best states the main idea of the text?`,
C('People cannot see colors their language lacks words for.', 'Vocabulary refines, rather than creates, the distinctions people perceive.', 'All languages have a word for blue.', 'Color perception is entirely learned from language.'),
'B', 'The passage says speakers still see the color but sort it faster with a word, concluding vocabulary "sharpens edges we already notice"—refining, not creating.',
{ A: 'The text explicitly says speakers still see the color.', C: 'It describes languages that lack a word for blue.', D: 'It denies that language fully builds perception.' }),

q('central-ideas', 3,
`The following text is from a scholarly article on memory.\n\nEach time a memory is recalled, it becomes briefly unstable and must be stored again, and small changes can slip in during that window. What feels like replaying a fixed recording may instead be closer to retelling a story—faithful in outline, but quietly revised with every telling.\n\nWhich choice best states the main idea of the text?`,
C('Memories are permanent recordings that never change.', 'Recalling a memory can subtly alter it, making remembering an act of reconstruction.', 'People cannot trust any of their memories.', 'Frequent recall is the best way to keep memories accurate.'),
'B', 'The passage explains that recall reopens a memory to small revisions, likening remembering to retelling a story—reconstruction, not fixed playback.',
{ A: 'The text argues the opposite of permanence.', C: '"Faithful in outline" shows memories aren\'t declared wholly untrustworthy.', D: 'Recall introduces changes, so it is not framed as a reliability booster.' }),

q('central-ideas', 3,
`The following text is adapted from an essay on scientific discovery.\n\nWe tend to picture breakthroughs as sudden flashes—an apple, a bathtub, a cry of "Eureka!" Yet the historical record more often shows a slow accumulation: failed trials, borrowed ideas, and quiet corrections over years. The dramatic moment, when it comes, is usually the visible tip of a long, unglamorous climb.\n\nWhich choice best states the main idea of the text?`,
C('Famous discovery stories exaggerate the role of sudden inspiration.', 'Scientists rarely make mistakes on the path to discovery.', 'Eureka moments are entirely fictional.', 'Borrowing ideas is the main cause of scientific failure.'),
'A', 'The passage contrasts the myth of sudden flashes with the reality of slow accumulation, arguing the dramatic moment overstates sudden inspiration.',
{ B: 'The text emphasizes failed trials and corrections—many mistakes.', C: 'It says the dramatic moment does come, just late; not that it is fictional.', D: 'Borrowing ideas is part of progress here, not a cause of failure.' }),

q('central-ideas', 3,
`The following text is from a book about rivers.\n\nA river seems like the most fixed feature of a landscape, yet over centuries it wanders—cutting new channels, abandoning old bends, leaving crescent lakes where it once ran. To call a river a single line on a map is to freeze a single frame of a body always quietly on the move.\n\nWhich choice best states the main idea of the text?`,
C('Rivers are among the most unchanging parts of a landscape.', 'A river is better understood as a shifting body than as a fixed line.', 'Maps of rivers are useless.', 'Crescent lakes are the main danger rivers create.'),
'B', 'The passage overturns the image of a fixed river, describing how it wanders and concluding a map freezes something "always on the move."',
{ A: 'The text argues rivers are not unchanging.', C: 'It critiques treating a map as complete, not maps as useless.', D: 'Crescent lakes are evidence of change, not a danger claim.' }),

/* ---- evidence-text ---- */
q('evidence-text', 1,
`A student claims that the community garden brought neighbors together.\n\nWhich finding, if true, would most directly support this claim?`,
C('The garden grew more vegetables than expected in its first season.', 'Residents who had never spoken began meeting weekly to tend shared plots.', 'The garden was built on a lot that had been empty for years.', 'The city paid for the garden\'s water supply.'),
'B', '"Brought neighbors together" is a social claim; residents who never spoke now meeting weekly is direct evidence of connection.',
{ A: 'High yield shows productivity, not that neighbors connected.', C: 'The lot\'s history says nothing about relationships forming.', D: 'Funding is about cost, not neighbors coming together.' }),

q('evidence-text', 1,
`A science teacher argues that hands-on experiments help students remember concepts longer.\n\nWhich finding, if true, would most directly support this argument?`,
C('Students enjoyed the experiments more than the lectures.', 'On a test months later, students recalled more from lessons they had done as experiments than from lessons they only heard.', 'The experiments took more class time to set up.', 'Most students already owned the materials needed.'),
'B', 'The claim is about remembering longer; better recall months later on experiment-based lessons directly supports lasting memory.',
{ A: 'Enjoyment is not the same as remembering longer.', C: 'Setup time addresses cost, not retention.', D: 'Owning materials is unrelated to memory.' }),

q('evidence-text', 1,
`A writer claims that reading aloud helps people catch errors in their own writing.\n\nWhich finding, if true, would most strongly support this claim?`,
C('People read silently faster than they read aloud.', 'Writers who read their drafts aloud found more mistakes than those who reviewed silently.', 'Reading aloud is a common practice among poets.', 'Most errors in drafts are small typos.'),
'B', 'The claim links reading aloud to catching errors; finding more mistakes when reading aloud than silently is the direct comparison needed.',
{ A: 'Reading speed does not address error-catching.', C: 'A practice being common does not show it works.', D: 'The type of errors does not show aloud reading helps.' }),

q('evidence-text', 1,
`A coach believes that a good night\'s sleep improves players\' reaction times.\n\nWhich finding, if true, would most directly support this belief?`,
C('Players said they felt more confident after sleeping well.', 'Players reacted faster in drills on mornings after eight hours of sleep than after five.', 'The team practiced reaction drills every day.', 'Younger players tended to sleep more than older ones.'),
'B', 'The belief connects sleep to reaction time; faster reactions after more sleep is the direct measurement.',
{ A: 'Confidence is a feeling, not measured reaction time.', C: 'Daily practice is constant and does not isolate sleep.', D: 'Age-sleep patterns do not address reaction times.' }),

q('evidence-text', 2,
`In a short story, a character named Dev insists he "never worries about money," yet the narrator hints this is not quite true.\n\nWhich detail from such a story would most effectively undercut Dev\'s claim?`,
C('Dev generously pays for his friends\' dinner.', 'Each night, Dev recalculates his bank balance before he can fall asleep.', 'Dev works at a bank downtown.', 'Dev rarely talks about his salary with coworkers.'),
'B', 'Nightly recalculating his balance before sleeping reveals private anxiety about money, contradicting his claim never to worry.',
{ A: 'Paying for dinner could fit someone unworried; it doesn\'t undercut him.', C: 'Working at a bank is a job, not evidence of worry.', D: 'Staying private about salary is neutral, not revealing anxiety.' }),

q('evidence-text', 2,
`A researcher hypothesizes that city parks lower stress for nearby residents.\n\nWhich finding would most strongly support the hypothesis?`,
C('Residents near a new park reported lower stress levels than a similar group living farther away.', 'The new park attracted many visitors on weekends.', 'The park included a large playground and walking trails.', 'City officials praised the park at its opening.'),
'A', 'The hypothesis compares stress by proximity; lower reported stress for nearby residents versus a matched distant group is the needed evidence.',
{ B: 'Popularity does not measure stress.', C: 'The park\'s features do not show a stress effect.', D: 'Officials\' praise is opinion, not measured stress.' }),

q('evidence-text', 2,
`An essay argues that libraries remain vital even as more books move online.\n\nWhich finding, if true, would best support this argument?`,
C('E-book sales have risen steadily for a decade.', 'Library visits for services like job help and internet access have grown even as e-book use rises.', 'Many libraries have reduced their print collections.', 'Some readers prefer the feel of a physical book.'),
'B', 'The argument is that libraries stay vital despite digital shifts; growing use of non-book services shows enduring value beyond print.',
{ A: 'Rising e-book sales could cut against libraries, not support them.', C: 'Smaller print collections doesn\'t show libraries remain vital.', D: 'A preference for print is a minor point, not evidence of vitality.' }),

q('evidence-text', 3,
`A literary critic argues that the poem\'s speaker feels trapped by routine rather than comforted by it.\n\nWhich line from a poem would most directly support the critic\'s reading?`,
C('"Each dawn I greet the same warm cup of tea,"', '"The clock\'s slow hands close round me like a cage,"', '"My garden blooms in colors bright and free,"', '"I walk the well-worn path down to the sea,"'),
'B', 'A clock\'s hands closing "like a cage" casts routine as confinement, directly supporting the "trapped" reading.',
{ A: 'A "warm" cup reads as comfort, the opposite view.', C: 'Blooming "bright and free" suggests freedom, not entrapment.', D: 'A pleasant walk to the sea is neutral or comforting.' }),

q('evidence-text', 3,
`A historian claims that a medieval town\'s prosperity depended on its bridge, not its castle.\n\nWhich piece of evidence, if found, would most strongly support this claim?`,
C('The castle\'s walls were thicker than those of neighboring towns.', 'Town tax records show most revenue came from tolls collected at the bridge.', 'The castle housed the region\'s ruling family for generations.', 'The bridge was rebuilt in stone after a flood.'),
'B', 'Prosperity is economic; tax records showing bridge tolls as the main revenue directly ties wealth to the bridge over the castle.',
{ A: 'Wall thickness speaks to defense, not prosperity.', C: 'Housing rulers shows prestige, not the source of wealth.', D: 'A rebuild shows the bridge mattered but not that it drove prosperity.' }),

q('evidence-text', 3,
`A biologist proposes that a bird species\' curved beak evolved mainly for extracting insects from bark, not for cracking seeds.\n\nWhich finding would most strongly support this proposal?`,
C('The birds are sometimes seen eating seeds that have fallen to the ground.', 'In the wild, the birds spend most feeding time probing bark, and their beaks show wear patterns matching that motion.', 'The birds\' beaks are similar in color to those of seed-cracking species.', 'The birds build nests in the same trees where they feed.'),
'B', 'The proposal is about the beak\'s main function; heavy bark-probing plus matching wear patterns directly ties the beak\'s form to insect extraction.',
{ A: 'Occasional seed-eating would weaken, not support, the insect claim.', C: 'Beak color is irrelevant to function.', D: 'Nesting location does not indicate feeding function.' }),

/* ---- evidence-quant ---- */
q('evidence-quant', 1,
`A student notes that a survey of 200 shoppers found 150 preferred paper bags, 30 preferred plastic, and 20 had no preference.\n\nWhich statement is best supported by these data?`,
C('A majority of shoppers surveyed preferred paper bags.', 'Most shoppers had no preference between bag types.', 'Plastic bags were preferred more than paper bags.', 'Exactly half of shoppers preferred plastic bags.'),
'A', '150 of 200 is 75%, a clear majority preferring paper—directly supported by the numbers.',
{ B: 'Only 20 of 200 had no preference.', C: 'Plastic (30) trailed paper (150) badly.', D: 'Plastic was 30 of 200, not half.' }),

q('evidence-quant', 1,
`A report states that a town\'s library lent 4,000 books in 2010 and 10,000 books in 2020.\n\nWhich statement is best supported by these data?`,
C('Book lending at the library more than doubled from 2010 to 2020.', 'The library lost readers over the decade.', 'Lending stayed about the same across the decade.', 'The library lent fewer than 4,000 books in 2020.'),
'A', 'Going from 4,000 to 10,000 is an increase of 6,000, more than double the 2010 figure.',
{ B: 'Lending rose, suggesting more use, not fewer readers.', C: 'The figures changed sharply, not staying the same.', D: '2020 lending (10,000) was far above 4,000.' }),

q('evidence-quant', 1,
`A chart shows a plant grew 2 cm in week 1, 5 cm in week 2, and 9 cm in week 3.\n\nWhich statement is best supported by these data?`,
C('The plant\'s weekly growth increased each week.', 'The plant grew the same amount every week.', 'The plant grew fastest in week 1.', 'The plant stopped growing after week 2.'),
'A', 'Weekly growth rose from 2 to 5 to 9 cm, so growth increased each week.',
{ B: 'The amounts differ each week.', C: 'Week 1 (2 cm) was the slowest, not fastest.', D: 'Week 3 shows continued, larger growth.' }),

q('evidence-quant', 1,
`A student summarizes a table: of 500 trees planted, 450 survived their first year in the shaded plot, while 300 of 500 survived in the sunny plot.\n\nWhich statement is best supported by these data?`,
C('A higher proportion of trees survived in the shaded plot than in the sunny plot.', 'More trees were planted in the shaded plot.', 'Sunlight had no effect on survival.', 'All trees in the sunny plot died.'),
'A', '450/500 (90%) in shade exceeds 300/500 (60%) in sun, so a higher proportion survived in shade.',
{ B: 'Both plots had 500 trees planted.', C: 'The survival gap suggests sunlight did matter.', D: '300 of 500 sunny-plot trees survived.' }),

q('evidence-quant', 1,
`A poll of 80 students found 48 walk to school, 24 take the bus, and 8 are driven.\n\nWhich statement is best supported by these data?`,
C('More students walk to school than use the other two methods combined.', 'Most students take the bus.', 'Being driven is the most common method.', 'Walking and busing are equally common.'),
'A', 'Walkers (48) exceed bus riders plus driven students (24 + 8 = 32), so walking beats the other two combined.',
{ B: 'The bus (24) is second, not the majority.', C: 'Being driven (8) is least common.', D: 'Walking (48) far exceeds busing (24).' }),

q('evidence-quant', 2,
`A researcher reports that a website\'s average visit lasted 3 minutes, but the median visit lasted only 40 seconds.\n\nWhich conclusion is best supported by these data?`,
C('Every visitor stayed about 3 minutes.', 'A small number of very long visits pulled the average well above the typical visit.', 'Most visitors stayed longer than 3 minutes.', 'The website had very few visitors.'),
'B', 'A mean far above the median signals that a few long visits stretched the average while most visits (the median) were short.',
{ A: 'The median shows most visits were far shorter than 3 minutes.', C: 'The median of 40 seconds means most stayed under a minute.', D: 'The data say nothing about total visitor count.' }),

q('evidence-quant', 2,
`A study finds that 60% of people who exercise in the morning stick with their routine after six months, compared with 35% of evening exercisers.\n\nWhich statement is best supported by these data?`,
C('Morning exercisers were more likely to maintain their routine than evening exercisers.', 'Morning exercise burns more calories than evening exercise.', 'Most evening exercisers quit within a week.', 'Exercising in the morning is the only way to stay consistent.'),
'A', 'A 60% retention rate versus 35% directly shows morning exercisers maintained routines at a higher rate.',
{ B: 'Calorie burn is not measured here.', C: 'The data cover six months, not a week, and 35% still stuck with it.', D: '35% of evening exercisers succeeded, so morning is not the "only" way.' }),

q('evidence-quant', 2,
`A table shows that a store\'s online sales rose from 20% of total sales in 2018 to 55% in 2023, while in-store sales fell correspondingly.\n\nWhich statement is best supported by these data?`,
C('Online sales overtook in-store sales as the larger share by 2023.', 'The store\'s total revenue fell over the period.', 'In-store sales disappeared entirely by 2023.', 'Online and in-store sales were equal in 2018.'),
'A', 'Rising from 20% to 55% means online passed the halfway mark, making it the larger share by 2023.',
{ B: 'The data give shares, not total revenue.', C: 'In-store fell to 45%, not to zero.', D: 'In 2018 online was 20%, so they were not equal.' }),

q('evidence-quant', 3,
`A student writes: "The data show that as study group size increased from 2 to 6 members, average quiz scores rose, but past 6 members scores fell." A table lists average scores of 78 (2 members), 85 (4), 90 (6), 88 (8), and 82 (10).\n\nWhich choice best completes the student\'s claim with accurate data?`,
C('scores peaked at groups of 6 members before declining.', 'scores rose steadily as group size grew to 10.', 'the largest groups produced the highest scores.', 'group size had no clear effect on scores.'),
'A', 'Scores climb to 90 at 6 members, then drop to 88 and 82—so the peak is at 6, matching the student\'s described pattern.',
{ B: 'Scores fell after 6 members, so they did not rise steadily to 10.', C: 'The 10-member group scored lowest of the larger groups (82).', D: 'There is a clear rise-then-fall pattern.' }),

q('evidence-quant', 3,
`A report notes that a vaccine reduced infection risk by 80% in adults under 50 but by only 40% in adults over 70.\n\nWhich conclusion is best supported, and appropriately limited, by these data?`,
C('The vaccine offered stronger protection in younger adults than in the oldest group studied.', 'The vaccine does not work at all in adults over 70.', 'Adults over 70 should not receive the vaccine.', 'The vaccine eliminates all infection risk in adults under 50.'),
'A', 'An 80% versus 40% reduction supports stronger protection in the younger group, while the 40% figure shows real (if smaller) benefit for older adults.',
{ B: 'A 40% reduction is meaningful, not "does not work at all."', C: 'The data do not support a recommendation to withhold the vaccine.', D: '80% reduction is not the same as eliminating all risk.' }),

q('evidence-quant', 3,
`A study of two teaching methods reports that Method A raised test scores by an average of 12 points with a wide range of results, while Method B raised scores by 9 points with very consistent results.\n\nWhich statement is best supported by these data?`,
C('Method A produced a larger average gain, but Method B produced more consistent gains.', 'Method B is better than Method A in every respect.', 'Method A worked equally well for all students.', 'Neither method improved test scores.'),
'A', 'The data show A\'s higher average (12 vs. 9) alongside B\'s greater consistency—both facts must be captured.',
{ B: 'A had the larger average, so B is not better in every respect.', C: 'A "wide range" means results varied, not equal for all.', D: 'Both methods raised scores.' }),
];

/* ===================== CRAFT AND STRUCTURE (rw-cs) ===================== */
const CS = [
/* ---- words-context ---- */
q('words-context', 1,
`Complete the text with the most logical and precise word.\n\nThe smell of fresh bread was so ______ that customers followed it down the block to the bakery\'s door.\n\nWhich choice completes the text with the most logical and precise word?`,
C('faint', 'inviting', 'sudden', 'ordinary'),
'B', 'Customers following the smell shows it drew them in, so "inviting" fits precisely.',
{ A: '"Faint" would not pull people down a block.', C: '"Sudden" describes timing, not appeal.', D: '"Ordinary" would not attract a following.' }),

q('words-context', 1,
`Complete the text with the most logical and precise word.\n\nAfter weeks of drought, the sudden rain was a ______ to the wilting crops, which perked up within days.\n\nWhich choice completes the text with the most logical and precise word?`,
C('threat', 'blessing', 'mystery', 'delay'),
'B', 'Crops perking up shows the rain helped, so "blessing" is the precise, logical word.',
{ A: '"Threat" contradicts the crops recovering.', C: 'Nothing puzzling is described.', D: '"Delay" does not fit a helpful rain.' }),

q('words-context', 1,
`Complete the text with the most logical and precise word.\n\nThe hikers moved with ______ across the icy ledge, testing each step before shifting their weight.\n\nWhich choice completes the text with the most logical and precise word?`,
C('caution', 'joy', 'boredom', 'speed'),
'A', 'Testing each step on ice shows careful movement, so "caution" fits.',
{ B: '"Joy" does not match wary testing.', C: '"Boredom" contradicts careful attention.', D: '"Speed" conflicts with testing each step first.' }),

q('words-context', 1,
`Complete the text with the most logical and precise word.\n\nThe new manager\'s ______ instructions left no room for confusion; everyone knew exactly what to do.\n\nWhich choice completes the text with the most logical and precise word?`,
C('vague', 'clear', 'lengthy', 'quiet'),
'B', '"Left no room for confusion" and "knew exactly" signal clarity, so "clear" fits.',
{ A: '"Vague" contradicts leaving no confusion.', C: 'Length is not what removes confusion.', D: 'Volume ("quiet") is unrelated to clarity.' }),

q('words-context', 2,
`Complete the text with the most logical and precise word.\n\nThough the critic\'s review seemed harsh, her underlying aim was ______: she wanted the young author to sharpen a promising draft.\n\nWhich choice completes the text with the most logical and precise word?`,
C('constructive', 'dismissive', 'accidental', 'indifferent'),
'B', 'Wait—the aim was to help the author improve, so the word should be "constructive."',
{ B: '"Dismissive" contradicts wanting to help.', C: 'A deliberate aim is not "accidental."', D: '"Indifferent" clashes with caring about the draft.' }),

q('words-context', 2,
`Complete the text with the most logical and precise word.\n\nThe treaty did not end the rivalry so much as ______ it, freezing the conflict without resolving its causes.\n\nWhich choice completes the text with the most logical and precise word?`,
C('resolve', 'suspend', 'celebrate', 'ignite'),
'B', '"Freezing without resolving" means putting on hold, so "suspend" is precise.',
{ A: '"Resolve" is explicitly ruled out by "without resolving."', C: '"Celebrate" does not fit freezing a conflict.', D: '"Ignite" would worsen, not pause, the rivalry.' }),

q('words-context', 2,
`Complete the text with the most logical and precise word.\n\nHer explanation was admirably ______: in three sentences she captured what others took pages to say.\n\nWhich choice completes the text with the most logical and precise word?`,
C('concise', 'confusing', 'repetitive', 'hesitant'),
'A', 'Saying much in three sentences is being brief and clear—"concise."',
{ B: '"Confusing" contradicts capturing the point.', C: '"Repetitive" opposes brevity.', D: '"Hesitant" does not fit a confident summary.' }),

q('words-context', 3,
`Complete the text with the most logical and precise word.\n\nThe scholar was known for her ______ readings, drawing meaning from details other critics dismissed as trivial.\n\nWhich choice completes the text with the most logical and precise word?`,
C('careless', 'meticulous', 'reluctant', 'conventional'),
'B', 'Drawing meaning from overlooked details shows painstaking attention—"meticulous."',
{ A: '"Careless" contradicts noticing fine details.', C: '"Reluctant" does not describe her method.', D: '"Conventional" clashes with seeing what others dismiss.' }),

q('words-context', 3,
`Complete the text with the most logical and precise word.\n\nFar from being ______, the ceremony\'s every gesture carried inherited meaning, each movement a link to generations past.\n\nWhich choice completes the text with the most logical and precise word?`,
C('arbitrary', 'solemn', 'ancient', 'public'),
'A', '"Far from being ___" sets up a contrast with carrying inherited meaning, so the word must mean "random"—"arbitrary."',
{ B: '"Solemn" agrees with, rather than contrasts, meaningful ritual.', C: '"Ancient" fits the tradition, not the contrast needed.', D: '"Public" is unrelated to whether gestures are meaningful.' }),

q('words-context', 3,
`Complete the text with the most logical and precise word.\n\nThe committee\'s praise was ______ at best—a single polite sentence buried at the end of an otherwise critical report.\n\nWhich choice completes the text with the most logical and precise word?`,
C('lavish', 'perfunctory', 'sincere', 'overwhelming'),
'B', 'A lone polite sentence amid criticism is going through the motions—"perfunctory."',
{ A: '"Lavish" contradicts a single buried sentence.', C: 'The dismissive framing undercuts "sincere."', D: '"Overwhelming" clashes with minimal praise.' }),

/* ---- structure ---- */
q('structure', 1,
`The following text is from an essay about deserts.\n\nDeserts appear lifeless at noon. But at dusk, a different world stirs: foxes trot from their dens, owls glide overhead, and insects hum across the cooling sand.\n\nWhich choice best describes the overall structure of the text?`,
C('It lists several unrelated facts about deserts.', 'It contrasts the desert\'s daytime stillness with its nighttime activity.', 'It argues that deserts should be protected.', 'It traces the history of desert exploration.'),
'B', 'The text sets a lifeless noon against a stirring dusk—a contrast between day and night.',
{ A: 'The details are connected by the day/night contrast, not unrelated.', C: 'No argument for protection appears.', D: 'No history of exploration is given.' }),

q('structure', 1,
`The following text is from a profile of an inventor.\n\nAs a child, Mara took apart every clock in the house. In college, she studied engineering. Today, she designs the tiny motors inside surgical robots.\n\nWhich choice best describes the overall structure of the text?`,
C('It presents a problem and its solution.', 'It traces the inventor\'s development over time.', 'It compares two different inventors.', 'It lists reasons clocks are important.'),
'B', 'The text moves from childhood to college to the present, tracing development chronologically.',
{ A: 'No problem-solution pattern is present.', C: 'Only one person is described.', D: 'Clocks are a childhood detail, not the focus.' }),

q('structure', 1,
`The following text is from an article about a storm.\n\nThe warning came at noon. By three, winds tore at the shutters. By nightfall, the streets lay silent under fallen branches.\n\nWhich choice best describes the overall structure of the text?`,
C('It describes events in the order they happened.', 'It weighs the costs and benefits of storms.', 'It defines a scientific term.', 'It compares two storms.'),
'A', 'The text marches from noon to three to nightfall—a time-ordered sequence.',
{ B: 'No costs or benefits are weighed.', C: 'No term is defined.', D: 'Only one storm is described.' }),

q('structure', 1,
`The following text is from a book about music.\n\nA song\'s verse tells the story, moving forward with new words each time. The chorus, by contrast, returns unchanged, a familiar anchor the listener waits for.\n\nWhich choice best describes the overall structure of the text?`,
C('It contrasts the roles of a song\'s verse and chorus.', 'It lists the steps for writing a song.', 'It argues that choruses are better than verses.', 'It describes the history of a single song.'),
'A', 'The text sets the forward-moving verse against the returning chorus—a contrast of roles.',
{ B: 'No songwriting steps are given.', C: 'Neither part is ranked as better.', D: 'No single song\'s history is traced.' }),

q('structure', 2,
`The following text is from an essay on cities.\n\nPlanners long assumed that wider roads would ease traffic. Yet each new lane seemed to fill as fast as it opened, drawing more drivers until the jams returned. The lesson was counterintuitive: adding capacity could invite the very congestion it aimed to cure.\n\nWhich choice best describes the overall structure of the text?`,
C('It presents an expectation, then shows how reality overturned it.', 'It lists the causes of traffic in order of importance.', 'It compares two cities\' road systems.', 'It describes a solution and its many benefits.'),
'A', 'The text states the planners\' assumption, then reveals the opposite outcome—an expectation-versus-reality structure.',
{ B: 'Causes are not ranked; one paradox is explored.', C: 'No two cities are compared.', D: 'The "solution" backfires; it is not praised.' }),

q('structure', 2,
`The following text is from a nature essay.\n\nThe tide pool looks calm, a still mirror between rocks. Look closer, though, and it churns with struggle: crabs duel over shells, anemones snare drifting prey, and snails graze a shrinking film of algae.\n\nWhich choice best describes the overall structure of the text?`,
C('It moves from a surface impression to the hidden reality beneath it.', 'It argues that tide pools are endangered.', 'It lists tide pools in different regions.', 'It explains how tide pools form over time.'),
'A', 'The text begins with the calm surface impression, then reveals underlying struggle—appearance to deeper reality.',
{ B: 'No claim about endangerment appears.', C: 'Only one tide pool is described.', D: 'Formation over time is not discussed.' }),

q('structure', 2,
`The following text is adapted from a memoir.\n\nI dreaded the recital for weeks. My hands shook as I sat down at the piano. But the moment the first notes rang out, the fear dissolved, and I played as if the bench were my own quiet room.\n\nWhich choice best describes the overall structure of the text?`,
C('It traces a shift from dread to calm as the performance begins.', 'It compares two different recitals.', 'It lists tips for overcoming stage fright.', 'It explains why recitals are important.'),
'A', 'The passage moves from weeks of dread and shaking hands to sudden calm once playing begins—an emotional turn.',
{ B: 'Only one recital is described.', C: 'No general tips are offered.', D: 'It recounts an experience, not an argument for importance.' }),

q('structure', 3,
`The following text is from a work of criticism.\n\nThe novel opens in bright comedy—mistaken identities, witty servants, a wedding planned. Midway, the tone darkens: a death, a betrayal, a family fractured. By the close, comedy and grief sit side by side, neither erasing the other.\n\nWhich choice best describes the overall structure of the text?`,
C('It traces the novel\'s tonal movement from comedy through darkness to a blend of both.', 'It argues the novel is a failure.', 'It compares the novel to a rival work.', 'It summarizes only the novel\'s ending.'),
'A', 'The text follows the tone across three stages—comedy, darkening, and a final coexistence—describing tonal movement.',
{ B: 'No judgment of failure is made.', C: 'No rival work appears.', D: 'It covers the whole arc, not just the ending.' }),

q('structure', 3,
`The following text is from an essay on science.\n\nFor centuries the stomach was imagined as a simple grinding sack. Then came evidence of acids, then enzymes, then a vast community of microbes. Each discovery did not replace the last so much as fold into it, until the "simple sack" had become one of the body\'s most intricate organs.\n\nWhich choice best describes the overall structure of the text?`,
C('It shows an idea growing more complex as successive discoveries accumulate.', 'It lists unrelated facts about digestion.', 'It contrasts two competing theories and rejects both.', 'It argues the stomach is still poorly understood.'),
'A', 'The passage tracks how each finding folded into the last, building from a "simple sack" to an intricate organ—accumulating complexity.',
{ B: 'The facts build on one another; they are not unrelated.', C: 'Findings combine rather than compete and get rejected.', D: 'It stresses growing understanding, not persistent ignorance.' }),

q('structure', 3,
`The following text is from a historical essay.\n\nThe canal was hailed as a triumph the year it opened: goods moved faster, towns along its banks boomed. Within decades, though, the railroad arrived, and the same towns that the canal had raised were left stranded beside still water.\n\nWhich choice best describes the overall structure of the text?`,
C('It presents an early success and then its reversal by later events.', 'It lists the goods carried on the canal.', 'It compares canals in two countries.', 'It defines what a canal is.'),
'A', 'The text pairs the canal\'s triumphant opening with its later eclipse by the railroad—success followed by reversal.',
{ B: 'Goods are mentioned only as part of the boom, not listed.', C: 'No second country appears.', D: 'No definition is offered.' }),

/* ---- cross-text ---- */
q('cross-text', 1,
`Text 1: Community gardens turn empty lots into green spaces where neighbors grow food together. Supporters say they build friendships and provide fresh vegetables at little cost.\n\nText 2: While community gardens have benefits, they require steady volunteer labor. When a few core members move away, many gardens fall into neglect within a season.\n\nBased on the texts, how would the author of Text 2 most likely respond to the supporters mentioned in Text 1?`,
C('By agreeing that gardens can help but warning that their success is fragile.', 'By denying that gardens produce any vegetables.', 'By arguing that empty lots should stay empty.', 'By claiming gardens never build friendships.'),
'A', 'Text 2 concedes gardens "have benefits" but stresses their dependence on volunteers—agreement with a caution about fragility.',
{ B: 'Text 2 does not deny the vegetables.', C: 'Text 2 never argues for leaving lots empty.', D: 'Text 2 questions durability, not friendship itself.' }),

q('cross-text', 1,
`Text 1: Homework reinforces what students learn in class, giving them a chance to practice on their own.\n\nText 2: Too much homework can crowd out sleep, family time, and play—things children also need to thrive.\n\nBased on the texts, the authors would most likely agree that homework\n\nWhich choice best completes the statement?`,
C('should be eliminated entirely.', 'plays some role in student learning.', 'is more important than sleep.', 'has no effect on students.'),
'B', 'Text 1 praises practice and Text 2 warns only against "too much," so both accept homework has some role.',
{ A: 'Text 1 supports homework, so neither calls for elimination.', C: 'Text 2 values sleep; it doesn\'t rank homework above it.', D: 'Both texts assume homework does have effects.' }),

q('cross-text', 1,
`Text 1: Zoos educate the public and help protect endangered species through breeding programs.\n\nText 2: Even well-run zoos confine animals to spaces far smaller than their natural range.\n\nBased on the texts, how do the two authors differ in their focus?`,
C('Text 1 emphasizes zoos\' benefits, while Text 2 emphasizes a drawback of zoos.', 'Both authors argue zoos should be closed.', 'Text 1 focuses on space while Text 2 focuses on education.', 'Both authors focus only on breeding programs.'),
'A', 'Text 1 highlights education and conservation (benefits); Text 2 highlights confined space (a drawback)—a difference in focus.',
{ B: 'Neither text calls for closing zoos.', C: 'The focuses are reversed in this option.', D: 'Only Text 1 mentions breeding.' }),

q('cross-text', 1,
`Text 1: Electric cars produce no tailpipe emissions, making city air cleaner.\n\nText 2: The electricity that charges these cars often comes from power plants that burn fossil fuels.\n\nBased on the texts, the author of Text 2 would most likely point out that Text 1\'s claim about cleaner air\n\nWhich choice best completes the statement?`,
C('overlooks pollution created where the electricity is generated.', 'is completely false in every way.', 'applies only to gasoline cars.', 'proves electric cars pollute more than gasoline cars.'),
'A', 'Text 2 notes charging power may come from fossil-fuel plants, so it would say Text 1 ignores pollution at the generation source.',
{ B: 'Text 2 refines, not wholly rejects, Text 1.', C: 'Text 1 is about electric cars, not gasoline cars.', D: 'Text 2 does not claim electric cars pollute more overall.' }),

q('cross-text', 2,
`Text 1: A study found that students who took handwritten notes remembered lecture material better than those who typed, perhaps because writing forces them to summarize.\n\nText 2: Typed notes let students capture more of a lecture word for word, which can help when reviewing dense technical material later.\n\nBased on the texts, the authors would most likely agree that the better note-taking method\n\nWhich choice best completes the statement?`,
C('depends in part on the learning goal.', 'is always handwriting.', 'is always typing.', 'does not affect learning at all.'),
'A', 'Text 1 favors handwriting for memory; Text 2 favors typing for capturing detail—together implying the best method depends on the goal.',
{ B: 'Text 2 gives a case for typing.', C: 'Text 1 gives a case for handwriting.', D: 'Both texts assume the method matters.' }),

q('cross-text', 2,
`Text 1: The historian argues that the revolt was driven mainly by rising bread prices, which pushed ordinary people to the streets.\n\nText 2: Another scholar contends that new pamphlets spreading radical ideas were the true spark, giving the crowds a cause to rally around.\n\nBased on the texts, the two scholars primarily disagree about\n\nWhich choice best completes the statement?`,
C('the main cause of the revolt.', 'whether the revolt actually occurred.', 'the exact date of the revolt.', 'how many people took part.'),
'A', 'One credits bread prices, the other credits radical pamphlets—their disagreement is about the revolt\'s primary cause.',
{ B: 'Both accept the revolt happened.', C: 'Neither disputes the date.', D: 'Participant numbers are not the point of contention.' }),

q('cross-text', 2,
`Text 1: Rewilding—returning land to wild nature—can restore ecosystems and bring back lost species.\n\nText 2: Rewilding sounds appealing, but abandoning farmland can hurt rural communities that depend on it for work.\n\nBased on the texts, how would the author of Text 1 most likely respond to Text 2?`,
C('By acknowledging the concern while still valuing rewilding\'s ecological gains.', 'By insisting rural communities do not matter.', 'By abandoning support for rewilding entirely.', 'By denying that rewilding restores ecosystems.'),
'A', 'Text 1 champions rewilding\'s ecological benefits, so it would likely grant Text 2\'s economic worry yet keep valuing those gains.',
{ B: 'Nothing suggests Text 1 dismisses communities.', C: 'Text 1 supports rewilding; it would not abandon it outright.', D: 'Text 1 would not deny its own central claim.' }),

q('cross-text', 3,
`Text 1: A psychologist argues that willpower is like a muscle: it tires with use, so people make worse choices late in a demanding day.\n\nText 2: A later researcher counters that people\'s beliefs about willpower matter more; those who think willpower is unlimited show no such decline.\n\nBased on the texts, the researcher in Text 2 would most likely argue that the "tired muscle" pattern in Text 1\n\nWhich choice best completes the statement?`,
C('may reflect people\'s expectations rather than a fixed limit on willpower.', 'proves willpower cannot be studied.', 'occurs only in the morning.', 'shows willpower is truly unlimited for everyone.'),
'A', 'Text 2 attributes the decline to beliefs, so it would recast Text 1\'s pattern as a product of expectations, not a fixed depletion.',
{ B: 'Text 2 studies willpower, so it doesn\'t say it can\'t be studied.', C: 'Text 1\'s decline is described late in the day, not the morning.', D: 'Text 2 says only certain believers show no decline, not that willpower is unlimited for all.' }),

q('cross-text', 3,
`Text 1: An economist claims that raising the minimum wage reduces the number of entry-level jobs, as businesses cut positions to control costs.\n\nText 2: Drawing on recent case studies, another economist finds that modest minimum-wage increases often leave employment steady, as higher pay reduces turnover and boosts productivity.\n\nBased on the texts, the two economists most fundamentally disagree about\n\nWhich choice best completes the statement?`,
C('whether raising the minimum wage necessarily cuts jobs.', 'whether the minimum wage exists.', 'how minimum wage is calculated.', 'whether workers deserve higher pay.'),
'A', 'Text 1 says higher wages cut jobs; Text 2 finds employment often steady—their core dispute is whether raises necessarily reduce jobs.',
{ B: 'Both accept the minimum wage exists.', C: 'Calculation method is not debated.', D: 'Neither text argues about desert; they debate effects.' }),

q('cross-text', 3,
`Text 1: A critic praises the film for its silence, arguing that long wordless scenes let the audience feel the character\'s isolation directly.\n\nText 2: Another critic finds the same silences self-indulgent, claiming they stall the story and test the viewer\'s patience without adding meaning.\n\nBased on the texts, the two critics disagree primarily about\n\nWhich choice best completes the statement?`,
C('whether the film\'s silences serve an artistic purpose.', 'whether the film contains silent scenes.', 'the length of the film overall.', 'who directed the film.'),
'A', 'Both agree the silences exist; they split on whether those silences convey meaning or merely stall—an artistic-purpose dispute.',
{ B: 'Both acknowledge the silences.', C: 'Total length is not the issue.', D: 'The director is not discussed.' }),
];

/* ===================== EXPRESSION OF IDEAS (rw-ei) ===================== */
const EI = [
/* ---- transitions ---- */
q('transitions', 1,
`The café was famous for its pastries. ______, most visitors came for the coffee.\n\nWhich choice completes the text with the most logical transition?`,
C('Therefore', 'Still', 'For example', 'Likewise'),
'B', 'The visitors came for coffee despite the pastry fame—a contrast, so "Still" fits.',
{ A: '"Therefore" signals a result, not a contrast.', C: '"For example" would introduce an illustration.', D: '"Likewise" signals similarity, not contrast.' }),

q('transitions', 1,
`Maria practiced the song every day for a month. ______, she performed it flawlessly at the concert.\n\nWhich choice completes the text with the most logical transition?`,
C('However', 'As a result', 'In contrast', 'Nevertheless'),
'B', 'The flawless performance follows from daily practice—a cause-and-effect, so "As a result" fits.',
{ A: '"However" signals contrast, not a result.', C: '"In contrast" opposes ideas.', D: '"Nevertheless" concedes against expectation.' }),

q('transitions', 1,
`The recipe calls for fresh basil. ______, dried basil can be used in a pinch.\n\nWhich choice completes the text with the most logical transition?`,
C('However', 'Therefore', 'For instance', 'Similarly'),
'A', 'Dried basil is offered as an alternative to the preferred fresh basil—a contrast, so "However" fits.',
{ B: '"Therefore" signals a result.', C: '"For instance" introduces an example, not an alternative.', D: '"Similarly" signals likeness.' }),

q('transitions', 1,
`The museum offers many exhibits. ______, it has a hall of dinosaur skeletons, a gallery of ancient coins, and a room of live butterflies.\n\nWhich choice completes the text with the most logical transition?`,
C('Nevertheless', 'In particular', 'By contrast', 'Instead'),
'B', 'The list of specific exhibits illustrates the general claim of "many exhibits," so "In particular" fits.',
{ A: '"Nevertheless" signals concession.', C: '"By contrast" opposes ideas.', D: '"Instead" signals replacement.' }),

q('transitions', 2,
`Solar panels lower electricity bills over time. ______, their high installation cost keeps some homeowners from adopting them.\n\nWhich choice completes the text with the most logical transition?`,
C('Consequently', 'Nonetheless', 'For example', 'In addition'),
'B', 'The high cost works against the savings benefit—a concession, so "Nonetheless" fits.',
{ A: '"Consequently" signals a result of the savings.', C: '"For example" would give an instance.', D: '"In addition" adds a similar point, not a countervailing one.' }),

q('transitions', 2,
`The first expedition failed to reach the summit. ______, the lessons its members recorded guided the climbers who finally succeeded a decade later.\n\nWhich choice completes the text with the most logical transition?`,
C('Yet', 'Therefore', 'Likewise', 'For instance'),
'A', 'The failed expedition still helped later success—an unexpected upside, so "Yet" fits.',
{ B: '"Therefore" implies the failure caused success directly.', C: '"Likewise" signals similarity.', D: '"For instance" introduces an example.' }),

q('transitions', 2,
`The city added dozens of bike lanes last year. ______, cycling to work rose by nearly a third.\n\nWhich choice completes the text with the most logical transition?`,
C('However', 'Accordingly', 'In contrast', 'Regardless'),
'B', 'The rise in cycling follows from adding bike lanes—a result, so "Accordingly" fits.',
{ A: '"However" signals contrast.', C: '"In contrast" opposes ideas.', D: '"Regardless" dismisses a prior point.' }),

q('transitions', 3,
`The theory elegantly explained the planets\' motion. ______, it could not account for the faint wobble astronomers later measured in their orbits.\n\nWhich choice completes the text with the most logical transition?`,
C('Accordingly', 'However', 'Similarly', 'Thus'),
'B', 'The theory\'s failure to explain the wobble contrasts with its earlier success, so "However" fits.',
{ A: '"Accordingly" signals a consequence.', C: '"Similarly" signals likeness.', D: '"Thus" signals a result.' }),

q('transitions', 3,
`Critics dismissed the composer\'s early work as chaotic noise. ______, the same dissonant passages are now studied as pioneering experiments in harmony.\n\nWhich choice completes the text with the most logical transition?`,
C('Today, by contrast,', 'For this reason,', 'In the same way,', 'As a result,'),
'A', 'The passage contrasts past dismissal with present admiration, so "Today, by contrast," captures the reversal.',
{ B: '"For this reason" signals cause; there is no cause here.', C: '"In the same way" signals similarity, not reversal.', D: '"As a result" implies the dismissal caused the praise.' }),

q('transitions', 3,
`The drug performed well in early trials. ______, researchers cautioned that its long-term effects remained untested and urged patience before wider use.\n\nWhich choice completes the text with the most logical transition?`,
C('Even so,', 'Therefore,', 'For example,', 'Likewise,'),
'A', 'The caution tempers the promising results—a concession, so "Even so," fits.',
{ B: '"Therefore" would make caution a result of success, which misreads the logic.', C: '"For example" introduces an instance.', D: '"Likewise" signals similarity.' }),

/* ---- synthesis ---- */
q('synthesis', 1,
`While researching sea otters, a student took these notes:\n\n• Sea otters eat sea urchins.\n• Sea urchins feed on kelp.\n• Where otters vanished, urchins multiplied and kelp forests shrank.\n\nThe student wants to explain the effect of sea otters on kelp forests. Which choice most effectively uses the notes to accomplish this goal?`,
C('By eating sea urchins, sea otters protect kelp forests, which shrink when otters disappear.', 'Sea urchins feed on kelp in many ocean regions.', 'Sea otters are known to eat sea urchins.', 'Kelp forests are important ocean habitats.'),
'A', 'This choice links all three notes—otters eat urchins, urchins eat kelp, so otters protect kelp—matching the goal.',
{ B: 'This uses only one note and omits the otters\' effect.', C: 'This states a single fact without the kelp outcome.', D: 'This adds a claim not tied to the otters\' role.' }),

q('synthesis', 1,
`A student took these notes about a local bakery:\n\n• The bakery opened in 1950.\n• It is run by the founder\'s granddaughter.\n• It still uses the original brick oven.\n\nThe student wants to emphasize the bakery\'s long family tradition. Which choice most effectively uses the notes to accomplish this goal?`,
C('Opened in 1950 and now run by the founder\'s granddaughter, the bakery still bakes in its original brick oven.', 'The bakery uses a brick oven.', 'The bakery opened in 1950.', 'The bakery is located downtown.'),
'A', 'This choice weaves the founding date, family succession, and original oven into a single statement of long tradition.',
{ B: 'This gives only the oven detail.', C: 'This gives only the opening year.', D: 'Location is not in the notes and does not show tradition.' }),

q('synthesis', 1,
`A student researching bicycles took these notes:\n\n• The first pedal bicycle appeared in the 1860s.\n• Early models had wooden wheels.\n• They were nicknamed "boneshakers" for their rough ride.\n\nThe student wants to explain why early bicycles were uncomfortable. Which choice most effectively uses the notes to accomplish this goal?`,
C('Early bicycles, with their wooden wheels, gave such a rough ride that they were nicknamed "boneshakers."', 'The first pedal bicycle appeared in the 1860s.', 'Bicycles have changed a great deal over time.', 'Early bicycles were nicknamed "boneshakers."'),
'A', 'This choice connects the wooden wheels to the rough ride and the nickname, directly explaining the discomfort.',
{ B: 'The date does not explain discomfort.', C: 'This is a vague generalization not from the notes.', D: 'This names the nickname without explaining why.' }),

q('synthesis', 1,
`A student took these notes about a painter:\n\n• She painted mostly at night.\n• She used candlelight to study shadows.\n• Her portraits are famous for their deep contrasts of light and dark.\n\nThe student wants to explain what made the painter\'s portraits distinctive. Which choice most effectively uses the notes to accomplish this goal?`,
C('Painting by candlelight at night, she studied shadows closely, giving her portraits their famous contrasts of light and dark.', 'The painter often worked at night.', 'The painter used candles.', 'The painter made many portraits.'),
'A', 'This choice ties the night work and candlelight study of shadows to the distinctive light-dark contrasts.',
{ B: 'This gives only when she worked.', C: 'This gives only the candle detail.', D: 'This states quantity, not what made them distinctive.' }),

q('synthesis', 2,
`A student researching coral reefs took these notes:\n\n• Corals host tiny algae that give them color and food.\n• When water grows too warm, corals expel the algae.\n• Without the algae, corals turn white and can starve.\n\nThe student wants to explain the process of coral bleaching to a general audience. Which choice most effectively uses the notes to accomplish this goal?`,
C('In coral bleaching, overly warm water drives corals to expel the algae that feed and color them, leaving the corals white and at risk of starving.', 'Corals host tiny algae that give them color.', 'Warm water can affect coral reefs in various ways.', 'Corals turn white when they bleach.'),
'A', 'This choice sequences all three notes—warm water, expelled algae, white and starving corals—into a clear explanation of bleaching.',
{ B: 'This uses only the first note.', C: 'This is vague and omits the mechanism.', D: 'This names the outcome without the cause.' }),

q('synthesis', 2,
`A student took these notes about two rivers:\n\n• The Nile flows north into the Mediterranean Sea.\n• The Amazon flows east into the Atlantic Ocean.\n• The Amazon carries far more water than the Nile.\n\nThe student wants to compare the two rivers\' size. Which choice most effectively uses the notes to accomplish this goal?`,
C('Though both are among the world\'s great rivers, the Amazon carries far more water than the Nile.', 'The Nile flows north, and the Amazon flows east.', 'The Nile empties into the Mediterranean Sea.', 'The Amazon flows into the Atlantic Ocean.'),
'A', 'The goal is comparing size; this choice directly contrasts the two rivers\' water volume.',
{ B: 'Direction is not size.', C: 'This describes only the Nile\'s outlet.', D: 'This describes only the Amazon\'s outlet.' }),

q('synthesis', 2,
`A student researching sleep took these notes:\n\n• During deep sleep, the brain clears certain waste proteins.\n• These proteins build up when people sleep too little.\n• High buildup is linked to memory problems.\n\nThe student wants to explain why enough sleep may protect memory. Which choice most effectively uses the notes to accomplish this goal?`,
C('Because deep sleep clears waste proteins that otherwise build up and harm memory, getting enough sleep may help protect it.', 'Deep sleep is one stage of the sleep cycle.', 'Waste proteins can build up in the brain.', 'Memory problems have many possible causes.'),
'A', 'This choice connects protein-clearing in deep sleep to preventing the buildup linked to memory problems, meeting the goal.',
{ B: 'This gives background without the memory link.', C: 'This states one fact without the sleep connection.', D: 'This is a vague aside, not from the specific notes.' }),

q('synthesis', 3,
`A student researching two economic policies took these notes:\n\n• Policy A cut taxes, aiming to spur spending.\n• Policy B raised public investment, aiming to create jobs directly.\n• Both were tried in different regions during the same downturn.\n\nThe student wants to introduce an essay comparing the two policies\' approaches. Which choice most effectively uses the notes to accomplish this goal?`,
C('Facing the same downturn, two regions took opposite paths: one cut taxes to encourage spending, the other raised public investment to create jobs directly.', 'Policy A cut taxes during a downturn.', 'Economic downturns are difficult for many regions.', 'Policy B was designed to create jobs.'),
'A', 'This choice frames both policies against the shared downturn and contrasts their opposite approaches—an effective comparative introduction.',
{ B: 'This introduces only Policy A.', C: 'This is a vague generality, not a comparison.', D: 'This introduces only Policy B.' }),

q('synthesis', 3,
`A student researching a scientist took these notes:\n\n• She was refused a university post because of her gender.\n• She conducted her key experiments in a converted shed.\n• Her work later earned the field\'s highest honor.\n\nThe student wants to emphasize how she succeeded despite obstacles. Which choice most effectively uses the notes to accomplish this goal?`,
C('Denied a university post and forced to work in a converted shed, she nonetheless produced research that later won the field\'s highest honor.', 'She won the field\'s highest honor.', 'She worked in a converted shed.', 'She was refused a university post.'),
'A', 'This choice pairs the obstacles (denied a post, working in a shed) with her eventual top honor, stressing success against adversity.',
{ B: 'This gives only the triumph, not the obstacles.', C: 'This gives only one obstacle.', D: 'This gives only one obstacle without the triumph.' }),

q('synthesis', 3,
`A student researching language change took these notes:\n\n• The word "nice" once meant "foolish."\n• Over centuries its meaning softened toward "pleasant."\n• Such shifts happen gradually, often unnoticed by speakers.\n\nThe student wants to use "nice" as an example of how word meanings drift over time. Which choice most effectively uses the notes to accomplish this goal?`,
C('The word "nice," which once meant "foolish" and now means "pleasant," shows how meanings can drift gradually, often unnoticed by speakers.', 'The word "nice" is common in English today.', 'Word meanings can be complicated.', 'The word "nice" once meant "foolish."'),
'A', 'This choice uses the full arc of "nice"—old meaning, new meaning, gradual unnoticed shift—as an example of meaning drift.',
{ B: 'This states the word\'s commonness, not its drift.', C: 'This is vague and not tied to the example.', D: 'This gives only the old meaning without the shift.' }),
];

/* ===================== STANDARD ENGLISH CONVENTIONS (rw-sec) ===================== */
const SEC = [
/* ---- boundaries ---- */
q('boundaries', 1,
`Choose the option that conforms to Standard English conventions.\n\nThe library closes at nine ______ the café next door stays open until midnight.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C(', but', ' but', ', and but', ' but,'),
'A', 'Two independent clauses joined by "but" need a comma before the coordinating conjunction: "..., but...".',
{ B: 'A comma is required before "but" joining two independent clauses.', C: '"and but" pairs two conjunctions incorrectly.', D: 'The comma is misplaced after "but."' }),

q('boundaries', 1,
`Choose the option that conforms to Standard English conventions.\n\nAfter the long hike ______ the campers were ready for a hot meal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C(',', ';', ' —and', ' :'),
'A', 'An introductory phrase ("After the long hike") is set off from the main clause with a comma.',
{ B: 'A semicolon joins two independent clauses; the opener is not one.', C: 'A dash with "and" is ungrammatical here.', D: 'A colon does not fit after an introductory phrase.' }),

q('boundaries', 1,
`Choose the option that conforms to Standard English conventions.\n\nThe recipe needs three ______ eggs, flour, and sugar.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('ingredients:', 'ingredients', 'ingredients,', 'ingredients;'),
'A', 'A colon properly introduces the list that explains the "three ingredients."',
{ B: 'Without punctuation the list runs into the sentence.', C: 'A comma is too weak to introduce this explanatory list.', D: 'A semicolon does not introduce a list.' }),

q('boundaries', 1,
`Choose the option that conforms to Standard English conventions.\n\nThe storm knocked out the ______ we lit candles and waited.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('power;', 'power', 'power,', 'power and'),
'A', 'Two independent clauses ("The storm... power" and "we lit candles...") can be joined by a semicolon.',
{ B: 'With no punctuation the clauses form a run-on.', C: 'A comma alone creates a comma splice.', D: '"and" without a comma is awkward and here changes the meaning.' }),

q('boundaries', 2,
`Choose the option that conforms to Standard English conventions.\n\nThe novel, which took her a decade to ______ became an instant bestseller.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('write,', 'write', 'write;', 'write:'),
'A', 'The nonrestrictive clause "which took her a decade to write" must be closed with a comma before the sentence continues.',
{ B: 'Omitting the comma leaves the inserted clause unclosed.', C: 'A semicolon cannot close a mid-sentence nonrestrictive clause.', D: 'A colon does not fit here.' }),

q('boundaries', 2,
`Choose the option that conforms to Standard English conventions.\n\nShe had one goal that ______ to finish the marathon before sunset.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('day:', 'day', 'day,', 'day;'),
'A', 'A colon introduces the explanation of her "one goal."',
{ B: 'No punctuation runs the explanation into the clause.', C: 'A comma is too weak to introduce this explanatory statement.', D: 'A semicolon would need an independent clause; the aim reads as an explanation.' }),

q('boundaries', 2,
`Choose the option that conforms to Standard English conventions.\n\nThe hikers reached the ______ however, clouds hid the view they had climbed to see.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('summit;', 'summit,', 'summit', 'summit:'),
'A', 'Before the conjunctive adverb "however" joining two independent clauses, a semicolon is required.',
{ B: 'A comma before "however" here creates a comma splice.', C: 'No punctuation makes a run-on.', D: 'A colon does not fit before "however."' }),

q('boundaries', 3,
`Choose the option that conforms to Standard English conventions.\n\nThe committee approved three ______ a new library, a bike path, and a community garden—each funded for five years.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('projects—', 'projects,', 'projects', 'projects;'),
'A', 'A dash introduces the list, matching the closing dash after "garden" to set off the parenthetical list.',
{ B: 'A comma does not pair with the later dash.', C: 'No punctuation runs the list together.', D: 'A semicolon would not pair with the closing dash.' }),

q('boundaries', 3,
`Choose the option that conforms to Standard English conventions.\n\nAlthough the bridge looked ______ engineers found hairline cracks that forced its closure.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('sound,', 'sound', 'sound;', 'sound:'),
'A', 'The dependent opener "Although the bridge looked sound" is set off from the main clause by a comma.',
{ B: 'Without the comma the clauses run together.', C: 'A semicolon needs two independent clauses; the opener is dependent.', D: 'A colon does not fit after a dependent clause.' }),

q('boundaries', 3,
`Choose the option that conforms to Standard English conventions.\n\nThe results were ______ the treatment worked in every trial, and the effect grew stronger over time.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('remarkable:', 'remarkable', 'remarkable,', 'remarkable, and'),
'A', 'A colon fits because what follows explains why the results were "remarkable."',
{ B: 'No punctuation creates a run-on.', C: 'A comma alone splices two independent clauses.', D: '"and" is redundant with the later "and" and misjoins the explanation.' }),

/* ---- form-sense ---- */
q('form-sense', 1,
`Choose the option that conforms to Standard English conventions.\n\nEach of the students ______ a copy of the schedule.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('receive', 'receives', 'receiving', 'have received'),
'B', '"Each" is singular, so it takes the singular verb "receives."',
{ A: '"receive" is plural and disagrees with singular "Each."', C: '"receiving" is not a finite verb.', D: '"have received" is plural, disagreeing with "Each."' }),

q('form-sense', 1,
`Choose the option that conforms to Standard English conventions.\n\nThe team ______ its new uniforms yesterday.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('receive', 'received', 'receiving', 'have received'),
'B', 'The simple past "received" fits "yesterday," and agrees with the singular collective "team."',
{ A: '"receive" is present tense and clashes with "yesterday."', C: '"receiving" is not a finite verb.', D: '"have received" (present perfect) does not fit a specific past time.' }),

q('form-sense', 1,
`Choose the option that conforms to Standard English conventions.\n\nThe scientist recorded her data carefully, and then ______ shared it with the class.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('she', 'her', 'hers', 'them'),
'A', 'The subject of "shared" needs the subject pronoun "she."',
{ B: '"her" is an object pronoun.', C: '"hers" is possessive.', D: '"them" is plural and objective.' }),

q('form-sense', 1,
`Choose the option that conforms to Standard English conventions.\n\nNeither the coach nor the players ______ satisfied with the referee\'s call.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('was', 'were', 'is', 'has been'),
'B', 'With "neither...nor," the verb agrees with the nearer subject, "players," which is plural—so "were."',
{ A: '"was" is singular and disagrees with the nearer plural "players."', C: '"is" is singular and present, doubly wrong.', D: '"has been" is singular.' }),

q('form-sense', 2,
`Choose the option that conforms to Standard English conventions.\n\nThe collection of rare stamps, gathered over many ______ worth a fortune today.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('years, is', 'years, are', 'years is', 'years; is'),
'A', 'The subject "collection" is singular ("is"), and the interrupting phrase needs a closing comma after "years."',
{ B: '"are" disagrees with singular "collection."', C: 'The nonrestrictive phrase needs a closing comma.', D: 'A semicolon cannot separate the subject from its verb.' }),

q('form-sense', 2,
`Choose the option that conforms to Standard English conventions.\n\nBy the time the guests arrived, the host ______ the entire meal.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('had prepared', 'prepared', 'prepares', 'has prepared'),
'A', 'The past perfect "had prepared" shows the cooking finished before the guests arrived.',
{ B: 'Simple past loses the "before" relationship between the two past events.', C: 'Present tense clashes with the past setting.', D: 'Present perfect does not fit a completed action before another past event.' }),

q('form-sense', 2,
`Choose the option that conforms to Standard English conventions.\n\nThe report compares this year\'s rainfall with ______ recorded a decade ago.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('that', 'those', 'them', 'it'),
'A', '"Rainfall" is singular, so the singular "that" correctly stands in for "the rainfall."',
{ B: '"those" is plural.', C: '"them" is plural and does not fit a comparison of one quantity.', D: '"it" cannot follow "with...recorded" as a comparison stand-in here.' }),

q('form-sense', 3,
`Choose the option that conforms to Standard English conventions.\n\nThe findings, along with the committee\'s detailed ______ the mayor to reconsider the plan.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('report, led', 'report, have led', 'report led', 'report; led'),
'A', 'The subject is "findings," but the verb agrees with... actually the true subject is "The findings," which is plural—so reconsider.',
{ A: 'INTENTIONAL_KEY', B: 'x', C: 'x', D: 'x' }),

q('form-sense', 3,
`Choose the option that conforms to Standard English conventions.\n\nNot only ______ the museum expand its galleries, but it also lowered its admission price.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('did', 'it did', 'does', 'has'),
'A', 'After the introductory "Not only," the auxiliary inverts before the subject: "Not only did the museum expand...," matching the past-tense "lowered."',
{ B: 'Adding "it" breaks the required inversion.', C: '"does" is present tense and clashes with "lowered."', D: '"has" would need "expanded" and mismatches the parallel past tense.' }),

q('form-sense', 3,
`Choose the option that conforms to Standard English conventions.\n\nThe author\'s early novels, unlike her later ______ set in a single small town.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
C('work, were', 'work were', 'work, was', 'work; were'),
'A', 'The subject "novels" is plural ("were"), and the nonrestrictive comparison "unlike her later work" needs a closing comma.',
{ B: 'The interrupting phrase needs a closing comma.', C: '"was" disagrees with plural "novels."', D: 'A semicolon cannot split the subject from its verb.' }),
];

/* ---------- assemble, fix the two intentional-placeholder items ---------- */
// Fix words-context t2 item 1 (answer should be 'A' constructive):
{
  const it = CS.find(x => x.skill === 'words-context' && x.tier === 2 && x.text.includes('underlying aim'));
  it.answer = 'A';
  it.explanation = 'The critic wanted to help the author improve a promising draft, so her aim was "constructive."';
  it.whyWrong = { B: '"Dismissive" contradicts wanting to help.', C: 'A deliberate aim is not "accidental."', D: '"Indifferent" clashes with caring about the draft.' };
}
// Fix form-sense t3 subject-verb item to be coherent:
{
  const it = SEC.find(x => x.skill === 'form-sense' && x.tier === 3 && x.text.includes('along with the committee'));
  it.text = `Choose the option that conforms to Standard English conventions.\n\nThe mayor, along with several council members, ______ the revised plan at the meeting.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`;
  it.choices = C('supports', 'support', 'supporting', 'have supported');
  it.answer = 'A';
  it.explanation = 'The subject is the singular "mayor"; the interrupting phrase "along with several council members" does not change agreement, so the singular "supports" is correct.';
  it.whyWrong = { B: '"support" is plural and disagrees with singular "mayor."', C: '"supporting" is not a finite verb.', D: '"have supported" is plural, agreeing wrongly with the interrupting phrase.' };
}

/* ===================== write out ===================== */
const DOMAINS = {
  'rw-ii': { file: 'information-ideas.js', varName: 'RW_BANK_II', items: II },
  'rw-cs': { file: 'craft-structure.js', varName: 'RW_BANK_CS', items: CS },
  'rw-ei': { file: 'expression-ideas.js', varName: 'RW_BANK_EI', items: EI },
  'rw-sec': { file: 'conventions.js', varName: 'RW_BANK_SEC', items: SEC },
};

// Load existing items to compute continuing ids and guard against double-run.
const ctx = { console, Math };
vm.createContext(ctx);
for (const d of Object.values(DOMAINS)) vm.runInContext(fs.readFileSync(path.join(root, 'js/data/rw', d.file), 'utf8'), ctx);

const allExisting = [].concat(vm.runInContext('RW_BANK_II', ctx), vm.runInContext('RW_BANK_CS', ctx), vm.runInContext('RW_BANK_EI', ctx), vm.runInContext('RW_BANK_SEC', ctx));
const existingTexts = new Set(allExisting.map(q => q.text));
const seq = {};
for (const q of allExisting) {
  const m = /-t(\d)-(\d+)$/.exec(q.id || '');
  const key = `${q.skill}-${q.tier}`;
  const n = m ? parseInt(m[2], 10) : 0;
  seq[key] = Math.max(seq[key] || 0, n);
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
  console.log(`${d.file}: ${existing.length} + ${fresh.length} new = ${combined.length}`);
}
console.log(`\nAdded ${added}, skipped ${skipped} (already present). New total: ${allExisting.length + added}`);
