import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { foodRandomApi } from '../service/foodApi';
// import createBrowserHistory from 'history/createBrowserHistory';
// import '../styles/header_footer.css';

function ExploreFood() {
  const [randomId, setRandomId] = useState('');

  useEffect(() => {
    foodRandomApi().then((response) => {
      setRandomId(response.meals[0].idMeal);
    });
  }, []);

  return (
    <div>
      <header>
        <Header title={'Explorar Comidas'} showSearchIcon={false} />
      </header>
      <div className="explore">
        <Link to="/explorar/comidas/ingredientes">
          <button className="btn ing" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button className="btn orig" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <Link to={`/comidas/${randomId}`}>
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

export default ExploreFood;
