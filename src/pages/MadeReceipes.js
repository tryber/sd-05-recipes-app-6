import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

function MadeReceipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const localDone = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => {
    if (localDone) {
      setDoneRecipes([...localDone]);
    }
  }, []);

  const filterAll = () => {
    setDoneRecipes([...localDone]);
  };

  const filterFood = () => {
    setDoneRecipes(localDone.filter((e) => e.type === 'comida'));
  };

  const filterDrink = () => {
    setDoneRecipes(localDone.filter((e) => e.type === 'bebida'));
  };

  return (
    <div>
      <Header title={'Receitas Feitas'} showSearchIcon={false} />
      <div className="btn-escondido">
        <button data-testid="filter-by-all-btn" onClick={filterAll}>All</button>
        <button data-testid="filter-by-food-btn" onClick={filterFood}>Food</button>
        <button data-testid="filter-by-drink-btn" onClick={filterDrink}>Drinks</button>
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
