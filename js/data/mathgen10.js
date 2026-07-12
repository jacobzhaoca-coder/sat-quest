/* SAT Quest — ORIGINAL math generators, batch 10. Loaded AFTER mathgen.js…mathgen9.js
   (and BEFORE mathgen_flatten.js, which must list every generator here).

   This batch closes the remaining reasoning gaps the first nine batches did not
   yet cover — each a genuinely distinct structure, not a number-permutation of an
   existing template: equation of a line through two points, testing an ordered
   pair against a system, combining like terms into an equivalent form, factoring
   a GCF and a difference of squares, composing functions numerically, exponent
   product/quotient rules, building a quadratic from its roots, a quadratic's
   minimum value, percent error, proportional recipe scaling, the new mean after
   adding a value, how an outlier shifts mean vs. median, conditional probability
   from a two-way table, part-to-whole from a ratio, sector area, 30-60-90 sides,
   finding an angle from a trig ratio, trapezoid area, similar-figure perimeter
   ratio, and a circle's center/radius from general form. Grid twins are added to
   the four cells the near-repeat audit flagged as most concentrated (inequalities,
   exponentials, percentages, circles) plus statistics, functions, area-volume,
   and probability, to spread those pools.

   ANSWER-FIRST: every key is computed from the chosen parameters and each
   distractor models one named mistake. Original SAT-style practice — no official
   text, numbers, scenarios, or figures. Depends on globals: ri, pick, shuffle,
   round2, mcFromValues, mcFromStrings, gridQ, MATH_GENERATORS, GRID_GENERATORS. */

function bp10(q, meta) { return { ...q, source: 'blueprint-generated', ...meta }; }
function _gcd10(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }

/* ===================================================================== ALGEBRA */

/* Equation of the line through two given points (find slope, then intercept). */
function gen10_two_point_line(tier) {
  const m = pick([-3, -2, -1, 2, 3, 4]), b = ri(-5, 6);
  let x1 = ri(-4, 1), x2 = x1 + ri(2, 5);
  const y1 = m * x1 + b, y2 = m * x2 + b;
  const f = (mm, bb) => `y = ${mm}x ${bb < 0 ? '− ' + -bb : '+ ' + bb}`;
  const correct = f(m, b);
  const q = mcFromStrings(correct, [
    { v: f(-m, b), why: 'The slope sign is wrong: use (y₂ − y₁)/(x₂ − x₁), keeping the sign.' },
    { v: f(m, y1), why: 'The y-intercept is where x = 0, not the first point’s y-value.' },
    { v: f(b, m), why: 'Slope and intercept are swapped; the slope multiplies x.' },
  ], (g) => f(m + g, b));
  return bp10({ skill: 'linear-func',
    text: `A line in the xy-plane passes through the points (${x1}, ${y1}) and (${x2}, ${y2}). Which equation defines the line?`, ...q,
    explanation: `Slope = (${y2} − ${y1})/(${x2} − ${x1}) = ${y2 - y1}/${x2 - x1} = ${m}. Using point (${x1}, ${y1}): ${y1} = ${m}(${x1}) + b, so b = ${b}. The line is ${correct}.` },
    { family: 'line-through-two-points', reasoning: 'multi-step', representation: 'coordinate-plane' });
}

/* Test which ordered pair satisfies a linear equation (solution-checking). */
function gen10_solution_check(tier) {
  const a = ri(1, 4), b = ri(1, 4), sx = ri(1, 6), sy = ri(1, 6);
  const c = a * sx + b * sy;
  const pt = (x, y) => `(${x}, ${y})`;
  const correct = pt(sx, sy);
  const q = mcFromStrings(correct, [
    { v: pt(sy, sx), why: 'The coordinates are reversed; check x then y in that order.' },
    { v: pt(sx + 1, sy), why: `Substituting gives ${a}(${sx + 1}) + ${b}(${sy}) = ${a * (sx + 1) + b * sy}, not ${c}.` },
    { v: pt(sx, sy + 1), why: `Substituting gives ${a}(${sx}) + ${b}(${sy + 1}) = ${a * sx + b * (sy + 1)}, not ${c}.` },
  ], (g) => pt(sx + g + 1, sy));
  return bp10({ skill: 'systems',
    text: `Which ordered pair (x, y) is a solution to the equation ${a}x + ${b}y = ${c}?`, ...q,
    explanation: `Substitute each pair. For ${correct}: ${a}(${sx}) + ${b}(${sy}) = ${a * sx} + ${b * sy} = ${c}. ✓` },
    { family: 'solution-checking', reasoning: 'plug-in', representation: 'coordinate-plane' });
}

