import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);
  const [filtersData, setFilters] = useState(['All']);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [foodDropdown, setFoodDropdown] = useState(['All']);
  const [drinkIng, setDrinkIng] = useState([]);
  const [stopApi, setStopApi] = useState(false);

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
    foodDropdown,
    setFoodDropdown,
    drinkIng,
    setDrinkIng,
    stopApi,
    setStopApi,
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
