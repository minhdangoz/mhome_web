'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9f2ce82a17bd74d3c869a11e5dad88dc",
"assets/assets/app_icons/icon_mhome_1000.png": "0462a186c4720515e62f6d33556e4645",
"assets/assets/app_icons/ic_foreground_launcher.png": "6856ef99194648b38bfb629f1e13ddc9",
"assets/assets/app_icons/ic_mhome.svg": "f5dc2c331b0fcf77699f62db91b8264f",
"assets/assets/app_icons/logo_mhome.svg": "ea2677e417e146a72be8393a5fea231d",
"assets/assets/app_icons/logo_mobifone_global.png": "a82cd16dc2371a1037024bd7047c2d50",
"assets/assets/app_icons/logo_mobifone_global.svg": "c69f094724d9d1cc7e9e3779f7b7abf6",
"assets/assets/fonts/lato_black.ttf": "a54bddbc1689d05277d2127f58589917",
"assets/assets/fonts/lato_bold.ttf": "5b1b8b856d7a8cb1cb0bae6d0573f2e9",
"assets/assets/fonts/lato_heavy.ttf": "72c6dd530f0acc74b5286a7dcfa9e2d8",
"assets/assets/fonts/lato_italic.ttf": "4ffc48d0549568bb624b9ef9c1cf2626",
"assets/assets/fonts/lato_light.ttf": "cf44fd55d7045a2378f92f86ddfca3d3",
"assets/assets/fonts/lato_medium.ttf": "06e1c8dbe641dd9dfa4367dc2a6efb9f",
"assets/assets/fonts/lato_regular.ttf": "6d4e78225df0cfd5fe1bf3e8547fefe4",
"assets/assets/fonts/lato_semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/lato_thin.ttf": "454421e7b2b8aaee2980346571f86863",
"assets/assets/icons/arrow_right.svg": "7d2e92d8f069ee2c73f1820beea62dfd",
"assets/assets/icons/Back%2520ICon.svg": "a1540761ddc4d5ebd1ebf7e732a7af0a",
"assets/assets/icons/Bell.svg": "03c0fc05f0c26d3107496511ef140dd2",
"assets/assets/icons/Bill%2520Icon.svg": "c14fba2dc1da1beac210bc96c90568a6",
"assets/assets/icons/Call.svg": "52af54660badff2b15a84fd34203c7ee",
"assets/assets/icons/Camera%2520Icon.svg": "25207a856bce06a7c1f4d695638a0383",
"assets/assets/icons/Cart%2520Icon.svg": "220f5aa89905b1351c4fdf71aee29f11",
"assets/assets/icons/Cash.svg": "9a1bfa4f03729b332bb98439f713637e",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "3e6e1ab6925d3db86ce9bd109c121db0",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e83caa6ca41e8af9229ae29d79f9410b",
"assets/assets/icons/Close.svg": "70478a15e0479750b0b03e000041e9f3",
"assets/assets/icons/Conversation.svg": "291fb6c6acdeb807afb452ae90f930db",
"assets/assets/icons/Discover.svg": "0981b6e74080b318d0bb4255681d2e05",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/Flash%2520Icon.svg": "8b2bc2fd2894d143940eb565b4a827fe",
"assets/assets/icons/Gift%2520Icon.svg": "6feeb93f33263146741e38f4ebfbccbc",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/Heart%2520Icon.svg": "a2be4f5f2079f5ff3dbd117eeaa9471e",
"assets/assets/icons/Heart%2520Icon_2.svg": "f728c6b3d75dfab6450f56a2a57633f0",
"assets/assets/icons/ic_add_manual.svg": "9f7df9a62081f887ec2267f419bb74f7",
"assets/assets/icons/ic_camera_360.png": "2b70bf06fd8495052d7f51bd64f6c461",
"assets/assets/icons/ic_qrcode.svg": "eb8b3775f61854e9d1aa14208b4064cd",
"assets/assets/icons/ic_scan_qr.svg": "da52c34d8f19354e3a6bed6103300128",
"assets/assets/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/Log%2520out.svg": "ef8dc3d612e3e63ae4728a24d9982f13",
"assets/assets/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/icons/otp.svg": "0a276412473b50ae77b898512b73de36",
"assets/assets/icons/Parcel.svg": "45a2e4513281a1c511cff0d7d86439d1",
"assets/assets/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/icons/Plus%2520Icon.svg": "23bd873f0fdef239500d68a150f9fa93",
"assets/assets/icons/Question%2520mark.svg": "7d0f74b3eb3cbeac772cb6a41476cfcf",
"assets/assets/icons/receipt.svg": "e0ecaf4c17597903fa1e8ab3c28fa963",
"assets/assets/icons/remove.svg": "77f17bcf86cb62db1b3ce224d6cb6fd3",
"assets/assets/icons/Search%2520Icon.svg": "5383aff67a0cc61bc20b953c73d87469",
"assets/assets/icons/Settings.svg": "d8fd4b8ed70a516c17d3d981d9a49999",
"assets/assets/icons/Shop%2520Icon.svg": "1eda40840728635d3279f313774d1675",
"assets/assets/icons/Star%2520Icon.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/icons/Trash.svg": "f877c275194b39ca5f21fe7202ca852a",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/icons/User%2520Icon.svg": "950d2f1652bdb59675231707a9124535",
"assets/assets/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/add_camera_wifi_config.svg": "4a862f8476b0c15678d6e15e4ec6ca0e",
"assets/assets/images/background_buycall.png": "d6404b7bac4f27d9b9883d470c0fcb8b",
"assets/assets/images/background_register_noise.png": "a33bcad291e310afda48c7b512a35fd2",
"assets/assets/images/background_status_doorbell.png": "27bc781387791057c98c9e436420ed17",
"assets/assets/images/camera_live_preview.png": "4914e4b072f19e4119f6b4eaa150a7f2",
"assets/assets/images/ezviz_bottom.png": "1f00a916853dd05e8433bdce39ac8708",
"assets/assets/images/homebg.png": "30d0f8363dfc8ed98b0e923402340b1b",
"assets/assets/images/icon_ignore.png": "bf40537b4fdc29421a42da4c29ba4425",
"assets/assets/images/ic_aponline_reconnect_step1.png": "5b165e018530b328c61be2602550b01d",
"assets/assets/images/ic_aponline_reconnect_step2.png": "23d47df01622e0efa442ac122e0c6002",
"assets/assets/images/ic_aponline_reconnect_step3.png": "b443d32ce1145c3cd26354c4aaa4df1d",
"assets/assets/images/ic_aponline_step1.png": "01cc4d327db3e13787a32e10ad4f37db",
"assets/assets/images/ic_aponline_step2.png": "a51003ea1858324193f67bb13d10a2ac",
"assets/assets/images/ic_battery_device_detail_off_75.png": "92f51527d531ff0085c9f89f7b4b4805",
"assets/assets/images/ic_call_accept.png": "aed5858e4268d75fc532cfc6af99a160",
"assets/assets/images/ic_call_miss.png": "4441538c9194875cbeefee16cfd099dc",
"assets/assets/images/ic_choose_intro_aponline.png": "d0a9cfeaae4ff4143a221d0e645b66d8",
"assets/assets/images/ic_choose_intro_smartlink.png": "b5e050e98651bf3fb156dc06c10d0471",
"assets/assets/images/ic_device.png": "ac4c53b7468d97134ff3d6c1bfcf488a",
"assets/assets/images/ic_devicegroup_remaker.png": "bf3895c4ff38f9ed8fcdba3abc8e4e38",
"assets/assets/images/ic_device_detail_disarm.png": "f31992fde8bd8dc9340de950a4663d86",
"assets/assets/images/ic_device_detail_off_arm.png": "1acfe00c403be1d33f6a61bdcf1f420d",
"assets/assets/images/ic_device_detail_off_doorbel.png": "b4bfe51b1ecc6677a1d830e8cc437c68",
"assets/assets/images/ic_device_detail_off_home.png": "00cdff64ab13ddcda1bb8380e6b26ba2",
"assets/assets/images/ic_device_remake.png": "8920717d4d8cb0e4deeef014fcf4f1bf",
"assets/assets/images/ic_history_device_off.png": "f428a67abe3737a9b2091ada743710f9",
"assets/assets/images/ic_history_device_on.png": "b54b97028dae667e06fce1278630c48a",
"assets/assets/images/ic_move_yellow.png": "fa4b11a26e3e4ebd74f2618c14c1fcee",
"assets/assets/images/ic_sellect_all_yellow.png": "8f51fe7341cd44fcd511096f76b31214",
"assets/assets/images/ic_sm_reconnect_step1.png": "70de261915f500a462b2d19bb3a6e1d1",
"assets/assets/images/ic_sm_reconnect_step2.png": "2376a4c61fb31ab559eb7bba041e214c",
"assets/assets/images/ic_sm_reconnect_step3.png": "b443d32ce1145c3cd26354c4aaa4df1d",
"assets/assets/images/ic_sm_step1.png": "0fc23fb045660622c93a17f39a6af738",
"assets/assets/images/ic_sm_step2_router.png": "8294a218a38f6b072afc3e690c32a5cd",
"assets/assets/images/ic_sm_step2_yes.png": "3df066fee68b3f551ea2db8b278b1e7c",
"assets/assets/images/ic_status_device_off.png": "f87aa5a4cacd19d636bc165fcd0d1821",
"assets/assets/images/ic_status_device_on.png": "1625debad3605488aaea840d99b9f903",
"assets/assets/images/ic_tick_box.png": "d3315d712dd59738b65e4d36a6c5ac29",
"assets/assets/images/ic_top_history_call.png": "fc993e51b7a8c61844585fc200058cce",
"assets/assets/images/ic_youtube.png": "1ae3660fbc51470eadcc99e9476d69db",
"assets/assets/images/image_camera.png": "1510ddc189b33adc2e9dfe5b2583bd9e",
"assets/assets/images/logo_mhome%2520copy.png": "c8de52c4ad5a584ea0a4be0c4902a672",
"assets/assets/images/logo_mhome.png": "c8de52c4ad5a584ea0a4be0c4902a672",
"assets/assets/images/Logo_Mobifone_Global_Official.svg": "4847b02cafde8d72485ec8caf5df5e6d",
"assets/assets/images/manual_add_camera_config.png": "3d99c49997d76363ff8474606ac4bb23",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/FontManifest.json": "d36adaaae58c627f85ed9df676c6190c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f5fabe2e564ea30d2a877790cbd46ba0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "edcefaab9b8803fec0f6e46713781fe5",
"/": "edcefaab9b8803fec0f6e46713781fe5",
"main.dart.js": "2ddab485a752bf22c44a07e3c1480ab0",
"manifest.json": "76d1713bf03f9929ae034da8dea4166f",
"version.json": "87fef71e54de79189f5cde12b43916f6"
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
