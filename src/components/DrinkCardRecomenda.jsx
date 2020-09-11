import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../styles/App.css';

function DrinkCardRecomenda({ drink, index }) {
  return (
    <Link to={`/bebidas/${drink.idDrink}`}>
      <div className="drink-card">
        <img
          className="drink-photo" data-testid={`${index}-recomendation-card`}
          src={drink.strDrinkThumb} alt={drink.strDrink}
        />
        <p>{drink.strCategory}</p>
        <h3 className="drink-name" data-testid={`${index}-recomendation-title`}>
          {drink.strDrink}
        </h3>
      </div>
    </Link>
  );
}

export default DrinkCardRecomenda;

DrinkCardRecomenda.propTypes = {
  drink: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
