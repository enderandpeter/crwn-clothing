import React from 'react';

import './styles.scss';
import {Product} from "../../data/shop.data";

export interface CartItemProps {
    item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className={'cart-item'}>
        <img src={imageUrl} alt={'item'} />
        <div className={'item-details'}>
            <span className={'name'}>{name}</span>
            <span className={'price'}>
        {quantity} x ${price}
      </span>
        </div>
    </div>
);

export default CartItem;