import React, { useState } from 'react';
import search from '../images/searchIcon.svg';
// import '../styles/header_footer.css';
import SearchBar from '../components/SearchBar';

function SearchIcon() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const changeSearchBar = () => {
    setShowSearchBar((prevState) => prevState ? false : true);
  }

  return (
    <div>
      <img
        onClick={changeSearchBar} src={search}
        alt="Procurar" data-testid="search-top-btn"
      />
      {showSearchBar && <SearchBar />}
    </div>
  );
}

export default SearchIcon;
