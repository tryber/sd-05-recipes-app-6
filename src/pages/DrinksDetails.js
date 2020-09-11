import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { drinkIdApi } from '../service/drinkApi';
import { foodApi } from '../service/foodApi';
import DrinkRecipe from '../components/DrinkRecipe';
import Context from '../context/Context';
import FoodCardRecomenda from '../components/FoodCardRecomenda';

function DrinkDetail(props) {
  const [recipe, setRecipe] = useState({});

  const { foodData, setFoodData } = useContext(Context);

  useEffect(() => {
    drinkIdApi(props.match.params.id).then((response) => {
      setRecipe(response.drinks[0]);
    });
    foodApi().then((response) => {
      setFoodData(response);
      console.log(response)
    });
  }, []);

  if (!recipe.idDrink || foodData.length === 0) return <div>Carregando...</div>;

  return (
    <div>
      <DrinkRecipe recipe={recipe} />
      <div>
          <h3>Recomendadas</h3>
          {foodData.meals.filter((a, index) => index < 6)
            .map((food, i) => <FoodCardRecomenda food={food} index={i} />)
          }
        </div>
      <Link to={`/bebidas/${recipe.idDrink}/in-progress`} data-testid="start-recipe-btn">
        Iniciar Receita
      </Link>
    </div>
  );
}

export default DrinkDetail;
