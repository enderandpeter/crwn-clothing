import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './styles.scss';
import { connect, ConnectedProps } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import {RootState} from "../../redux/root-reducer";

type PropsFromRedux = ConnectedProps<typeof connector>
type HeaderProps = PropsFromRedux;

const Header: React.FC<HeaderProps> = ({ currentUser }) => (
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
    </div>
)

const mapStateToProps = (state: RootState) => ({
    currentUser: state.user.currentUser
})

const connector = connect(mapStateToProps);

export default connector(Header);