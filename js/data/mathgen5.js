/* SAT Quest — ORIGINAL math generator templates (blueprint batch 5).
   Loaded AFTER mathgen.js…mathgen4.js. This batch adds genuinely NEW problem
   TYPES (not number-permutations of existing ones) in the areas most useful for
   daily practice: systems word problems, successive percent change, function
   composition, exponential half-life, ratio shares, and weighted averages.

   Every instance is built ANSWER-FIRST — the correct value is computed directly
   from the chosen parameters, so the keyed answer is correct by construction and
   the distractors model specific, named mistakes. Drawn from abstract SAT
   blueprints; no official text, numbers, scenarios, or figures are used. Depends
   on globals: ri, pick, round2, mcFromValues, gridQ, MATH_GENERATORS,
   GRID_GENERATORS. */

function bp5(q) { return { ...q, source: 'blueprint-generated' }; }

/* ===================== SYSTEMS (word problem) ===================== */
/* Two item types with different prices; given the total count and total cost,
   find how many of one type. Unique integer solution by construction. */
function gen5_system_word(tier) {
  const items = pick([
    { scene: 'A theater sold', u1: 'child', u2: 'adult', unit: 'tickets', money: '$' },
    { scene: 'A stand sold', u1: 'small', u2: 'large', unit: 'drinks', money: '$' },
    { scene: 'A shop sold', u1: 'paperback', u2: 'hardcover', unit: 'books', money: '$' },
    { scene: 'A stall sold', u1: 'single', u2: 'double', unit: 'scoops', money: '$' },
  ]);
  const p1 = pick([2, 3, 4, 5]);
  let p2 = pick([6, 7, 8, 9, 10]);
  const n1 = ri(4, 12 + tier * 2);           // count of type 1 (the answer)
  const n2 = ri(4, 12 + tier * 2);           // count of type 2
  const total = n1 + n2;
  const cost = n1 * p1 + n2 * p2;
  const q = mcFromValues(n1, [
    { v: n2, why: `This is the number of ${items.u2} ${items.unit}, not ${items.u1} ${items.unit}.` },
    { v: total - n1 - 1, why: 'This does not satisfy both equations; check the total cost.' },
    { v: Math.round(cost / (p1 + p2)), why: 'This divides the cost by the sum of the two prices, which is not how the system works.' },
  ]);
  return bp5({ skill: 'systems',
    text: `${items.scene} ${total} ${items.unit} in one day. Each ${items.u1} ${items.unit.replace(/s$/, '')} costs ${items.money}${p1} and each ${items.u2} ${items.unit.replace(/s$/, '')} costs ${items.money}${p2}. If the total sales were ${items.money}${cost}, how many ${items.u1} ${items.unit} were sold?`, ...q,
    explanation: `Let x = ${items.u1} and y = ${items.u2}. Then x + y = ${total} and ${p1}x + ${p2}y = ${cost}. Substituting y = ${total} − x gives ${p1}x + ${p2}(${total} − x) = ${cost}, so ${p1 - p2}x = ${cost - p2 * total}, and x = ${n1}. Check: ${n1} + ${n2} = ${total} and ${p1}(${n1}) + ${p2}(${n2}) = ${cost}. ✓` });
}

/* ===================== PERCENTAGES (successive change) ===================== */
/* Apply one percent change to a starting amount; result is exact by choosing a
   divisible starting value. */
function gen5_percent_change(tier) {
  const dir = pick(['increase', 'decrease']);
  const r = pick([10, 20, 25, 40, 50]);
  const base = pick([20, 40, 60, 80, 120, 160, 200, 240]);
  const start = base * pick([1, 2, 3]);              // keeps r% of start an integer
  const delta = start * r / 100;
  const result = dir === 'increase' ? start + delta : start - delta;
  const scenes = pick([
    { noun: 'A jacket', priced: 'priced at', money: '$' },
    { noun: 'A membership', priced: 'costing', money: '$' },
    { noun: 'A monthly plan', priced: 'billed at', money: '$' },
  ]);
  const q = mcFromValues(result, [
    { v: dir === 'increase' ? start - delta : start + delta, why: `This changes the amount in the wrong direction (a ${dir === 'increase' ? 'decrease' : 'increase'}).` },
    { v: start + r, why: `This adds ${r} rather than ${r}% of the amount.` },
    { v: delta, why: `This is only the amount of the change, not the new total.` },
  ], (x) => `$${x}`);
  return bp5({ skill: 'percentages',
    text: `${scenes.noun} ${scenes.priced} ${scenes.money}${start} is set to ${dir} by ${r}%. What is the new price?`, ...q,
    explanation: `${r}% of ${scenes.money}${start} is ${scenes.money}${delta}. A${dir === 'increase' ? 'n increase' : ' decrease'} gives ${scenes.money}${start} ${dir === 'increase' ? '+' : '−'} ${scenes.money}${delta} = ${scenes.money}${result}.` });
}

