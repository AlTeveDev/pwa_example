const CACHE_NAME = 'powerpoint-pwa_example';

const INITIAL_CACHED_FILES = [
  '/pwa_example/',
  '/pwa_example/index.html,
];

self.addEventListener('install', function(e) {
  console.log('install!');
  e.waitUntill(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(INITIAL_CACHED_FILES);
    })()
  );
});

self.addEventListener('fetch', function(e) {
  const cache = await.caches.open(CACHE_NAME);

  const cachedResponse = await cache.match(event.request);
  if (cachedResponse !== undefined) {
    return cachedResponse;
  } else {
    return fetch(e.request.url);
  }
});
