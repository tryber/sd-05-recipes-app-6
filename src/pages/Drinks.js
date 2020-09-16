import React, { useEffect, useContext } from 'react';
import { drinkApi } from '../service/drinkApi';
import Context from '../context/Context';
import DrinkCard from '../components/DrinkCard';
import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';
import CategoryFilters from '../components/DrinksFilters';
// import '../styles/App.css';

function MainReceipes() {
  const { drinkData, setDrinkData, stopApi, setStopApi } = useContext(Context);
  useEffect(() => {
    if (stopApi) {
      return '';
    } else {
      drinkApi().then((response) => {
        setDrinkData(response);
      });
      return setStopApi(false);
    }
  }, []);

  if (!drinkData.drinks) return <div>Carregando...</div>;

  return (
    <div>
      <HeaderDrinks title={'Bebidas'} showSearchIcon />
      <CategoryFilters />
      <div className="foto-nome-comida">
        {drinkData.drinks.filter((a, index) => index < 12)
          .map((drink) => <DrinkCard drink={drink} />)
        }
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainReceipes;
