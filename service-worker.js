// Peters Sparkoch – Service Worker (Offline-Betrieb)
// Bei jeder Änderung an den Dateien die Versionsnummer erhöhen!
var VERSION = 'sparkoch-v25';
var DATEIEN = [
  './',
  './index.html',
  './daten.js',
  './daten-mehr.js',
  './daten-deftig.js',
  './gewuerze.js',
  './kalorien.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(VERSION).then(function(c){ return c.addAll(DATEIEN); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(namen){
      return Promise.all(namen.filter(function(n){ return n !== VERSION; })
        .map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, {ignoreSearch:true}).then(function(treffer){
      if(treffer) return treffer;
      return fetch(e.request).then(function(antwort){
        var kopie = antwort.clone();
        caches.open(VERSION).then(function(c){ c.put(e.request, kopie); });
        return antwort;
      }).catch(function(){
        if(e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
