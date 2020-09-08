import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import Header from "./components/Header";
import SignInAndUp from "./components/pages/SignInAndUp";
import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import firebase from "firebase";

export interface AppState {
    currentUser: null | firebase.User;
}

class App extends React.Component<any, AppState>{
    constructor(props: any) {
        super(props);

        this.state = {
            currentUser: null
        }
    }
    unsubscribeFromAuth: null | firebase.Unsubscribe = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth && this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path={'/shop'} component={Shoppage} />
                    <Route exact path={'/signin'} component={SignInAndUp} />
                    <Route path={'/'} component={Homepage} />
                </Switch>
            </div>
        );
    }
}

export default App;
