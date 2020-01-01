import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header'

import './scss/main.scss'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="App">
     <Switch>
      <Route exact path='/' component={Home}/>
      </Switch>
      
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
