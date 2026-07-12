/* SAT Quest — service worker for offline play.
   Cache-first for app shell so the game works with no connection once installed. */

const CACHE = 'sat-quest-v13';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/data/worlds.js',
  './js/data/tips.js',
  './js/data/mathgen.js',
  './js/data/gridgen.js',
  './js/data/mathviz.js',
  './js/data/mathgen2.js',
  './js/data/mathgen3.js',
  './js/data/mathgen4.js',
  './js/data/mathgen5.js',
  './js/data/mathgen6.js',
  './js/data/rw/information-ideas.js',
  './js/data/rw/craft-structure.js',
  './js/data/rw/expression-ideas.js',
  './js/data/rw/conventions.js',
  './js/data/rw/index.js',
  './js/data/rwgen.js',
  './js/data/rwgen2.js',
  './js/data/rwgen3.js',
  './js/data/rwgen4.js',
  './js/state.js',
  './js/upgrades.js',
  './js/quiz.js',
  './js/exam.js',
  './js/sound.js',
  './js/ui.js',
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      // Delete every old cache, especially any prior sat-quest-* versions.
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request);
  // Only handle same-origin requests; let external links (resources) pass through.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
