const CACHE_NAME = 'powerpoint-pwa_example';

const INITIAL_CACHED_FILES = [
  '/pwa_example/',
  '/pwa_example/index.html',
];

self.addEventListener('install', (e) => {
  console.log('install!');
  e.waitUntill(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(INITIAL_CACHED_FILES);
    })()
  );
});

self.addEventListener('fetch', (e) => {
  const cache = await caches.open(CACHE_NAME);

  const cachedResponse = await cache.match(event.request);
  if (cachedResponse !== undefined) {
    e.respondWith(cachedResponse);
  } else {
    e.respondWith(fetch(e.request));
  }
});
