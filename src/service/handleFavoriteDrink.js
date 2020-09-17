export default function handleClickFavorite(favorite, recipe) {
  let localFavs = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (!localFavs) { localFavs = []; }
  if (favorite) {
    const value = { id: '', type: '', area: '', category: '', alcoholicOrNot: '', name: '', image: '' };
    value.id = recipe.idDrink;
    value.type = 'bebida';
    value.alcoholicOrNot = recipe.strAlcoholic;
    value.category = recipe.strCategory;
    value.name = recipe.strDrink;
    value.image = recipe.strDrinkThumb;
    localStorage.setItem('favoriteRecipes', JSON.stringify([...localFavs, value]));
  } else {
    let index = 0;
    localFavs.forEach((element, i) => {
      if (element.id === recipe.idDrink) {
        index = i;
      }
    });
    localFavs.splice(index, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify([...localFavs]));
  }
}
