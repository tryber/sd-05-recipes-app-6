import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import SearchIcon from '../components/SearchIcon';
import SearchBar from '../components/SearchBar';
import Context from '../context/Context';
// import '../styles/header_footer.css';

function Header({ title, showSearchIcon }) {
  const { showSearchBar } = useContext(Context);

  return (
    <div>
      <div className="header">
        <Link to="/perfil">
          <button className="btn-perfil" src={profile}>
            <img
              className="img-perfil" src={profile} alt="Perfil"
              data-testid="profile-top-btn"
            />
          </button>
        </Link>
        <div className="header-title">
          <h2 data-testid="page-title">{title}</h2>
        </div>
        {(showSearchIcon && <SearchIcon />)}
        {(!showSearchIcon && <div className="div-vazia"></div>)}
      </div>
      {showSearchBar && <SearchBar />}
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showSearchIcon: PropTypes.bool.isRequired,
};
