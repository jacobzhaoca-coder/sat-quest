/* One-time migration: split js/data/rwbank.js into js/data/rw/ domain files,
   adding explicit stable ids and domain tags. Content is preserved exactly. */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { console, Math };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'js/data/rwbank.js'), 'utf8'), ctx);
const bank = vm.runInContext('RW_BANK', ctx);

const DOMAINS = {
  'rw-ii': { file: 'information-ideas.js', varName: 'RW_BANK_II', label: 'Information and Ideas',
    skills: ['central-ideas', 'evidence-text', 'evidence-quant', 'inferences'] },
  'rw-cs': { file: 'craft-structure.js', varName: 'RW_BANK_CS', label: 'Craft and Structure',
    skills: ['words-context', 'structure', 'cross-text'] },
  'rw-ei': { file: 'expression-ideas.js', varName: 'RW_BANK_EI', label: 'Expression of Ideas',
    skills: ['transitions', 'synthesis'] },
  'rw-sec': { file: 'conventions.js', varName: 'RW_BANK_SEC', label: 'Standard English Conventions',
    skills: ['boundaries', 'form-sense'] },
};

const seq = {}; // per skill-tier sequence for stable ids
function nextId(skill, tier) {
  const key = `${skill}-${tier}`;
  seq[key] = (seq[key] || 0) + 1;
  return `${skill}-t${tier}-${String(seq[key]).padStart(2, '0')}`;
}

function fmt(q, domain) {
  const o = { id: nextId(q.skill, q.tier), domain, skill: q.skill, tier: q.tier,
    text: q.text, choices: q.choices, answer: q.answer, explanation: q.explanation, whyWrong: q.whyWrong };
  return '  ' + JSON.stringify(o, null, 2).split('\n').join('\n  ');
}

fs.mkdirSync(path.join(root, 'js/data/rw'), { recursive: true });
for (const [domain, d] of Object.entries(DOMAINS)) {
  const items = bank.filter(q => d.skills.includes(q.skill));
  const body = items.map(q => fmt(q, domain)).join(',\n');
  const src = `/* SAT Quest — ORIGINAL SAT-style Reading & Writing bank: ${d.label}.
   Every passage and question was written from scratch for this app. None are
   copied, paraphrased, or adapted from College Board, Bluebook, Khan Academy,
   or any published test or prep book. They imitate only the STRUCTURE, tone,
   and difficulty of the digital SAT.

   Item shape: { id, domain, skill, tier, text, choices:[{letter,text}],
   answer, explanation, whyWrong:{letter:reason} }. The loader (rw/index.js)
   adds difficulty labels, time targets, and strategy tips. */

const ${d.varName} = [
${body},
];
`;
  fs.writeFileSync(path.join(root, 'js/data/rw', d.file), src);
  console.log(d.file, '→', items.length, 'items');
}
console.log('total:', bank.length);
