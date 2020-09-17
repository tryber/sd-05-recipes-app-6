import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

function MadeReceipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes([...localDone]);
  }, []);

  return (
    <div>
      <Header title={'Receitas Feitas'} showSearchIcon={false} />
      <div>
        <button data-testid="filter-by-all-btn">All</button>
        <button data-testid="filter-by-food-btn" >Food</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
        <div>
          {doneRecipes.map((element, i) => (
            <DoneRecipeCard recipe={element} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MadeReceipes;
