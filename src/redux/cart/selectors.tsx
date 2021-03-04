import { createSelector } from "reselect";
import {RootState} from "../root-reducer";

const selectCart = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                cartItem.quantity ? accumulatedQuantity + cartItem.quantity : 0,
            0
        )
);


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + (cartItem.quantity ? cartItem.quantity : 0) * cartItem.price,
            0
        )
);