const CACHE_NAME = 'portal-sekolah-v1';
const urlsToCache = [
  './',
  './index.html',
  './dashboard-guru.html',
  './dashboard-murid.html',
  './dashboard-ibubapa.html',
  './manifest.json'
];

// 1. Install Service Worker & Simpan Cache Asas
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: Cache disimpan');
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. Mengendalikan Permintaan Rangkaian (Fetch)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
