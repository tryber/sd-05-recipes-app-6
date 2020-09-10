import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
// import '../styles/header_footer.css';
import Context from '../context/Context';

function Header() {
  const { showSearchBar, changeSearchBar } = useContext(Context);
  return (
    <div className="header">
      <Link to="/perfil" data-testid="profile-top-btn">
        <img className="img-perfil" src={profile} alt="Perfil" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">Perfil</h2>
      <button onClick={() => changeSearchBar(showSearchBar)} > 
        <img src={search} alt="Procurar" data-testid="search-top-btn" />
      </button>
    </div>
  );
}

export default Header;
