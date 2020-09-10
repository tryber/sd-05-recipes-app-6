import { foodIngredienteApi, foodNomeApi, foodLetraApi } from '../service/foodApi';

export default function foodFilter(setFoodData) {
  const radios = document.getElementsByName('filtro');
  const busca = document.querySelector('#termo-de-busca').value;
  console.log(busca);
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