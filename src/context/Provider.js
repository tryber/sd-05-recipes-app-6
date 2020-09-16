import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);
  const [inProgressRecipes, setInProgressRecipes] = useState({ cocktails: {}, meals: {} });
  const [qtdeIng, setQtdeIngredients] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const state = {
    foodData,
    setFoodData,
    showSearchBar,
    setSearchBar,
    drinkData,
    setDrinkData,
    inProgressRecipes,
    setInProgressRecipes,
    qtdeIng,
    setQtdeIngredients,
    btnDisabled,
    setBtnDisabled,
  };

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
