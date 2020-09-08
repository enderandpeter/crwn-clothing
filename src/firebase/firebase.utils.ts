import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWHeVIbwQ4ifcSlGKn6kau41NJFycLzU8",
    authDomain: "crwn-db-b7030.firebaseapp.com",
    databaseURL: "https://crwn-db-b7030.firebaseio.com",
    projectId: "crwn-db-b7030",
    storageBucket: "crwn-db-b7030.appspot.com",
    messagingSenderId: "26008414346",
    appId: "1:26008414346:web:1ae3327f8da0b538ede573"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;