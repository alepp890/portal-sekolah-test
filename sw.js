const CACHE_NAME = 'portal-sekolah-v2';
const urlsToCache = [
  './',
  './index.html',
  './dashboard-guru.html',
  './dashboard-murid.html',
  './dashboard-ibubapa.html',
  './manifest.json'
];

// 1. Install & Paksa SW Baharu Aktif Serta-merta (skipWaiting)
self.addEventListener('install', event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. Padam Cache Lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Memadam cache lama:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
