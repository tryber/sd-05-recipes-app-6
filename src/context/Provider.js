import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [foodData, setFoodData] = useState([]);
  const state = {
    foodData,
    setFoodData,
  };

  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
}
