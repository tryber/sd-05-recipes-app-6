import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { foodIngredienteApi } from '../service/foodApi';
import Context from '../context/Context';

export default function FoodIngCard({ ing, index }) {
  const { setFoodData, setStopApi } = useContext(Context);
  const filter = (busca) => {
    foodIngredienteApi(busca).then((response) => {
      setFoodData(response);
    });
  };
  return (
    <Link to={'/comidas'} onClick={(event) => filter(event.target.name) || setStopApi(true)}>
      <div className="food-card" data-testid={`${index}-ingredient-card`}>
        <img
          data-testid={`${index}-card-img`}
          className="food-photo"
          name={ing}
          src={`https://www.themealdb.com/images/ingredients/${ing}-Small.png`}
          alt={ing}
        />
        <h3 name={ing} className="food-name" data-testid={`${index}-card-name`}>{ing}</h3>
      </div>
    </Link>
  );
}

FoodIngCard.propTypes = {
  ing: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
