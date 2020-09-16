import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { drinkIdApi } from '../service/drinkApi';
import DrinkRecipe from '../components/DrinkRecipe';
import Context from '../context/Context';

function DrinkInProgress(props) {
  const [recipe, setRecipe] = useState({});
  const { setQtdeIngredients, btnDisabled } = useContext(Context);

  useEffect(() => {
    setQtdeIngredients(0);
    drinkIdApi(props.match.params.id).then((response) => {
      setRecipe(response.drinks[0]);
    });
  }, []);

  useEffect(() => {
    for (let index = 0; index < 20; index += 1) {
      if (recipe[`strIngredient${index}`]) {
        setQtdeIngredients((prevState) => prevState + 1);
      }
    }
  }, [recipe]);

  const handleClick = () => {
    console.log('teste');
  };
  
  if (!recipe.idDrink) return <div>Carregando...</div>;

  return (
    <div>
      <DrinkRecipe recipe={recipe} checkbox />
      <button data-testid="finish-recipe-btn" onClick={handleClick} disabled={btnDisabled}>
        Finalizar Receita
      </button>
    </div>
  );
}

export default DrinkInProgress;

DrinkInProgress.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
