import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/App.css';

function DrinkCard({ drink }) {
  return (
    <Link to={`/bebidas/${drink.idDrink}`}>
      <div className="drink-card">
        <img className="drink-photo" src={drink.strDrinkThumb} alt={drink.strDrink} />
        <h3 className="drink-name">{drink.strDrink}</h3>
      </div>
    </Link>
  );
}

export default DrinkCard;

DrinkCard.propTypes = {
  drink: PropTypes.instanceOf(Object).isRequired,
};
