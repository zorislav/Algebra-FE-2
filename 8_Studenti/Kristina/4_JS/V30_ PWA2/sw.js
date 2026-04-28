const cacheName = "mypwa";
const appCache = ["index.html", "app.js", "icon-192.png"];

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  event.waitUntil(async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(appCache);
  });
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const res = await caches.match(event.request);
      if (res) return res;

      const response = await fetch(event.request);
      const cache = await caches.open(cacheName);
      cache.put(event.request, response.clone());
      return response;
    })(),
  );
});
