import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../styles/App.css';

function FoodCardRecomenda({ food, index }) {
  return (
    <Link to={`/comidas/${food.idMeal}`}>
      <div className="food-card">
        <img
          className="food-photo" data-testid={`${index}-recomendation-card`}
          src={food.strMealThumb} alt={food.strMeal}
        />
        <p>{food.strCategory}</p>
        <h3 className="food-name" data-testid={`${index}-recomendation-title`}>
          {food.strMeal}
        </h3>
      </div>
    </Link>
  );
}

export default FoodCardRecomenda;

FoodCardRecomenda.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
