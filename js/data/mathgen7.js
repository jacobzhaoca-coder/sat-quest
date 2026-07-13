/* SAT Quest — ORIGINAL math generators, batch 7 (Algebra + Advanced Math).
   Loaded AFTER mathgen.js…mathgen6.js. This batch adds genuinely NEW reasoning
   PATHS and REPRESENTATIONS — not number-permutations of existing templates —
   deliberately targeting the skills the near-repeat audit flagged as thin
   (inequalities, functions, systems). New here: parameter-for-no/infinite-
   solution systems, absolute-value equations & inequalities, compound
   inequalities, modelling an inequality/equation from a verbal situation,
   interpreting slope/intercept in context, reading a linear rule from a table,
   parallel/perpendicular slopes, completing the square, discriminant reasoning,
   rational-expression domain & simplification, function transformations, reading
   a function from a table, nonlinear-system intersection counts, exponential
   model interpretation, and rational-exponent form.

   Every instance is ANSWER-FIRST: the key is computed from the chosen parameters
   so it is correct by construction, and each distractor models one named mistake.
   Original SAT-style practice — no official text, numbers, scenarios, or figures.
   Depends on globals: ri, pick, shuffle, round2, mcFromValues, mcFromStrings,
   gridQ, MATH_GENERATORS, GRID_GENERATORS. */

function bp7(q, meta) { return { ...q, source: 'blueprint-generated', ...meta }; }
// render "x − h" / "x + |h|" / "x" for the inside of an absolute value or shift
function _inside7(h) { return h === 0 ? 'x' : (h > 0 ? `x − ${h}` : `x + ${-h}`); }
function _term7(v) { return v >= 0 ? `+ ${v}` : `− ${-v}`; }

/* =================================================================== ALGEBRA */

/* Parameter that makes a system have NO solution (parallel lines). */
function gen7_no_solution(tier) {
  const m = ri(2, 6), b = ri(1, 9);
  let c = ri(1, 9); if (c === b) c = (c % 9) + 1;
  const q = mcFromValues(m, [
    { v: -m, why: 'Parallel lines share the same slope, not opposite slopes.' },
    { v: b, why: 'This is the first line’s y-intercept, not its slope.' },
    { v: c, why: 'This is the second line’s y-intercept, not the slope that makes the lines parallel.' },
  ]);
  return bp7({ skill: 'systems',
    text: `For what value of k will the system of equations shown have no solution?\n\ny = ${m}x + ${b}\ny = kx + ${c}`, ...q,
    explanation: `A system of two lines has no solution when the lines are parallel — equal slopes but different y-intercepts. The first line has slope ${m}, so k = ${m}. Because ${b} ≠ ${c}, the lines never meet.` },
    { family: 'no-solution-parameter', reasoning: 'transformation', representation: 'equation' });
}

/* Parameter that makes a system have INFINITELY MANY solutions (same line). */
function gen7_infinite_solutions(tier) {
  const a = ri(2, 5), b = ri(2, 6), C = ri(2, 9), n = pick([2, 3]);
  const ans = n * C;
  const q = mcFromValues(ans, [
    { v: C, why: 'The second equation is scaled up, so its constant must be scaled up too — not left unchanged.' },
    { v: n, why: 'This is the scale factor between the equations, not the constant it produces.' },
    { v: C + n, why: 'The constant is multiplied by the scale factor, not increased by it.' },
  ]);
  return bp7({ skill: 'systems',
    text: `The system of equations shown has infinitely many solutions, where c is a constant.\n\n${a}x + ${b}y = ${C}\n${n * a}x + ${n * b}y = c\n\nWhat is the value of c?`, ...q,
    explanation: `Infinitely many solutions means the two equations describe the same line. The second equation’s x- and y-coefficients are ${n} times the first’s, so its constant must also be ${n} times as large: c = ${n} × ${C} = ${ans}.` },
    { family: 'infinite-solutions-parameter', reasoning: 'transformation', representation: 'equation' });
}

/* Absolute-value equation — sum of the two solutions (= 2h). */
function gen7_abs_value_eq(tier) {
  const h = ri(-6, 8), d = ri(2, 9);
  const hi = h + d, lo = h - d, sum = 2 * h;
  const q = mcFromValues(sum, [
    { v: 2 * d, why: 'This is the distance between the two solutions, not their sum.' },
    { v: hi, why: 'This is only the larger solution; the question asks for the sum of both.' },
    { v: h, why: 'This is the center the solutions are balanced around, not their sum.' },
  ]);
  return bp7({ skill: 'linear-eq',
    text: `What is the sum of all solutions to the equation |${_inside7(h)}| = ${d}?`, ...q,
    explanation: `|${_inside7(h)}| = ${d} means the expression is ${d} away from 0, so x = ${h} + ${d} = ${hi} or x = ${h} − ${d} = ${lo}. Their sum is ${hi} + (${lo}) = ${sum}.` },
    { family: 'absolute-value-equation', reasoning: 'multi-step', representation: 'equation' });
}

