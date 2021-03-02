import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../config';

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

firebase.initializeApp(config.firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;