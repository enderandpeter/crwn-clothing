import React from "react";
import CustomButton from "../CustomButton";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import './styles.scss';
import CartItem from "../CartItem";
import { selectCartItems } from '../../redux/cart/selectors';
import {Product} from "../../redux/shop/shop.data";
import { toggleCartHidden } from "../../redux/cart/actions";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'}>
                {cartItems.length ? (
                    cartItems.map((cartItem: Product) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;