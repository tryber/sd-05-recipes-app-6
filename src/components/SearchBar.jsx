import React, { useContext } from 'react';
import Context from '../context/Context';
import filter from '../service/foodFilter';

const SearchBar = () => {
  const { setFoodData, setStopApi } = useContext(Context);

  return (
    <div className="search-bar-int">
      <div className="search-bar">
        <input className="input-txt" type="text" data-testid="search-input" id="termo-de-busca" />
      </div>
      <div className="opcoes-busca">
        <input
          type="radio"
          id="Ingrediente"
          name="filtro"
          value="Ingrediente"
          data-testid="ingredient-search-radio"
        />
        <label htmlFor="Ingrediente">Ingrediente</label>
        <input type="radio" id="Nome" name="filtro" value="Nome" data-testid="name-search-radio" />
        <label htmlFor="Nome">Nome</label>
        <input
          type="radio"
          id="Primeira letra"
          name="filtro"
          value="Primeira letra"
          data-testid="first-letter-search-radio"
        />
        <label htmlFor="Primeira letra">Primeira letra</label>
        <button
          data-testid="exec-search-btn"
          onClick={() => filter(setFoodData, setStopApi)}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
