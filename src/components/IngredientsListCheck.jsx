import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../styles/App.css';
import handleCheckBoxChange from '../service/handleCheckBoxChange';

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

function IngredientsListCheck({ recipe, ingredient, index }) {
  const { inProgressRecipes, setInProgressRecipes, qtdeIng, setBtnDisabled } = useContext(Context);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const [classeName, setClasse] = useState('');

  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localInProgress) {
      setInProgressRecipes(localInProgress);
      if (localInProgress.meals[recipe.idMeal]) {
        setCheck(localInProgress.meals[recipe.idMeal].includes(ingredient.toString()));
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (check) {
      (setClasse('texto-riscado'));
    } else {
      (setClasse(''));
    }
  }, [check]);

  const handleChange = async (event) => {
    const { value, checked } = event.target;
    setClasse(handleCheckBoxChange(checked));
    await setInProgressRecipes(handleMeal(value, checked, recipe.idMeal, inProgressRecipes));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    if (inProgressRecipes.meals[recipe.idMeal].length === qtdeIng) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <label
        htmlFor={recipe[`strIngredient${ingredient}`]}
        data-testid={`${index}-ingredient-step`}
        className={classeName}
      >
        <input
          type="checkbox" id={recipe[`strIngredient${ingredient}`]}
          value={ingredient} onChange={handleChange} defaultChecked={check}
        />
        {recipe[`strIngredient${ingredient}`]} - {recipe[`strMeasure${ingredient}`]}
      </label>
    </div>
  );
}

export default IngredientsListCheck;

IngredientsListCheck.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  ingredient: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
