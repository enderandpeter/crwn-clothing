import React, {useEffect} from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import Checkout from "./components/pages/Checkout";
import Header from "./components/Header";
import SignInAndUp from "./components/pages/SignInAndUp";
import {Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentUser} from "./redux/user/selectors";
import {checkUserSession} from "./redux/user/actions";

const App = () => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch])
    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/shop'} component={Shoppage}/>
                <Route exact path={'/signin'}
                       render={() => currentUser ? (<Redirect to={'/'}/>) : (<SignInAndUp/>)}/>
                <Route exact path={'/'} component={Homepage}/>
                <Route exact path='/checkout' component={Checkout}/>
            </Switch>
        </div>
    );
}

export default App;
