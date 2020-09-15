import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList';
import DrinkIngListCheck from './DrinksIngListCheck';
import share from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import handleClickFavorite from '../service/handleFavoriteDrink';

function DrinkRecipe({ recipe, checkbox }) {
  const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [favoriteImg, setFavoriteImg] = useState(whiteHeart);
  const [isFavorite, setIsfavorite] = useState(false);

  const handleFavorite = () => {
    if (!isFavorite) {
      handleClickFavorite(true, recipe);
      setFavoriteImg(blackHeart);
      setIsfavorite(true);
    } else {
      handleClickFavorite(false, recipe);
      setFavoriteImg(whiteHeart);
      setIsfavorite(false);
    }
  };

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoriteRecipes'));
    favoritos.forEach((element) => {
      if (element.id === recipe.idDrink) {
        setIsfavorite(true);
        setFavoriteImg(blackHeart);
      }
    });
  }, []);

  if (!recipe.idDrink) return <div>Carregando...</div>;

  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
      <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
      <button data-testid="share-btn"><img src={share} alt="share" /></button>
      <button data-testid="favorite-btn" onClick={handleFavorite}>
        <img src={favoriteImg} alt="favorite" />
      </button>
      <h4 data-testid="recipe-category">{recipe.strAlcoholic}</h4>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => {
        if (recipe[`strIngredient${ingredient}`] && !checkbox) {
          return <IngredientsList recipe={recipe} ingredient={ingredient} />;
        } else if (recipe[`strIngredient${ingredient}`]) {
          return <DrinkIngListCheck recipe={recipe} ingredient={ingredient} />;
        }
        return null;
      })}
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipe.strInstructions}</p>
    </div>
  );
}

export default DrinkRecipe;

DrinkRecipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  checkbox: PropTypes.bool.isRequired,
};
