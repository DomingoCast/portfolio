import React from 'react';
import './App.css';

import Home from './components/Home/Home'

import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
        <Route path="/" component={Home}/>
    </Switch>

  );
}

export default App;
