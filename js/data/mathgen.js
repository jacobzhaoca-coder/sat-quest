/* SAT Quest — procedural generator for ORIGINAL SAT-style math questions (v2).
   Randomized numbers give effectively infinite fresh variations. Distractors
   are built from the specific mistakes the SAT tends to test (sign errors,
   off-by-one, diameter-for-radius, etc.) and each carries a reason it is wrong,
   so every question can explain both why the key is right and why the traps
   are wrong. Nothing here is copied from any official source. */

function ri(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function round2(n) { return Math.round(n * 100) / 100; }

/* Build A–D choices from a correct value and labeled distractors.
   `distractors` items may be plain values or { v, why }. Returns choices,
   answer letter, and whyWrong: { letter -> reason } (correct letter omitted). */
function mcFromValues(correct, distractors, fmt = (x) => String(x)) {
  const seen = new Set([String(correct)]);
  const wrongs = [];
  const push = (v, why) => {
    if (v === null || v === undefined) return;
    const key = String(v);
    if (seen.has(key) || v === correct) return;
    seen.add(key); wrongs.push({ v, why: why || 'This value comes from a common miscalculation for this problem type.' });
  };
  for (const d of distractors) {
    if (d && typeof d === 'object' && 'v' in d) push(d.v, d.why);
    else push(d, null);
    if (wrongs.length >= 3) break;
  }
  let guard = 0;
  while (wrongs.length < 3 && guard++ < 60) {
    const jitter = correct + pick([-4, -3, -2, -1, 1, 2, 3, 4, 5]) * (Math.abs(correct) > 20 ? ri(1, 4) : 1);
    push(jitter, 'This value does not satisfy the equation or setup.');
  }
  const all = shuffle([{ v: correct, why: null }, ...wrongs.slice(0, 3)]);
  const letters = ['A', 'B', 'C', 'D'];
  const whyWrong = {};
  const choices = all.map((item, i) => {
    if (item.why) whyWrong[letters[i]] = item.why;
    return { letter: letters[i], text: fmt(item.v) };
  });
  return { choices, answer: letters[all.findIndex(x => x.v === correct)], whyWrong };
}

/* String-choice variant (for answers like "8π" or "3/7"). */
function mcFromStrings(correct, distractors, makeExtra) {
  const seen = new Set([correct]);
  const wrongs = [];
  const push = (item) => {
    const v = typeof item === 'object' ? item.v : item;
    if (v == null || seen.has(v)) return;
    seen.add(v); wrongs.push({ v, why: (typeof item === 'object' ? item.why : null) || 'This applies the wrong formula or step for this problem.' });
  };
  distractors.forEach(push);
  let guard = 0;
  while (wrongs.length < 3 && guard++ < 60) push({ v: makeExtra(guard), why: 'This value does not match the correct computation.' });
  const all = shuffle([{ v: correct, why: null }, ...wrongs.slice(0, 3)]);
  const letters = ['A', 'B', 'C', 'D'];
  const whyWrong = {};
  const choices = all.map((item, i) => { if (item.why) whyWrong[letters[i]] = item.why; return { letter: letters[i], text: item.v }; });
  return { choices, answer: letters[all.findIndex(x => x.v === correct)], whyWrong };
}

/* ---- Algebra ---------------------------------------------------------- */

function gen_linear_eq(tier) {
  const a = ri(2, tier + 3), x = ri(2, 6 + tier * 2), b = ri(1, 12);
  const c = a * x + b;
  const q = mcFromValues(x, [
    { v: x + 1, why: 'An off-by-one slip, often from adding instead of subtracting the constant.' },
    { v: c - b, why: `This is ${a}x, not x — you still need to divide by ${a}.` },
    { v: c, why: 'This ignores the constant term entirely.' },
  ]);
  return { skill: 'linear-eq',
    text: `If ${a}x + ${b} = ${c}, what is the value of x?`, ...q,
    explanation: `Subtract ${b} from both sides: ${a}x = ${c - b}. Divide by ${a}: x = ${x}. Check: ${a}(${x}) + ${b} = ${c}. ✓` };
}

function gen_linear_func(tier) {
  const m = ri(2, 4 + tier), b = ri(1, 8), xv = ri(2, 7);
  const y = m * xv + b;
  const q = mcFromValues(y, [
    { v: m * xv, why: 'This forgets to add the constant b.' },
    { v: m + xv + b, why: 'This adds the terms instead of multiplying m by x.' },
    { v: y + m, why: 'This adds an extra slope; substitute x only once.' },
  ]);
  return { skill: 'linear-func',
    text: `The function f is defined by f(x) = ${m}x + ${b}. What is the value of f(${xv})?`, ...q,
    explanation: `Substitute x = ${xv}: f(${xv}) = ${m}(${xv}) + ${b} = ${m * xv} + ${b} = ${y}.` };
}

function gen_systems(tier) {
  const x = ri(2, 9), y = ri(1, 8);
  const s = x + y, d = x - y;
  const q = mcFromValues(x, [
    { v: y, why: 'This is the value of y, not x.' },
    { v: s, why: 'This is x + y, the sum — not x alone.' },
    { v: d, why: 'This is x − y, not x.' },
  ]);
  return { skill: 'systems',
    text: `The system of equations below has solution (x, y).\n\nx + y = ${s}\nx − y = ${d}\n\nWhat is the value of x?`, ...q,
    explanation: `Add the two equations to eliminate y: 2x = ${s + d}, so x = ${x}. (Then y = ${y}.)` };
}

function gen_inequalities(tier) {
  const a = ri(2, 5), b = ri(1, 10), c = a * ri(4, 10) + b;
  const bound = (c - b) / a;
  const q = mcFromValues(bound, [
    { v: bound + 1, why: `${bound + 1} makes the left side exceed ${c}; it does not satisfy the inequality.` },
    { v: c - b, why: `This is ${a}x, not x — divide by ${a}.` },
    { v: bound - 1, why: 'This works but is not the greatest such integer.' },
  ]);
  return { skill: 'inequalities',
    text: `What is the greatest integer value of x that satisfies ${a}x + ${b} ≤ ${c}?`, ...q,
    explanation: `Subtract ${b}: ${a}x ≤ ${c - b}. Divide by ${a}: x ≤ ${bound}. The greatest integer that works is ${bound}.` };
}

/* ---- Advanced Math ---------------------------------------------------- */

function gen_equivalent(tier) {
  // Expand a(bx + c) or (x+p)(x+q); ask for an equivalent form coefficient.
  if (Math.random() < 0.5) {
    const a = ri(2, 6), b = ri(2, 5), c = ri(1, 8);
    // a(bx + c) = ab x + ac ; ask for the coefficient of x
    const coeff = a * b, cons = a * c;
    const q = mcFromValues(coeff, [
      { v: b, why: 'This forgets to distribute a to the x-term.' },
      { v: a + b, why: 'This adds a and b instead of multiplying them.' },
      { v: cons, why: `This is the constant term (a·c), not the coefficient of x.` },
    ]);
    return { skill: 'equivalent',
      text: `The expression ${a}(${b}x + ${c}) is equivalent to ${coeff}x + ${cons}. What is the coefficient of x?`, ...q,
      explanation: `Distribute: ${a}·${b}x + ${a}·${c} = ${coeff}x + ${cons}. The coefficient of x is ${a}·${b} = ${coeff}.` };
  }
  const p = ri(1, 6), q1 = ri(1, 6);
  const bcoef = p + q1, ccoef = p * q1;
  const q = mcFromValues(bcoef, [
    { v: ccoef, why: `This is the constant term (p·q), not the coefficient of x.` },
    { v: p * q1 + 1, why: 'This does not match either coefficient in the expansion.' },
    { v: Math.abs(p - q1), why: 'This subtracts the numbers; for (x+p)(x+q) you add them for the x-coefficient.' },
  ]);
  return { skill: 'equivalent',
    text: `The expression (x + ${p})(x + ${q1}) is equivalent to x² + bx + ${ccoef}. What is the value of b?`, ...q,
    explanation: `Expand: (x + ${p})(x + ${q1}) = x² + (${p} + ${q1})x + ${ccoef} = x² + ${bcoef}x + ${ccoef}. So b = ${bcoef}.` };
}

function gen_quadratics(tier) {
  const r1 = ri(1, 6), r2 = ri(1, 6);
  const bb = r1 + r2, cc = r1 * r2;
  const bigger = Math.max(r1, r2), smaller = Math.min(r1, r2);
  const q = mcFromValues(bigger, [
    { v: smaller, why: 'This is the smaller solution; the question asks for the largest.' },
    { v: bb, why: 'This is the sum of the roots, not a root.' },
    { v: -bigger, why: 'Sign error: the factors give positive roots here.' },
  ]);
  return { skill: 'quadratics',
    text: `What is the largest solution to the equation x² − ${bb}x + ${cc} = 0?`, ...q,
    explanation: `Factor into (x − ${r1})(x − ${r2}) = 0, since ${r1} and ${r2} multiply to ${cc} and add to ${bb}. The solutions are ${smaller} and ${bigger}; the largest is ${bigger}.` };
}

function gen_exponentials(tier) {
  const a = ri(2, 8) * 100, r = pick([2, 3, 4, 5, 10]);
  const factor = 1 + r / 100;
  const q = mcFromValues(factor, [
    { v: round2(1 - r / 100), why: `This is a decay factor (1 − r); the population is growing.` },
    { v: round2(r / 100), why: 'This is the rate as a decimal, not the growth factor 1 + r.' },
    { v: 1 + r, why: 'This treats r as a whole number instead of a percent.' },
  ], (v) => String(round2(v)));
  return { skill: 'exponentials',
    text: `A population of ${a} bacteria grows by ${r}% each hour. The population after h hours is modeled by P(h) = ${a} · bʰ. What is the value of b?`, ...q,
    explanation: `A growth of ${r}% means each hour the population is multiplied by 1 + ${r}/100 = ${round2(factor)}. So b = ${round2(factor)}.` };
}

function gen_radicals(tier) {
  const y = ri(3, 9), add = ri(1, 10);
  const x = y * y - add;
  const q = mcFromValues(x, [
    { v: y * y, why: `This forgets to subtract ${add} after squaring.` },
    { v: y * y + add, why: `Sign error: you should subtract ${add}, not add it.` },
    { v: y - add, why: 'This subtracts before squaring; square both sides first.' },
  ]);
  return { skill: 'radicals',
    text: `If √(x + ${add}) = ${y}, what is the value of x?`, ...q,
    explanation: `Square both sides: x + ${add} = ${y * y}. So x = ${y * y} − ${add} = ${x}. Check: √(${x} + ${add}) = √${y * y} = ${y}. ✓` };
}

function gen_functions(tier) {
  const a = ri(1, 3), b = ri(1, 6), inp = ri(-3, 4);
  const val = a * inp * inp - b;
  const q = mcFromValues(val, [
    { v: a * inp * inp + b, why: `Sign error: the function subtracts ${b}.` },
    { v: a * inp - b, why: 'This forgets to square the input.' },
    { v: -val, why: 'This has the wrong sign; substitute carefully with parentheses.' },
  ]);
  return { skill: 'functions',
    text: `The function f is defined by f(x) = ${a}x² − ${b}. What is the value of f(${inp})?`, ...q,
    explanation: `Substitute with parentheses: f(${inp}) = ${a}(${inp})² − ${b} = ${a}(${inp * inp}) − ${b} = ${a * inp * inp} − ${b} = ${val}.` };
}

/* ---- Problem-Solving & Data Analysis ---------------------------------- */

function gen_ratios(tier) {
  const rate = ri(3, 9), qty = ri(4, 12);
  const total = rate * qty;
  const q = mcFromValues(total, [
    { v: rate + qty, why: 'This adds the rate and time instead of multiplying.' },
    { v: total - rate, why: 'This is one interval short; multiply the full time.' },
    { v: Math.round(total / 2), why: 'This halves the result for no reason.' },
  ]);
  return { skill: 'ratios',
    text: `A printer produces ${rate} pages per minute. At this rate, how many pages does it produce in ${qty} minutes?`, ...q,
    explanation: `Multiply the rate by the time: ${rate} pages/min × ${qty} min = ${total} pages.` };
}

function gen_percentages(tier) {
  const base = ri(2, 9) * 20, pct = pick([10, 15, 20, 25, 40, 50]);
  const result = base * (1 + pct / 100);
  const q = mcFromValues(result, [
    { v: base * (1 - pct / 100), why: `This subtracts the percent; the price increases.` },
    { v: base + pct, why: 'This adds the percent as dollars instead of a percentage of the price.' },
    { v: base * pct / 100, why: 'This is only the amount of the increase, not the new total.' },
  ]);
  return { skill: 'percentages',
    text: `A ticket that costs $${base} increases in price by ${pct}%. What is the new price, in dollars?`, ...q,
    explanation: `${pct}% of $${base} is ${base * pct / 100}. New price = ${base} + ${base * pct / 100} = $${result}. (Or multiply: ${base} × ${round2(1 + pct / 100)} = ${result}.)` };
}

function gen_statistics(tier) {
  const nums = Array.from({ length: 5 }, () => ri(2, 20));
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = round2(sum / nums.length);
  const q = mcFromValues(mean, [
    { v: round2(sum / (nums.length - 1)), why: 'This divides by the wrong count (one too few values).' },
    { v: Math.max(...nums), why: 'This is the largest value, not the average.' },
    { v: sum, why: 'This is the total; you still must divide by the number of values.' },
  ], (v) => String(v));
  return { skill: 'statistics',
    text: `A student recorded these scores: ${nums.join(', ')}. What is the mean of the scores?`, ...q,
    explanation: `Add the values: ${nums.join(' + ')} = ${sum}. Divide by the number of values (${nums.length}): ${sum} ÷ ${nums.length} = ${mean}.` };
}

function gen_scatterplots(tier) {
  // Line of best fit y = mx + b; predict y at a given x, or interpret slope.
  const m = ri(2, 6), b = ri(1, 20), xv = ri(3, 9);
  if (Math.random() < 0.5) {
    const y = m * xv + b;
    const q = mcFromValues(y, [
      { v: m * xv, why: 'This forgets the y-intercept b in the model.' },
      { v: m + b, why: 'This ignores the input value x.' },
      { v: y + m, why: 'This adds an extra slope step.' },
    ]);
    return { skill: 'scatterplots',
      text: `A line of best fit for a data set is modeled by y = ${m}x + ${b}, where x is the number of weeks and y is the number of members. Based on the model, how many members are predicted when x = ${xv}?`, ...q,
      explanation: `Substitute x = ${xv}: y = ${m}(${xv}) + ${b} = ${m * xv} + ${b} = ${y} members.` };
  }
  const q = mcFromValues(m, [
    { v: b, why: 'This is the starting value (y-intercept), not the rate of change.' },
    { v: m * 7, why: 'This scales the slope arbitrarily; the slope itself is the weekly change.' },
    { v: m + b, why: 'This combines the slope and intercept; the slope alone is the change per week.' },
  ]);
  return { skill: 'scatterplots',
    text: `A line of best fit is modeled by y = ${m}x + ${b}, where x is the number of weeks and y is the number of members. Which value best represents the predicted increase in members for each additional week?`, ...q,
    explanation: `In y = mx + b, the slope m is the change in y per one-unit change in x. Here each additional week adds ${m} members.` };
}

function gen_probability(tier) {
  const red = ri(3, 12), blue = ri(3, 12), green = ri(2, 8);
  const total = red + blue + green;
  const correct = `${red}/${total}`;
  const q = mcFromStrings(correct, [
    { v: `${blue}/${total}`, why: 'This is the probability of blue, not red.' },
    { v: `${red}/${blue + green}`, why: 'The denominator must be the total number of marbles, including red.' },
    { v: `${red + blue}/${total}`, why: 'This counts red and blue together, but only red is favorable.' },
  ], (g) => `${red}/${total + g}`);
  return { skill: 'probability',
    text: `A bag contains ${red} red, ${blue} blue, and ${green} green marbles. If one marble is drawn at random, what is the probability that it is red?`, ...q,
    explanation: `Probability = favorable ÷ total = ${red} red ÷ ${total} total marbles = ${red}/${total}.` };
}

function gen_sampling(tier) {
  // Conceptual: which conclusion / sample choice is appropriate.
  const kind = pick(['margin', 'representative']);
  if (kind === 'margin') {
    const n1 = pick([50, 80, 100]), n2 = n1 * pick([4, 5, 8]);
    const correct = `The estimate from the sample of ${n2} people, because a larger random sample generally has a smaller margin of error.`;
    const q = mcFromStrings(correct, [
      { v: `The estimate from the sample of ${n1} people, because smaller samples are easier to survey.`, why: 'Ease of surveying does not make an estimate more reliable; larger random samples reduce margin of error.' },
      { v: `Both estimates are equally reliable, because they used the same survey question.`, why: 'Sample size affects the margin of error even when the question is identical.' },
      { v: `Neither estimate is reliable, because surveys can never estimate a population.`, why: 'Well-designed random samples can reliably estimate a population.' },
    ], () => `A different survey with ${ri(10, 40)} people.`);
    return { skill: 'sampling',
      text: `Two researchers estimate the average number of hours students study per week. One randomly samples ${n1} students; the other randomly samples ${n2} students from the same school. Whose estimate is likely to have the smaller margin of error?`, ...q,
      explanation: `A larger random sample generally produces a smaller margin of error, so the estimate from the sample of ${n2} students is likely more precise. (This assumes both samples are random and drawn the same way.)` };
  }
  const correct = `Randomly selecting students from the entire school`;
  const q = mcFromStrings(correct, [
    { v: `Surveying only students in the honors program`, why: 'This group is not representative of the whole school.' },
    { v: `Surveying only students leaving the library`, why: 'Students at the library may study more than average, biasing the sample.' },
    { v: `Surveying the survey-takers’ own friends`, why: 'A convenience sample of friends is not representative.' },
  ], () => `Surveying the first 5 students who volunteer`);
  return { skill: 'sampling',
    text: `A school wants to estimate how many hours the typical student studies each week. Which sampling method is most likely to give a result that represents all students?`, ...q,
    explanation: `A random sample from the entire population gives every student an equal chance of selection, which best represents the whole school. The other methods draw from biased subgroups.` };
}

/* ---- Geometry & Trig -------------------------------------------------- */

function gen_area_volume(tier) {
  const shape = pick(['rectangle', 'triangle', 'box']);
  if (shape === 'rectangle') {
    const l = ri(3, 12), w = ri(3, 12), area = l * w;
    const q = mcFromValues(area, [
      { v: 2 * (l + w), why: 'This is the perimeter, not the area.' },
      { v: l + w, why: 'This adds the sides instead of multiplying them.' },
      { v: area * 2, why: 'This doubles the area unnecessarily.' },
    ]);
    return { skill: 'area-volume', text: `A rectangle has length ${l} and width ${w}. What is its area?`, ...q,
      explanation: `Area of a rectangle = length × width = ${l} × ${w} = ${area}.` };
  }
  if (shape === 'triangle') {
    const base = ri(4, 14), h = ri(3, 12), area = base * h / 2;
    const q = mcFromValues(area, [
      { v: base * h, why: 'This forgets the ½ factor in the triangle area formula.' },
      { v: base + h, why: 'This adds base and height instead of using the area formula.' },
      { v: round2(base * h / 3), why: 'The triangle formula uses ½, not ⅓.' },
    ]);
    return { skill: 'area-volume', text: `A triangle has base ${base} and height ${h}. What is its area?`, ...q,
      explanation: `Area of a triangle = ½ × base × height = ½ × ${base} × ${h} = ${area}.` };
  }
  const l = ri(2, 6), w = ri(2, 6), h = ri(2, 6), vol = l * w * h;
  const q = mcFromValues(vol, [
    { v: l + w + h, why: 'This adds the dimensions instead of multiplying.' },
    { v: 2 * (l * w + w * h + l * h), why: 'This is the surface area, not the volume.' },
    { v: l * w, why: 'This is the area of one face, not the volume.' },
  ]);
  return { skill: 'area-volume', text: `A rectangular box has dimensions ${l} × ${w} × ${h}. What is its volume?`, ...q,
    explanation: `Volume = length × width × height = ${l} × ${w} × ${h} = ${vol}.` };
}

function gen_angles(tier) {
  const a = ri(30, 70), b = ri(30, 80);
  const c = 180 - a - b;
  const q = mcFromValues(c, [
    { v: 180 - a, why: `This subtracts only one angle; subtract both from 180°.` },
    { v: a + b, why: 'This adds the two given angles instead of subtracting from 180°.' },
    { v: 90 - a, why: 'Triangle angles sum to 180°, not 90°.' },
  ]);
  return { skill: 'angles',
    text: `Two angles of a triangle measure ${a}° and ${b}°. What is the measure, in degrees, of the third angle?`, ...q,
    explanation: `The angles of a triangle sum to 180°. Third angle = 180 − ${a} − ${b} = ${c}°.` };
}

function gen_circles(tier) {
  const r = ri(3, 9);
  const which = pick(['area', 'circumference']);
  if (which === 'area') {
    const correct = `${r * r}π`;
    const q = mcFromStrings(correct, [
      { v: `${2 * r}π`, why: 'This is the circumference (2πr), not the area.' },
      { v: `${r}π`, why: 'Area uses r², not r.' },
      { v: `${4 * r}π`, why: 'This is 2πr with the radius doubled — not the area formula.' },
    ], (g) => `${r * r + g}π`);
    return { skill: 'circles', text: `A circle has radius ${r}. What is its area?`, ...q,
      explanation: `Area = πr² = π(${r})² = ${r * r}π.` };
  }
  const correct = `${2 * r}π`;
  const q = mcFromStrings(correct, [
    { v: `${r * r}π`, why: 'This is the area (πr²), not the circumference.' },
    { v: `${r}π`, why: 'Circumference uses 2πr, not πr.' },
    { v: `${4 * r}π`, why: 'This doubles the circumference; use 2πr.' },
  ], (g) => `${2 * r + g}π`);
  return { skill: 'circles', text: `A circle has radius ${r}. What is its circumference?`, ...q,
    explanation: `Circumference = 2πr = 2π(${r}) = ${2 * r}π.` };
}

function gen_trig(tier) {
  const trip = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]);
  const [opp, adj, hyp] = trip;
  const correct = `${opp}/${hyp}`;
  const q = mcFromStrings(correct, [
    { v: `${adj}/${hyp}`, why: 'This is cos(A) = adjacent/hypotenuse, not sine.' },
    { v: `${opp}/${adj}`, why: 'This is tan(A) = opposite/adjacent, not sine.' },
    { v: `${hyp}/${opp}`, why: 'This inverts the ratio; sine is opposite over hypotenuse.' },
  ], () => `${adj}/${opp}`);
  return { skill: 'trig',
    text: `In right triangle ABC, the right angle is at C. The side opposite angle A is ${opp}, the side adjacent to angle A is ${adj}, and the hypotenuse is ${hyp}. What is sin(A)?`, ...q,
    explanation: `sin(A) = opposite / hypotenuse = ${opp}/${hyp}. (SOH: Sine = Opposite over Hypotenuse.)` };
}

