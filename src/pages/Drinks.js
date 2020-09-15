import React, { useEffect, useContext } from 'react';
import { drinkApi } from '../service/drinkApi';
import Context from '../context/Context';
import DrinkCard from '../components/DrinkCard';
import HeaderDrinks from '../components/HeaderDrinks';
import Footer from '../components/Footer';
// import '../styles/App.css';

function MainReceipes() {
  const { drinkData, setDrinkData } = useContext(Context);
  useEffect(() => {
    drinkApi().then((response) => {
      setDrinkData(response);
    });
  }, []);

  if (!drinkData.drinks) return <div>Carregando...</div>;

  return (
    <div>
      <HeaderDrinks title={'Bebidas'} showSearchIcon />
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

export default MainReceipes;
