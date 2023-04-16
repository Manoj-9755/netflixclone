import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyCdlKlUeKs2p2juuALQCPOW-RSkq5UIn2I",
authDomain: "netflix-clone-230b7.firebaseapp.com",
projectId: "netflix-clone-230b7",
storageBucket: "netflix-clone-230b7.appspot.com",
messagingSenderId: "877646149801",
appId: "1:877646149801:web:2aa6269f87464baad551b8", 
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
