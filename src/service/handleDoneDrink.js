export default function handleClickDone(recipe) {
  let localDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const data = new Date();
  if (!localDone) { localDone = []; }
  const value = { id: '', type: '', area: '', category: '', alcoholicOrNot: '', name: '', image: '', doneDate: '', tags: '' };
  value.id = recipe.idDrink;
  value.type = 'cocktail';
  value.alcoholicOrNot = recipe.strAlcoholic;
  value.category = recipe.strCategory;
  value.name = recipe.strDrink;
  value.image = recipe.strDrinkThumb;
  value.doneDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  localStorage.setItem('doneRecipes', JSON.stringify([...localDone, value]));
}
