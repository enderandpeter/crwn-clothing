import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Switch>
           <Route exact path={'/hats'} component={HatsPage} />
           <Route path={'/'} component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;
