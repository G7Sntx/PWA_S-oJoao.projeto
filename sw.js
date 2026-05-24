const CACHE_NAME = 'sao-joao-v11'; // ✅ versão incrementada para derrubar caches antigos

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/agenda.html',    
  '/cultural.html',   
  '/perfil.html',     
  '/css/style.css',
  '/js/app.js',
  '/js/tailwind-config.js', 
  '/manifest.json',
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache v5: Sistema atualizado!'); // ✅ log correto
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); 
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (!(event.request.url.startsWith('http'))) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // ✅ Fallback offline: se for navegação de página, retorna index.html do cache
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
        console.log('Recurso não disponível offline:', event.request.url);
      });
    })
  );
});