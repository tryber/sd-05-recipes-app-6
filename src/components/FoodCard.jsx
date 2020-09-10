import React from 'react';
import PropTypes from 'prop-types';

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.strMealThumb} alt={food.strMeal} />
      <h3>{food.strMeal}</h3>
    </div>
  );
}

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
};
