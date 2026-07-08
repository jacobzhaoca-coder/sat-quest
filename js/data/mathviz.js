/* SAT Quest — SVG visuals for math questions + visual question generators.
   Mobile-friendly, theme-aware SVG built as strings. Every visual carries an
   `alt` text description so the question is solvable without seeing the image.
   All questions original SAT-style practice. Uses ri/pick/round2/mcFromValues
   from mathgen.js and gridQ from gridgen.js. */

const VIZ = {
  axis: '#8478a8', grid: '#2f2456', point: '#a78bfa', line: '#e8c06a',
  text: '#c7bfe0', bar: '#7c5cf0', bar2: '#45e0a8', shape: '#a78bfa', fillFaint: 'rgba(167,139,250,0.12)',
};

/* Attach a visual (SVG html + alt text) to a question object and return it. */
function withVisual(q, html, alt) { q.visual = { html, alt }; return q; }

/* Map a value in [0,max] to a pixel position along [p0,p1]. */
function mapX(x, xmax, x0, x1) { return x0 + (x / xmax) * (x1 - x0); }
function mapYinv(y, ymax, y0, y1) { return y1 - (y / ymax) * (y1 - y0); } // y0 top, y1 bottom

/* Build the outer responsive SVG wrapper with an accessible label. */
function svgWrap(inner, alt, w = 300, h = 200) {
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${alt.replace(/"/g, '&quot;')}" style="max-width:340px;display:block;margin:0 auto">${inner}</svg>`;
}

function axes(x0, y0, x1, y1, xLabel, yLabel) {
  let s = `<line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="${VIZ.axis}" stroke-width="1.5"/>`;
  s += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${VIZ.axis}" stroke-width="1.5"/>`;
  if (xLabel) s += `<text x="${(x0 + x1) / 2}" y="${y1 + 26}" fill="${VIZ.text}" font-size="11" text-anchor="middle">${xLabel}</text>`;
  if (yLabel) s += `<text x="${x0 - 30}" y="${(y0 + y1) / 2}" fill="${VIZ.text}" font-size="11" text-anchor="middle" transform="rotate(-90 ${x0 - 30} ${(y0 + y1) / 2})">${yLabel}</text>`;
  return s;
}

/* Tick labels along axes. */
function ticks(x0, y0, x1, y1, xmax, ymax, xStep, yStep) {
  let s = '';
  for (let x = 0; x <= xmax; x += xStep) { const px = mapX(x, xmax, x0, x1); s += `<line x1="${px}" y1="${y1}" x2="${px}" y2="${y1 + 4}" stroke="${VIZ.axis}"/><text x="${px}" y="${y1 + 15}" fill="${VIZ.text}" font-size="9" text-anchor="middle">${x}</text>`; }
  for (let y = 0; y <= ymax; y += yStep) { const py = mapYinv(y, ymax, y0, y1); s += `<line x1="${x0 - 4}" y1="${py}" x2="${x0}" y2="${py}" stroke="${VIZ.axis}"/><text x="${x0 - 7}" y="${py + 3}" fill="${VIZ.text}" font-size="9" text-anchor="end">${y}</text>`; }
  return s;
}

/* ---- Scatterplot with line of best fit (predict y). ---- */
function viz_scatter(tier) {
  const m = ri(2, 5), b = ri(3, 10), xmax = 10;
  const ymax = Math.ceil((m * xmax + b + 4) / 5) * 5;
  const x0 = 40, y0 = 15, x1 = 285, y1 = 165;
  const pts = [];
  for (let x = 1; x <= 9; x += ri(1, 2)) { const noise = ri(-3, 3); const y = Math.max(0, Math.min(ymax, m * x + b + noise)); pts.push([x, y]); }
  const xq = pick([2, 4, 6, 8]);
  const ans = m * xq + b;
  let inner = axes(x0, y0, x1, y1, 'x (weeks)', 'y (members)') + ticks(x0, y0, x1, y1, xmax, ymax, 2, Math.round(ymax / 5));
  // best-fit line
  const lx0 = mapX(0, xmax, x0, x1), ly0 = mapYinv(b, ymax, y0, y1);
  const lx1 = mapX(xmax, xmax, x0, x1), ly1 = mapYinv(m * xmax + b, ymax, y0, y1);
  inner += `<line x1="${lx0}" y1="${ly0}" x2="${lx1}" y2="${ly1}" stroke="${VIZ.line}" stroke-width="2"/>`;
  pts.forEach(([x, y]) => { inner += `<circle cx="${mapX(x, xmax, x0, x1)}" cy="${mapYinv(y, ymax, y0, y1)}" r="3.5" fill="${VIZ.point}"/>`; });
  const alt = `Scatterplot with x from 0 to ${xmax} (weeks) and y up to ${ymax} (members). A line of best fit passes through the points and is modeled by y = ${m}x + ${b}.`;
  const q = mcFromValues(ans, [
    { v: m * xq, why: 'This omits the y-intercept b of the line.' },
    { v: m + b, why: 'This ignores the x-value; substitute x into the model.' },
    { v: ans + m, why: 'This adds one extra slope step.' },
  ]);
  return { skill: 'scatterplots', text: `The scatterplot shows membership over ${10} weeks with a line of best fit modeled by y = ${m}x + ${b}. Based on the model, how many members are predicted in week ${xq}?`,
    visual: { html: svgWrap(inner, alt), alt }, ...q,
    explanation: `Substitute x = ${xq} into the line of best fit: y = ${m}(${xq}) + ${b} = ${ans}.`,
    hint: 'Read the model y = mx + b and substitute the given x.' };
}

/* ---- Bar chart (compare categories, grid answer). ---- */
function viz_bar(tier) {
  const cats = ['Mon', 'Tue', 'Wed', 'Thu'];
  const vals = cats.map(() => ri(2, 10) * 2);
  const ymax = Math.ceil((Math.max(...vals) + 2) / 5) * 5;
  const x0 = 40, y0 = 15, x1 = 285, y1 = 165;
  let inner = axes(x0, y0, x1, y1, 'Day', 'Tickets sold') + ticks(x0, y0, x1, y1, 1, ymax, 1, Math.round(ymax / 5));
  const bw = (x1 - x0) / (cats.length * 1.6);
  cats.forEach((c, i) => {
    const cx = x0 + (i + 0.5) * ((x1 - x0) / cats.length);
    const h = (vals[i] / ymax) * (y1 - y0);
    inner += `<rect x="${cx - bw / 2}" y="${y1 - h}" width="${bw}" height="${h}" fill="${VIZ.bar}" rx="2"/>`;
    inner += `<text x="${cx}" y="${y1 + 15}" fill="${VIZ.text}" font-size="10" text-anchor="middle">${c}</text>`;
    inner += `<text x="${cx}" y="${y1 - h - 4}" fill="${VIZ.text}" font-size="9" text-anchor="middle">${vals[i]}</text>`;
  });
  const maxI = vals.indexOf(Math.max(...vals)), minI = vals.indexOf(Math.min(...vals));
  const diff = vals[maxI] - vals[minI];
  const alt = `Bar chart of tickets sold: ${cats.map((c, i) => `${c} ${vals[i]}`).join(', ')}.`;
  const bar = gridQ('statistics',
    `The bar chart shows tickets sold each day. How many more tickets were sold on ${cats[maxI]} than on ${cats[minI]}?`, diff,
    `${cats[maxI]} sold ${vals[maxI]} and ${cats[minI]} sold ${vals[minI]}. The difference is ${vals[maxI]} − ${vals[minI]} = ${diff}.`,
    { hint: 'Subtract the smaller bar from the larger bar.' });
  return withVisual(bar, svgWrap(inner, alt), alt);
}

/* ---- Line graph (read a value). ---- */
function viz_line(tier) {
  const start = ri(10, 30), step = ri(3, 8);
  const months = 6, xmax = months, ymax = Math.ceil((start + step * months + 4) / 10) * 10;
  const x0 = 40, y0 = 15, x1 = 285, y1 = 165;
  let inner = axes(x0, y0, x1, y1, 'Month', 'Sales ($1000s)') + ticks(x0, y0, x1, y1, xmax, ymax, 1, Math.round(ymax / 5));
  let path = '';
  const pts = [];
  for (let mo = 0; mo <= months; mo++) { const y = start + step * mo; pts.push([mo, y]); const px = mapX(mo, xmax, x0, x1), py = mapYinv(y, ymax, y0, y1); path += (mo === 0 ? 'M' : 'L') + px + ' ' + py + ' '; }
  inner += `<path d="${path}" fill="none" stroke="${VIZ.line}" stroke-width="2"/>`;
  pts.forEach(([mo, y]) => inner += `<circle cx="${mapX(mo, xmax, x0, x1)}" cy="${mapYinv(y, ymax, y0, y1)}" r="3" fill="${VIZ.point}"/>`);
  const qMonth = pick([2, 3, 4]);
  const ans = start + step * qMonth;
  const alt = `Line graph of sales rising steadily from ${start} at month 0 by ${step} each month.`;
  const ln = gridQ('scatterplots',
    `The line graph shows monthly sales (in thousands of dollars). What were the sales, in thousands of dollars, at month ${qMonth}?`, ans,
    `Sales start at ${start} and rise by ${step} each month. At month ${qMonth}: ${start} + ${step}×${qMonth} = ${ans}.`,
    { hint: 'Read the height of the line at the given month.' });
  return withVisual(ln, svgWrap(inner, alt), alt);
}

/* ---- Coordinate plane (slope from two points, MC). ---- */
function viz_coordinate(tier) {
  const x1v = ri(1, 3), y1v = ri(1, 3), dx = ri(1, 3);
  let dy = ri(1, 5);
  while (dy === dx) dy = ri(1, 5); // avoid slope 1 (invert would collide)
  const x2v = x1v + dx, y2v = y1v + dy;
  const slope = dy / dx;
  const gx = 10, gy = 10;
  const x0 = 35, y0 = 15, x1 = 285, y1 = 165;
  let inner = axes(x0, y0, x1, y1, 'x', 'y') + ticks(x0, y0, x1, y1, gx, gy, 2, 2);
  const P1 = [mapX(x1v, gx, x0, x1), mapYinv(y1v, gy, y0, y1)];
  const P2 = [mapX(x2v, gx, x0, x1), mapYinv(y2v, gy, y0, y1)];
  inner += `<line x1="${P1[0]}" y1="${P1[1]}" x2="${P2[0]}" y2="${P2[1]}" stroke="${VIZ.line}" stroke-width="2"/>`;
  inner += `<circle cx="${P1[0]}" cy="${P1[1]}" r="4" fill="${VIZ.point}"/><text x="${P1[0] + 6}" y="${P1[1] - 6}" fill="${VIZ.text}" font-size="10">(${x1v}, ${y1v})</text>`;
  inner += `<circle cx="${P2[0]}" cy="${P2[1]}" r="4" fill="${VIZ.point}"/><text x="${P2[0] + 6}" y="${P2[1] - 6}" fill="${VIZ.text}" font-size="10">(${x2v}, ${y2v})</text>`;
  const alt = `A line on a coordinate plane passing through points (${x1v}, ${y1v}) and (${x2v}, ${y2v}).`;
  const correctStr = Number.isInteger(slope) ? String(slope) : `${dy}/${dx}`;
  const invertStr = Number.isInteger(dx / dy) ? String(dx / dy) : `${dx}/${dy}`;
  let extra = 0;
  const q = mcFromStrings(correctStr, [
    { v: invertStr, why: 'This inverts the ratio; slope is rise over run, not run over rise.' },
    { v: `-${correctStr}`, why: 'The line rises left to right, so the slope is positive.' },
    { v: String(dy + dx), why: 'This adds the changes; slope divides rise by run.' },
  ], () => `${dy + (++extra)}/${dx}`);
  return { skill: 'linear-func', text: `The graph shows a line through two points. What is the slope of the line?`,
    visual: { html: svgWrap(inner, alt), alt }, ...q,
    explanation: `Slope = rise/run = (${y2v} − ${y1v})/(${x2v} − ${x1v}) = ${dy}/${dx}${Number.isInteger(slope) ? ` = ${slope}` : ''}.`,
    hint: 'Slope = change in y over change in x.' };
}

/* ---- Right-triangle diagram (hypotenuse, grid). ---- */
function viz_triangle(tier) {
  const trip = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]);
  const [a, b, hyp] = trip;
  const ox = 70, oy = 150, scale = Math.min(150 / b, 120 / a);
  const A = [ox, oy], B = [ox + b * scale, oy], C = [ox, oy - a * scale];
  let inner = `<polygon points="${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}" fill="${VIZ.fillFaint}" stroke="${VIZ.shape}" stroke-width="2"/>`;
  inner += `<rect x="${A[0]}" y="${A[1] - 12}" width="12" height="12" fill="none" stroke="${VIZ.shape}" stroke-width="1"/>`; // right-angle mark
  inner += `<text x="${(A[0] + B[0]) / 2}" y="${A[1] + 16}" fill="${VIZ.text}" font-size="12" text-anchor="middle">${b}</text>`;
  inner += `<text x="${A[0] - 14}" y="${(A[1] + C[1]) / 2}" fill="${VIZ.text}" font-size="12" text-anchor="middle">${a}</text>`;
  inner += `<text x="${(B[0] + C[0]) / 2 + 8}" y="${(B[1] + C[1]) / 2 - 4}" fill="${VIZ.line}" font-size="12" text-anchor="middle">?</text>`;
  const alt = `A right triangle with legs of length ${a} and ${b} meeting at the right angle; the hypotenuse is unknown.`;
  const tri = gridQ('trig',
    `The figure shows a right triangle with legs ${a} and ${b}. What is the length of the hypotenuse?`, hyp,
    `By the Pythagorean theorem: hypotenuse = √(${a}² + ${b}²) = √${a * a + b * b} = ${hyp}.`,
    { steps: [`a² + b² = c²`, `${a * a} + ${b * b} = ${a * a + b * b}`, `c = √${a * a + b * b} = ${hyp}`],
      hint: 'Use a² + b² = c².' });
  return withVisual(tri, svgWrap(inner, alt, 300, 190), alt);
}

