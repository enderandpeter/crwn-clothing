export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';

export interface ToggleCartAction {
    type: typeof TOGGLE_CART_HIDDEN;
}

export type CartAction = ToggleCartAction;

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});