/* SAT Quest — ORIGINAL procedural Reading & Writing generators.
   Loaded AFTER the authored R&W bank and mathgen.js (for qSignature). These
   cover the two most rule-deterministic R&W skills — Transitions and Words in
   Context — where a correct answer can be guaranteed by construction, so the
   generator produces genuine, high-variety SAT-style items rather than filler.

   Each item is assembled from a hand-written scenario bank (real sentences on
   varied topics) plus a controlled word set, so every generated item has ONE
   unambiguous correct answer and plausible distractors. Items are tagged
   origin:'generated', source:'blueprint-generated', and carry a stable content
   signature so the runthrough anti-repeat and question-history systems track
   them exactly like generated math.

   These are ORIGINAL: no official passage, sentence, answer choice, or
   explanation is copied or paraphrased. Depends on globals: qSignature (mathgen),
   SKILLS, TIER_LABEL, TIME_TARGETS. */

(function () {
  'use strict';

  function ri(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ===================== TRANSITIONS ===================== */
  // Transition words grouped by the logical relationship they signal.
  const REL_WORDS = {
    contrast:   ['However', 'Nevertheless', 'In contrast', 'On the other hand', 'Even so', 'Conversely'],
    addition:   ['Moreover', 'In addition', 'Furthermore', 'Additionally', 'What is more'],
    cause:      ['Therefore', 'Consequently', 'As a result', 'Thus', 'For this reason'],
    example:    ['For example', 'For instance', 'To illustrate', 'In particular'],
    sequence:   ['Subsequently', 'Later', 'Afterward', 'Eventually'],
    emphasis:   ['Indeed', 'In fact', 'Notably'],
    similarity: ['Similarly', 'Likewise', 'In the same way'],
    concession: ['Admittedly', 'Granted', 'To be sure'],
  };
  const REL_LABEL = {
    contrast: 'a contrast', addition: 'an addition of a related point', cause: 'a cause-and-effect result',
    example: 'an example', sequence: 'a step later in time', emphasis: 'an emphasis or intensification',
    similarity: 'a comparison', concession: 'a concession',
  };
  const REL_DOES = {
    contrast: 'reverses or qualifies the idea in the first sentence',
    addition: 'adds a further, related point in the same direction',
    cause: 'states a result that follows from the first sentence',
    example: 'gives a specific instance of the first sentence',
    sequence: 'reports what happened next in time',
    emphasis: 'restates the point more forcefully',
    similarity: 'draws a parallel with the first sentence',
    concession: 'grants a limited point before the main claim',
  };

  // Scenario bank: each has two sentences and the relationship between them.
  // The blank begins the second sentence. Written so the relationship is clear.
  const TRANS = [
    { a: 'The new bridge was designed to cut the cross-town commute in half.', b: 'many drivers found their trips barely faster, because traffic simply shifted to the connecting roads.', rel: 'contrast' },
    { a: 'Solar panels have become far cheaper to manufacture over the past decade.', b: 'the cost of installing and connecting them to the grid has fallen more slowly.', rel: 'contrast' },
    { a: 'The orchestra rehearsed the difficult passage dozens of times.', b: 'the conductor asked them to play it once more before the concert.', rel: 'addition' },
    { a: 'The museum extended its evening hours to attract more visitors.', b: 'it lowered the price of admission on weekdays.', rel: 'addition' },
    { a: 'Heavy rain fell across the valley for three straight days.', b: 'the river rose above its banks and flooded the low-lying farms.', rel: 'cause' },
    { a: 'The company automated its most repetitive tasks.', b: 'employees were able to spend more time on creative work.', rel: 'cause' },
    { a: 'Some desert plants survive long droughts by storing water in their stems.', b: 'the saguaro cactus can hold hundreds of liters after a single rainfall.', rel: 'example' },
    { a: 'Certain birds change their diet as the seasons shift.', b: 'the cedar waxwing eats insects in summer but switches to berries in winter.', rel: 'example' },
    { a: 'The researchers first collected soil samples from each plot.', b: 'they measured the nitrogen content of every sample in the lab.', rel: 'sequence' },
    { a: 'The city council approved the park design in the spring.', b: 'construction crews broke ground at the site that autumn.', rel: 'sequence' },
    { a: 'The author revised her manuscript several times before submitting it.', b: 'she rewrote the entire opening chapter twice.', rel: 'emphasis' },
    { a: 'The coral reef showed signs of stress during the warm summer.', b: 'more than half of its colonies had lost their color by September.', rel: 'emphasis' },
    { a: 'A well-designed survey uses clear, neutral wording to avoid bias.', b: 'a careful experiment isolates a single variable to test a cause.', rel: 'similarity' },
    { a: 'Bees communicate the location of flowers through a looping dance.', b: 'ants lay chemical trails that guide their nestmates to food.', rel: 'similarity' },
    { a: 'The proposed policy would reduce the town’s energy costs over time.', b: 'the upfront investment it requires is considerable.', rel: 'concession' },
    { a: 'The novel’s plot is undeniably clever and tightly constructed.', b: 'its characters can feel more like puzzle pieces than people.', rel: 'concession' },
    { a: 'The factory installed sensors to monitor the temperature of each machine.', b: 'engineers could spot an overheating part before it failed.', rel: 'cause' },
    { a: 'Many early telescopes distorted the images they produced.', b: 'astronomers still used them to map craters on the Moon.', rel: 'contrast' },
    { a: 'The trail climbs steadily for the first two miles.', b: 'it levels off along a ridge with a wide view of the valley.', rel: 'sequence' },
    { a: 'The chef wanted every dish to highlight local produce.', b: 'she visited the farmers’ market before planning each week’s menu.', rel: 'cause' },
    { a: 'Recycling programs work best when the rules are simple.', b: 'residents are far more likely to sort waste correctly when the categories are clear.', rel: 'cause' },
    { a: 'The startup’s first product sold well in a handful of stores.', b: 'national retailers were reluctant to stock an unproven brand.', rel: 'contrast' },
    { a: 'Volunteers cleared the invasive weeds from the wetland in March.', b: 'they planted native grasses along the water’s edge.', rel: 'sequence' },
    { a: 'Reading aloud can help writers catch awkward sentences.', b: 'it exposes rhythms and repetitions the eye tends to skip.', rel: 'cause' },
    { a: 'The spacecraft’s cameras captured detailed images of the moon’s surface.', b: 'its instruments measured the faint magnetic field around it.', rel: 'addition' },
    { a: 'Historians long assumed the settlement had been abandoned suddenly.', b: 'recent excavations suggest it was emptied gradually over many years.', rel: 'contrast' },
    { a: 'The tutoring program improved students’ test scores.', b: 'it noticeably increased their confidence in class discussions.', rel: 'addition' },
    { a: 'Some fungi form partnerships with the roots of trees.', b: 'certain species trade minerals from the soil for sugars from the tree.', rel: 'example' },
    { a: 'The committee gathered feedback from residents for months.', b: 'it published a revised plan that reflected their concerns.', rel: 'sequence' },
    { a: 'Electric buses are quieter and cleaner than diesel ones.', b: 'their limited range still makes them impractical on the longest routes.', rel: 'concession' },
    { a: 'The photographer waited hours for the light to soften.', b: 'the final image glowed with a warmth the midday sun could not provide.', rel: 'cause' },
    { a: 'Careful editors check every quotation against its source.', b: 'meticulous fact-checkers verify each figure before publication.', rel: 'similarity' },
  ];

  function genTransition() {
    const item = pick(TRANS);
    const rel = item.rel;
    const correct = pick(REL_WORDS[rel]);
    // choose three distractor relationships different from the correct one
    const otherRels = shuffle(Object.keys(REL_WORDS).filter(r => r !== rel)).slice(0, 3);
    const distractors = otherRels.map(r => ({ word: pick(REL_WORDS[r]), rel: r }));
    const options = shuffle([{ word: correct, rel, correct: true }, ...distractors]);
    const letters = ['A', 'B', 'C', 'D'];
    const whyWrong = {};
    let answer = 'A';
    const choices = options.map((o, i) => {
      if (o.correct) answer = letters[i];
      else whyWrong[letters[i]] = `“${o.word}” signals ${REL_LABEL[o.rel]}, but the second sentence ${REL_DOES[rel]}, so this transition is illogical here.`;
      return { letter: letters[i], text: o.word };
    });
    const text = `${item.a} ______ ${item.b}\n\nWhich choice completes the text with the most logical transition?`;
    return finalize({
      skill: 'transitions',
      text,
      choices, answer, whyWrong,
      explanation: `The second sentence ${REL_DOES[rel]}. That calls for ${REL_LABEL[rel]}, which “${correct}” correctly signals.`,
    });
  }

  /* ===================== WORDS IN CONTEXT ===================== */
  // Each scenario has a blank, the single best word, and three real words that
  // are the wrong meaning or register for the context. Written so exactly one
  // choice fits.
  const WORDS = [
    { text: 'Because the evidence was so ______, the jury reached a verdict within an hour.', ans: 'conclusive', wrong: [['ambiguous', 'means unclear — the opposite of what a quick verdict implies'], ['tentative', 'means hesitant or provisional, not decisive'], ['ornate', 'describes elaborate decoration, unrelated to evidence']], gloss: 'Evidence that leads to a fast verdict is decisive, or conclusive.' },
    { text: 'The critic praised the film’s ______ pacing, which never let the tension slacken.', ans: 'relentless', wrong: [['sluggish', 'means slow — the opposite of maintained tension'], ['erratic', 'means inconsistent, which would undercut steady tension'], ['transparent', 'means easy to see through, not a description of pace']], gloss: 'Pacing that never eases is unrelenting, or relentless.' },
    { text: 'Rather than accept the first offer, the negotiator remained ______ and waited for better terms.', ans: 'steadfast', wrong: [['impulsive', 'means acting without thought, unlike patient waiting'], ['indifferent', 'means uninterested, but the negotiator clearly cared'], ['fragile', 'means easily broken, not a stance in a negotiation']], gloss: 'Someone who holds firm and waits is steadfast.' },
    { text: 'The scientist’s early results were ______, so she repeated the experiment before drawing conclusions.', ans: 'inconclusive', wrong: [['definitive', 'means final and settled, which would not require repeating'], ['abundant', 'describes quantity, not the reliability of a result'], ['audible', 'refers to sound, irrelevant here']], gloss: 'Results that settle nothing are inconclusive.' },
    { text: 'The mural’s colors were so ______ that visitors could see it from across the plaza.', ans: 'vivid', wrong: [['muted', 'means subdued — the opposite of eye-catching'], ['brittle', 'describes texture, not color intensity'], ['frugal', 'means thrifty, unrelated to appearance']], gloss: 'Colors bright enough to see from far away are vivid.' },
    { text: 'His explanation was admirably ______: not a single word was wasted.', ans: 'concise', wrong: [['rambling', 'means long-winded — the opposite of no wasted words'], ['obscure', 'means hard to understand, not brief'], ['generous', 'means giving, not a description of brevity']], gloss: 'Language with no wasted words is concise.' },
    { text: 'The old treaty had become ______, and both nations agreed it no longer applied.', ans: 'obsolete', wrong: [['binding', 'means still in force — the opposite of no longer applying'], ['pristine', 'means spotless and new, not outdated'], ['lucrative', 'means profitable, unrelated to an outdated treaty']], gloss: 'Something no longer in use is obsolete.' },
    { text: 'She gave a ______ account of the trip, leaving out no detail her readers might want.', ans: 'thorough', wrong: [['cursory', 'means hasty and superficial — the opposite of leaving out nothing'], ['reluctant', 'means unwilling, not detailed'], ['portable', 'describes what can be carried, irrelevant here']], gloss: 'A complete, detailed account is thorough.' },
    { text: 'The committee’s support was merely ______; few members truly believed in the plan.', ans: 'nominal', wrong: [['wholehearted', 'means fully committed — the opposite of the sentence'], ['unanimous', 'means agreed by all, which contradicts “few believed”'], ['fragrant', 'refers to smell, unrelated to support']], gloss: 'Support in name only is nominal.' },
    { text: 'The engineer proposed a ______ solution that solved several problems at once.', ans: 'elegant', wrong: [['clumsy', 'means awkward — the opposite of a neat solution'], ['redundant', 'means unnecessarily repetitive, not efficient'], ['nocturnal', 'means active at night, irrelevant here']], gloss: 'A neat, efficient solution is elegant.' },
    { text: 'Once a ______ river, it now trickles through the canyon after years of drought.', ans: 'mighty', wrong: [['meager', 'means scanty — the opposite of a once-powerful river'], ['tepid', 'describes lukewarm temperature, not size or force'], ['candid', 'means frank, unrelated to a river']], gloss: 'A powerful river is a mighty one.' },
    { text: 'The author’s tone is ______, poking gentle fun at the very customs she describes.', ans: 'ironic', wrong: [['earnest', 'means sincere and serious — not poking fun'], ['frantic', 'means panicked, not a description of gentle humor'], ['opaque', 'means unclear, not a tone of humor']], gloss: 'A tone that gently mocks is ironic.' },
    { text: 'Their first attempt was ______, but with practice the dancers grew precise and smooth.', ans: 'tentative', wrong: [['polished', 'means refined — the opposite of a shaky first try'], ['permanent', 'means lasting, not hesitant'], ['edible', 'refers to food, irrelevant here']], gloss: 'A hesitant, unsure first try is tentative.' },
    { text: 'The manager’s ______ praise, offered so rarely, meant a great deal to the team.', ans: 'sparing', wrong: [['constant', 'means unceasing — the opposite of rarely offered'], ['hollow', 'means insincere, but the praise clearly mattered'], ['spherical', 'describes a shape, irrelevant here']], gloss: 'Praise given rarely is sparing.' },
    { text: 'The documentary was ______ in its research, citing hundreds of primary sources.', ans: 'meticulous', wrong: [['careless', 'means sloppy — the opposite of citing hundreds of sources'], ['brief', 'means short, not a measure of care'], ['savory', 'describes taste, irrelevant here']], gloss: 'Extremely careful, detailed work is meticulous.' },
    { text: 'Far from being ______, the professor welcomed questions that challenged her ideas.', ans: 'defensive', wrong: [['curious', 'means eager to learn, which the sentence actually affirms'], ['generous', 'means giving, not a reaction to challenge'], ['aquatic', 'means living in water, irrelevant here']], gloss: '“Far from being” sets up the opposite of welcoming challenge — that is being defensive.' },
    { text: 'The bridge’s design is ______, relying on a single graceful arch rather than heavy supports.', ans: 'minimalist', wrong: [['cluttered', 'means crowded with parts — the opposite of a single arch'], ['fraudulent', 'means dishonest, unrelated to design'], ['humid', 'describes moisture, irrelevant here']], gloss: 'A pared-down design relying on little is minimalist.' },
    { text: 'The report’s conclusions were ______, drawn only after the team ruled out every alternative.', ans: 'warranted', wrong: [['premature', 'means too early — the opposite of ruling out alternatives first'], ['fictional', 'means invented, not justified'], ['portable', 'describes what can be carried, irrelevant here']], gloss: 'Conclusions justified by careful work are warranted.' },
    { text: 'Although the instructions seemed ______ at first, they became clear once we tried the steps.', ans: 'daunting', wrong: [['trivial', 'means unimportant — the opposite of intimidating'], ['fluent', 'describes smooth speech, not instructions'], ['metallic', 'describes material, irrelevant here']], gloss: 'Instructions that seem intimidating at first are daunting.' },
    { text: 'The senator was known for ______ remarks that revealed little of her true position.', ans: 'evasive', wrong: [['candid', 'means frank and open — the opposite of revealing little'], ['melodic', 'describes music, not speech content'], ['punctual', 'means on time, unrelated here']], gloss: 'Remarks that dodge and reveal little are evasive.' },
    { text: 'The volunteers’ ______ effort cleared the entire beach in a single afternoon.', ans: 'concerted', wrong: [['halfhearted', 'means lacking effort — the opposite of clearing a whole beach fast'], ['solitary', 'means alone, but many volunteers worked together'], ['edible', 'refers to food, irrelevant here']], gloss: 'A coordinated group effort is concerted.' },
    { text: 'His argument, though ______, ultimately rested on a single unproven assumption.', ans: 'persuasive', wrong: [['feeble', 'means weak, but the sentence contrasts strength with a hidden flaw'], ['audible', 'refers to sound, not argument quality'], ['annual', 'means yearly, irrelevant here']], gloss: 'An argument that convinces is persuasive; “though” sets up the hidden flaw.' },
    { text: 'The garden was left ______ for years, and weeds soon overran the once-tidy beds.', ans: 'untended', wrong: [['pristine', 'means spotless — the opposite of overrun by weeds'], ['fertile', 'describes rich soil, not neglect'], ['vocal', 'means outspoken, irrelevant here']], gloss: 'A garden left uncared-for is untended.' },
  ];

  function genWordsContext() {
    const item = pick(WORDS);
    const opts = shuffle([{ word: item.ans, correct: true }, ...item.wrong.map(w => ({ word: w[0], why: w[1] }))]);
    const letters = ['A', 'B', 'C', 'D'];
    const whyWrong = {};
    let answer = 'A';
    const choices = opts.map((o, i) => {
      if (o.correct) answer = letters[i];
      else whyWrong[letters[i]] = `“${cap(o.word)}” ${o.why}.`;
      return { letter: letters[i], text: o.word };
    });
    const text = `${item.text}\n\nWhich choice completes the text with the most logical and precise word or phrase?`;
    return finalize({
      skill: 'words-context',
      text, choices, answer, whyWrong,
      explanation: `${item.gloss} “${cap(item.ans)}” is the precise fit.`,
    });
  }

  /* ===================== SHARED FINALIZER ===================== */
  function finalize(q) {
    const sig = (typeof qSignature === 'function')
      ? qSignature(q)
      : String((q.text || '').length) + '-' + q.answer;
    const skill = q.skill;
    return {
      ...q,
      origin: 'generated',
      source: 'blueprint-generated',
      typeId: 'rwgen-' + skill,
      sig,
      variantId: 'rwgen-' + skill + '#' + sig,
      difficulty: (typeof TIER_LABEL !== 'undefined' ? (TIER_LABEL[2] || 'Medium') : 'Medium'),
      timeTarget: (typeof TIME_TARGETS !== 'undefined' && TIME_TARGETS.rw) ? (TIME_TARGETS.rw[2] || 60) : 60,
      tip: (typeof SKILL_TIPS !== 'undefined' && SKILL_TIPS[skill]) ? SKILL_TIPS[skill][0] : '',
    };
  }

  const RW_GENERATORS = { 'transitions': genTransition, 'words-context': genWordsContext };

  // Produce up to n freshly generated, text-distinct items for a skill.
  function rwGeneratedFor(skill, n) {
    const gen = RW_GENERATORS[skill];
    if (!gen) return [];
    const out = [];
    const seen = new Set();
    let guard = 0;
    while (out.length < n && guard++ < n * 8) {
      const q = gen();
      if (seen.has(q.text)) continue;
      seen.add(q.text); out.push(q);
    }
    return out;
  }

  function rwHasGenerator(skill) { return !!RW_GENERATORS[skill]; }

  // Export to the global scope for quiz.js / exam.js.
  const g = (typeof window !== 'undefined') ? window : (typeof globalThis !== 'undefined' ? globalThis : this);
  g.RW_GENERATORS = RW_GENERATORS;
  g.rwGeneratedFor = rwGeneratedFor;
  g.rwHasGenerator = rwHasGenerator;
  g.genTransition = genTransition;
  g.genWordsContext = genWordsContext;
})();
