import React, { useEffect, useContext } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
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
    }
    drinkApi().then((response) => {
      setDrinkData(response);
    });
    return setStopApi(false);
  }, []);

  if (!drinkData.drinks) return <div>Carregando...</div>;

  if (drinkData.drinks.length === 0) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else if (drinkData.drinks.length === 1) {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push(`/bebidas/${drinkData.drinks[0].idDrink}`);
  } else {
    return (
      <div>
        <HeaderDrinks title={'Bebidas'} showSearchIcon />
        <CategoryFilters />
        <div className="foto-nome-comida">
          {drinkData.drinks.filter((a, index) => index < 12)
            .map((drink, i) => <DrinkCard drink={drink} index={i} />)
          }
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default MainReceipes;
