import React, { useState } from 'react';
import Context from './Context';

export default function Provider({children}) {

  const context = {
    value,
    setValue,
    number,
    setNumber,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
};
