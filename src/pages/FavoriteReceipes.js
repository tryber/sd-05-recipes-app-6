import React from 'react';
import Header from '../components/Header';

function FavoriteReceipes() {
  return (
    <div>
      <Header title={'Receitas Favoritas'} showSearchIcon={false} />
      <div>
        <h1>FavoriteReceipes</h1>
      </div>
    </div>
  );
}

export default FavoriteReceipes;
