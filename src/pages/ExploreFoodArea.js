import React, { useContext, useEffect } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import { foodApi } from '../service/foodApi';
import FoodCard from '../components/FoodCard';
import FoodDropDown from '../components/FoodAreaDropDown';

function ExploreFoodArea() {
  const { foodData, setFoodData } = useContext(Context);
  useEffect(() => {
    foodApi().then((response) => {
      setFoodData(response);
    });
  }, []);

  if (!foodData.meals) return <div>Carregando...</div>;

  if (foodData.meals.length === 1) {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push(`/comidas/${foodData.meals[0].idMeal}`);
  } else {
    return (
      <div>
        <Header title={'Explorar Origem'} showSearchIcon />
        <FoodDropDown />
        <div className="foto-nome-comida">
          {foodData.meals.filter((meal, index) => index < 12)
            .map((food, i) => <FoodCard food={food} index={i} />)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default ExploreFoodArea;
