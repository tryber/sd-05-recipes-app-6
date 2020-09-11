import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header title={'Bebidas'} showSearchIcon />
      <div>
        <h1>Drinks</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