/* Absolute-value inequality — how many integers satisfy it (= 2d + 1). */
function gen7_abs_value_ineq(tier) {
  const h = ri(-4, 8), d = ri(2, 7);
  const count = 2 * d + 1, lo = h - d, hi = h + d;
  const q = mcFromValues(count, [
    { v: 2 * d, why: 'This misses one endpoint — both ends of the range are included by ≤.' },
    { v: d, why: `This counts only one side of the center; the range extends ${d} in both directions.` },
    { v: 2 * d + 2, why: `This counts one integer too many for a closed interval of width ${2 * d}.` },
  ]);
  return bp7({ skill: 'inequalities',
    text: `How many integer values of x satisfy |${_inside7(h)}| ≤ ${d}?`, ...q,
    explanation: `|${_inside7(h)}| ≤ ${d} means ${lo} ≤ x ≤ ${hi}. The integers from ${lo} to ${hi} number ${hi} − (${lo}) + 1 = ${count}.` },
    { family: 'absolute-value-inequality', reasoning: 'multi-step', representation: 'inequality' });
}

/* Compound inequality a ≤ mx + b ≤ c — count the integer solutions. */
function gen7_compound_ineq(tier) {
  const m = ri(2, 5), x1 = ri(-3, 3), x2 = x1 + ri(3, 7), b = ri(1, 9);
  const a = m * x1 + b, c = m * x2 + b, count = x2 - x1 + 1;
  const q = mcFromValues(count, [
    { v: count - 1, why: 'Remember to include both endpoints of the range.' },
    { v: count + 1, why: 'This counts one endpoint twice.' },
    { v: x2, why: 'This is the largest value of x, not how many integers work.' },
  ]);
  return bp7({ skill: 'inequalities',
    text: `For how many integer values of x is ${a} ≤ ${m}x + ${b} ≤ ${c}?`, ...q,
    explanation: `Subtract ${b} from all three parts: ${a - b} ≤ ${m}x ≤ ${c - b}. Divide by ${m}: ${x1} ≤ x ≤ ${x2}. The integers ${x1} through ${x2} number ${count}.` },
    { family: 'compound-inequality', reasoning: 'multi-step', representation: 'inequality' });
}

/* Model an inequality from a verbal budget situation (verbal → inequality). */
function gen7_model_inequality(tier) {
  const scene = pick([
    { join: 'to join', per: 'month', vpl: 'months', v: 'm', who: 'A member wants to spend no more than' },
    { join: 'for delivery', per: 'item', vpl: 'items', v: 'n', who: 'A shopper wants to spend at most' },
    { join: 'for setup', per: 'lesson', vpl: 'lessons', v: 'n', who: 'A student can spend no more than' },
  ]);
  const F = ri(20, 60), P = ri(8, 25), B = F + P * ri(3, 10);
  const scenarios = [
    `A gym charges a one-time fee of $${F} ${scene.join} plus $${P} each ${scene.per}. ${scene.who} $${B} in total.`,
    `An online store charges a flat $${F} ${scene.join} plus $${P} per ${scene.per}. ${scene.who} $${B} altogether.`,
    `A tutor charges $${F} ${scene.join} plus $${P} per ${scene.per}. ${scene.who} $${B} in all.`,
  ];
  const text = pick(scenarios);
  const correct = `${F} + ${P}${scene.v} ≤ ${B}`;
  const q = mcFromStrings(correct, [
    { v: `${F} + ${P}${scene.v} ≥ ${B}`, why: '“No more than” means the total is at most the budget, so the sign should be ≤.' },
    { v: `${P}${scene.v} ≤ ${B}`, why: 'This drops the one-time $' + F + ' fee, which is part of the total cost.' },
    { v: `${F}${scene.v} + ${P} ≤ ${B}`, why: 'The one-time fee is charged once; the per-' + scene.per + ' amount is what multiplies ' + scene.v + '.' },
  ], () => `${F} − ${P}${scene.v} ≤ ${B}`);
  return bp7({ skill: 'inequalities',
    text: `${text} Which inequality gives the possible numbers of ${scene.vpl} ${scene.v}?`, ...q,
    explanation: `The $${F} is paid once and $${P} is charged for each of ${scene.v} ${scene.vpl}, so the total is ${F} + ${P}${scene.v}. “No more than $${B}” means this is at most ${B}: ${F} + ${P}${scene.v} ≤ ${B}.` },
    { family: 'model-inequality', reasoning: 'interpretation', representation: 'verbal' });
}

