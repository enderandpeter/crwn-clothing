import React from "react";
import {connect, ConnectedProps} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './styles.scss';
import {Dispatch} from "redux";

type PropsFromRedux = ConnectedProps<typeof connector>
type CartIconProps = PropsFromRedux;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => (
    <div className={'cart-icon'} onClick={toggleCartHidden}>
        <ShoppingIcon className={'shopping-icon'} />
        <span className={'item-count'}>0</span>
    </div>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const connector = connect(null, mapDispatchToProps);

export default connector(CartIcon);