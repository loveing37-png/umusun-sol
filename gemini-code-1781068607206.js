self.addEventListener('install', (e) => {
    e.waitUntil(caches.open('solar-calc').then((cache) => cache.addAll(['./solar_calculator.html', './manifest.json', './icon-192.png'])));
});
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});