/* ===================== FUNCTIONS (composition) ===================== */
/* f(g(k)) with two linear functions; integer result by construction. */
function gen5_function_composition(tier) {
  const a = ri(2, 4), b = ri(1, 6), c = ri(2, 4), d = ri(1, 6), k = ri(1, 5);
  const gk = c * k + d;
  const ans = a * gk + b;                   // f(g(k))
  const swapped = c * (a * k + b) + d;      // g(f(k)), a common mix-up
  const q = mcFromValues(ans, [
    { v: swapped, why: 'This computes g(f(k)); composition order matters, so evaluate g first, then f.' },
    { v: a * k + b, why: 'This evaluates only f(k), ignoring the inner function g.' },
    { v: gk, why: 'This stops at g(k) without applying f.' },
  ]);
  return bp5({ skill: 'functions',
    text: `The functions f and g are defined by f(x) = ${a}x + ${b} and g(x) = ${c}x + ${d}. What is the value of f(g(${k}))?`, ...q,
    explanation: `First find g(${k}) = ${c}(${k}) + ${d} = ${gk}. Then f(${gk}) = ${a}(${gk}) + ${b} = ${ans}.` });
}

/* ===================== EXPONENTIALS (half-life) ===================== */
/* Quantity halves every h time units; find the amount left after a whole number
   of half-lives. Exact by choosing a start divisible by 2^n. */
function gen5_exp_halflife(tier) {
  const n = pick([2, 3, 4]);                 // number of half-lives
  const start = pick([2, 3, 5]) * Math.pow(2, n) * pick([1, 2, 4]); // divisible by 2^n
  const h = pick([3, 5, 10]);                // hours per half-life
  const t = n * h;
  const remaining = start / Math.pow(2, n);
  const q = mcFromValues(remaining, [
    { v: start - remaining, why: 'This is the amount lost, not the amount remaining.' },
    { v: start / 2, why: 'This halves the sample only once instead of once per half-life.' },
    { v: remaining * 2, why: 'This uses one too few half-lives.' },
  ], (x) => `${x} mg`);
  return bp5({ skill: 'exponentials',
    text: `A ${start} mg sample of a substance decays by half every ${h} hours. How much remains after ${t} hours?`, ...q,
    explanation: `In ${t} hours there are ${t} ÷ ${h} = ${n} half-lives. The amount left is ${start} ÷ 2^${n} = ${start} ÷ ${Math.pow(2, n)} = ${remaining} mg.` });
}

/* ===================== RATIOS (dividing in a ratio) ===================== */
/* Split a total into a 3-part ratio; find one part. Exact: total divisible by sum. */
function gen5_ratio_share(tier) {
  let r1 = ri(1, 4), r2 = ri(1, 5), r3 = ri(1, 5);
  const sum = r1 + r2 + r3;
  const unit = ri(4, 15);
  const total = sum * unit;                  // divisible by sum
  const target = pick([{ r: r1, idx: 'first' }, { r: r2, idx: 'second' }, { r: r3, idx: 'third' }]);
  const share = target.r * unit;
  const scenes = pick([
    { who: 'three partners', what: 'profit', money: '$' },
    { who: 'three teams', what: 'prize', money: '$' },
    { who: 'three funds', what: 'grant', money: '$' },
  ]);
  const q = mcFromValues(share, [
    { v: total - share, why: 'This is the amount left for the other two shares, not this one.' },
    { v: (target.r + 1) * unit, why: 'This counts one part too many for this share.' },
    { v: (target.r <= 1 ? target.r + 2 : target.r - 1) * unit, why: 'This counts the wrong number of parts for this share.' },
  ], (x) => `${scenes.money}${x}`);
  return bp5({ skill: 'ratios',
    text: `A ${scenes.money}${total} ${scenes.what} is divided among ${scenes.who} in the ratio ${r1} : ${r2} : ${r3}. How much is the ${target.idx} share?`, ...q,
    explanation: `The ratio has ${r1} + ${r2} + ${r3} = ${sum} parts, so each part is worth ${scenes.money}${total} ÷ ${sum} = ${scenes.money}${unit}. The ${target.idx} share is ${target.r} × ${scenes.money}${unit} = ${scenes.money}${share}.` });
}