const MATH_GENERATORS = {
  'linear-eq': gen_linear_eq, 'linear-func': gen_linear_func, 'systems': gen_systems, 'inequalities': gen_inequalities,
  'equivalent': gen_equivalent, 'quadratics': gen_quadratics, 'exponentials': gen_exponentials, 'radicals': gen_radicals, 'functions': gen_functions,
  'ratios': gen_ratios, 'percentages': gen_percentages, 'statistics': gen_statistics, 'scatterplots': gen_scatterplots, 'probability': gen_probability, 'sampling': gen_sampling,
  'area-volume': gen_area_volume, 'angles': gen_angles, 'circles': gen_circles, 'trig': gen_trig,
};

/* Stable-ish content signature for a generated question instance. Combines the
   prompt text with the answer/choices so two structurally identical instances
   collide (used to avoid duplicates within a quiz) while parameter changes give
   distinct signatures. Not cryptographic — a fast 32-bit string hash. */
function qHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}
function qSignature(q) {
  const ans = q.type === 'grid' ? String(q.answer) : (q.answer + '|' + (q.choices || []).map(c => c.text).join('¦'));
  return qHash((q.text || '') + '::' + ans);
}
/* ---- Structure / style signature (near-repeat detection) ------------------
   Two instances of the SAME template differ only in their numbers, so masking
   every number in the stem collapses them to one "skeleton". The style
   signature = skill + answer-type + skeleton. Distinct style signatures =
   genuinely distinct problem STRUCTURES, which a pure number-swap cannot
   inflate. Used by scripts/audit_math.mjs and available at runtime. */
