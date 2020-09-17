const data = new Date();
const today = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
const value = { id: '', type: '', area: '', category: '', alcoholicOrNot: '', name: '', image: '', doneDate: '', tags: '' };
let localDone = JSON.parse(localStorage.getItem('doneRecipes'));

export function handleFoodDone(recipe) {
  if (!localDone) { localDone = []; }
  value.id = recipe.idDrink;
  value.type = 'cocktail';
  value.alcoholicOrNot = recipe.strAlcoholic;
  value.category = recipe.strCategory;
  value.name = recipe.strDrink;
  value.image = recipe.strDrinkThumb;
  value.doneDate = today;
  localStorage.setItem('doneRecipes', JSON.stringify([...localDone, value]));
}

export function handleDrinkDone(recipe) {
  if (!localDone) { localDone = []; }
  value.id = recipe.idMeal;
  value.type = 'meal';
  value.area = recipe.strArea;
  value.category = recipe.strCategory;
  value.name = recipe.strMeal;
  value.image = recipe.strMealThumb;
  value.doneDate = today;
  value.tags = recipe.strTags;
  localStorage.setItem('doneRecipes', JSON.stringify([...localDone, value]));
}
