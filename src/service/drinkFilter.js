import { drinkIngredienteApi, drinkNomeApi, drinkLetraApi } from '../service/drinkApi';

const funcaoCodeClimate = (response, setDrinkData) => {
  if (!response.drinks) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else {
    setDrinkData(response);
  }
};

export default function drinkFilter(setDrinkData) {
  const radios = document.getElementsByName('filtro');
  const busca = document.querySelector('#termo-de-busca').value;
  if (busca.length > 0) {
    radios.forEach((radio) => {
      if (radio.checked) {
        if (radio.value === 'Ingrediente') {
          drinkIngredienteApi(busca).then((response) => {
            funcaoCodeClimate(response, setDrinkData);
          });
        } else if (radio.value === 'Nome') {
          drinkNomeApi(busca).then((response) => {
            funcaoCodeClimate(response, setDrinkData);
          });
        } else if (radio.value === 'Primeira letra') {
          if (busca.length > 1) {
            alert('Sua busca deve conter somente 1 (um) caracter');
          } else {
            drinkLetraApi(busca).then((response) => {
              setDrinkData(response);
            });
          }
        }
      }
    });
  } else {
    alert('Digite um termo para busca');
  }
}
