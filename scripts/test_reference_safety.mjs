/* SAT Quest — reference-safety guard. Verifies that the private official-SAT
   reference material is fully excluded from version control and the shipped app.
   Run:  node scripts/test_reference_safety.mjs

   Checks:
     1. satquestionsreal/ and reference-blueprints/ are git-ignored.
     2. Neither folder has any tracked files in git.
     3. No committed app script or the service-worker asset list references them.
     4. index.html does not load anything from the reference folders. */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
let pass = 0, fail = 0;
const check = (label, ok, detail = '') => { if (ok) { pass++; console.log('  ✅ ' + label); } else { fail++; console.log('  ❌ ' + label + (detail ? ' — ' + detail : '')); } };
const git = (cmd) => { try { return execSync(cmd, { cwd: root, encoding: 'utf8' }).trim(); } catch (e) { return (e.stdout || '').toString().trim(); } };

console.log('=== REFERENCE-MATERIAL SAFETY ===');

for (const dir of ['satquestionsreal/', 'reference-blueprints/']) {
  const ignored = git(`git check-ignore ${dir}`);
  check(`${dir} is git-ignored`, ignored === dir.replace(/\/$/, '') || ignored === dir, ignored || '(not ignored)');
  const tracked = git(`git ls-files ${dir}`);
  check(`${dir} has no tracked files`, tracked === '', tracked.split('\n').slice(0, 3).join(', '));
}

// No committed source references the private folders.
const appFiles = [
  'index.html', 'service-worker.js',
  ...fs.readdirSync(path.join(root, 'js')).filter(f => f.endsWith('.js')).map(f => 'js/' + f),
  ...fs.readdirSync(path.join(root, 'js/data')).filter(f => f.endsWith('.js')).map(f => 'js/data/' + f),
  ...fs.readdirSync(path.join(root, 'js/data/rw')).filter(f => f.endsWith('.js')).map(f => 'js/data/rw/' + f),
];
const offenders = [];
for (const rel of appFiles) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) continue;
  const src = fs.readFileSync(p, 'utf8');
  if (/satquestionsreal|reference-blueprints/.test(src)) offenders.push(rel);
}
check('no committed app file references the private reference folders', offenders.length === 0, offenders.join(', '));

// The staged/committed tree must not contain any reference PDF/zip.
const allTracked = git('git ls-files');
const badTracked = allTracked.split('\n').filter(f => /satquestionsreal|reference-blueprints|\.pdf$|full-length-sat/i.test(f));
check('no reference PDFs/zips are tracked by git', badTracked.length === 0, badTracked.slice(0, 3).join(', '));

console.log(`\n${fail === 0 ? '✅ ALL REFERENCE-SAFETY CHECKS PASSED' : '❌ ' + fail + ' CHECK(S) FAILED'} (${pass} passed)`);
process.exit(fail === 0 ? 0 : 1);
