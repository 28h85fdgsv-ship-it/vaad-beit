const CACHE = 'vaad-v7';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // רק קבצים מאותו origin - API calls עוברים ישירות
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request));
});
