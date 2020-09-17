import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FavoriteReceipeCard from '../components/FavoriteRecipeCard';

function FavoriteReceipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    const localFavs = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipes([...localFavs]);
  }, []);

  return (
    <div>
      <Header title={'Receitas Favoritas'} showSearchIcon={false} />
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-food-btn">Food</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>
      <div>
        {favoriteRecipes.map((element, i) => (
          <FavoriteReceipeCard index={i} recipe={element} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteReceipes;
