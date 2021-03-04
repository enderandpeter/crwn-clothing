import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './styles.scss';
import { connect, ConnectedProps } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import {RootState} from "../../redux/root-reducer";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

type PropsFromRedux = ConnectedProps<typeof connector>
type HeaderProps = PropsFromRedux;

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
    <div className={'header'}>
        <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'}></Logo>
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

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}: RootState) => ({
    currentUser,
    hidden
})

const connector = connect(mapStateToProps);

export default connector(Header);