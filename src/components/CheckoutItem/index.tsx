import React from 'react';

import './styles.scss';
import {Product} from "../../data/shop.data";

export interface CheckoutItemProps {
    cartItem: Product;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;