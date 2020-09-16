import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkListIngApi } from '../service/drinkApi';
import Context from '../context/Context';
import IngCard from '../components/IngCard';

function ExploreDrinkIng() {
  const { drinkIng, setDrinkIng } = useContext(Context);
  useEffect(() => {
    drinkListIngApi().then((response) => {
      const data = [];
      for (let i = 0; i < 12; i += 1) {
        data.push(response.drinks[i].strIngredient1);
      }
      setDrinkIng(data);
    });
  }, []);
  return (
    <div>
      <Header title={'Explorar Ingredientes'} showSearchIcon={false} />
      <div className="foto-nome-comida">
        {drinkIng.map((ing, index) => <IngCard ing={ing} index={index} />)}
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinkIng;
