import {CartAction, TOGGLE_CART_HIDDEN} from './actions';

export interface CartState {
    hidden: boolean;
}

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default cartReducer;