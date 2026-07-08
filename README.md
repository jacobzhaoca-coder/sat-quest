# ⚔️ SAT Quest

Turn SAT prep into an RPG adventure. Advance through two worlds, clear levels
along a torch-lit path, battle bosses, earn XP and badges, keep a daily streak,
and train every SAT skill — all powered by **original SAT-style practice
questions** generated and authored for this app.

> **About the questions.** Every question in SAT Quest is original, written or
> generated from scratch to imitate the *structure, tone, and difficulty* of the
> digital SAT. **Nothing is copied, paraphrased, or adapted** from College Board,
> Bluebook, Khan Academy, or any official source. For official questions, use the
> links on the in-app **Official Resources** page. “SAT” is a trademark of the
> College Board, which does not endorse this app.

---

## 🆕 New in v3

- **Grid-in (student-produced response) Math** across all four Math domains — type the answer; grading accepts equivalent integers, decimals, and fractions. Mixed into levels, bosses, review, the tower, and practice tests.
- **Full-length practice test (Simulation Gate)** following the real Digital SAT structure: R&W Module 1 → R&W Module 2 → break → Math Module 1 → Math Module 2, with timers, flag-for-review, no going back after submitting, and auto-save/resume.
- **Final Exam Realm** — the same four-module mock SAT as a boss sequence, with **simulated adaptivity** (Module 2 difficulty reacts to Module 1).
- **Unofficial estimated score** (400–1600) with section subscores, domain accuracy, pacing, and recommended review quests — clearly labeled *not* an official SAT score.
- **Math visuals (SVG)**: scatterplots, line graphs, bar charts, geometry diagrams, and the coordinate plane, each with an alt-text description.
- **Upgrade Hub**: spend earned **Skill Points** on Explanation Boost (step-by-step solutions), Hint System (hints before you answer), Time Control (extra time), Accuracy Tracker, and per-domain **Skill Mastery**. Plus domain mastery that grows with correct practice.
- **Bigger, more varied R&W bank** across science, history/social studies, humanities, and literature-style passages.

## ✨ What's inside (v2)

- **8 domain regions** across two sections (Reading & Writing, Math) covering every official SAT domain.
- **80 levels** on winding, unlockable paths — 10 per region, easy → medium → hard, ending in a hard mixed **Trial**.
- **11 bosses**: 8 region bosses, 2 Section Champions (Reading & Writing Champion, Math Champion), and the final **Digital SAT Champion** — timed, with a boss health bar and your focus meter.
- **Review Dungeons** that pull from your weak skills with **spaced review**, and an endless **Daily Tower** challenge.
- **Infinite Math questions** from a procedural generator (randomized numbers every play) and a **hand-authored Reading & Writing bank** with original passages — every question tagged with **skill, difficulty, and a time target**.
- **Explanations for why the right answer is right and why each wrong answer is wrong.**
- **Mistake log with 5 categories** (concept gap, careless error, time pressure, misread, trap answer) and a **“Why I missed it”** reflection after every wrong answer.
- **Adaptive recommendations**, a personalized **daily study path**, a **weekly progress report** (accuracy by domain, average time per question, 7-day activity chart), and boss battle reports.
- **XP, player levels, rank titles, 20 badges, streaks, and 3 daily quests.**
- **Game mode** (full RPG visuals) vs **serious Study mode** (fewer animations + per-question timers).
- **Dark-mode, mobile-first UI**, synthesized game sounds (mutable), and a goal tracker with a test-date countdown.
- **Installable PWA** with offline play and **JSON export/import backup.**

> No score is ever presented as an official SAT score. See `SAT_REALISM_AUDIT.md`
> for how the app aligns to the real Digital SAT's structure, skills, and timing.

---

## 🚀 Run it in 30 seconds (on your computer)

You need any tiny local web server (opening `index.html` directly with
`file://` will **not** work, because service workers and modules need `http`).

**Option A — Python (already on most Macs):**

```bash
cd SATgame
python3 -m http.server 8001
```

Then open **http://localhost:8001** in your browser.

**Option B — Node.js:**

```bash
cd SATgame
npx serve .
```

Open the URL it prints (usually http://localhost:3000).

That's it — the game runs entirely in your browser. Progress is saved
automatically to that browser's local storage.

---

## 🧑‍💻 Local development & the service worker

SAT Quest is an installable PWA, so in production it registers a **service
worker** that caches files for offline play. A cache-first worker can hide your
edits during local development, so the app is built to avoid that:

- **On `localhost` / `127.0.0.1`, the service worker is never registered.** On
  load the app also **unregisters any existing worker and clears its
  `sat-quest-*` caches** (`setupServiceWorker()` in `js/app.js`). Local edits
  therefore always load fresh — just reload the page.
- **On a real domain (e.g. GitHub Pages), the worker registers normally** and
  offline play works as expected.

**If a browser still shows a stale version** (e.g. from a worker installed
before this behavior existed), clear it once:

1. Open DevTools (F12 / ⌘⌥I) → **Application** tab.
2. **Service Workers** → **Unregister** every listed worker.
3. **Storage** → **Clear site data**.
4. Quit and reopen the browser, then reload. A hard refresh
   (⌘⇧R / Ctrl-Shift-R) usually suffices afterward.

If you had **installed** the PWA to your home screen/desktop, uninstall that
installed copy too — it keeps its own storage separate from the browser tab.

When you change files for a **deployed** build, bump the cache name in
`service-worker.js` (`const CACHE = 'sat-quest-v5-audit'`) so devices fetch the
update.

---

## 📱 Put it on your phone's home screen (recommended)

To install it as an app on your phone, it needs to be served over **https**.
The easiest free way is **GitHub Pages**:

1. **Create a free GitHub account** at github.com if you don't have one.
2. **Make a new repository** (e.g. `sat-quest`), set it to **Public**.
3. **Upload this whole folder's contents** (drag the files into the repo's
   "Add file → Upload files" page, or use `git`). Make sure `index.html` is at
   the top level of the repo.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**,
   pick the **main** branch and the **/ (root)** folder, and **Save**.
