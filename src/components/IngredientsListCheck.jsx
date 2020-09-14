import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
// import '../styles/App.css';

/* const verifyIngredient = (type, localInProgress, id) => {
  if (localInProgress[type][id]) {
    checkedIngr = localInProgress.cocktails[recipe.idDrink].includes(ingredient.toString());
  }
};

useEffect(() => {
  const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (localInProgress) { setInProgressRecipes(localInProgress); }
  if (recipe.idDrink) {
    verifyIngredient('cocktails', localInProgress, recipe.idDrink);
  }
  if (recipe.idMeal) {
    verifyIngredient('meals', localInProgress, recipe.idMeal);
  }
}, []); */

function IngredientsListCheck({ recipe, ingredient }) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(Context);

  const handleDrinkOrMeal = (value, checked, type, id) => {
    if (inProgressRecipes[type][id] === undefined) {
      inProgressRecipes[type][id] = [];
    }
    if (checked) {
      inProgressRecipes[type][id].push(value);
    } else {
      const index = inProgressRecipes[type][id].indexOf(value);
      inProgressRecipes[type][id].splice(index, 1);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    setInProgressRecipes(inProgressRecipes);
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (recipe.idDrink) {
      handleDrinkOrMeal(value, checked, 'cocktails', recipe.idDrink);
    }
    if (recipe.idMeal) {
      handleDrinkOrMeal(value, checked, 'meals', recipe.idMeal);
    }
  };

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input
        type="checkbox" id={recipe[`strIngredient${ingredient}`]}
        value={ingredient} onChange={handleChange}
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
