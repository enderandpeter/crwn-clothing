import {AnyAction} from "redux";
import {Product} from "../../redux/shop/shop.data";

export const TOGGLE_CART_HIDDEN: string = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM: string = 'ADD_ITEM';
export const CLEAR_ITEM_FROM_CART: string = 'CLEAR_ITEM_FROM_CART';
export const REMOVE_ITEM: string = 'REMOVE_ITEM';

export interface ToggleCartAction extends AnyAction {
    type: typeof TOGGLE_CART_HIDDEN;
}

export interface AddItemAction extends AnyAction {
    type: typeof ADD_ITEM;
    payload?: Product
}

export type CartAction = ToggleCartAction | AddItemAction;

export const toggleCartHidden = (): ToggleCartAction => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItem = (item: Product): AddItemAction => ({
    type: ADD_ITEM,
    payload: item
});

export const removeItem = (item: Product) => ({
    type: REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = (item: Product) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});