import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../CheckoutItem';

import {
    selectCartItems,
    selectCartTotal
} from '../../../redux/cart/selectors';

import './styles.scss';
import {Product} from "../../../data/shop.data";
import {RootState} from "../../../redux/root-reducer";

type PropsFromRedux = ConnectedProps<typeof connector>

export interface CheckoutSelection {
    cartItems: Product[];
    total: number;
}

const Checkout: React.FC<PropsFromRedux> = ({ cartItems, total }) => (
    <div className={'checkout-page'}>
        <div className={'checkout-header'}>
            <div className={'header-block'}>
                <span>Product</span>
            </div>
            <div className={'header-block'}>
                <span>Description</span>
            </div>
            <div className={'header-block'}>
                <span>Quantity</span>
            </div>
            <div className={'header-block'}>
                <span>Price</span>
            </div>
            <div className={'header-block'}>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className={'total'}>TOTAL: ${total}</div>
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, CheckoutSelection>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const connector = connect(mapStateToProps)

export default connect(mapStateToProps)(Checkout);