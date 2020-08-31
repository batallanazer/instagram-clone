import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQ74zvxpk7QzaK5ELD4YaKQ8iHu1fwGVk",
    authDomain: "instagram-clone-react-92098.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-92098.firebaseio.com",
    projectId: "instagram-clone-react-92098",
    storageBucket: "instagram-clone-react-92098.appspot.com",
    messagingSenderId: "611994632246",
    appId: "1:611994632246:web:33a559e728618b6c319897",
    measurementId: "G-CGPW3BB94N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};



