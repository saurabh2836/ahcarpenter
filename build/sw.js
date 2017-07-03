"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/448c34a56d699c29117adc64c43affeb.woff2","448c34a56d699c29117adc64c43affeb"],["/46466101a598339df3113e26a3e3229b.gif","46466101a598339df3113e26a3e3229b"],["/46661d6d65debc63884004fed6e37e5c.svg","46661d6d65debc63884004fed6e37e5c"],["/4abc707c3a1a46cc2709d1a8aa49b6e4.gif","4abc707c3a1a46cc2709d1a8aa49b6e4"],["/4fd7ef0994be512c46a0039217105657.gif","4fd7ef0994be512c46a0039217105657"],["/52f61da48c4a7fbaa03d75e566e0a5c3.gif","52f61da48c4a7fbaa03d75e566e0a5c3"],["/674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["/677433a0892aaed7b7d2628c313c9775.svg","677433a0892aaed7b7d2628c313c9775"],["/8964e10f8ef9e0cd2b8a4f4f84a176bc.gif","8964e10f8ef9e0cd2b8a4f4f84a176bc"],["/90cf5990428f56de720b85e936a5fc42.jpg","90cf5990428f56de720b85e936a5fc42"],["/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/icons/android-chrome-192x192.png","1ea58b225a597f78adfd987ed164e573"],["/assets/icons/android-chrome-512x512.png","b65626103d4cd30abdb0423e6ab15179"],["/assets/icons/apple-touch-icon.png","4e32b9c4edcb5babb823e4824f90bb8d"],["/assets/icons/favicon-16x16.png","2cbedfd68f59e42b0d03ba3946863ee7"],["/assets/icons/favicon-32x32.png","b9108564a20f06675f60b29337c71b3e"],["/assets/icons/mstile-150x150.png","3eb725b0686148a67f2feb546670b313"],["/b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["/bundle.js","537e0d70a9aeb46a8b7a590bf3e56289"],["/e18bbf611f2a2e43afc071aa2f4e1512.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/f4769f9bdb7466be65088239c12046d1.eot","f4769f9bdb7466be65088239c12046d1"],["/fa2772327f55d8198301fdb8bcfc8158.woff","fa2772327f55d8198301fdb8bcfc8158"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["/font/OpenSans-Bold.woff2","0ac670c8d196545bda6a70fb7432e929"],["/font/OpenSans-Light.woff2","10dbc03f6171f566d4eb80643014ccbd"],["/fonts.css","498b7cc7ca4e4d68c69da9115cad19ba"],["/index.html","b046b0581a0062927bcfb1d1a72e4cb0"],["/manifest.json","bfe33d2d79c23f5a0e221abbc57ef5d8"],["/route-home.chunk.aff67.js","73a918f04dcbdb0244670ee9e9d91e2b"],["/route-profile.chunk.aa064.js","bcd53620d9fb86979f383f3bbe57af35"],["/style.css","80bc93177cfdddebd820e4665d5405e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,!1);return[t.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});