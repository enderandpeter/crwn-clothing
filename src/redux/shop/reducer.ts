import SHOP_DATA from './shop.data';
import {Action} from "redux";

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;