/* Greatest whole quantity affordable under a fixed + per-unit cost (multi-step). */
function gen7_inequality_max(tier) {
  const F = ri(10, 40), c = ri(3, 12), units = ri(4, 12), B = F + c * units + ri(0, c - 1);
  const ans = Math.floor((B - F) / c);
  const scene = pick([
    { lead: `A taxi charges a base fare of $${F} plus $${c} for each mile.`, ask: 'miles', have: `has $${B}` },
    { lead: `A booth charges $${F} for entry plus $${c} for each ride ticket.`, ask: 'ride tickets', have: `brings $${B}` },
    { lead: `A print shop charges a $${F} setup fee plus $${c} per poster.`, ask: 'posters', have: `has a $${B} budget` },
  ]);
  const q = mcFromValues(ans, [
    { v: ans + 1, why: `Buying ${ans + 1} would cost more than $${B}, over the budget.` },
    { v: Math.floor(B / c), why: `This forgets to first set aside the $${F} fixed cost.` },
    { v: B - F, why: 'This is the money left after the fixed cost, not the number of units.' },
  ]);
  return bp7({ skill: 'inequalities',
    text: `${scene.lead} If a customer ${scene.have}, what is the greatest whole number of ${scene.ask} they can afford?`, ...q,
    explanation: `Set aside the fixed $${F}: $${B} − $${F} = $${B - F} remains. Each costs $${c}, and ${B - F} ÷ ${c} ≈ ${round2((B - F) / c)}, so at most ${ans} whole ${scene.ask} are affordable.` },
    { family: 'inequality-max-quantity', reasoning: 'multi-step', representation: 'verbal' });
}

/* Read a linear rule from a table of values, then evaluate outside the table. */
function gen7_line_from_table(tier) {
  const m = ri(2, 5), b = ri(-4, 9), x0 = ri(1, 4);
  const xs = [x0, x0 + 1, x0 + 2, x0 + 3];
  const ys = xs.map(x => m * x + b);
  const x4 = x0 + 5, ans = m * x4 + b;
  const q = mcFromValues(ans, [
    { v: m * x4, why: 'This uses the slope but forgets the constant term.' },
    { v: ys[3] + m, why: 'This advances only one step past the table; x jumps further than that.' },
    { v: m + x4 + b, why: 'This adds the numbers instead of multiplying the slope by x.' },
  ]);
  return bp7({ skill: 'linear-func',
    text: `The table shows several values of the linear function f.\n\nx:    ${xs.join(',  ')}\nf(x): ${ys.join(',  ')}\n\nWhat is the value of f(${x4})?`, ...q,
    explanation: `Each time x increases by 1, f(x) increases by ${m} (for example ${ys[0]} → ${ys[1]}), so the slope is ${m} and f(x) = ${m}x ${_term7(b)}. Then f(${x4}) = ${m}(${x4}) ${_term7(b)} = ${ans}.` },
    { family: 'linear-from-table', reasoning: 'multi-step', representation: 'table' });
}

/* Interpret the slope of a linear model in context (verbal). */
function gen7_interpret_slope(tier) {
  const m = ri(15, 60), b = ri(20, 80);
  const scene = pick([
    { job: 'plumber', unit: 'hour' }, { job: 'electrician', unit: 'hour' },
    { job: 'moving company', unit: 'mile' }, { job: 'catering service', unit: 'guest' },
  ]);
  const correct = `The cost increases by $${m} for each additional ${scene.unit}.`;
  const q = mcFromStrings(correct, [
    { v: `The total cost of the job is $${m}.`, why: `${m} is a rate per ${scene.unit}, not a single total.` },
    { v: `The starting cost, before any ${scene.unit}s, is $${m}.`, why: `The fixed starting cost is the constant $${b}, not the slope.` },
    { v: `The cost increases by $${b} for each additional ${scene.unit}.`, why: `$${b} is the fixed cost; the per-${scene.unit} rate is $${m}.` },
  ], () => `The cost decreases by $${m} for each ${scene.unit}.`);
  return bp7({ skill: 'linear-func',
    text: `A ${scene.job} uses the model C(h) = ${m}h + ${b}, where C is the total cost in dollars for h ${scene.unit}s. Which statement best describes the meaning of ${m} in this model?`, ...q,
    explanation: `In C(h) = ${m}h + ${b}, the coefficient ${m} multiplies h, so it is the rate of change: the cost rises by $${m} for each additional ${scene.unit}. The constant $${b} is the fixed starting cost.` },
    { family: 'interpret-slope', reasoning: 'interpretation', representation: 'verbal' });
}

