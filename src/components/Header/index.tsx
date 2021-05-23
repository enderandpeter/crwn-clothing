import React from 'react';
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

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './styles';

type PropsFromRedux = ConnectedProps<typeof connector>
type HeaderProps = PropsFromRedux;

export interface HeaderSelection {
    currentUser: User;
    hidden: boolean;
}

// @ts-ignore
const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as={'div'} onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to={'/signin'}>SIGN IN</OptionLink>
            }
        </OptionsContainer>
        <CartIcon />
        {
            // @ts-ignore
            !hidden && <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector<RootState, HeaderSelection>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const connector = connect(mapStateToProps);

export default connector(Header);