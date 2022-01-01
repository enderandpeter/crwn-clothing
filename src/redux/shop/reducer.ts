import {ShopAction, UPDATE_COLLECTIONS} from "./actions";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action: ShopAction) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;