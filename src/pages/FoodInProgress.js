import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FoodRecipe from '../components/FoodRecipe';
import { foodIdApi } from '../service/foodApi';
import Context from '../context/Context';
import { handleFoodDone } from '../service/handleDoneRecipe';

function FoodInProgress(props) {
  const [recipe, setRecipe] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setQtdeIngredients, btnDisabled } = useContext(Context);

  useEffect(() => {
    setQtdeIngredients(0);
    foodIdApi(props.match.params.id).then((response) => {
      setRecipe(response.meals[0]);
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
    handleFoodDone(recipe);
    setRedirect(true);
  };

  if (!recipe.idMeal) return <div>Carregando...</div>;
  if (redirect) return <Redirect to="/receitas-feitas" />;

  return (
    <div>
      <FoodRecipe recipe={recipe} checkbox />
      <button
        className="btn-fixed" data-testid="finish-recipe-btn"
        onClick={handleClick} disabled={btnDisabled}
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default FoodInProgress;

/* FoodInProgress.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
 */