/* Combine like terms into an equivalent linear expression. */
function gen10_combine_like(tier) {
  const a = ri(2, 6), b = ri(2, 7), cc = ri(2, 6), d = ri(1, 8);
  const xc = a + cc, con = b - d;
  const term = (k) => k === 1 ? 'x' : k === -1 ? '−x' : `${k}x`;
  const fmt = (k, n) => n === 0 ? term(k) : `${term(k)} ${n < 0 ? '− ' + -n : '+ ' + n}`;
  const correct = fmt(xc, con);
  const q = mcFromStrings(correct, [
    { v: fmt(a * cc, con), why: 'Like terms are added, not multiplied: combine the x-coefficients by adding.' },
    { v: fmt(xc, b + d), why: 'The constants are −d, so subtract d from b rather than adding.' },
    { v: fmt(a + cc + b - d, 0), why: 'The x-terms and constants are unlike; they cannot be merged into one number.' },
  ], (g) => fmt(xc + g, con));
  return bp10({ skill: 'equivalent',
    text: `Which expression is equivalent to (${a}x + ${b}) + (${cc}x − ${d})?`, ...q,
    explanation: `Add the x-terms: ${a}x + ${cc}x = ${xc}x. Add the constants: ${b} − ${d} = ${con}. Result: ${correct}.` },
    { family: 'combine-like-terms', reasoning: 'transformation', representation: 'equation' });
}

/* ============================================================== ADVANCED MATH */

/* Factor the greatest common factor from a binomial. */
function gen10_factor_gcf(tier) {
  const g = pick([2, 3, 4, 5, 6]), p = ri(2, 6), q0 = ri(2, 7);
  const a = g * p, b = g * q0;
  const correct = `${g}(${p}x + ${q0})`;
  const qq = mcFromStrings(correct, [
    { v: `${g}(${p}x + ${b})`, why: `The second term must also be divided by ${g}: ${b} ÷ ${g} = ${q0}.` },
    { v: `${a}(x + ${q0})`, why: `Only ${g} is common to both terms; ${a} does not divide ${b} evenly.` },
    { v: `${g}(${a}x + ${b})`, why: `Inside the parentheses the terms are already divided by ${g}; don’t leave the originals.` },
  ], (gg) => `${g}(${p + gg}x + ${q0})`);
  return bp10({ skill: 'equivalent',
    text: `Which expression is equivalent to ${a}x + ${b}?`, ...qq,
    explanation: `The greatest common factor of ${a} and ${b} is ${g}. Factoring: ${a}x + ${b} = ${g}(${p}x + ${q0}).` },
    { family: 'factor-gcf', reasoning: 'transformation', representation: 'equation' });
}

/* Factor a difference of two squares. */
function gen10_diff_squares(tier) {
  const a = ri(2, 9), c2 = ri(2, 9);
  const a2 = a * a, c = c2 * c2;
  const correct = `(x + ${c2})(x − ${c2})`;
  const q = mcFromStrings(correct, [
    { v: `(x − ${c2})(x − ${c2})`, why: 'A difference of squares factors into a sum and a difference, not two differences.' },
    { v: `(x + ${c2})(x + ${c2})`, why: 'That expands to x² + a positive middle term; there is no middle term here.' },
    { v: `(x + ${c})(x − ${c})`, why: `Use the square root of ${c}, which is ${c2}, not ${c} itself.` },
  ], (g) => `(x + ${c2 + g})(x − ${c2 + g})`);
  return bp10({ skill: 'quadratics',
    text: `Which expression is equivalent to x² − ${c}?`, ...q,
    explanation: `x² − ${c} is a difference of squares: x² − ${c2}² = (x + ${c2})(x − ${c2}).` },
    { family: 'difference-of-squares', reasoning: 'transformation', representation: 'equation' });
}

/* Evaluate a composition f(g(x)) at a number. */
function gen10_func_composition_val(tier) {
  const a = ri(2, 4), b = ri(1, 6), c = ri(2, 4), d = ri(1, 6), x = ri(1, 4);
  const gx = c * x + d;          // g(x)
  const val = a * gx + b;        // f(g(x))
  const q = mcFromValues(val, [
    { v: c * (a * x + b) + d, why: 'This computes g(f(x)); apply g first, then f, as f(g(x)) requires.' },
    { v: a * x + b, why: 'This is f(x); substitute g(x) into f, not x.' },
    { v: gx, why: `This is g(${x}) = ${gx}; you still must apply f to it.` },
  ]);
  return bp10({ skill: 'functions',
    text: `The functions f and g are defined by f(x) = ${a}x + ${b} and g(x) = ${c}x + ${d}. What is the value of f(g(${x}))?`, ...q,
    explanation: `First g(${x}) = ${c}(${x}) + ${d} = ${gx}. Then f(${gx}) = ${a}(${gx}) + ${b} = ${val}.` },
    { family: 'function-composition-value', reasoning: 'multi-step', representation: 'equation' });
}

