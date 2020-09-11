import React, { useEffect, useContext } from 'react';
import { drinkApi } from '../service/drinkApi';
import Context from '../context/Context';
import DrinkCard from '../components/DrinkCard';
import Header from '../components/Header';
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
      <Header title={'Bebidas'} showSearchIcon />
      <div className="foto-nome-comida">
        {drinkData.drinks.map((drink) => <DrinkCard drink={drink} />)}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainReceipes;
