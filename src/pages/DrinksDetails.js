import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkIdApi } from '../service/drinkApi';
import IngredientsList from '../components/IngredientsList';

function DrinkDetail(props) {
  const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    drinkIdApi(props.match.params.id).then((response) => {
      setRecipe(response.drinks[0]);
    });
  }, []);
  console.log(recipe);

  if (!recipe.idDrink) return <div>Carregando...</div>;

  return (
    <div>
      <Header />
      <div>
        <img data-testid="recipe-photo" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        <h2 data-testid="recipe-title">{recipe.strDrink}</h2>
        <button data-testid="share-btn">share</button>
        <button data-testid="favorite-btn">Favorite</button>
        <h4 data-testid="recipe-category">{recipe.strCategory}</h4>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient) => {
          if (recipe[`strIngredient${ingredient}`] !== '') {
            return <IngredientsList recipe={recipe} ingredient={ingredient} />;
          }
          return null;
        })}
        <h3>Instructions</h3>
        <p data-testid="instructions">{recipe.strInstructions}</p>
        <button data-testid="finish-recipe-btn">Finalizar Receita</button>
      </div>
      <Footer />
    </div>
  );
}

export default DrinkDetail;
