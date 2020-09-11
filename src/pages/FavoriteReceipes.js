import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FavoriteReceipes() {
  return (
    <div>
      <Header title={'Receitas Favoritas'} showSearchIcon={false} />
      <div>
        <h1>FavoriteReceipes</h1>
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteReceipes;
