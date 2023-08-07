var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.getToken({ vapidKey: "YOUR_VAPID_KEY" }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('No registration token available.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
