const cacheName = 'cache-v1';

const resourcesToPrecache = [
    '/',
    'index.html',
    'style.css',
    'assets/0.png',
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
    'assets/5.png',
    'assets/6.png',
    'assets/7.png',
    'assets/8.png',
    'assets/9.png',
    'assets/background-day.png',
    'assets/background-night.png',
    'assets/base.png',
    'assets/bluebird-downflap.png',
    'assets/bluebird-midflap.png',
    'assets/bluebird-upflap.png',
    'assets/gameover.png',
    'assets/message.png',
    'assets/pipe-green.png',
    'assets/pipe-green-top.png',
    'assets/pipe-red.png',
    'assets/pipe-red-top.png',
    'assets/redbird-downflap.png',
    'assets/redbird-midflap.png',
    'assets/redbird-upflap.png',
    'assets/yellowbird-downflap.png',
    'assets/yellowbird-midflap.png',
    'assets/yellowbird-upflap.png',
    'flappy-bird-webfont.woff',
    'flappy-bird-webfont.woff2',
    'script.js'
];

self.addEventListener('install', event => {
    console.log('Service worker install event');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    )
});