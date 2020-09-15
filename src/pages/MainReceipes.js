import React, { useEffect, useContext } from 'react';
import { foodApi } from '../service/foodApi';
import Context from '../context/Context';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../styles/App.css';

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
      <header>
        <Header title={'Comidas'} showSearchIcon />
      </header>
      <div className="foto-nome-comida">
        {foodData.meals.filter((meal, index) => index < 12)
          .map((food, i) => <FoodCard food={food} index={i} />)
        }
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainReceipes;