function mathSkeleton(text) {
  return String(text || '').replace(/-?\d+(?:\.\d+)?/g, '#').replace(/\s+/g, ' ').trim();
}
function mathAnswerType(q) {
  if (q.type === 'grid') return 'grid';
  const texts = (q.choices || []).map(c => (c && c.text != null ? c.text : c));
  const avg = texts.reduce((a, s) => a + String(s).length, 0) / (texts.length || 1);
  if (avg > 24) return 'mc-verbal';
  if (texts.every(s => /^[-+]?[\d.,/\s]+$/.test(String(s)))) return 'mc-num';
  return 'mc-str';
}
function mathStyleSignature(q) {
  return `${q.skill || '?'}§${mathAnswerType(q)}§${mathSkeleton(q.text)}`;
}

/* Attach stable type + instance identifiers to a generated math question. */
function stampMathIds(q, kind, skillId) {
  const typeId = `${kind}-${skillId}`;
  const sig = qSignature(q);
  return { ...q, typeId, sig, variantId: `${typeId}#${sig}`, styleSig: mathStyleSignature(q) };
}

function generateMathQuestion(skillId, tier) {
  const gen = MATH_GENERATORS[skillId] || gen_linear_eq;
  const base = gen(tier);
  return stampMathIds({
    ...base,
    origin: 'generated',
    difficulty: TIER_LABEL[tier] || 'Medium',
    timeTarget: (TIME_TARGETS.math[tier] || 90),
    tip: tipForSkill(base.skill),
  }, 'mc', skillId);
}
