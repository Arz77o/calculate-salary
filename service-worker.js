const CACHE_NAME = 'salary-calculator-v1';
const urlsToCache = [
  '/',
  '/calcuate-salary/',
  '/calcuate-salary/index.html',
  '/calcuate-salary/styles.css',
  '/calcuate-salary/app.js',
  '/calcuate-salary/script.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
