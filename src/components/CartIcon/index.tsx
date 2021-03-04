import React from "react";
import {connect, ConnectedProps} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from "../../redux/cart/selectors";

import './styles.scss';
import {Dispatch} from "redux";
import {RootState} from "../../redux/root-reducer";
import {createStructuredSelector} from "reselect";

type PropsFromRedux = ConnectedProps<typeof connector>
type CartIconProps = PropsFromRedux;

export interface CartIconSelection {
    itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => (
    <div className={'cart-icon'} onClick={toggleCartHidden}>
        <ShoppingIcon className={'shopping-icon'} />
        <span className={'item-count'}>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector<RootState, CartIconSelection>({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CartIcon);