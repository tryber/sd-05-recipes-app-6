import React, { useEffect, useContext } from 'react';
import { foodApi } from '../service/foodApi';
import Context from '../context/Context';

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
      {foodData.meals.map((food) => <div>{food.strMeal}</div>)}
    </div>
  );
}

export default MainReceipes;
