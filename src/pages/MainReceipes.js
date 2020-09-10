import React, { useEffect, useContext } from 'react';
import { foodApi } from '../service/foodApi';
import Context from '../context/Context';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
// import '../styles/App.css';

function MainReceipes() {
  const { foodData, setFoodData, showSearchBar } = useContext(Context);
  useEffect(() => {
    foodApi().then((response) => {
      setFoodData(response);
    });
  }, []);

  if (!foodData.meals) return <div>Carregando...</div>;

  return (
    <div>
      <header>
        <Header />
      </header>
      {showSearchBar ? <SearchBar /> : null}
      <div className="foto-nome-comida">
        {foodData.meals.map((food) => <FoodCard food={food} />)}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainReceipes;
