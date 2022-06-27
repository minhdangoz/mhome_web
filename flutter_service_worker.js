'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ec82a02d96cd85de07c49afa5f403d8d",
"index.html": "19b91b892be21236576c25a975016c48",
"/": "19b91b892be21236576c25a975016c48",
"main.dart.js": "3556c1e889a00b1b0d5c91bff88bb1c3",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "94e90d8f9e420adb8babfcd9fd3f1af1",
"assets/AssetManifest.json": "22ac24bbd122eabb591b9da0d041139c",
"assets/NOTICES": "713612c632801ebe4801942b12d80e56",
"assets/FontManifest.json": "d36adaaae58c627f85ed9df676c6190c",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/ic_device_detail_off_arm.png": "1acfe00c403be1d33f6a61bdcf1f420d",
"assets/assets/images/ic_battery_device_detail_off_75.png": "92f51527d531ff0085c9f89f7b4b4805",
"assets/assets/images/ic_youtube.png": "1ae3660fbc51470eadcc99e9476d69db",
"assets/assets/images/ic_device_remake.png": "8920717d4d8cb0e4deeef014fcf4f1bf",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/image_camera.svg": "5e95c3cde3efd1f6cbaa9fb62e5b8e0c",
"assets/assets/images/ic_status_device_on.png": "1625debad3605488aaea840d99b9f903",
"assets/assets/images/ic_device_detail_disarm.png": "f31992fde8bd8dc9340de950a4663d86",
"assets/assets/images/logo_mhome.png": "c8de52c4ad5a584ea0a4be0c4902a672",
"assets/assets/images/ic_history_device_off.png": "f428a67abe3737a9b2091ada743710f9",
"assets/assets/images/ic_device_detail_off_doorbel.png": "b4bfe51b1ecc6677a1d830e8cc437c68",
"assets/assets/images/ic_sm_step2_router.png": "8294a218a38f6b072afc3e690c32a5cd",
"assets/assets/images/ic_sm_step1.png": "0fc23fb045660622c93a17f39a6af738",
"assets/assets/images/background_status_doorbell.png": "27bc781387791057c98c9e436420ed17",
"assets/assets/images/ic_call_accept.png": "aed5858e4268d75fc532cfc6af99a160",
"assets/assets/images/ic_choose_intro_smartlink.png": "b5e050e98651bf3fb156dc06c10d0471",
"assets/assets/images/ic_camera.svg": "1197b7f9fd2ee1d2b6df38c5b81517e0",
"assets/assets/images/background_buycall.png": "d6404b7bac4f27d9b9883d470c0fcb8b",
"assets/assets/images/manual_add_camera_config.png": "03ff7d2f3971a53a707cbcacde5093ef",
"assets/assets/images/ic_aponline_step2.png": "a51003ea1858324193f67bb13d10a2ac",
"assets/assets/images/ic_history_device_on.png": "b54b97028dae667e06fce1278630c48a",
"assets/assets/images/ic_aponline_step1.png": "01cc4d327db3e13787a32e10ad4f37db",
"assets/assets/images/image_camera.png": "b8704ec20b89dc88482a76eff0500972",
"assets/assets/images/ic_choose_intro_aponline.png": "d0a9cfeaae4ff4143a221d0e645b66d8",
"assets/assets/images/ic_device.png": "ac4c53b7468d97134ff3d6c1bfcf488a",
"assets/assets/images/ic_aponline_reconnect_step1.png": "5b165e018530b328c61be2602550b01d",
"assets/assets/images/ic_aponline_reconnect_step3.png": "b443d32ce1145c3cd26354c4aaa4df1d",
"assets/assets/images/ic_aponline_reconnect_step2.png": "23d47df01622e0efa442ac122e0c6002",
"assets/assets/images/Logo_Mobifone_Global_Official.svg": "ea6e39fabd6d5279f176efbfa81f007f",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/ezviz_bottom.png": "f1e46c0035c9ea484fcab881a0d50e46",
"assets/assets/images/ic_sm_reconnect_step1.png": "70de261915f500a462b2d19bb3a6e1d1",
"assets/assets/images/ic_status_device_off.png": "f87aa5a4cacd19d636bc165fcd0d1821",
"assets/assets/images/ic_device_detail_off_home.png": "00cdff64ab13ddcda1bb8380e6b26ba2",
"assets/assets/images/ic_sm_reconnect_step2.png": "2376a4c61fb31ab559eb7bba041e214c",
"assets/assets/images/ic_sm_reconnect_step3.png": "b443d32ce1145c3cd26354c4aaa4df1d",
"assets/assets/images/background_register_noise.png": "a33bcad291e310afda48c7b512a35fd2",
"assets/assets/images/ic_top_history_call.png": "fc993e51b7a8c61844585fc200058cce",
"assets/assets/images/ic_call_miss.png": "4441538c9194875cbeefee16cfd099dc",
"assets/assets/images/homebg.png": "30d0f8363dfc8ed98b0e923402340b1b",
"assets/assets/app_icons/icon_mhome_1000.png": "0462a186c4720515e62f6d33556e4645",
"assets/assets/app_icons/logo_mhome.svg": "54384ac5e06207925f64d05366e651f3",
"assets/assets/app_icons/ic_foreground_launcher.png": "6856ef99194648b38bfb629f1e13ddc9",
"assets/assets/app_icons/logo_mobifone_global.png": "a82cd16dc2371a1037024bd7047c2d50",
"assets/assets/app_icons/logo_mobifone_global.svg": "14aebce2f2cdf2e037e10f5319c07890",
"assets/assets/app_icons/ic_mhome.svg": "730b6eef2c6b156f6c1df2f201815dcc",
"assets/assets/icons/Search%2520Icon.svg": "e86ce3fdf2c8be303b1338a287062d69",
"assets/assets/icons/Log%2520out.svg": "d762ccf53dc6843df2e7fa55ca08dba0",
"assets/assets/icons/Plus%2520Icon.svg": "8980578e97cd2cbad00b71be8183f91d",
"assets/assets/icons/receipt.svg": "6dd6b67fb2796be43a9b9d2b1ee803de",
"assets/assets/icons/User%2520Icon.svg": "3944ad12a2e9014c192fc5795e69a589",
"assets/assets/icons/Parcel.svg": "17e6ca2305b1da7527281d69259c855a",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "997d4f0aa07c6094a4339040741b4bab",
"assets/assets/icons/User.svg": "da6c4fccfbbf6a07d6478cb5ac7e9f9f",
"assets/assets/icons/otp.svg": "d25ab885f44aa75a59c2ef8fde0cec91",
"assets/assets/icons/Flash%2520Icon.svg": "fcde0c03f2836567e42a45ac08616a42",
"assets/assets/icons/Bill%2520Icon.svg": "100acc86a48a094da8902a47f3bab1b6",
"assets/assets/icons/Shop%2520Icon.svg": "71cf1a5022470cbbd1e76a923d1d968f",
"assets/assets/icons/Question%2520mark.svg": "b20151b891eb8e9c927f259dabd6e553",
"assets/assets/icons/Cart%2520Icon.svg": "b58f308b0312e4358a04eeadc02575d5",
"assets/assets/icons/ic_camera_360.png": "2b70bf06fd8495052d7f51bd64f6c461",
"assets/assets/icons/ic_add_manual.svg": "46ba06ff61858f13d39fd748e4ecb79d",
"assets/assets/icons/Lock.svg": "ea577ace50978a6344c26a10c6f27b49",
"assets/assets/icons/Settings.svg": "d8e321d2db0af3ee55c643d20312ba8a",
"assets/assets/icons/Mail.svg": "deba8f9b4446c04abcf1cdca0590833a",
"assets/assets/icons/Star%2520Icon.svg": "a4c930c4bf5854048edb32d7d370aada",
"assets/assets/icons/Discover.svg": "b5e8150c8f0c20351b84b2241405c8b4",
"assets/assets/icons/Bell.svg": "536eb6601a35ddab0f7b6bdd6c3ff145",
"assets/assets/icons/arrow_right.svg": "9c492cd795858f3522b4debfb737cbad",
"assets/assets/icons/Gift%2520Icon.svg": "d109169b3e2ab8256445f626ae4c888c",
"assets/assets/icons/Close.svg": "6b3561c87a732bcdf1cfc4cefd9cd9f6",
"assets/assets/icons/ic_qrcode.svg": "1688fdcd0a831e58928516af29d61841",
"assets/assets/icons/Back%2520ICon.svg": "48c3c4eb319f67f90296649fa8271cce",
"assets/assets/icons/Trash.svg": "fe2725bc4781bace6708d522889456e7",
"assets/assets/icons/facebook-2.svg": "b16d4798a9c0f65ff3a7b12270cd7f7d",
"assets/assets/icons/Cash.svg": "a24a70772c290370387c0bb33730ce01",
"assets/assets/icons/Heart%2520Icon.svg": "0dcf36056268963f7b582eb3bd80ec72",
"assets/assets/icons/wifi_config.svg": "8dbc2060eb9431d74d1e02ac80564420",
"assets/assets/icons/Phone.svg": "5fc702cf20c5fc37bd28a3bd5c8d8810",
"assets/assets/icons/Success.svg": "70f76d95e96ee6877ec6367b049fbc4d",
"assets/assets/icons/Call.svg": "3745eeef13c1facd87afe4cbe208e300",
"assets/assets/icons/google-icon.svg": "af89e162738e95f20e41f175cf1e930e",
"assets/assets/icons/Conversation.svg": "c23404da9004575ccff6f78b09be3b13",
"assets/assets/icons/remove.svg": "a3a85cd7bc1699150a2c86e850a90e60",
"assets/assets/icons/twitter.svg": "58e83cac5d93b6be707d27a9ffb5aa96",
"assets/assets/icons/Error.svg": "b69030d759140aaada89f2cc044a3c72",
"assets/assets/icons/Heart%2520Icon_2.svg": "fd7dce0eb7741375843bcda4c7f4e52d",
"assets/assets/icons/Location%2520point.svg": "5b1539e1fe1898b2155b6cc14b9f3c75",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e3ad560a09a1bf785b5505c21777ecee",
"assets/assets/icons/Camera%2520Icon.svg": "6c417b2027ec9b901f856099422fc258",
"assets/assets/icons/ic_scan_qr.svg": "c63359669b04922530ee164ba4affe0f",
"assets/assets/fonts/lato_black.ttf": "a54bddbc1689d05277d2127f58589917",
"assets/assets/fonts/lato_italic.ttf": "4ffc48d0549568bb624b9ef9c1cf2626",
"assets/assets/fonts/lato_heavy.ttf": "72c6dd530f0acc74b5286a7dcfa9e2d8",
"assets/assets/fonts/lato_thin.ttf": "454421e7b2b8aaee2980346571f86863",
"assets/assets/fonts/lato_semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/lato_regular.ttf": "6d4e78225df0cfd5fe1bf3e8547fefe4",
"assets/assets/fonts/lato_bold.ttf": "5b1b8b856d7a8cb1cb0bae6d0573f2e9",
"assets/assets/fonts/lato_medium.ttf": "06e1c8dbe641dd9dfa4367dc2a6efb9f",
"assets/assets/fonts/lato_light.ttf": "cf44fd55d7045a2378f92f86ddfca3d3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
