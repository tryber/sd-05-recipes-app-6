import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import SearchIcon from '../components/SearchIcon';
// import '../styles/header_footer.css';

function Header({ title, showSearchIcon }) {
  return (
    <div className="header">
      <Link to="/perfil">
        <img className="img-perfil" src={profile} alt="Perfil" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">{title}</h2>
      {(showSearchIcon && <SearchIcon />)}
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};
