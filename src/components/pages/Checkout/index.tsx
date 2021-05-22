import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../CheckoutItem';
import StripeCheckoutButton from '../../StripeCheckoutButton';

import {
    selectCartItems,
    selectCartTotal
} from '../../../redux/cart/selectors';

import './styles.scss';
import {Product} from "../../../redux/shop/shop.data";
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
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, CheckoutSelection>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const connector = connect(mapStateToProps)

export default connect(mapStateToProps)(Checkout);