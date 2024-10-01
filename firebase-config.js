// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfMaWqavThewmGJ3c8AgMqF8AXGxQ3iho",
    authDomain: "mesengger-app-cd8fb.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/project/mesengger-app-cd8fb/database/mesengger-app-cd8fb-default-rtdb/data/~2F?hl=idL",
    projectId: "mesengger-app-cd8fb",
    storageBucket: "mesengger-app-cd8fb.appspot.com",
    messagingSenderId: "966780667654",
    appId: "1:966780667654:web:2f1c56c8e8094c1c51c087"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
