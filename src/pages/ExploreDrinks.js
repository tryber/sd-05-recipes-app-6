import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/header_footer.css';

function ExploreDrinks() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="explore">
        <Link to="/explorar/bebidas/ingredientes" data-testid="explore-by-ingredient">
          <button className="btn ing" data-testid="explore-by-ingredient">
            Por Ingredientes
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

export default ExploreDrinks;
