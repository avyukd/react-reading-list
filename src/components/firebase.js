import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB_etC-I2hrHKObHl-MhRH9mdAuZ9kOJvg",
    authDomain: "reading-list-2aa18.firebaseapp.com",
    projectId: "reading-list-2aa18",
    storageBucket: "reading-list-2aa18.appspot.com",
    messagingSenderId: "1093550770558",
    appId: "1:1093550770558:web:ef00a6e318eca9f7270b2f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;