6. Wait ~1 minute. GitHub shows a URL like
   **`https://YOUR-USERNAME.github.io/sat-quest/`**.
7. **Open that URL on your phone:**
   - **iPhone (Safari):** tap the **Share** button → **Add to Home Screen**.
   - **Android (Chrome):** tap the **⋮** menu → **Install app** / **Add to Home Screen**.
8. Launch it from your home screen — it opens full-screen like a native app and
   **works offline** after the first load.

### Using `git` instead of drag-and-drop (optional)

```bash
cd SATgame
git init
git add .
git commit -m "SAT Quest"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sat-quest.git
git push -u origin main
```

Then follow steps 4–8 above.

---

## 💾 Backing up your progress

Progress lives in your browser only, so back it up before clearing browser data
or switching devices.

- **Export:** Hero tab → Settings → **Export backup** — downloads a `.json` file.
- **Import:** Hero tab → Settings → **Import backup** — pick that `.json` file.

Use export/import to move your save from your computer to your phone (or between
browsers).

---

## 🗂️ Project structure

```
SATgame/
├── index.html                 # App shell + script load order
├── manifest.webmanifest       # PWA metadata (name, icons, theme)
├── service-worker.js          # Offline caching
├── README.md
├── SAT_REALISM_AUDIT.md       # How the app aligns to the real Digital SAT
├── css/
│   └── styles.css             # Full dark-fantasy design system
├── icons/
│   ├── icon-192.png           # App icons (generated, see scripts/)
│   ├── icon-512.png
│   └── icon-maskable-512.png
├── scripts/
│   └── make_icons.py          # Regenerates the icons (pure stdlib Python)
└── js/
    ├── data/
    │   ├── worlds.js          # 8 regions, 80 levels, 11 bosses, skills, ranks, timing
    │   ├── tips.js            # Strategy library (per-skill + general)
    │   ├── mathgen.js         # Procedural original Math generators (MC, why-wrong)
    │   ├── gridgen.js         # Grid-in (student-produced response) generators + grading
    │   ├── mathviz.js         # Math SVG visuals (scatter, line, bar, geometry, plane)
    │   └── rwbank.js          # Authored original Reading & Writing bank (why-wrong)
    ├── state.js               # Save/load, XP, streaks, quests, unlocks, badges,
    │                          #   spaced review, mistake categories, weekly log
    ├── upgrades.js            # Skill Points, Upgrade Hub upgrades, domain mastery
    ├── quiz.js                # Assembles level, boss, review, and tower quizzes
    ├── exam.js                # Simulation Gate / Final Exam Realm engine (modules,
    │                          #   timers, simulated adaptivity, unofficial score)
    ├── sound.js               # Synthesized chiptune effects (Web Audio)
    ├── ui.js                  # DOM helpers, toasts, progress bars
    └── app.js                 # Router + all screens + game flow + Upgrade Hub access
```

---

## 🛠️ Customizing

- **Add a Reading/Writing question:** append an object to `RW_BANK` in
  `js/data/rwbank.js` (copy an existing one — set `skill`, `tier`, `text`,
  `choices`, `answer`, `explanation`).
- **Add or tweak a Math generator:** edit the matching `gen_*` function in
  `js/data/mathgen.js`. Use `mcFromValues` / `mcFromStrings` to guarantee four
  unique answer choices.
- **Add a strategy tip:** add to `SKILL_TIPS` or `GENERAL_TIPS` in
  `js/data/tips.js`.
- **Rename worlds/levels/bosses:** edit `js/data/worlds.js`.
- **Regenerate icons:** `python3 scripts/make_icons.py`.

After changing files, bump the cache name in `service-worker.js`
(`const CACHE = 'sat-quest-v5-audit'`) so **deployed** devices pick up the
update. (On `localhost` the worker is disabled, so local edits load without
this — see *Local development & the service worker* above.)

---

## 🎮 How to play

1. Name your hero and pick a class (optional goal + test date).
2. From the **World Map**, enter a world and start **Level 1** of any domain.
3. Answer the questions; read the explanation and tip after each one. Score 70%+
   to pass and unlock the next level.
4. Clear all 12 levels in a world to unlock its **boss**. Beat both world bosses
   to face the **SAT Champion**.
5. Check the **Skills** tab to see your weakness map, and the **Mistakes** tab to
   review and learn from misses. Keep your **streak** alive daily!

Good luck, Challenger. 🗡️
