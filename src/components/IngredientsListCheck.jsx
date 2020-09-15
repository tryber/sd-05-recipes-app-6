import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../styles/App.css';

const handleMeal = (value, checked, id, inProgressRecipes) => {
  const data = inProgressRecipes;
  if (!data.meals[id]) {
    data.meals[id] = [];
  }
  if (checked) {
    data.meals[id].push(value);
  } else {
    const index = data.meals[id].indexOf(value);
    data.meals[id].splice(index, 1);
  }
  return data;
};

function IngredientsListCheck({ recipe, ingredient }) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(Context);
  const [checkIngredient, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const [classe, setClasse] = useState('');

  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localInProgress) {
      setInProgressRecipes(localInProgress);
      if (localInProgress.meals[recipe.idMeal]) {
        setCheck(localInProgress.meals[recipe.idMeal].includes(ingredient.toString()));
      }
    }
    if (checkIngredient) {
      (setClasse('texto-riscado'))
    } else {
      (setClasse(''));
    }
    setLoading(false);
  }, []);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setClasse('texto-riscado');
    } else {
      setClasse('');
    }
    setInProgressRecipes(handleMeal(value, checked, recipe.idMeal, inProgressRecipes));
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
