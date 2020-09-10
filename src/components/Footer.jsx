import React from 'react';
import { Link } from 'react-router-dom';
import explore from '../images/exploreIcon.svg';
import drink from '../images/drinkIcon.svg';
import talher from '../images/mealIcon.svg';
// import '../styles/header_footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/bebidas" data-testid="drinks-bottom-btn">
        <img src={drink} alt="Drink" />
      </Link>
      <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={explore} alt="Explore" />
      </Link>
      <Link to="/comidas" data-testid="food-bottom-btn">
        <img src={talher} alt="Talher" />
      </Link>
    </footer>
  );
}

export default Footer;
