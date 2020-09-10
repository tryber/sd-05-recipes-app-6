import React, { useEffect, useContext } from 'react';
import { foodApi } from '../service/foodApi';
import Context from '../context/Context';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainReceipes() {
  const { foodData, setFoodData } = useContext(Context);
  useEffect(() => {
    foodApi().then((response) => {
      setFoodData(response);
    });
  }, []);

  if (!foodData.meals) return <div>Carregando...</div>;

  return (
    <div>
      <Header />
      <div>
        {foodData.meals.map((food) => <FoodCard food={food} />)}
      </div>
      <Footer />
    </div>
  );
}

export default MainReceipes;
