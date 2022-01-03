import {Product} from "../shop/shop.data";

export const addItemToCart = (cartItems: Product[], cartItemToAdd: Product | undefined) => {
    const existingCartItem = cartItems.find(
        // @ts-ignore
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            // @ts-ignore
            (cartItem.id === cartItemToAdd.id) && cartItem.quantity
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: Product[], cartItemToRemove: Product) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: (cartItem.quantity ? cartItem.quantity : 0) - 1 }
            : cartItem
    );
}