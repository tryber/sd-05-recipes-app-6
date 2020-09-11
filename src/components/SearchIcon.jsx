import React, { useContext } from 'react';
import search from '../images/searchIcon.svg';
// import '../styles/header_footer.css';
import Context from '../context/Context';

function SearchIcon() {
  const { showSearchBar, setSearchBar } = useContext(Context);

  const changeSearchBar = () => {
    if (showSearchBar) {
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  };

  return (
    <div>
      <img
        onClick={changeSearchBar} src={search}
        alt="Procurar" data-testid="search-top-btn"
      />
    </div>
  );
}

export default SearchIcon;
