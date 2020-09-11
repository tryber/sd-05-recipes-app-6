import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);

  const state = {
    foodData,
    setFoodData,
    showSearchBar,
    setSearchBar,
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
