const cacheName = "mypwa";

const appShellFiles = [
  "index.html",
  "app.js",
  "icon-192.png",
  "icon-512.png",
  "manifest.json",
  "sw.js"
];

// install
self.addEventListener("install", event => {

  event.waitUntil(( async ()=>{
    const cache = await caches.open(cacheName);
    await cache.addAll(appShellFiles);
  })());

});

// fetch
self.addEventListener("fetch", event => {

  event.respondWith(( async () =>{
    const res = await caches.match(event.request);
    if (res) {
      return res;
    } else {
      const response = await fetch(event.request);
      return response;
    }
  })());

});