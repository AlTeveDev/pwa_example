console.log(100);

const CACHE_NAME = 'powerpoint-pwa_example';

const INITIAL_CACHED_FILES = [
  '/pwa_example/',
  '/pwa_example/index.html',
];

self.addEventListener('install', (e) => {
  console.log('install!');
  e.waitUntill(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(INITIAL_CACHED_FILES);
    })
  );
});

self.addEventListener('fetch', (e) => {
  caches.match(e.request).then((cachedResponse) => {
    if (cachedResponse) {
      e.respondWith(cachedResponse);
    } else {
      e.respondWith(fetch(e.request));
    }
  });
});
