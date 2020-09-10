import React, { useContext } from 'react';
import { foodIngredienteApi } from '../service/foodApi';
import Context from '../context/Context';

const SearchBar = () => {
  const { setFoodData } = useContext(Context);

  function checkedRadio() {
    const radios = document.getElementsByName('filtro');
    radios.forEach((radio) => {
      if (radio.checked) {
        if (radio.value === 'Ingrediente') {
          foodIngredienteApi().then((response) => {
            setFoodData(response);
          });
        }
      }
    })
  }
  return (
    <div>
      <div>
        <input type="text" data-testid="search-input" />
      </div>
      <div>
        <input type="radio" id="Ingrediente" name="filtro" value="Ingrediente" data-testid="ingredient-search-radio" />
        <label htmlFor="Ingrediente">Ingrediente</label>
        <input type="radio" id="Nome" name="filtro" value="Nome" data-testid="name-search-radio" />
        <label htmlFor="Nome">Nome</label>
        <input type="radio" id="Primeira letra" name="filtro" value="Primeira letra" data-testid="first-letter-search-radio" />
        <label htmlFor="Primeira letra">Primeira letra</label>
      </div>
      <div>
        <button data-testid="exec-search-btn" onClick={() => checkedRadio()}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
