import {User} from "./reducer";

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user: User) => ({
    type: SET_CURRENT_USER,
    payload: user
});