/* Interpret the y-intercept of a linear model in context (verbal). */
function gen7_interpret_intercept(tier) {
  const m = ri(15, 60), b = ri(20, 90);
  const scene = pick([
    { job: 'plumber', unit: 'hour' }, { job: 'phone plan', unit: 'gigabyte' },
    { job: 'rental company', unit: 'day' }, { job: 'gym', unit: 'month' },
  ]);
  const correct = `A fixed charge of $${b} that applies even for 0 ${scene.unit}s.`;
  const q = mcFromStrings(correct, [
    { v: `A charge of $${b} for each ${scene.unit}.`, why: `The per-${scene.unit} charge is the slope $${m}; $${b} is added only once.` },
    { v: `The total cost for one ${scene.unit}.`, why: `One ${scene.unit} costs ${m} + ${b} = $${m + b}, not $${b}.` },
    { v: `The cost decreases by $${b} for each ${scene.unit}.`, why: 'The constant does not change with the number of ' + scene.unit + 's.' },
  ], () => `A discount of $${b}.`);
  return bp7({ skill: 'linear-func',
    text: `A ${scene.job} uses the model C(x) = ${m}x + ${b}, where C is the cost in dollars for x ${scene.unit}s. Which statement best describes the meaning of ${b} in this model?`, ...q,
    explanation: `Setting x = 0 gives C(0) = ${b}, so $${b} is the fixed charge that applies before any ${scene.unit}s are counted. The per-${scene.unit} rate is the slope $${m}.` },
    { family: 'interpret-intercept', reasoning: 'interpretation', representation: 'verbal' });
}

/* Match a verbal situation to the correct equation (verbal → equation). */
function gen7_match_equation(tier) {
  const G = ri(40, 120), r = ri(2, 9);
  const scene = pick([
    { lead: `A tank contains ${G} gallons of water and drains at ${r} gallons per minute.`, v: 'W', per: 'minutes', noun: 'gallons remaining' },
    { lead: `A phone battery is at ${G}% and drops ${r}% each hour.`, v: 'B', per: 'hours', noun: 'battery percent' },
    { lead: `A gift card holds $${G} and loses $${r} with each ride.`, v: 'D', per: 'rides', noun: 'dollars left' },
  ]);
  const correct = `${scene.v} = ${G} − ${r}t`;
  const q = mcFromStrings(correct, [
    { v: `${scene.v} = ${G} + ${r}t`, why: 'The quantity is decreasing, so the per-unit amount is subtracted, not added.' },
    { v: `${scene.v} = ${r}t − ${G}`, why: `This starts negative; the initial amount ${G} should be the constant that is reduced.` },
    { v: `${scene.v} = ${r} − ${G}t`, why: 'The starting amount and the rate are swapped here.' },
  ], () => `${scene.v} = ${G} × ${r}t`);
  return bp7({ skill: 'linear-func',
    text: `${scene.lead} Which equation gives the ${scene.noun} ${scene.v} after t ${scene.per}?`, ...q,
    explanation: `Start at ${G} and remove ${r} for each of t ${scene.per}: ${scene.v} = ${G} − ${r}t.` },
    { family: 'model-equation', reasoning: 'interpretation', representation: 'verbal' });
}

/* Slope of a parallel or perpendicular line (coordinate reasoning). */
function gen7_parallel_perp_slope(tier) {
  const m = ri(2, 6), b = ri(-5, 8);
  if (Math.random() < 0.5) {
    const correct = `${m}`;
    const q = mcFromStrings(correct, [
      { v: `−${m}`, why: 'Parallel lines have equal slopes, not opposite ones.' },
      { v: `1/${m}`, why: 'This is a reciprocal; parallel lines keep the same slope exactly.' },
      { v: `−1/${m}`, why: 'This is the perpendicular slope, not the parallel one.' },
    ], (g) => `${m + g}`);
    return bp7({ skill: 'linear-func',
      text: `Line ℓ is defined by y = ${m}x ${_term7(b)}. What is the slope of a line parallel to line ℓ?`, ...q,
      explanation: `Parallel lines have the same slope. The slope of ℓ is ${m}, so a parallel line also has slope ${m}.` },
      { family: 'parallel-slope', reasoning: 'transformation', representation: 'coordinate-plane' });
  }
  const correct = `−1/${m}`;
  const q = mcFromStrings(correct, [
    { v: `${m}`, why: 'This is the slope of a parallel line; perpendicular slopes are negative reciprocals.' },
    { v: `−${m}`, why: 'A perpendicular slope flips AND inverts — take the reciprocal, not just the sign.' },
    { v: `1/${m}`, why: 'The reciprocal is right, but a perpendicular slope must also be negative here.' },
  ], (g) => `−${g + 1}/${m}`);
  return bp7({ skill: 'linear-func',
    text: `Line ℓ is defined by y = ${m}x ${_term7(b)}. What is the slope of a line perpendicular to line ℓ?`, ...q,
    explanation: `Perpendicular slopes are negative reciprocals. The slope of ℓ is ${m}, so the perpendicular slope is −1/${m}.` },
    { family: 'perpendicular-slope', reasoning: 'transformation', representation: 'coordinate-plane' });
}

