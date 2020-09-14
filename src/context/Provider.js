import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);
  const [filtersData, setFilters] = useState(['All']);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const state = {
    foodData,
    setFoodData,
    showSearchBar,
    setSearchBar,
    drinkData,
    setDrinkData,
    filtersData,
    setFilters,
    selectedFilter,
    setSelectedFilter,
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