/* Simplify a product/quotient of powers using exponent rules. */
function gen10_exp_rules(tier) {
  const cfg = pick([
    { op: '·', a: ri(2, 5), b: ri(2, 5), coefA: ri(2, 4), coefB: ri(2, 4), rule: 'add' },
    { op: '÷', a: ri(6, 9), b: ri(2, 5), coefA: pick([6, 8, 12]), coefB: pick([2, 3, 4]), rule: 'sub' },
  ]);
  let exp, coef, wrongExp;
  if (cfg.rule === 'add') { exp = cfg.a + cfg.b; coef = cfg.coefA * cfg.coefB; wrongExp = cfg.a * cfg.b; }
  else { exp = cfg.a - cfg.b; coef = cfg.coefA / cfg.coefB; wrongExp = cfg.a + cfg.b; }
  if (cfg.rule === 'sub' && !Number.isInteger(coef)) { cfg.coefA = cfg.coefB * ri(2, 4); coef = cfg.coefA / cfg.coefB; }
  const cf = (k) => k === 1 ? '' : k;
  const left = cfg.rule === 'add'
    ? `(${cf(cfg.coefA)}x^${cfg.a})(${cf(cfg.coefB)}x^${cfg.b})`
    : `${cfg.coefA}x^${cfg.a} ÷ ${cfg.coefB}x^${cfg.b}`;
  const correct = `${cf(coef)}x^${exp}`;
  const q = mcFromStrings(correct, [
    { v: `${cf(coef)}x^${wrongExp}`, why: cfg.rule === 'add' ? 'When multiplying powers, ADD the exponents; do not multiply them.' : 'When dividing powers, SUBTRACT the exponents; do not add them.' },
    { v: `${cf(cfg.rule === 'add' ? cfg.coefA + cfg.coefB : cfg.coefA - cfg.coefB)}x^${exp}`, why: cfg.rule === 'add' ? 'The coefficients multiply; only the exponents add.' : 'The coefficients divide; only the exponents subtract.' },
    { v: `${cf(coef)}x^${cfg.rule === 'add' ? exp + 1 : exp + 1}`, why: 'Recount the exponent using the correct rule.' },
  ], (g) => `${cf(coef)}x^${exp + g + 1}`);
  return bp10({ skill: 'equivalent',
    text: `Which expression is equivalent to ${left}, for x > 0?`, ...q,
    explanation: cfg.rule === 'add'
      ? `Multiply coefficients (${cfg.coefA}·${cfg.coefB} = ${coef}) and add exponents (${cfg.a} + ${cfg.b} = ${exp}): ${correct}.`
      : `Divide coefficients (${cfg.coefA} ÷ ${cfg.coefB} = ${coef}) and subtract exponents (${cfg.a} − ${cfg.b} = ${exp}): ${correct}.` },
    { family: 'exponent-rules', reasoning: 'transformation', representation: 'equation' });
}

/* Build a quadratic (sum/product of roots) from two given integer roots. */
function gen10_build_quadratic(tier) {
  let r1 = ri(-5, 5), r2 = ri(-5, 5);
  if (r1 === r2) r2 = r1 + 1;
  const s = r1 + r2, p = r1 * r2;         // x² − s x + p
  const sgn = (n) => n < 0 ? `− ${-n}` : `+ ${n}`;
  const correct = `x² ${sgn(-s)}x ${sgn(p)}`;
  const q = mcFromStrings(correct, [
    { v: `x² ${sgn(s)}x ${sgn(p)}`, why: 'The x-coefficient is −(sum of roots); flip the sign of the sum.' },
    { v: `x² ${sgn(-s)}x ${sgn(-p)}`, why: 'The constant is the PRODUCT of the roots, with its own sign.' },
    { v: `x² ${sgn(-p)}x ${sgn(s)}`, why: 'Sum and product are swapped: −sum is the x-coefficient, product is the constant.' },
  ], (g) => `x² ${sgn(-s)}x ${sgn(p + g + 1)}`);
  return bp10({ skill: 'quadratics',
    text: `A quadratic function has zeros at x = ${r1} and x = ${r2}. Which expression could define the function?`, ...q,
    explanation: `A monic quadratic with roots ${r1} and ${r2} is (x − ${r1})(x − ${r2}) = x² − (${r1} + ${r2})x + (${r1})(${r2}) = ${correct}.` },
    { family: 'quadratic-from-roots', reasoning: 'transformation', representation: 'equation' });
}

