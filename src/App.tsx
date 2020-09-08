import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import Header from "./components/Header";
import SignInAndUp from "./components/pages/SignInAndUp";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <Switch>
           <Route exact path={'/shop'} component={Shoppage} />
           <Route exact path={'/signin'} component={SignInAndUp} />
           <Route path={'/'} component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
