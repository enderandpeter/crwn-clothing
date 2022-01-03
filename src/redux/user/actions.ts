import {User} from "./reducer";
import {Action} from "redux";
import {UserInfo} from "firebase";

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const EMAIL_SIGN_IN_START = 'EMAIL_SIGN_IN_START';
export const CHECK_USER_SESSION = 'CHECK_USER_SESSION';
export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export interface UserAction extends Action{
    payload: User;
}
export interface GoogleSignInAction extends Action{
    type: typeof GOOGLE_SIGN_IN_START;
}
export interface SignInSuccessAction extends UserAction{
    type: typeof SIGN_IN_SUCCESS;
}
export interface SignInFailureAction {
    type: typeof SIGN_IN_FAILURE;
    payload: Error
}
export interface CheckSessionAction {
    type: typeof CHECK_USER_SESSION;
}
export interface EmailAndPassword {
    email: string;
    password: string;
}
export interface UserCredentials extends EmailAndPassword, AdditionalData {
}
export interface AdditionalData {
    displayName: string;
}

export type AdditionalDataOrNull = AdditionalData | null;

export interface SignUpStartAction {
    type: typeof SIGN_UP_START,
    payload: UserCredentials
}
export interface SignUpSuccessAction {
    type: typeof SIGN_UP_SUCCESS,
    payload: {
        user: UserInfo,
        additionalData: AdditionalData
    }
}

export interface EmailSignInAction extends Action{
    type: typeof EMAIL_SIGN_IN_START;
    payload: EmailAndPassword;
}

export const googleSignInStart = (): GoogleSignInAction => ({
    type: GOOGLE_SIGN_IN_START
})
export const emailSignInStart = (emailAndPassword: {email: string, password: string}): EmailSignInAction => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})
export const signInSuccess = (user: User): SignInSuccessAction => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = (error: Error): SignInFailureAction => ({
    type: SIGN_IN_FAILURE,
    payload: error
});
export const checkUserSession = (): CheckSessionAction => ({
    type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: SIGN_OUT_START
});
export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});
export const signOutFailure = (error: Error) => ({
    type: SIGN_OUT_FAILURE,
    payload: error
});


export const signUpStart = (userCredentials: UserCredentials): SignUpStartAction => ({
    type: SIGN_UP_START,
    payload: userCredentials
});
export const signUpSuccess = ({ user, additionalData }: any) => ({
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});
export const signUpFailure = (error: Error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});