import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';
import MainReceipes from './pages/MainReceipes';

function App() {
  return (
    <Provider>
      <div id="meals">
        <Login />
        <MainReceipes />
      </div>
    </Provider>
  );
}

export default App;
