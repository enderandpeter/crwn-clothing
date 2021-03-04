import React from "react";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';

import './styles.scss';
import {ConnectedProps} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import CartItem from "../CartItem";
import { selectCartItems } from '../../redux/cart/selectors';
import {createStructuredSelector} from "reselect";
import {Product} from "../../data/shop.data";
import { toggleCartHidden } from "../../redux/cart/actions";

type PropsFromRedux = ConnectedProps<typeof connector>

type CartDropdownProps = PropsFromRedux & RouteComponentProps

export interface CartDropdownSelection {
    cartItems: Product[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, history, dispatch }) => (
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

const mapStateToProps = createStructuredSelector<RootState, CartDropdownSelection>({
    cartItems: selectCartItems
});

const connector = connect(mapStateToProps)
export default withRouter(connector(CartDropdown));