import { UserInfo } from "firebase";
import {
    SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGN_UP_FAILURE,
    UserAction
} from "./actions";

export type User = null | ( UserInfo | {id: string});
export interface UserState {
    currentUser: User;
    error?: Error | null;
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
    switch(action.type){
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
        }
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                // @ts-ignore
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;