/* ========================================================== ADVANCED MATH */

/* Minimum value of a parabola by completing the square (method choice). */
function gen7_complete_square(tier) {
  const p = ri(1, 5) * pick([1, -1]);   // vertex x = −p
  const k = ri(-6, 8);                   // minimum value
  const B = 2 * p, C = k + p * p;        // y = x² + Bx + C
  const q = mcFromValues(k, [
    { v: C, why: 'This is the constant term of the standard form, not the minimum after shifting.' },
    { v: -p, why: 'This is the x-value where the minimum occurs, not the minimum value of y.' },
    { v: k + Math.abs(p), why: 'This does not complete the square correctly; subtract (B/2)² fully.' },
  ]);
  return bp7({ skill: 'quadratics',
    text: `The function is defined by y = x² ${_term7(B)}x ${_term7(C)}. What is the minimum value of y?`, ...q,
    explanation: `Complete the square: y = (x ${_term7(p)})² ${_term7(k)}. The squared term is never negative, so the minimum value of y is ${k}, reached when x = ${-p}.` },
    { family: 'completing-the-square', reasoning: 'method-choice', representation: 'equation' });
}

/* Number of real solutions from the discriminant sign (interpretation). */
function gen7_discriminant(tier) {
  const kind = pick(['two', 'one', 'none']);
  let b, c;
  if (kind === 'two') { const r1 = ri(1, 5), r2 = r1 + ri(1, 4); b = -(r1 + r2); c = r1 * r2; }
  else if (kind === 'one') { const r = ri(2, 6); b = -2 * r; c = r * r; }
  else { b = 2 * ri(0, 2); c = (b * b) / 4 + ri(1, 5); }
  const disc = b * b - 4 * c;
  const ans = kind === 'two' ? 2 : kind === 'one' ? 1 : 0;
  const q = mcFromValues(ans, [
    { v: ans === 2 ? 0 : 2, why: 'Check the sign of the discriminant b² − 4ac to decide the count.' },
    { v: ans === 1 ? 2 : 1, why: 'A zero discriminant gives exactly one solution; a positive one gives two.' },
    { v: disc, why: 'This is the value of the discriminant itself, not the number of solutions.' },
  ]);
  return bp7({ skill: 'quadratics',
    text: `How many distinct real solutions does the equation x² ${_term7(b)}x ${_term7(c)} = 0 have?`, ...q,
    explanation: `The discriminant is b² − 4ac = (${b})² − 4(1)(${c}) = ${disc}. Because it is ${disc > 0 ? 'positive' : disc === 0 ? 'zero' : 'negative'}, the equation has ${ans === 1 ? 'exactly one real solution' : ans + ' real solutions'}.` },
    { family: 'discriminant-count', reasoning: 'interpretation', representation: 'equation' });
}

/* Intersection count of y = x² and a horizontal line (graphical reasoning). */
function gen7_nonlinear_count(tier) {
  const n = pick([-6, -3, -1, 0, 1, 2, 4, 5, 7, 9, 12, 16]);
  const ans = n > 0 ? 2 : n === 0 ? 1 : 0;
  const q = mcFromValues(ans, [
    { v: ans === 2 ? 0 : 2, why: 'A horizontal line above the vertex meets an upward parabola twice; below it, never.' },
    { v: ans === 1 ? 2 : 1, why: 'The line y = 0 touches y = x² at exactly one point (the vertex).' },
    { v: Math.abs(n), why: 'This is the height of the line, not the number of intersection points.' },
  ]);
  return bp7({ skill: 'quadratics',
    text: `In the xy-plane, how many points of intersection are there between the graphs of y = x² and y = ${n}?`, ...q,
    explanation: `Set x² = ${n}. ${n > 0 ? `Then x = ±√${n}, two real values, so the graphs meet at two points.` : n === 0 ? 'Then x = 0 only, so the graphs touch at exactly one point, the origin.' : 'But x² is never negative, so there are no real solutions and the graphs do not intersect.'}` },
    { family: 'nonlinear-system-count', reasoning: 'interpretation', representation: 'graph' });
}

