import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import Shoppage from './components/pages/Shoppage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
           <Route exact path={'/shop'} component={Shoppage} />
           <Route path={'/'} component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
