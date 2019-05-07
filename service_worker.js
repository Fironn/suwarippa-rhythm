// キャッシュファイルの指定
var CACHE_NAME = 'cache-v1';
const CACHE_KEYS = [
    CACHE_NAME
];
var urlsToCache = [
    '/index.html',
    '/test.txt'
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => {
            return !CACHE_KEYS.includes(key);
          }).map(key => {
            return caches.delete(key);
          })
        );
      })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(res) {
          if(res) return res;
          return fetch(event.request);
      })
    );
});