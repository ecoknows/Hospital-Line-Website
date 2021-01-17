import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBBvaH8wQoqzJTzQWOhUdNWz4tA5bJ0Gjs",
    authDomain: "hospitalline.firebaseapp.com",
    projectId: "hospitalline",
    storageBucket: "hospitalline.appspot.com",
    messagingSenderId: "386498233338",
    appId: "1:386498233338:web:4643e933052b8a0380da43",
    measurementId: "G-V2606QPWS2"
});

const auth = app.auth();
const firestore = app.firestore();

export {
    auth,
    firestore,
}