/* Value that makes a rational expression undefined (domain reasoning). */
function gen7_rational_undefined(tier) {
  const a = ri(1, 8), b = ri(1, 8);
  const q = mcFromValues(b, [
    { v: -a, why: 'This makes the numerator 0, which gives the value 0 — not undefined.' },
    { v: -b, why: `Set the denominator equal to 0: x − ${b} = 0 gives x = ${b}, not −${b}.` },
    { v: a, why: 'The numerator does not cause the expression to be undefined; the denominator does.' },
  ]);
  return bp7({ skill: 'equivalent',
    text: `For what value of x is the expression (x + ${a})/(x − ${b}) undefined?`, ...q,
    explanation: `A fraction is undefined only when its denominator equals 0. Set x − ${b} = 0, so x = ${b}.` },
    { family: 'rational-undefined', reasoning: 'interpretation', representation: 'equation' });
}

/* Simplify a difference-of-squares rational expression (transformation). */
function gen7_rational_simplify(tier) {
  const a = ri(2, 7);
  const correct = `x + ${a}`;
  const q = mcFromStrings(correct, [
    { v: `x − ${a}`, why: `The remaining factor after cancelling (x − ${a}) is (x + ${a}).` },
    { v: `x² + ${a}`, why: 'Cancelling one factor leaves a linear expression, not a quadratic.' },
    { v: `${a}`, why: `The x-term does not cancel; only the shared (x − ${a}) factor does.` },
  ], (g) => `x + ${a + g}`);
  return bp7({ skill: 'equivalent',
    text: `For x ≠ ${a}, which expression is equivalent to (x² − ${a * a})/(x − ${a})?`, ...q,
    explanation: `Factor the numerator as a difference of squares: x² − ${a * a} = (x − ${a})(x + ${a}). Cancel the common (x − ${a}) to get x + ${a}.` },
    { family: 'rational-simplify', reasoning: 'transformation', representation: 'equation' });
}

/* Describe a function transformation g(x) = f(x − h) + k (interpretation). */
function gen7_func_transform(tier) {
  let sx = ri(-5, 5); if (sx === 0) sx = pick([-3, 3]);
  let sy = ri(-5, 5); if (sy === 0) sy = pick([-2, 2]);
  const hDisp = sx > 0 ? `x − ${sx}` : `x + ${-sx}`;
  const dirX = sx > 0 ? `right ${sx}` : `left ${-sx}`;
  const dirY = sy > 0 ? `up ${sy}` : `down ${-sy}`;
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const correct = `Shifted ${dirX} and ${dirY}.`;
  const wrongX = sx > 0 ? `left ${sx}` : `right ${-sx}`;
  const wrongY = sy > 0 ? `down ${sy}` : `up ${-sy}`;
  const q = mcFromStrings(correct, [
    { v: `Shifted ${wrongX} and ${dirY}.`, why: `Replacing x with (${hDisp}) shifts ${dirX}, the opposite of what the inside sign looks like.` },
    { v: `Shifted ${dirX} and ${wrongY}.`, why: `Adding ${sy > 0 ? sy : -sy} outside the function shifts ${dirY}.` },
    { v: `Shifted ${wrongX} and ${wrongY}.`, why: 'Both the horizontal and vertical directions are reversed here.' },
  ], () => `${cap(dirX)} only.`);
  return bp7({ skill: 'functions',
    text: `The function g is defined by g(x) = f(${hDisp}) ${_term7(sy)}. Compared with the graph of f, the graph of g is which transformation?`, ...q,
    explanation: `Inside the function, ${hDisp} shifts the graph ${dirX}. Adding ${sy > 0 ? sy : -sy} outside shifts it ${dirY}. So g is f shifted ${dirX} and ${dirY}.` },
    { family: 'function-transformation', reasoning: 'interpretation', representation: 'graph' });
}

