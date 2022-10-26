self.addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') return skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
      if (event.request.mode === "navigate" &&
      event.request.method === "GET" &&
      registration.waiting &&
      (await clients.matchAll()).length < 2
      ) {
          registration.waiting.postMessage('skipWaiting');
          return new Response("", {headers: {"Refresh": "0"}});
      }
      return await caches.match(event.request) ||
      fetch(event.request);
  })());
});


self.addEventListener('activate', event => {

  console.log('Now ready to handle fetches!');

})


self.addEventListener('install', event => {
  console.log('installing…');


  event.waitUntil(
    caches.open('pic').then(cache => cache.add('/river.jpeg'))
  );
});






self.addEventListener('fetch', (event) => {
  console.log('fetch');




    // Let the browser do its default thing
    // for non-GET requests.

    //if (event.request.method !== "GET") return;
    console.log(caches.match('/river.jpeg'));
    const url = new URL(event.request.url);
    if (url.origin == location.origin && url.pathname == '/river.jpeg') {
      event.respondWith(caches.match('/river.jpeg'));
    }
    // event.respondWith(
    //   (async () => {
    //     // Try to get the response from a cache.
    //     const cache = await caches.open('pic');

    //     const cachedResponse = await cache.match(event.request);

    //     console.log(cachedResponse, event.request);

    //     if (cachedResponse) {
    //       // If we found a match in the cache, return it, but also
    //       // update the entry in the cache in the background.
    //       console.log(cachedResponse, event.request);

    //       event.waitUntil(cache.add(event.request));
    //       return cachedResponse;
    //     }

    //     // If we didn't find a match in the cache, use the network.
    //     return fetch(event.request);
    //   })()
    // );



});

