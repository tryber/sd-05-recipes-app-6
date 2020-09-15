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
      <button src={search} onClick={changeSearchBar} data-testid="search-top-btn">
        <img src={search} alt="Procurar" />
      </button>
    </div>
  );
}

export default SearchIcon;
