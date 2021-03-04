import { createSelector } from "reselect";
import {RootState} from "../root-reducer";

const selectCart = (state: RootState) => state.cart;

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