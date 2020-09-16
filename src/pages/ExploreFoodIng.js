import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodListIngApi } from '../service/foodApi';
import Context from '../context/Context';
import FoodIngCard from '../components/FoodIngCard';

function ExploreFoodIng() {
  const { drinkIng, setDrinkIng } = useContext(Context);
  useEffect(() => {
    foodListIngApi().then((response) => {
      console.log(response.meals[0]);
      const data = [];
      for (let i = 0; i < 12; i += 1) {
        data.push(response.meals[i].strIngredient);
      }
      setDrinkIng(data);
    });
  }, []);
  return (
    <div>
      <Header title={'Explorar Ingredientes'} showSearchIcon={false} />
      <div className="foto-nome-comida">
        {drinkIng.map((ing, index) => <FoodIngCard ing={ing} index={index} />)}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoodIng;
