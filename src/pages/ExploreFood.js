import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/header_footer.css';

function ExploreFood() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="explore">
        <Link to="/explorar/comidas/ingredientes" data-testid="explore-by-ingredient">
          <button className="btn ing" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area" data-testid="explore-by-area">
          <button className="btn orig" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <Link to="" data-testid="explore-surprise">
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
