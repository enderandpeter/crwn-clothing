import { UserInfo } from "firebase";
import {SET_CURRENT_USER, UserAction} from "./actions";

export type User = null | ( UserInfo | {id: string});
export interface UserState {
    currentUser: User;
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
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