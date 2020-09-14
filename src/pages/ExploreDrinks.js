import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkRandomApi } from '../service/drinkApi';
// import '../styles/header_footer.css';

function ExploreDrinks() {
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    drinkRandomApi().then((response) => {
      setRandomId(response.drinks[0].idDrink);
    });
  }, []);

  return (
    <div>
      <header>
        <Header title={'Explorar Bebidas'} showSearchIcon={false} />
      </header>
      <div className="explore">
        <Link to="/explorar/bebidas/ingredientes">
          <button className="btn ing" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to={`/bebidas/${randomId}`}>
          <button className="btn surpr" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ExploreDrinks;
