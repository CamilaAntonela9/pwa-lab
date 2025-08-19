const CACHE_NAME = "notas-cache-v1";
const urlsToCache = [
  "index.html",
  "app.js",
  "style.css",
  "manifest.json",
  "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css",
  "https://code.getmdl.io/1.3.0/material.min.js",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
];

// Instalar y cachear archivos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Estrategia Cache First
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
