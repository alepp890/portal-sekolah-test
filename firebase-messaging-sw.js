// Import Firebase Scripts khas untuk Service Worker (Compat Version)
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Konfigurasi Firebase anda
firebase.initializeApp({
  apiKey: "AIzaSyBZ_NGnC6PqvaiNpd-GI-jBd1_7OSvXCUE",
  authDomain: "portal-sekolah-test.firebaseapp.com",
  projectId: "portal-sekolah-test",
  storageBucket: "portal-sekolah-test.firebasestorage.app",
  messagingSenderId: "523708567020",
  appId: "1:523708567020:web:44580ec4f12621e48944c9"
});

const messaging = firebase.messaging();

// Mengendalikan notifikasi yang masuk semasa app di latar belakang (Background)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mesej latar belakang diterima: ', payload);
  
  const notificationTitle = payload.notification.title || 'Pengumuman Portal Sekolah';
  const notificationOptions = {
    body: payload.notification.body || 'Anda mempunyai mesej baru.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
