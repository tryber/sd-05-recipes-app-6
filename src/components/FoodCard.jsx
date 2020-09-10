import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img className="food-photo" src={food.strMealThumb} alt={food.strMeal} />
      <h3 className="food-name">{food.strMeal}</h3>
    </div>
  );
}

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
};
