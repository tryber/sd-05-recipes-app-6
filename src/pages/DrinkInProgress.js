import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { drinkIdApi } from '../service/drinkApi';
import DrinkRecipe from '../components/DrinkRecipe';

function DrinkInProgress(props) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    drinkIdApi(props.match.params.id).then((response) => {
      setRecipe(response.drinks[0]);
    });
  }, []);

  if (!recipe.idDrink) return <div>Carregando...</div>;

  return (
    <div>
      <DrinkRecipe recipe={recipe} checkbox />
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default DrinkInProgress;

DrinkInProgress.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
