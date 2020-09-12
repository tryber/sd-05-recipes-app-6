import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { foodIdApi } from '../service/foodApi';
import { drinkApi } from '../service/drinkApi';
import FoodRecipe from '../components/FoodRecipe';
import Context from '../context/Context';
import DrinkCardRecomenda from '../components/DrinkCardRecomenda';

function FoodDetail(props) {
  const [recipe, setRecipe] = useState({});
  const { drinkData, setDrinkData } = useContext(Context);

  useEffect(() => {
    foodIdApi(props.match.params.id).then((response) => {
      setRecipe(response.meals[0]);
    });
    drinkApi().then((response) => {
      setDrinkData(response);
    });
  }, []);

  if (!recipe.idMeal || drinkData.length === 0) return <div>Carregando...</div>;

  return (
    <div>
      <div>
        <FoodRecipe recipe={recipe} />
        <iframe
          data-testid="video" width="420" height="315"
          src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
        />
        <div>
          <h3>Recomendadas</h3>
          {drinkData.drinks.filter((a, index) => index < 6)
            .map((drink, i) => <DrinkCardRecomenda drink={drink} index={i} />)
          }
        </div>
        <Link to={`/comidas/${recipe.idMeal}/in-progress`} data-testid="start-recipe-btn">
          Iniciar Receita
        </Link>
      </div>
    </div>
  );
}

export default FoodDetail;
