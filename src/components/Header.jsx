import React from 'react';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import '../styles/header_footer.css';

function Header(props) {
  return (
    <div className="header">
      <img src={profile} alt="Perfil" data-testid="profile-top-btn" />
      <p>{props.pageTitle}</p>
      {(props.search && <img src={search} alt="Procurar" data-testid="search-top-btn" />)}
    </div>
  );
}

export default Header;
