importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// COLE AQUI o seu firebaseConfig que aparece na sua foto
const firebaseConfig = {
    apiKey: "AIzaSyCvb_5kfqZ0TcvqqXYJ3H0zj...", // Complete com o seu da foto
    authDomain: "stop-pay.firebaseapp.com",
    projectId: "stop-pay",
    storageBucket: "stop-pay.appspot.com",
    messagingSenderId: "924558165559",
    appId: "1:924558165559:web:f9cf09b7007..."
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Exibe a notificação quando o app está fechado
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827347.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
