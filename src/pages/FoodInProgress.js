import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodRecipe from '../components/FoodRecipe';
import { foodIdApi } from '../service/foodApi';

function FoodInProgress(props) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    foodIdApi(props.match.params.id).then((response) => {
      setRecipe(response.meals[0]);
    });
  }, []);

  if (!recipe.idMeal) return <div>Carregando...</div>;

  return (
    <div>
      <FoodRecipe recipe={recipe} checkbox />
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default FoodInProgress;

FoodInProgress.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
