/* Service worker opcional para las apps MedUrgencias-UMH.
   Da funcionamiento offline del "shell" (el propio HTML ya visitado y las
   tipografías de Google Fonts). Las llamadas a la API de OpenAI SIEMPRE
   requieren conexión y nunca se cachean. Colocar en la raíz de /docs. */
const CACHE = "medurg-shell-v1";

self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Nunca cachear la API de OpenAI ni otras APIs dinámicas.
  if (/api\.openai\.com/.test(url.host)) return;

  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com/.test(url.host);
  const isCDN = /cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com/.test(url.host);

  if (sameOrigin || isFont || isCDN) {
    // Stale-while-revalidate: responde de caché si existe y actualiza en segundo plano.
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const network = fetch(req).then(res => {
        if (res && res.status === 200) cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })());
  }
});
