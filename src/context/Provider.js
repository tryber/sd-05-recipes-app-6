import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);
  
  function changeSearchBar(show) {
    if (show) {
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  }

  const state = {
    foodData,
    setFoodData,
    showSearchBar,
    changeSearchBar,
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
