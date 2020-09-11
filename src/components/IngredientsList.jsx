import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/App.css';

function IngredientsList({ recipe, ingredient }) {
  return (
    <div key={recipe[`strIngredient${ingredient}`]}>
      <input type="checkbox" id={recipe[`strIngredient${ingredient}`]} />
      <label
        htmlFor={recipe[`strIngredient${ingredient}`]}
        data-testid={`${ingredient}-ingredient-step`}
      >
        {recipe[`strIngredient${ingredient}`]} - {recipe[`strMeasure${ingredient}`]}
      </label>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  ingredient: PropTypes.number.isRequired,
};