/* Read a function from a table and find the input for a given output. */
function gen7_func_from_table(tier) {
  const xs = shuffle([1, 2, 3, 4, 5]).slice(0, 4).sort((a, b) => a - b);
  const fs = shuffle([2, 5, 7, 9, 11, 13, 4, 8]).slice(0, 4);
  const idx = ri(0, 3), v = fs[idx], ans = xs[idx];
  const q = mcFromValues(ans, [
    { v: v, why: 'This is the output value; the question asks which input produces it.' },
    { v: xs[(idx + 1) % 4], why: `Match the row where f(x) equals ${v}, then read its x.` },
    { v: xs[(idx + 2) % 4], why: `Read across to the x-value paired with f(x) = ${v}.` },
  ]);
  return bp7({ skill: 'functions',
    text: `The table gives several values of the function f.\n\nx:    ${xs.join(',  ')}\nf(x): ${fs.join(',  ')}\n\nFor what value of x is f(x) = ${v}?`, ...q,
    explanation: `Find ${v} in the f(x) row; it is paired with x = ${ans}, so f(${ans}) = ${v}.` },
    { family: 'function-from-table', reasoning: 'interpretation', representation: 'table' });
}

/* Interpret the base of an exponential model (interpretation). */
function gen7_exp_interpret(tier) {
  const r = pick([2, 3, 4, 5, 6, 8, 10]);
  const base = round2(1 + r / 100);
  const scene = pick([
    { noun: 'the number of members', per: 'year' },
    { noun: 'the account balance', per: 'year' },
    { noun: 'the town’s population', per: 'decade' },
  ]);
  const correct = `Each ${scene.per}, the quantity is multiplied by ${base} — a ${r}% increase.`;
  const q = mcFromStrings(correct, [
    { v: `Each ${scene.per}, the quantity increases by ${base}.`, why: `The base is a multiplier, not an amount added each ${scene.per}.` },
    { v: `Each ${scene.per}, the quantity increases by ${r}.`, why: `The ${r}% is a percent rate, not a fixed amount added.` },
    { v: `The quantity starts at ${base}.`, why: 'The starting amount is the coefficient in front, not the base.' },
  ], () => `The quantity is multiplied by ${r} each ${scene.per}.`);
  return bp7({ skill: 'exponentials',
    text: `A model P(t) = a·(${base})^t gives ${scene.noun} after t ${scene.per}s. Which statement best describes the role of ${base} in this model?`, ...q,
    explanation: `In P(t) = a·b^t, the base b is the growth factor: each ${scene.per} multiplies the quantity by ${base}. Since ${base} = 1 + ${r}/100, that is a ${r}% increase.` },
    { family: 'interpret-exponential', reasoning: 'interpretation', representation: 'verbal' });
}

/* Simplify a radical by extracting a perfect-square factor (transformation). */
function gen7_simplify_radical(tier) {
  const k = ri(2, 6), m = pick([2, 3, 5, 6, 7, 10]);
  const radicand = k * k * m;
  const correct = `${k}√${m}`;
  const q = mcFromStrings(correct, [
    { v: `${k * k}√${m}`, why: `The ${k * k} came from a perfect square, so it leaves the radical as ${k}, not ${k * k}.` },
    { v: `${k}√${k * m}`, why: 'Only the perfect-square factor comes out; the leftover under the root is the non-square part.' },
    { v: `${k * m}`, why: 'The radical does not disappear entirely; a non-square factor remains inside it.' },
  ], (g) => `${k + g}√${m}`);
  return bp7({ skill: 'radicals',
    text: `Which expression is equivalent to √${radicand}?`, ...q,
    explanation: `Factor out the perfect square: ${radicand} = ${k * k} × ${m} = ${k}² × ${m}. So √${radicand} = √(${k}²) × √${m} = ${k}√${m}.` },
    { family: 'simplify-radical', reasoning: 'transformation', representation: 'equation' });
}

/* Rewrite a rational exponent as a radical (transformation). */
function gen7_rational_exponent(tier) {
  const a = pick([3, 5, 7, 9]);
  const correct = `√(x^${a})`;
  const q = mcFromStrings(correct, [
    { v: `x^${a}`, why: 'The /2 exponent means a square root; it cannot be dropped.' },
    { v: `(x^${a})²`, why: 'A fractional exponent /2 is a root, not a squaring.' },
    { v: `x^${2 * a}`, why: 'Dividing the exponent by 2 (a root) does not double it.' },
  ], (g) => `√(x^${a + g})`);
  return bp7({ skill: 'radicals',
    text: `Which of the following is equivalent to x^(${a}/2) for x ≥ 0?`, ...q,
    explanation: `A fractional exponent m/n means the n-th root of x^m. So x^(${a}/2) = √(x^${a}).` },
    { family: 'rational-exponent-form', reasoning: 'transformation', representation: 'equation' });
}

/* ================================================ GRID-IN VARIANTS (batch 7) */