/* ===================== STATISTICS (weighted average) ===================== */
/* Combined mean of two groups; integer by construction. */
function gen5_weighted_avg(tier) {
  const n1 = pick([2, 3, 4, 5, 6]);
  let n2 = pick([2, 3, 4, 5, 6]);
  const m1 = ri(60, 80);
  // Deterministically find an m2 that makes the combined total exact; if none in
  // range, fall back to equal group sizes with an even mean gap (always exact).
  let m2 = null;
  for (let cand = 70; cand <= 95; cand++) { if ((n1 * m1 + n2 * cand) % (n1 + n2) === 0) { m2 = cand; break; } }
  if (m2 === null) { n2 = n1; m2 = m1 + 2 * ri(2, 10); }
  const combined = (n1 * m1 + n2 * m2) / (n1 + n2);
  const q = mcFromValues(combined, [
    { v: Math.round((m1 + m2) / 2), why: 'This averages the two means directly, ignoring that the groups differ in size.' },
    { v: m1 + m2, why: 'This adds the two means instead of forming a weighted average.' },
    { v: Math.max(m1, m2), why: 'The combined mean lies between the two group means, not at the larger one.' },
  ]);
  return bp5({ skill: 'statistics',
    text: `One class of ${n1} students has an average score of ${m1}, and another class of ${n2} students has an average score of ${m2}. What is the average score of all ${n1 + n2} students combined?`, ...q,
    explanation: `The combined average weights each group by its size: (${n1}×${m1} + ${n2}×${m2}) ÷ (${n1} + ${n2}) = ${n1 * m1 + n2 * m2} ÷ ${n1 + n2} = ${combined}.` });
}

/* ===================== GRID-IN VARIANTS ===================== */
function gen5grid_system(tier) {
  const p1 = pick([2, 3, 4]), p2 = pick([5, 6, 7, 8]);
  const n1 = ri(5, 14), n2 = ri(5, 14);
  const total = n1 + n2, cost = n1 * p1 + n2 * p2;
  return bp5(gridQ('systems',
    `A vendor sold ${total} items in all: small items at $${p1} each and large items at $${p2} each. If total sales were $${cost}, how many small items were sold?`,
    n1,
    `Let x be small items: x + y = ${total} and ${p1}x + ${p2}y = ${cost}. Solving, x = ${n1}.`,
    { hint: 'Set up two equations and substitute.' }));
}

function gen5grid_exp_halflife(tier) {
  const n = pick([2, 3]);
  const start = pick([2, 3, 5]) * Math.pow(2, n) * pick([1, 2]);
  const h = pick([4, 6, 10]);
  const t = n * h;
  const remaining = start / Math.pow(2, n);
  return bp5(gridQ('exponentials',
    `A ${start}-gram sample halves every ${h} hours. How many grams remain after ${t} hours?`,
    remaining,
    `There are ${t} ÷ ${h} = ${n} half-lives, so ${start} ÷ 2^${n} = ${remaining} grams remain.`,
    { hint: 'Count the half-lives, then divide by 2 that many times.' }));
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath5() {
  const MC5 = {
    'systems': [gen5_system_word],
    'percentages': [gen5_percent_change],
    'functions': [gen5_function_composition],
    'exponentials': [gen5_exp_halflife],
    'ratios': [gen5_ratio_share],
    'statistics': [gen5_weighted_avg],
  };
  const GRID5 = {
    'systems': [gen5grid_system],
    'exponentials': [gen5grid_exp_halflife],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC5)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID5)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
