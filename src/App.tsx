import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import Header from "./components/Header";
import SignInAndUp from "./components/pages/SignInAndUp";
import { Route, Switch } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import firebase from "firebase";

export interface AppState {
    currentUser: null | {id: string} | firebase.UserInfo;
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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth, {});

                userRef?.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            }
            this.setState({currentUser: userAuth})
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
