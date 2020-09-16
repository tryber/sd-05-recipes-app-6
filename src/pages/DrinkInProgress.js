import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { drinkIdApi } from '../service/drinkApi';
import DrinkRecipe from '../components/DrinkRecipe';
import Context from '../context/Context';
import { handleDrinkDone } from '../service/handleDoneRecipe';

function DrinkInProgress(props) {
  const [recipe, setRecipe] = useState({});
  const [redirect, setRedirect] = useState(false);
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
    handleDrinkDone(recipe);
    setRedirect(true);
  };

  if (!recipe.idDrink) return <div>Carregando...</div>;
  if (redirect) return <Redirect to="/receitas-feitas" />;

  return (
    <div>
      <DrinkRecipe recipe={recipe} checkbox />
      <button
        className="btn-fixed" data-testid="finish-recipe-btn"
        onClick={handleClick} disabled={btnDisabled}
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default DrinkInProgress;

/* DrinkInProgress.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
}; */
