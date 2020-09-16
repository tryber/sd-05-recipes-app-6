import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { drinkIngredienteApi } from '../service/drinkApi';
import Context from '../context/Context';

export default function IngCard({ ing, index }) {
  const { setDrinkData, setStopApi } = useContext(Context);
  const filter = (busca) => {
    drinkIngredienteApi(busca).then((response) => {
      setDrinkData(response);
    });
  };
  return (
    <Link to={'/bebidas'} onClick={(event) => filter(event.target.name) || setStopApi(true)}>
      <div className="drink-card" data-testid={`${index}-ingredient-card`}>
        <img
          data-testid={`${index}-card-img`}
          className="drink-photo"
          name={ing}
          src={`https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png`}
          alt={ing}
        />
        <h3 name={ing} className="drink-name" data-testid={`${index}-card-name`}>{ing}</h3>
      </div>
    </Link>
  );
}

IngCard.propTypes = {
  ing: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
