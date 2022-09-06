importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyDYXHuMBECXu2JJAmGDh-Q1TYmxVn6r-Js',
    appId: '1:813554581294:web:6445e8f16fac089f7184bf',
    messagingSenderId: '813554581294',
    projectId: 'mhome-82949',
    authDomain: 'mhome-82949.firebaseapp.com',
    storageBucket: 'mhome-82949.appspot.com',
    measurementId: 'G-LHFJ80XDSP',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});