import {AnyAction} from "redux";
import { UserInfo } from "firebase";
import {SET_CURRENT_USER} from "./actions";

export type User = null | {id: string} | UserInfo;
export interface UserState {
    currentUser: User;
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action: AnyAction) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;