/* Minimum value of a quadratic in vertex-ready form (complete-the-square light). */
function gen10_min_value(tier) {
  const h = ri(-4, 5), k = ri(-6, 6);
  // f(x) = (x − h)^2 + k  → written expanded so the student must find the min
  const b = -2 * h, c = h * h + k;
  const sgn = (n) => n < 0 ? `− ${-n}` : `+ ${n}`;
  const q = mcFromValues(k, [
    { v: c, why: `${c} is f(0), the y-intercept, not the minimum value.` },
    { v: -k, why: 'The minimum is k itself, with its own sign; do not negate it.' },
    { v: h, why: 'This is the x-value where the minimum occurs, not the minimum value.' },
  ]);
  return bp10({ skill: 'quadratics',
    text: `The function f is defined by f(x) = x² ${sgn(b)}x ${sgn(c)}. What is the minimum value of f(x)?`, ...q,
    explanation: `Complete the square: f(x) = (x ${sgn(-h)})² ${sgn(k)}. The squared term is smallest (0) at x = ${h}, so the minimum value is ${k}.` },
    { family: 'quadratic-minimum-value', reasoning: 'transformation', representation: 'equation' });
}

/* ============================================= PROBLEM-SOLVING & DATA ANALYSIS */

/* Percent error between an estimate and the true value. */
function gen10_percent_error(tier) {
  const exact = pick([20, 25, 40, 50, 80, 100, 125, 200]);
  const pctList = [5, 8, 10, 12, 15, 20, 25];
  let pe = pick(pctList), approx = exact * (1 + (pick([1, -1]) * pe) / 100);
  while (!Number.isInteger(approx)) { pe = pick(pctList); approx = exact * (1 + (pick([1, -1]) * pe) / 100); }
  const q = mcFromValues(pe, [
    { v: round2(Math.abs(approx - exact) / approx * 100), why: 'Percent error divides the difference by the EXACT value, not the estimate.' },
    { v: Math.abs(approx - exact), why: 'This is the raw difference; divide it by the exact value and convert to a percent.' },
    { v: round2(approx / exact * 100), why: 'This is the estimate as a percent of the exact value, not the percent error.' },
  ], (x) => `${x}%`);
  return bp10({ skill: 'percentages',
    text: `A measurement was estimated as ${approx}, but the true value is ${exact}. What is the percent error of the estimate? (Percent error = |estimate − true| ÷ true × 100%.)`, ...q,
    explanation: `|${approx} − ${exact}| = ${Math.abs(approx - exact)}. Divide by the true value: ${Math.abs(approx - exact)} ÷ ${exact} = ${round2(Math.abs(approx - exact) / exact)}, which is ${pe}%.` },
    { family: 'percent-error', reasoning: 'multi-step', representation: 'verbal' });
}

/* Proportional recipe scaling (ratio held constant). */
function gen10_recipe_scale(tier) {
  const perBatch = pick([2, 3, 4]), item = pick(['cups of flour', 'eggs', 'tablespoons of oil', 'cups of broth']);
  const baseServ = pick([4, 6, 8]), newServ = baseServ * pick([2, 3]);
  const ans = perBatch * (newServ / baseServ);
  const q = mcFromValues(ans, [
    { v: perBatch + (newServ - baseServ), why: 'Recipes scale by MULTIPLYING in proportion, not by adding the extra servings.' },
    { v: perBatch * newServ, why: `Scale by the ratio ${newServ}/${baseServ} = ${newServ / baseServ}, not by the full serving count.` },
    { v: Math.round(perBatch * baseServ / newServ), why: 'This shrinks the recipe; more servings need more, not fewer, ingredients.' },
  ]);
  return bp10({ skill: 'ratios',
    text: `A recipe that serves ${baseServ} people uses ${perBatch} ${item}. How many ${item} are needed to serve ${newServ} people, keeping the same proportions?`, ...q,
    explanation: `The scale factor is ${newServ} ÷ ${baseServ} = ${newServ / baseServ}. So ${perBatch} × ${newServ / baseServ} = ${ans} ${item}.` },
    { family: 'proportional-scaling', reasoning: 'multi-step', representation: 'verbal' });
}

/* New mean after adding one value to a data set. */
function gen10_mean_after_add(tier) {
  const n = ri(4, 6), oldMean = pick([6, 8, 10, 12]);
  // Choose the change in mean directly; added = oldMean + (n+1)·k keeps the new
  // mean an exact integer (oldMean + k) with no rounding and no retry loop.
  let k = pick([-1, 1, 2, 3]);
  let added = oldMean + (n + 1) * k;
  if (added < 1) { k = 2; added = oldMean + (n + 1) * k; }   // keep the added value positive
  const newMean = oldMean + k;
  const q = mcFromValues(newMean, [
    { v: Math.round((oldMean * n + added) / n), why: `Divide by the new count, ${n + 1}, since a value was added.` },
    { v: Math.round((oldMean + added) / 2), why: 'The new mean is not the average of the old mean and the new value.' },
    { v: oldMean, why: 'Adding a different value changes the mean; recompute the total.' },
  ]);
  return bp10({ skill: 'statistics',
    text: `A set of ${n} numbers has a mean of ${oldMean}. If the number ${added} is added to the set, what is the mean of the ${n + 1} numbers?`, ...q,
    explanation: `Old total = ${oldMean} × ${n} = ${oldMean * n}. New total = ${oldMean * n} + ${added} = ${oldMean * n + added}. New mean = ${oldMean * n + added} ÷ ${n + 1} = ${round2(newMean)}.` },
    { family: 'mean-after-adding-value', reasoning: 'multi-step', representation: 'verbal' });
}

