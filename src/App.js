import React from 'react';
import './App.css';
import Provider from './context/Provider';
import MainReceipes from './pages/MainReceipes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <div>
        <Header pageTitle={"Comida"} search={true}/>
        <div id="meals">
        <MainReceipes />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
