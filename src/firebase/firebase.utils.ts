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

export const createUserProfileDocument = async (userAuth: firebase.UserInfo | null, additionalData: {}) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(err){
            console.error('Error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;