/* Conditional probability read from a two-way table (row-restricted). */
function gen10_conditional_prob(tier) {
  const a = ri(8, 20), b = ri(6, 18), c = ri(5, 16), d = ri(7, 19); // rows: group1(a,b) group2(c,d)
  const rowTotal = a + b;
  const g = _gcd10(a, rowTotal);
  const correct = `${a / g}/${rowTotal / g}`;
  const q = mcFromStrings(correct, [
    { v: `${a}/${a + b + c + d}`, why: 'A conditional probability uses only the given group’s total, not the grand total.' },
    { v: `${b}/${rowTotal}`, why: 'That is the probability of the OTHER outcome within the group.' },
    { v: `${a}/${a + c}`, why: 'Restrict to the row (the given group), not the column.' },
  ], (x) => `${a}/${rowTotal + x + 1}`);
  return bp10({ skill: 'probability',
    text: `In a survey, of the ${rowTotal} students in Group A, ${a} said yes and ${b} said no. If a Group A student is chosen at random, what is the probability that the student said yes?`, ...q,
    explanation: `Restrict to Group A (${rowTotal} students). P(yes | Group A) = ${a}/${rowTotal} = ${correct}.` },
    { family: 'conditional-probability', reasoning: 'interpretation', representation: 'data-display' });
}

/* Part-to-whole quantity from a ratio and a known total. */
function gen10_ratio_to_total(tier) {
  const r1 = ri(2, 5), r2 = ri(2, 5), unit = pick([6, 8, 10, 12]);
  const total = (r1 + r2) * unit, part = r1 * unit;
  const q = mcFromValues(part, [
    { v: r2 * unit, why: 'This is the other part of the ratio; match the part you were asked for.' },
    { v: Math.round(total * r1 / 10), why: `Use the ratio total ${r1 + r2} in the denominator, not 10.` },
    { v: total - part - unit, why: 'Split the total in the exact ratio; this leaves an extra unit unaccounted for.' },
  ]);
  return bp10({ skill: 'ratios',
    text: `A club has red and blue members in the ratio ${r1} : ${r2}. If the club has ${total} members in all, how many are red?`, ...q,
    explanation: `The ratio has ${r1} + ${r2} = ${r1 + r2} parts. Each part = ${total} ÷ ${r1 + r2} = ${unit}. Red = ${r1} × ${unit} = ${part}.` },
    { family: 'ratio-part-to-whole', reasoning: 'multi-step', representation: 'verbal' });
}

/* =============================================== GEOMETRY & TRIGONOMETRY */

