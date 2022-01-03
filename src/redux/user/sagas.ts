import { takeLatest, put, all, call } from "redux-saga/effects";
import {
    EMAIL_SIGN_IN_START,
    signInFailure,
    signInSuccess,
    GOOGLE_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    signOutSuccess,
    signOutFailure,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    signUpSuccess,
    signUpFailure,
    SignUpStartAction,
    SignUpSuccessAction,
    AdditionalDataOrNull,
} from "./actions";
import {auth, createUserProfileDocument, getCurrentUser, googleProvider} from "../../firebase/firebase.utils";

export function* signInWithGoogle(){
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user);
    } catch(error){
        yield put(signInFailure(error))
    }
}
export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* getSnapshotFromUserAuth(userAuth: any, additionalData: AdditionalDataOrNull = null){
    try {
        // @ts-ignore
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch(error){
        put(signInFailure(error))
    }
}

// @ts-ignore
export function* signInWithEmail({payload: {email, password}}){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        // @ts-ignore
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart(){
    // @ts-ignore
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth){
            return;
        }
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }: SignUpStartAction) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}
export function* onSignUpStart() {
    // @ts-ignore
    yield takeLatest(SIGN_UP_START, signUp);
}
export function* signInAfterSignUp({ payload: { user, additionalData } }: SignUpSuccessAction) {
    yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}