/* Absolute-value equation — grid the greater solution (breaks linear-eq grid). */
function gen7grid_abs_value(tier) {
  const h = ri(-4, 8), d = ri(2, 9);
  return bp7(gridQ('linear-eq',
    `What is the greater of the two solutions to |${_inside7(h)}| = ${d}?`, h + d,
    `The expression is ${d} away from 0, so x = ${h} + ${d} = ${h + d} or x = ${h} − ${d} = ${h - d}. The greater is ${h + d}.`,
    { hint: 'The two solutions are h + d and h − d.' }),
    { family: 'absolute-value-equation', reasoning: 'multi-step', representation: 'equation' });
}

/* Compound inequality — grid the number of integer solutions (breaks ineq grid). */
function gen7grid_compound(tier) {
  const m = ri(2, 5), x1 = ri(-2, 3), x2 = x1 + ri(3, 6), b = ri(1, 8);
  const a = m * x1 + b, c = m * x2 + b;
  return bp7(gridQ('inequalities',
    `For how many integer values of x is ${a} ≤ ${m}x + ${b} ≤ ${c}?`, x2 - x1 + 1,
    `Subtract ${b}: ${a - b} ≤ ${m}x ≤ ${c - b}. Divide by ${m}: ${x1} ≤ x ≤ ${x2}. That is ${x2 - x1 + 1} integers.`,
    { hint: 'Isolate x, then count the integers between the bounds, inclusive.' }),
    { family: 'compound-inequality', reasoning: 'multi-step', representation: 'inequality' });
}

/* Infinite-solutions parameter — grid the constant (breaks systems grid). */
function gen7grid_infinite(tier) {
  const a = ri(2, 5), b = ri(2, 6), C = ri(2, 9), n = pick([2, 3]);
  return bp7(gridQ('systems',
    `The system ${a}x + ${b}y = ${C} and ${n * a}x + ${n * b}y = c has infinitely many solutions. What is the value of c?`, n * C,
    `The second equation is ${n} times the first, so its constant is ${n} × ${C} = ${n * C}.`,
    { hint: 'For one line, every coefficient scales by the same factor.' }),
    { family: 'infinite-solutions-parameter', reasoning: 'transformation', representation: 'equation' });
}

/* Completing the square — grid the minimum value (breaks quadratics grid). */
function gen7grid_complete_square(tier) {
  const p = ri(1, 5) * pick([1, -1]), k = ri(-5, 8);
  const B = 2 * p, C = k + p * p;
  return bp7(gridQ('quadratics',
    `What is the minimum value of y = x² ${_term7(B)}x ${_term7(C)}?`, k,
    `Complete the square: y = (x ${_term7(p)})² ${_term7(k)}. The minimum value is ${k}.`,
    { hint: 'Rewrite in the form (x − h)² + k; the minimum is k.' }),
    { family: 'completing-the-square', reasoning: 'method-choice', representation: 'equation' });
}

/* Read a function from a table — grid the input for a given output. */
function gen7grid_func_from_table(tier) {
  const xs = shuffle([2, 3, 4, 5, 6]).slice(0, 4).sort((a, b) => a - b);
  const fs = shuffle([1, 4, 6, 8, 10, 12, 3, 9]).slice(0, 4);
  const idx = ri(0, 3);
  return bp7(gridQ('functions',
    `The table gives values of f.\n\nx:    ${xs.join(',  ')}\nf(x): ${fs.join(',  ')}\n\nFor what value of x is f(x) = ${fs[idx]}?`, xs[idx],
    `f(x) = ${fs[idx]} is paired with x = ${xs[idx]} in the table.`,
    { hint: 'Find the output in the f(x) row and read its x.' }),
    { family: 'function-from-table', reasoning: 'interpretation', representation: 'table' });
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath7() {
  const MC7 = {
    'systems': [gen7_no_solution, gen7_infinite_solutions],
    'linear-eq': [gen7_abs_value_eq],
    'inequalities': [gen7_abs_value_ineq, gen7_compound_ineq, gen7_model_inequality, gen7_inequality_max],
    'linear-func': [gen7_line_from_table, gen7_interpret_slope, gen7_interpret_intercept, gen7_match_equation, gen7_parallel_perp_slope],
    'quadratics': [gen7_complete_square, gen7_discriminant, gen7_nonlinear_count],
    'equivalent': [gen7_rational_undefined, gen7_rational_simplify],
    'functions': [gen7_func_transform, gen7_func_from_table],
    'exponentials': [gen7_exp_interpret],
    'radicals': [gen7_rational_exponent, gen7_simplify_radical],
  };
  const GRID7 = {
    'linear-eq': [gen7grid_abs_value],
    'inequalities': [gen7grid_compound],
    'systems': [gen7grid_infinite],
    'quadratics': [gen7grid_complete_square],
    'functions': [gen7grid_func_from_table],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC7)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID7)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
