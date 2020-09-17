import React from 'react';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import explore from '../images/exploreIcon.svg';
import drink from '../images/drinkIcon.svg';
import talher from '../images/mealIcon.svg';
// import '../styles/header_footer.css';

function Footer() {
  const btn = () => {
    const history = createBrowserHistory({ forceRefresh: true });
    history.push('/explorar');
  };
  return (
    <footer className="footer btn-fixed" data-testid="footer">
      <Link to="/bebidas" data-testid="drinks-bottom-btn" src={drink}>
        <img src={drink} alt="Drink" />
      </Link>

      <button data-testid="explore-bottom-btn" onClick={() => btn()} src={explore}>
        <img src={explore} alt="Explore" />
      </button>
      {/* <Link to="/explorar" data-testid="explore-bottom-btn">
        <img src={explore} alt="Explore" />
      </Link> */}
      <Link to="/comidas" data-testid="food-bottom-btn" src={talher}>
        <img src={talher} alt="Talher" />
      </Link>
    </footer>
  );
}

export default Footer;
