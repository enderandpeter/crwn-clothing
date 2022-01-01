import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../config';
import {Shop} from "../redux/shop/shop.data";

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

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: Shop[] | undefined) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd?.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

firebase.initializeApp(config.firebase);

export const convertCollectionsSnapshotToMap = (collections: firebase.firestore.QuerySnapshot) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator: {[key: string]: Shop}, collection: Shop) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;