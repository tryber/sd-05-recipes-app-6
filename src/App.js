import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import MainReceipes from './pages/MainReceipes';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/comidas" component={MainReceipes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
