import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteReceipeCard from '../components/FavoriteRecipeCard';

function FavoriteReceipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const localFavs = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    setFavoriteRecipes([...localFavs]);
  }, []);

  const filterAll = () => {
    setFavoriteRecipes([...localFavs]);
  };

  const filterFood = () => {
    setFavoriteRecipes(localFavs.filter(e => e.type === 'comida'));
  };

  const filterDrink = () => {
    setFavoriteRecipes(localFavs.filter(e => e.type === 'bebida'));
  };

  return (
    <div>
      <Header title={'Receitas Favoritas'} showSearchIcon={false} />
      <button data-testid="filter-by-all-btn" onClick={filterAll}>All</button>
      <button data-testid="filter-by-food-btn" onClick={filterFood}>Food</button>
      <button data-testid="filter-by-drink-btn" onClick={filterDrink}>Drinks</button>
      <div>
        {favoriteRecipes.map((element, i) => (
          <FavoriteReceipeCard index={i} recipe={element} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteReceipes;
