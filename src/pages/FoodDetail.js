import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { foodIdApi } from '../service/foodApi';
import { drinkApi } from '../service/drinkApi';
import FoodRecipe from '../components/FoodRecipe';
import Context from '../context/Context';
import DrinkCardRecomenda from '../components/DrinkCardRecomenda';

function FoodDetail(props) {
  const [recipe, setRecipe] = useState({});
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [labelButton, setLabelButton] = useState('Iniciar Receita');
  const { drinkData, setDrinkData } = useContext(Context);

  useEffect(() => {
    foodIdApi(props.match.params.id).then((response) => {
      setRecipe(response.meals[0]);
    });
    drinkApi().then((response) => { setDrinkData(response); });
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('inProgressRecipes'))) {
      if (JSON.parse(localStorage.getItem('inProgressRecipes')).meals[recipe.idMeal]) {
        setLabelButton('Continuar Receita');
      }
    }
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (localDone) {
      setDoneRecipe(localDone.find((e) => e.id === recipe.idMeal));
    } else {
      setDoneRecipe(false);
    }
  }, [recipe]);

  if (!recipe.idMeal || drinkData.length === 0) return <div>Carregando...</div>;

  return (
    <div>
      <FoodRecipe recipe={recipe} />
      <iframe
        data-testid="video" width="420" height="315"
        src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`}
      />
      <h3>Recomendadas</h3>
      <div className="carousel">
        {drinkData.drinks.filter((a, index) => index < 6)
          .map((drink, i) => <DrinkCardRecomenda drink={drink} index={i} />)
        }
      </div>
      {!doneRecipe && <Link
        className="btn-fixed" to={`/comidas/${recipe.idMeal}/in-progress`}
        data-testid="start-recipe-btn"
      >
        <button>{labelButton}</button>
      </Link>}
    </div>
  );
}

export default FoodDetail;
