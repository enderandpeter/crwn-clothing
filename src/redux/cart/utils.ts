import {Product} from "../../data/shop.data";

export const addItemToCart = (cartItems: Product[], cartItemToAdd: Product) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            (cartItem.id === cartItemToAdd.id) && cartItem.quantity
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};