// Stack — Service Worker
// Caches everything on install and serves from cache instantly on repeat visits.
// Strategy: cache-first for speed, with network fallback. Updates replace the cache.

const VERSION = 'stack-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './habit-tracker-icon.svg',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './InterVariable.woff2'
];

// Install: pre-cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first, falls back to network. Also updates cache in background
// for navigation requests so users get fresh code on next launch.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          // Only cache valid, same-origin responses
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
