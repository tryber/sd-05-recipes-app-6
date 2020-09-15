import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../styles/App.css';

const handleDrinkOrMeal = (value, checked, type, id, inProgressRecipes) => {
  const data = inProgressRecipes;
  if (!data[type][id]) {
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
  const [classe, setClasse] = useState('');

  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    console.log(localInProgress)
    if (localInProgress) {
      setInProgressRecipes(localInProgress);
      setData(localInProgress);
      if (recipe.idDrink && localInProgress.cocktails[recipe.idDrink]) {
        setCheck(localInProgress.cocktails[recipe.idDrink].includes(ingredient.toString()));
      }
      console.log(localInProgress);
      if (recipe.idMeal && localInProgress.meals[recipe.idMeal]) {
        setCheck(localInProgress.meals[recipe.idMeal].includes(ingredient.toString()));
      }
    }
    checkIngredient ? setClasse('texto-riscado') : setClasse('');
    setLoading(false);
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    checked ? setClasse('texto-riscado') : setClasse('');
    if (recipe.idDrink) {
      setInProgressRecipes(
        handleDrinkOrMeal(value, checked, 'cocktails', recipe.idDrink, inProgressRecipes)
      );
    }
    if (recipe.idMeal) {
      setInProgressRecipes(
        handleDrinkOrMeal(value, checked, 'meals', recipe.idMeal, inProgressRecipes)
      );
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input
        type="checkbox" id={recipe[`strIngredient${ingredient}`]}
        value={ingredient} onChange={handleChange} defaultChecked={checkIngredient}
        className={classe}
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
