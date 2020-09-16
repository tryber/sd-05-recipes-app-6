import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { drinkIdApi } from '../service/drinkApi';
import { foodApi } from '../service/foodApi';
import DrinkRecipe from '../components/DrinkRecipe';
import Context from '../context/Context';
import FoodCardRecomenda from '../components/FoodCardRecomenda';

function DrinkDetail(props) {
  const [recipe, setRecipe] = useState({});
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [labelButton, setLabelButton] = useState('Iniciar Receita');

  const { foodData, setFoodData } = useContext(Context);

  useEffect(() => {
    drinkIdApi(props.match.params.id).then((response) => {
      setRecipe(response.drinks[0]);
    });
    foodApi().then((response) => {
      setFoodData(response);
    });
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      if (JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails[recipe.idDrink]) {
        setLabelButton('Continuar Receita');
      }
    }
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (localDone) {
      setDoneRecipe(localDone.find((e) => e.id === recipe.idDrink));
    } else {
      setDoneRecipe(false);
    }
  }, [recipe]);

  if (!recipe.idDrink || foodData.length === 0) return <div>Carregando...</div>;

  return (
    <div>
      <DrinkRecipe recipe={recipe} />
      <div>
        <h3>Recomendadas</h3>
        <div className="carousel">
          {foodData.meals.filter((a, index) => index < 6)
            .map((food, i) => <FoodCardRecomenda food={food} index={i} />)
          }
        </div>
      </div>
      {!doneRecipe && <Link
        className="btn-fixed" to={`/bebidas/${recipe.idDrink}/in-progress`}
        data-testid="start-recipe-btn"
      >
        <button>{labelButton}</button>
      </Link>}
    </div>
  );
}

export default DrinkDetail;
