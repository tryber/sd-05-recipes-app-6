import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList';
import IngredientsListCheck from './IngredientsListCheck';
import share from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import handleClickFavorite from '../service/handleFavoriteFood';

function FoodRecipe({ recipe, checkbox }) {
  const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [favoriteImg, setFavoriteImage] = useState(whiteHeart);
  const [isFavorite, setIsfavorite] = useState(false);
  const [linkCopiado, setLinkCopiado] = useState(false);

  const handleFavorite = () => {
    if (!isFavorite) {
      setFavoriteImage(blackHeart);
      setIsfavorite(true);
      handleClickFavorite(true, recipe);
    } else {
      handleClickFavorite(false, recipe);
      setFavoriteImage(whiteHeart);
      setIsfavorite(false);
    }
  };

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoritos) {
      favoritos.forEach((element) => {
        if (element.id === recipe.idMeal) {
          setIsfavorite(true);
          setFavoriteImage(blackHeart);
        }
      });
    }
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000/comidas/${recipe.idMeal}`);
    setLinkCopiado(true);
  };

  if (!recipe.idMeal) return <div>Carregando...</div>;

  return (
    <div>
      <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
      <button data-testid="share-btn" src={share} onClick={handleClick}>
        <img src={share} alt="share" />
      </button>
      {linkCopiado && <p>Link copiado!</p>}
      <button data-testid="favorite-btn" src={favoriteImg} onClick={handleFavorite}>
        <img src={favoriteImg} alt="favorite" />
      </button>
      <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, i) => {
        if (recipe[`strIngredient${ingredient}`] && !checkbox) {
          return <IngredientsList recipe={recipe} ingredient={ingredient} index={i} />;
        } else if (recipe[`strIngredient${ingredient}`]) {
          return <IngredientsListCheck recipe={recipe} ingredient={ingredient} index={i} />;
        }
        return null;
      })}
      <h3>Instructions</h3>
      <p data-testid="instructions">{recipe.strInstructions}</p>
    </div>
  );
}

export default FoodRecipe;

FoodRecipe.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  checkbox: PropTypes.bool.isRequired,
};
