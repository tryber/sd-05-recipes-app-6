import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <div id="meals">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
