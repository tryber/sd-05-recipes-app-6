export default function handleClickFavorite(favorite, recipe) {
  let localFavs = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!localFavs) { localFavs = []; }
  if (favorite) {
    const value = { id: '', type: '', area: '', category: '', alcoholicOrNot: '', name: '', image: '' };
    value.id = recipe.idMeal;
    value.type = 'comida';
    value.area = recipe.strArea;
    value.category = recipe.strCategory;
    value.name = recipe.strMeal;
    value.image = recipe.strMealThumb;
    localStorage.setItem('favoriteRecipes', JSON.stringify([...localFavs, value]));
  } else {
    let index = 0;
    localFavs.forEach((element, i) => {
      if (element.id === recipe.idMeal) {
        index = i;
      }
    });
    localFavs.splice(index, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...localFavs]));
  }
}
