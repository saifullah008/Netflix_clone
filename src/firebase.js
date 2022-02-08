// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB71i1LaGLPi0FEqTa-KGZHJgtpU1S35Lo",
    authDomain: "netflix-clone-804c5.firebaseapp.com",
    projectId: "netflix-clone-804c5",
    storageBucket: "netflix-clone-804c5.appspot.com",
    messagingSenderId: "235738332973",
    appId: "1:235738332973:web:36fc4e39fbab7aac761da4",
    measurementId: "G-TXCDF9WBV1"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log(auth);

  export {auth};
  export default db;