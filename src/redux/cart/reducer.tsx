import {ADD_ITEM, CartAction, TOGGLE_CART_HIDDEN} from './actions';

export interface CartState {
    hidden: boolean;
    cartItems: any[];
}

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

export default cartReducer;