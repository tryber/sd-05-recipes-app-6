import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../styles/App.css';

const verifyIngredient = (type, id, ingredient, localInProgress) => {
  if (localInProgress[type][id]) {
    return localInProgress[type][id].includes(ingredient.toString());
  }
  return false;
};

const handleDrinkOrMeal = (value, checked, type, id, inProgressRecipes) => {
  const data = inProgressRecipes;
  if (data[type][id] === undefined) {
    data[type][id] = [];
  }
  if (checked) {
    data[type][id].push(value);
  } else {
    const index = data[type][id].indexOf(value);
    data[type][id].splice(index, 1);
  }
  return data;
};

function IngredientsListCheck({ recipe, ingredient }) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(Context);
  const [checkIngredient, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localInProgress) {
      setInProgressRecipes(localInProgress);
      if (localInProgress.cocktails[recipe.idDrink]) {
        setCheck(verifyIngredient('cocktails', recipe.idDrink, ingredient, localInProgress));
      }
      if (localInProgress.meals[recipe.idMeal]) {
        setCheck(verifyIngredient('meals', recipe.idMeal, ingredient, localInProgress));
      }
    }
    setLoading(false);
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (recipe.idDrink) {
      setData(handleDrinkOrMeal(value, checked, 'cocktails', recipe.idDrink, inProgressRecipes));
    }
    if (recipe.idMeal) {
      setData(handleDrinkOrMeal(value, checked, 'meals', recipe.idMeal, inProgressRecipes));
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(data));
    setInProgressRecipes(data);
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input
        type="checkbox" id={recipe[`strIngredient${ingredient}`]}
        value={ingredient} onChange={handleChange} defaultChecked={checkIngredient}
        className="texto-riscado"
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
