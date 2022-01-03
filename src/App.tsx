import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import Checkout from "./components/pages/Checkout";
import Header from "./components/Header";
import SignInAndUp from "./components/pages/SignInAndUp";
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import firebase from "firebase";
import {User} from "./redux/user/reducer";
import {RootState} from "./redux/root-reducer";
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from "./redux/user/selectors";
import {Dispatch} from "redux";
import {checkUserSession} from "./redux/user/actions";

type PropsFromRedux = ConnectedProps<typeof connector>
type AppProps = PropsFromRedux;

export interface AppSelection {
    currentUser: User
}

class App extends React.Component<AppProps> {
    unsubscribeFromAuth: null | firebase.Unsubscribe = null;

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path={'/shop'} component={Shoppage}/>
                    <Route exact path={'/signin'}
                           render={() => this.props.currentUser ? (<Redirect to={'/'}/>) : (<SignInAndUp/>)}/>
                    <Route exact path={'/'} component={Homepage}/>
                    <Route exact path='/checkout' component={Checkout} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector<RootState, AppSelection>({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
})

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
