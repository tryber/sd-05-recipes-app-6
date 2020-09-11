import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import SearchIcon from '../components/SearchIcon';
import SearchBarDrink from '../components/SearchBarDrink';
import Context from '../context/Context';
// import '../styles/header_footer.css';

function HeaderDrinks({ title, showSearchIcon }) {
  const { showSearchBar } = useContext(Context);

  return (
    <div>
      <div className="header">
        <Link to="/perfil">
          <img className="img-perfil" src={profile} alt="Perfil" data-testid="profile-top-btn" />
        </Link>
        <h2 data-testid="page-title">{title}</h2>
        {(showSearchIcon && <SearchIcon />)}
      </div>
      {showSearchBar && <SearchBarDrink />}
    </div>
  );
}

export default HeaderDrinks;

HeaderDrinks.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};
