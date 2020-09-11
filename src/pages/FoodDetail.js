import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodIdApi } from '../service/foodApi';
import IngredientsList from '../components/IngredientsList';

function FoodDetail(props) {
  const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    foodIdApi(props.match.params.id).then((response) => {
      setRecipe(response.meals[0]);
    });
  }, []);
  console.log(recipe);

  if (!recipe.idMeal) return <div>Carregando...</div>;

  return (
    <div>
      <div>
        <img data-testid="recipe-photo" src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2 data-testid="recipe-title">{recipe.strMeal}</h2>
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

export default FoodDetail;
