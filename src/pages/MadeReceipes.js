import React from 'react';
import Header from '../components/Header';
import MadeReceipesCard from '../components/MadeReceipesCard';

function MadeReceipes() {
  return (
    <div>
      <Header title={'Receitas Feitas'} showSearchIcon={false} />
      <div>
        <button data-testid="filter-by-all-btn">All</button>
        <button data-testid="filter-by-food-btn" >Food</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
        <MadeReceipesCard />
      </div>
    </div>
  );
}

export default MadeReceipes;
