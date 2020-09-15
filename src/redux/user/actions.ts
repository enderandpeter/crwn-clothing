import {User} from "./reducer";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface SetUserAction {
    type: typeof SET_CURRENT_USER;
    payload: User;
}

export type UserAction = SetUserAction;

export const setCurrentUser = (user: User): UserAction => ({
    type: SET_CURRENT_USER,
    payload: user
});