import React from "react";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";

import './styles.scss';
import {ConnectedProps} from "react-redux";
import {RootState} from "../../redux/root-reducer";
import CartItem from "../CartItem";
import { selectCartItems } from '../../redux/cart/selectors';

type PropsFromRedux = ConnectedProps<typeof connector>

const CartDropdown: React.FC<PropsFromRedux> = ({ cartItems }) => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state: RootState) => ({
    cartItems: selectCartItems(state)
});

const connector = connect(mapStateToProps)
export default connector(CartDropdown);