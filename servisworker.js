const CACHE_NAME = 'shoe-store-cache-v1'; // Menambahkan versi cache untuk pembaruan yang mudah
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Event install: Menyimpan aset ke dalam cache
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(CACHE_ASSETS);
    }).catch((error) => {
      console.error('Cache failed during installation:', error);
    })
  );
});

// Event activate: Menghapus cache lama jika ada versi cache yang baru
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');

  const cacheWhitelist = [CACHE_NAME]; // Cache yang diizinkan

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Menghapus cache lama yang tidak ada dalam cacheWhitelist
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Event fetch: Menangani permintaan dan memberikan respons dari cache atau jaringan
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ada cache yang cocok, kembalikan dari cache, jika tidak, ambil dari jaringan
      if (response) {
        console.log('Serving from cache:', event.request.url);
        return response;
      }

      console.log('Fetching from network:', event.request.url);
      return fetch(event.request).then((networkResponse) => {
        // Jika respons jaringan berhasil, cache respons untuk permintaan berikutnya
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch((error) => {
        // Jika terjadi kesalahan (misalnya tidak ada koneksi internet), lakukan fallback
        console.error('Network request failed:', error);
        throw error;
      });
    }).catch((error) => {
      console.error('Fetch failed:', error);
      throw error;
    })
  );
});
