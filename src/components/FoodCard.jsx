import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../styles/App.css';

function FoodCard({ food, index }) {
  return (
    <div className="food-card">
      <Link to={`/comidas/${food.idMeal}`}>
        <div data-testid={`${index}-recipe-card`}>
          <img
            data-testid={`${index}-card-img`} className="food-photo"
            src={food.strMealThumb} alt={food.strMeal}
          />
          <h3 data-testid={`${index}-card-name`} className="food-name">{food.strMeal}</h3>
        </div>
      </Link>
    </div>
  );
}

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
