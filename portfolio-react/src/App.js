import React from 'react';
import './App.css';


import {Route, Switch, Redirect} from 'react-router-dom'

import HomeLayout from './components/HomeLayout/HomeLayout'

function App() {
  return (
    <Switch>
        <Route path="/" component={HomeLayout}/>
    </Switch>

  );
}

export default App;
