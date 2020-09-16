import React, { useEffect, useContext } from 'react';
import { foodApi } from '../service/foodApi';
import Context from '../context/Context';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryFilters from '../components/FoodFilters';
// import '../styles/App.css';

function MainReceipes() {
  const { foodData, setFoodData, stopApi, setStopApi } = useContext(Context);
  useEffect(() => {
    if (stopApi) {
      return '';
    }
    foodApi().then((response) => {
      setFoodData(response);
    });
    return setStopApi(false);
  }, []);

  if (!foodData.meals) return <div>Carregando...</div>;

  return (
    <div>
      <header>
        <Header title={'Comidas'} showSearchIcon />
      </header>
      <CategoryFilters />
      <div className="foto-nome-comida">
        {foodData.meals.filter((meal, index) => index < 12)
          .map((food) => <FoodCard food={food} />)
        }
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainReceipes;
