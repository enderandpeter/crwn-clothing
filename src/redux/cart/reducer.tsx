import {ADD_ITEM, CartAction, CLEAR_ITEM_FROM_CART, TOGGLE_CART_HIDDEN} from './actions';
import { addItemToCart } from "./utils";
import {Product} from "../../data/shop.data";

export interface CartState {
    hidden: boolean;
    cartItems: Product[];
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
                cartItems: addItemToCart(
                    state.cartItems,
                    action.payload
                )
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
            return state;
    }
};

export default cartReducer;