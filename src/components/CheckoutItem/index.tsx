import React from 'react';

import './styles.scss';
import {Product} from "../../redux/shop/shop.data";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/actions";

type PropsFromRedux = ConnectedProps<typeof connector>

export interface CheckoutItemData {
    cartItem: Product;
}

type CheckoutItemProps = CheckoutItemData & PropsFromRedux;

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearItem: (item: Product) => dispatch(clearItemFromCart(item)),
    addItem: (item: Product) => dispatch(addItem(item)),
    removeItem: (item: Product) => dispatch(removeItem(item))
});

const connector = connect(null, mapDispatchToProps);

export default connector(CheckoutItem);