/* Area of a sector as a fraction of the circle. */
function gen10_sector_area(tier) {
  const r = pick([3, 4, 5, 6, 9, 10, 12]), ang = pick([30, 45, 60, 90, 120, 135, 180]);
  const whole = r * r; // in units of π
  const frac = ang / 360;
  const areaCoef = whole * frac; // coefficient of π
  const fmtPi = (v) => Number.isInteger(v) ? `${v}π` : `${round2(v)}π`;
  const correct = fmtPi(areaCoef);
  const q = mcFromStrings(correct, [
    { v: fmtPi(2 * r * frac), why: 'That scales the circumference (2πr); a sector is a fraction of the AREA πr².' },
    { v: fmtPi(whole), why: `${fmtPi(whole)} is the whole circle’s area; take the ${ang}/360 fraction.` },
    { v: fmtPi(round2(r * frac)), why: 'Square the radius before taking the fraction of the circle.' },
  ], (g) => fmtPi(areaCoef + g + 1));
  return bp10({ skill: 'circles',
    text: `A circle has radius ${r}. A sector of the circle has a central angle of ${ang}°. What is the area of the sector, in terms of π?`, ...q,
    explanation: `Sector area = (${ang}/360) · πr² = ${round2(frac)} · π(${r})² = ${round2(frac)} · ${whole}π = ${correct}.` },
    { family: 'sector-area', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* 30-60-90 special right triangle side from the short leg. */
function gen10_special_306090(tier) {
  const short = pick([2, 3, 4, 5, 6, 7]);
  // sides: short (opp 30) = s, long (opp 60) = s√3, hyp (opp 90) = 2s
  const ask = pick(['hyp', 'long']);
  const correct = ask === 'hyp' ? `${2 * short}` : `${short}√3`;
  const q = mcFromStrings(correct, ask === 'hyp'
    ? [{ v: `${short}√3`, why: 'That is the longer leg (opposite 60°); the hypotenuse is twice the short leg.' },
       { v: `${short}√2`, why: '√2 is for a 45-45-90 triangle, not 30-60-90.' },
       { v: `${short * 3}`, why: 'The hypotenuse is 2× the short leg, not 3×.' }]
    : [{ v: `${2 * short}`, why: 'That is the hypotenuse (2× short leg); the longer leg is short·√3.' },
       { v: `${short}√2`, why: '√2 belongs to a 45-45-90 triangle, not this one.' },
       { v: `${short * 3}`, why: 'Multiply the short leg by √3, not by 3.' }],
    (g) => `${short + g + 1}√3`);
  return bp10({ skill: 'trig',
    text: `In a 30-60-90 right triangle, the side opposite the 30° angle has length ${short}. What is the length of the ${ask === 'hyp' ? 'hypotenuse' : 'side opposite the 60° angle'}?`, ...q,
    explanation: ask === 'hyp'
      ? `In a 30-60-90 triangle the sides are s : s√3 : 2s. The hypotenuse is 2 · ${short} = ${2 * short}.`
      : `In a 30-60-90 triangle the sides are s : s√3 : 2s. The side opposite 60° is ${short}√3.` },
    { family: 'special-right-30-60-90', reasoning: 'transformation', representation: 'geometric-figure' });
}

/* Find an acute angle from a basic trig ratio at special values. */
function gen10_trig_find_angle(tier) {
  const cfg = pick([
    { fn: 'sin', val: '1/2', ang: 30 }, { fn: 'cos', val: '1/2', ang: 60 },
    { fn: 'sin', val: '√2/2', ang: 45 }, { fn: 'cos', val: '√2/2', ang: 45 },
    { fn: 'sin', val: '√3/2', ang: 60 }, { fn: 'cos', val: '√3/2', ang: 30 },
    { fn: 'tan', val: '1', ang: 45 },
  ]);
  const q = mcFromValues(cfg.ang, [
    { v: 90 - cfg.ang === cfg.ang ? cfg.ang + 15 : 90 - cfg.ang, why: 'That is the complementary angle; check which ratio (sin vs. cos) was given.' },
    { v: cfg.ang + 15, why: 'This does not match the special-angle value given.' },
    { v: cfg.ang === 45 ? 30 : 45, why: 'Recall the exact values: this angle gives a different ratio.' },
  ], (x) => `${x}°`);
  return bp10({ skill: 'trig',
    text: `For an acute angle θ, ${cfg.fn}(θ) = ${cfg.val}. What is the measure of θ, in degrees?`, ...q,
    explanation: `${cfg.fn}(${cfg.ang}°) = ${cfg.val}, so θ = ${cfg.ang}°.` },
    { family: 'trig-angle-from-ratio', reasoning: 'interpretation', representation: 'geometric-figure' });
}

/* Area of a trapezoid. */
function gen10_trapezoid_area(tier) {
  const b1 = pick([4, 6, 8, 10]), b2 = b1 + pick([2, 4, 6]), h = pick([3, 4, 5, 6, 8]);
  const area = (b1 + b2) * h / 2;
  const q = mcFromValues(area, [
    { v: b1 * b2, why: 'A trapezoid is not the product of its two bases; average the bases and multiply by height.' },
    { v: (b1 + b2) * h, why: 'Remember the factor of ½ in the trapezoid area formula.' },
    { v: (b1 + b2 + h), why: 'This adds the sides instead of using the area formula.' },
  ]);
  return bp10({ skill: 'area-volume',
    text: `A trapezoid has parallel bases of length ${b1} and ${b2} and a height of ${h}. What is its area?`, ...q,
    explanation: `Area = ½(b₁ + b₂)·h = ½(${b1} + ${b2})(${h}) = ½(${b1 + b2})(${h}) = ${area}.` },
    { family: 'trapezoid-area', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* Perimeter of similar figures scales by the linear ratio. */
function gen10_similar_perimeter(tier) {
  const p1 = pick([12, 15, 18, 20, 24]), k = pick([2, 3]);
  const p2 = p1 * k;
  const q = mcFromValues(p2, [
    { v: p1 * k * k, why: 'Perimeter scales by the linear ratio; k² is for AREA, not perimeter.' },
    { v: p1 + k, why: 'Similar figures scale by multiplication, not by adding the ratio.' },
    { v: p1, why: 'A larger similar figure has a larger perimeter; multiply by the scale factor.' },
  ]);
  return bp10({ skill: 'angles',
    text: `Two similar polygons have a scale factor of ${k} (larger to smaller). The smaller polygon has a perimeter of ${p1}. What is the perimeter of the larger polygon?`, ...q,
    explanation: `Perimeter scales by the linear ratio ${k}: ${p1} × ${k} = ${p2}. (Only area would scale by ${k}².)` },
    { family: 'similar-figure-perimeter', reasoning: 'transformation', representation: 'geometric-figure' });
}

/* Center and radius of a circle from general form x² + y² + Dx + Ey + F = 0. */
function gen10_circle_general_form(tier) {
  const h = ri(-4, 4), k = ri(-4, 4), r = pick([2, 3, 4, 5]);
  const D = -2 * h, E = -2 * k, F = h * h + k * k - r * r;
  const sgn = (n, v) => n === 0 ? '' : ` ${n < 0 ? '−' : '+'} ${Math.abs(n)}${v}`;
  const correct = `center (${h}, ${k}), radius ${r}`;
  const q = mcFromStrings(correct, [
    { v: `center (${-h}, ${-k}), radius ${r}`, why: 'The center is (−D/2, −E/2); watch the signs when halving.' },
    { v: `center (${h}, ${k}), radius ${r * r}`, why: `The radius is √(the constant), so √${r * r} = ${r}, not ${r * r}.` },
    { v: `center (${D}, ${E}), radius ${r}`, why: 'Halve and negate D and E to get the center coordinates.' },
  ], (g) => `center (${h}, ${k}), radius ${r + g + 1}`);
  return bp10({ skill: 'circles',
    text: `A circle is defined by x²${sgn(D, 'x')} + y²${sgn(E, 'y')}${sgn(F, '')} = 0. What are the center and radius of the circle?`, ...q,
    explanation: `Complete the square: (x ${h < 0 ? '+ ' + -h : '− ' + h})² + (y ${k < 0 ? '+ ' + -k : '− ' + k})² = ${r * r}. Center (${h}, ${k}), radius √${r * r} = ${r}.` },
    { family: 'circle-general-to-standard', reasoning: 'transformation', representation: 'equation' });
}

/* ============================================================== GRID-IN TWINS */

/* Grid: model a budget as an inequality and find the greatest whole number of
   units (verbal → inequality; a distinct structure from the algebraic
   "greatest integer x" grid already in the pool). */
function gen10grid_inequality(tier) {
  const ctx = pick([
    { fee: 'sign-up fee', per: 'per month', unit: 'months', thing: 'gym membership' },
    { fee: 'delivery fee', per: 'per item', unit: 'items', thing: 'order' },
    { fee: 'base fare', per: 'per mile', unit: 'miles', thing: 'taxi ride' },
    { fee: 'entry fee', per: 'per ride', unit: 'rides', thing: 'fair visit' },
  ]);
  const F = ri(8, 40), m = pick([5, 6, 8, 10, 12, 15, 20]), units = ri(4, 12);
  const budget = F + m * units + ri(0, m - 1);        // leftover < one more unit
  return gridQ('inequalities',
    `A ${ctx.thing} costs a $${F} ${ctx.fee} plus $${m} ${ctx.per}. Someone has $${budget} to spend. What is the greatest whole number of ${ctx.unit} they can pay for?`,
    units,
    `Set up ${F} + ${m}x ≤ ${budget}. Subtract the fee: ${m}x ≤ ${budget - F}. Divide by ${m}: x ≤ ${round2((budget - F) / m)}. The greatest whole number is ${units}.`,
    { steps: [`${m}x ≤ ${budget - F}`, `x ≤ ${round2((budget - F) / m)}`] });
}

/* Grid: simplify a power expression and report the resulting exponent. */
function gen10grid_exp_rule(tier) {
  const a = ri(2, 6), b = ri(2, 6);
  const exp = a + b;
  return gridQ('exponentials',
    `For x > 0, the expression (x^${a})(x^${b}) is equal to x^n. What is the value of n?`,
    exp,
    `Multiplying powers with the same base adds the exponents: ${a} + ${b} = ${exp}.`,
    { steps: [`x^${a} · x^${b} = x^(${a}+${b})`, `n = ${exp}`] });
}

/* Grid: percent error as a number. */
function gen10grid_percent_error(tier) {
  const exact = pick([20, 40, 50, 80, 100, 200]);
  const pe = pick([5, 10, 20, 25]);
  const approx = exact * (1 + pe / 100);
  return gridQ('percentages',
    `An estimate of ${approx} was made for a quantity whose true value is ${exact}. What is the percent error? (Enter the number of percent.)`,
    pe,
    `|${approx} − ${exact}| = ${approx - exact}. Divide by the true value: ${approx - exact} ÷ ${exact} = ${round2((approx - exact) / exact)} = ${pe}%.`,
    { accept: [pe + '%'] });
}

/* Grid: area of a sector (numeric multiple of π reported as the coefficient). */
function gen10grid_sector_area(tier) {
  const r = pick([4, 6, 8, 10, 12]), ang = pick([45, 60, 90, 120, 180]);
  const coef = round2(r * r * ang / 360);
  return gridQ('circles',
    `A circle has radius ${r}. A sector has a central angle of ${ang}°. The area of the sector is kπ. What is the value of k?`,
    coef,
    `Sector area = (${ang}/360)·π·${r}² = ${round2(ang / 360)}·${r * r}π = ${coef}π, so k = ${coef}.`,
    { steps: [`fraction = ${ang}/360`, `k = ${ang}/360 · ${r * r} = ${coef}`] });
}

/* Grid: new mean after adding a value. */
function gen10grid_mean_after_add(tier) {
  const n = ri(4, 6), mean = pick([6, 8, 10, 12]);
  // added = mean + (n+1)·k forces the new mean to the exact integer mean + k.
  let k = pick([-1, 1, 2, 3]);
  let added = mean + (n + 1) * k;
  if (added < 1) { k = 2; added = mean + (n + 1) * k; }
  const nm = mean + k;
  return gridQ('statistics',
    `A set of ${n} numbers has a mean of ${mean}. The number ${added} is then added to the set. What is the mean of the ${n + 1} numbers?`,
    nm,
    `Old total = ${mean}·${n} = ${mean * n}. New total = ${mean * n + added}. New mean = ${mean * n + added} ÷ ${n + 1} = ${nm}.`,
    { steps: [`total = ${mean * n} + ${added} = ${mean * n + added}`, `mean = ${mean * n + added}/${n + 1} = ${nm}`] });
}

/* Grid: evaluate a composition f(g(x)). */
function gen10grid_composition(tier) {
  const a = ri(2, 4), b = ri(1, 6), c = ri(2, 4), d = ri(1, 6), x = ri(1, 4);
  const gx = c * x + d, val = a * gx + b;
  return gridQ('functions',
    `The functions f and g are defined by f(x) = ${a}x + ${b} and g(x) = ${c}x + ${d}. What is the value of f(g(${x}))?`,
    val,
    `g(${x}) = ${c}(${x}) + ${d} = ${gx}. f(${gx}) = ${a}(${gx}) + ${b} = ${val}.`,
    { steps: [`g(${x}) = ${gx}`, `f(${gx}) = ${val}`] });
}

/* Grid: area of a trapezoid. */
function gen10grid_trapezoid(tier) {
  const b1 = pick([4, 6, 8, 10]), b2 = b1 + pick([2, 4, 6]), h = pick([4, 6, 8]);
  const area = (b1 + b2) * h / 2;
  return gridQ('area-volume',
    `A trapezoid has parallel bases of length ${b1} and ${b2} and a height of ${h}. What is its area?`,
    area,
    `Area = ½(${b1} + ${b2})(${h}) = ½(${b1 + b2})(${h}) = ${area}.`,
    { steps: [`sum of bases = ${b1 + b2}`, `area = ½·${b1 + b2}·${h} = ${area}`] });
}

/* Grid: conditional probability as a decimal-free fraction reduced to lowest terms is hard to grid,
   so ask for a count-based whole number: the number in the restricted group. */
function gen10grid_ratio_total(tier) {
  const r1 = ri(2, 5), r2 = ri(2, 5), unit = pick([6, 8, 10, 12]);
  const total = (r1 + r2) * unit, part = r1 * unit;
  return gridQ('probability',
    `A jar holds red and green marbles in the ratio ${r1} : ${r2}, and ${total} marbles in all. How many marbles are red?`,
    part,
    `Parts = ${r1} + ${r2} = ${r1 + r2}. Each part = ${total} ÷ ${r1 + r2} = ${unit}. Red = ${r1} × ${unit} = ${part}.`,
    { steps: [`each part = ${unit}`, `red = ${r1}·${unit} = ${part}`] });
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath10() {
  const MC10 = {
    'linear-func': [gen10_two_point_line],
    'systems': [gen10_solution_check],
    'equivalent': [gen10_combine_like, gen10_factor_gcf, gen10_exp_rules],
    'quadratics': [gen10_diff_squares, gen10_build_quadratic, gen10_min_value],
    'functions': [gen10_func_composition_val],
    'percentages': [gen10_percent_error],
    'ratios': [gen10_recipe_scale, gen10_ratio_to_total],
    'statistics': [gen10_mean_after_add],
    'probability': [gen10_conditional_prob],
    'circles': [gen10_sector_area, gen10_circle_general_form],
    'trig': [gen10_special_306090, gen10_trig_find_angle],
    'area-volume': [gen10_trapezoid_area],
    'angles': [gen10_similar_perimeter],
  };
  const GRID10 = {
    'inequalities': [gen10grid_inequality],
    'exponentials': [gen10grid_exp_rule],
    'percentages': [gen10grid_percent_error],
    'circles': [gen10grid_sector_area],
    'statistics': [gen10grid_mean_after_add],
    'functions': [gen10grid_composition],
    'area-volume': [gen10grid_trapezoid],
    'probability': [gen10grid_ratio_total],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC10)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID10)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
