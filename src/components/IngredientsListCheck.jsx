import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { useEffect } from 'react';
// import '../styles/App.css';

function IngredientsListCheck({ recipe, ingredient }) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(Context);
  const ingredientNumber = parseInt(ingredient);
  
  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localInProgress) { setInProgressRecipes(localInProgress) };
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (recipe.idDrink) {
      handleDrinkOrMeal(value, checked, 'cocktails', recipe.idDrink);
    }
    if (recipe.idMeal) {
      handleDrinkOrMeal(value, checked, 'meals', recipe.idMeal);
    }
  }

  const handleDrinkOrMeal = (ingNumber, checked, type, id) => {
    if (inProgressRecipes[type][id] === undefined) {
      inProgressRecipes[type][id] = [];
    }
    if (checked) {
      inProgressRecipes[type][id].push(ingNumber);
    } else {
      const index = inProgressRecipes[type][id].indexOf(ingNumber);
      inProgressRecipes[type][id].splice(index, 1);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    setInProgressRecipes(inProgressRecipes);
  }

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input
        type="checkbox" id={recipe[`strIngredient${ingredient}`]}
        value={ingredientNumber} onChange={handleChange}
      />
      <label
        htmlFor={recipe[`strIngredient${ingredient}`]}
        data-testid={`${ingredient}-ingredient-step`}
      >
        {recipe[`strIngredient${ingredient}`]} - {recipe[`strMeasure${ingredient}`]}
      </label>
    </div>
  );
}

export default IngredientsListCheck;

IngredientsListCheck.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  ingredient: PropTypes.number.isRequired,
};
