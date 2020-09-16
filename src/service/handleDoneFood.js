export default function handleClickDone(recipe) {
  let localDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const data = new Date();
  if (!localDone) { localDone = []; }
  const value = { id: '', type: '', area: '', category: '', alcoholicOrNot: '', name: '', image: '', doneDate: '', tags: '' };
  value.id = recipe.idMeal;
  value.type = 'meal';
  value.area = recipe.strArea;
  value.category = recipe.strCategory;
  value.name = recipe.strMeal;
  value.image = recipe.strMealThumb;
  value.doneDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  value.tags = recipe.strTags;
  localStorage.setItem('doneRecipes', JSON.stringify([...localDone, value]));
}
