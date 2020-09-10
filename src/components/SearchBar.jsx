import React, { useContext } from 'react';
import { foodIngredienteApi, foodNomeApi, foodLetraApi } from '../service/foodApi';
import Context from '../context/Context';

const SearchBar = () => {
  const { setFoodData } = useContext(Context);
  function checkedRadio() {
    const radios = document.getElementsByName('filtro');
    const busca = document.querySelector('#termo-de-busca').value;
    if (busca.length > 0) {
      radios.forEach((radio) => {
        if (radio.checked) {
          if (radio.value === 'Ingrediente') {
            foodIngredienteApi(busca).then((response) => {
              setFoodData(response);
            });
          } else if (radio.value === 'Nome') {
            foodNomeApi(busca).then((response) => {
              setFoodData(response);
            });
          } else if (radio.value === 'Primeira letra') {
            if (busca.length > 1) {
              alert('Sua busca deve conter somente 1 (um) caracter');
            } else {
              foodLetraApi(busca).then((response) => {
                setFoodData(response);
              });
            }
          }
        }
      });
    } else {
      alert('Digite um termo para busca');
    }
  }
  return (
    <div>
      <div>
        <input type="text" data-testid="search-input" id="termo-de-busca" />
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
};

export default SearchBar;
