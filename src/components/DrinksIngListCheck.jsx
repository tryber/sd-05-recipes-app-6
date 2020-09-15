import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import '../styles/App.css';

const handleDrink = (value, checked, id, inProgressRecipes) => {
  const data = inProgressRecipes;
  if (!data.cocktails[id]) {
    data.cocktails[id] = [];
  }
  if (checked) {
    data.cocktails[id].push(value);
  } else {
    const index = data.cocktails[id].indexOf(value);
    data.cocktails[id].splice(index, 1);
  }
  return data;
};

function DrinkIngListCheck({ recipe, ingredient }) {
  const { inProgressRecipes, setInProgressRecipes } = useContext(Context);
  const [checkIngredient, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const [classe, setClasse] = useState('');

  useEffect(() => {
    const localInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (localInProgress) {
      setInProgressRecipes(localInProgress);
      if (localInProgress.cocktails[recipe.idDrink]) {
        setCheck(localInProgress.cocktails[recipe.idDrink].includes(ingredient.toString()));
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (checkIngredient) {
      (setClasse('texto-riscado'));
    } else {
      (setClasse(''));
    }
  }, [checkIngredient]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setClasse('texto-riscado');
    } else {
      setClasse('');
    }
    setInProgressRecipes(handleDrink(value, checked, recipe.idDrink, inProgressRecipes));
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input
        type="checkbox" id={recipe[`strIngredient${ingredient}`]}
        value={ingredient} onChange={handleChange} defaultChecked={checkIngredient}
      />
      <label
        htmlFor={recipe[`strIngredient${ingredient}`]}
        data-testid={`${ingredient}-ingredient-step`}
        className={classe}
      >
        {recipe[`strIngredient${ingredient}`]} - {recipe[`strMeasure${ingredient}`]}
      </label>
    </div>
  );
}

export default DrinkIngListCheck;

DrinkIngListCheck.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  ingredient: PropTypes.number.isRequired,
};