/* ---- Circle diagram (area, MC). ---- */
function viz_circle(tier) {
  const r = ri(3, 8);
  const cx = 150, cy = 95, pr = 60;
  let inner = `<circle cx="${cx}" cy="${cy}" r="${pr}" fill="${VIZ.fillFaint}" stroke="${VIZ.shape}" stroke-width="2"/>`;
  inner += `<line x1="${cx}" y1="${cy}" x2="${cx + pr}" y2="${cy}" stroke="${VIZ.line}" stroke-width="2"/>`;
  inner += `<circle cx="${cx}" cy="${cy}" r="2.5" fill="${VIZ.text}"/>`;
  inner += `<text x="${cx + pr / 2}" y="${cy - 6}" fill="${VIZ.text}" font-size="12" text-anchor="middle">r = ${r}</text>`;
  const alt = `A circle with a radius labeled ${r}.`;
  const correct = `${r * r}π`;
  const q = mcFromStrings(correct, [
    { v: `${2 * r}π`, why: 'This is the circumference (2πr), not the area.' },
    { v: `${r}π`, why: 'Area uses r², not r.' },
    { v: `${4 * r}π`, why: 'This is not the area formula.' },
  ], (g) => `${r * r + g}π`);
  return { skill: 'circles', text: `The circle shown has radius ${r}. What is its area?`,
    visual: { html: svgWrap(inner, alt, 300, 190), alt }, ...q,
    explanation: `Area = πr² = π(${r})² = ${r * r}π.`, hint: 'Area of a circle is π times the radius squared.' };
}

const VISUAL_GENERATORS = {
  'scatterplots': [viz_scatter, viz_line],
  'statistics': [viz_bar],
  'linear-func': [viz_coordinate],
  'trig': [viz_triangle],
  'circles': [viz_circle],
};

function generateVisualQuestion(skillId, tier) {
  const gens = VISUAL_GENERATORS[skillId];
  if (!gens) return null;
  const base = gens[Math.floor(Math.random() * gens.length)](tier);
  return {
    ...base,
    origin: 'generated',
    difficulty: TIER_LABEL[tier] || 'Medium',
    timeTarget: (TIME_TARGETS.math[tier] || 90),
    tip: base.tip || tipForSkill(base.skill),
  };
}
function hasVisual(skillId) { return !!VISUAL_GENERATORS[skillId]; }
