import {AnyAction} from "redux";
import {Product} from "../../data/shop.data";

export const TOGGLE_CART_HIDDEN: string = 'TOGGLE_CART_HIDDEN';
export const ADD_ITEM: string = 'ADD_ITEM';

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

export const addItem = (item: any): AddItemAction => ({
    type: ADD_ITEM,
    payload: item
})