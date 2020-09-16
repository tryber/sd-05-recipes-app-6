import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/App.css';

function IngredientsList({ recipe, ingredient, index }) {
  return (
    <div
      key={recipe[`strIngredient${ingredient}`]}
      data-testid={`${index}-ingredient-name-and-measure`}
    >
      - {recipe[`strIngredient${ingredient}`]} - {recipe[`strMeasure${ingredient}`]}
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  ingredient: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
