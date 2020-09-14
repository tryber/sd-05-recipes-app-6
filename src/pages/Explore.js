import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../styles/header_footer.css';

function Explore() {
  return (
    <div>
      <header>
        <Header title={'Explorar'} showSearchIcon={false} />
      </header>
      <div className="explore">
        <Link to="/explorar/comidas">
          <button className="btn exp-comida" data-testid="explore-food">
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button className="btn exp-bebida" data-testid="explore-drinks">
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Explore;
