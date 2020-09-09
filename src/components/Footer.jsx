import React from 'react';
import explore from '../images/exploreIcon.svg';
import drink from '../images/drinkIcon.svg';
import talher from '../images/mealIcon.svg';
import '../styles/header_footer.css';

function Footer() {
  return (
    <div className="footer">
      <img src={drink} alt="Drink" />
      <img src={explore} alt="Explore" />
      <img src={talher} alt="Talher" />
    </div>
  );
}

export default Footer;
