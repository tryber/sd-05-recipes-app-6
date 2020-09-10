import React from 'react';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import '../styles/header_footer.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/perfil" data-testid="profile-top-btn">
        <img src={profile} alt="Perfil" data-testid="profile-top-btn" />
      </Link>
      <h2 data-testid="page-title">Perfil</h2>
      <img src={search} alt="Procurar" data-testid="search-top-btn" />
    </div>
  );
}

export default Header;
