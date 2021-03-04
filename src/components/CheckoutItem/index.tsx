import React from 'react';

import './styles.scss';
import {Product} from "../../data/shop.data";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {clearItemFromCart} from "../../redux/cart/actions";

type PropsFromRedux = ConnectedProps<typeof connector>

export interface CheckoutItemData {
    cartItem: Product;
}

type CheckoutItemProps = CheckoutItemData & PropsFromRedux;

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItem: (item: Product) => dispatch(clearItemFromCart(item))
});

const connector = connect(null, mapDispatchToProps);

export default connector(CheckoutItem);