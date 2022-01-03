import { createSelector } from "reselect";
import {RootState} from "../root-reducer";

const selectCart = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    // @ts-ignore
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    // @ts-ignore
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity: any, cartItem: { quantity: any; }) =>
                cartItem.quantity ? accumulatedQuantity + cartItem.quantity : 0,
            0
        )
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity: number, cartItem: { quantity: any; price: number; }) =>
                accumulatedQuantity + (cartItem.quantity ? cartItem.quantity : 0) * cartItem.price,
            0
        )
);