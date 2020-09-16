import React, { useEffect, useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import FoodRecipe from '../components/FoodRecipe';
import { foodIdApi } from '../service/foodApi';
import Context from '../context/Context';

function FoodInProgress(props) {
  const [recipe, setRecipe] = useState({});
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
    console.log('teste');
  };

  if (!recipe.idMeal) return <div>Carregando...</div>;

  return (
    <div>
      <FoodRecipe recipe={recipe} checkbox />
      <button data-testid="finish-recipe-btn" onClick={handleClick} disabled={btnDisabled}>
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
