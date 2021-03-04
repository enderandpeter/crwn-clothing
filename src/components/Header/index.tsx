import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './styles.scss';
import { connect, ConnectedProps } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';
import {User} from "../../redux/user/reducer";
import {RootState} from "../../redux/root-reducer";

type PropsFromRedux = ConnectedProps<typeof connector>
type HeaderProps = PropsFromRedux;

export interface HeaderSelection {
    currentUser: User;
    hidden: boolean;
}

// @ts-ignore
const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
    <div className={'header'}>
        <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'} />
        </Link>
        <div className={'options'}>
            <Link className={'option'} to={'shop'}>SHOP</Link>
            <Link className={'option'} to={'shop'}>CONTACT</Link>
            {
                currentUser ?
                    <div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className={'option'} to={'/signin'}>SIGN IN</Link>
            }
        </div>
        <CartIcon />
        {
            // @ts-ignore
            !hidden && <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector<RootState, HeaderSelection>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const connector = connect(mapStateToProps);

export default connector(Header);