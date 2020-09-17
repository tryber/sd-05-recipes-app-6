import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import share from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import handleClickFavorite from '../service/handleFavoriteFood';

function FavoriteReceipeCard({ recipe, index }) {
  const [linkCopiado, setLinkCopiado] = useState(false);
  const [isPresent, setIspresent] = useState(true);

  const handleFavorite = () => {
    handleClickFavorite(false, recipe);
    setIspresent(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000/comidas/${recipe.idMeal}`);
    setLinkCopiado(true);
  };
  if (!isPresent) return null;
  return (
    <div key={recipe.id} className="drink-card">
      <Link to="">
        <img className="drink-photo" src={recipe.image} alt={recipe.name} data-testid={`${index}-horizontal-image"`} />
      </Link>
      {recipe.category && <h3>{recipe.category}</h3>}
      {recipe.alcoholicOrNot && <h3>{recipe.alcoholicOrNot}</h3>}
      <Link to=""><h2 data-testid={`${index}-horizontal-name`}>{recipe.name}</h2></Link>
      <button data-testid={`${index}-horizontal-share-btn`} src={share} onClick={handleClick}>
        <img src={share} alt="share" />
      </button>
      {linkCopiado && <p>Link copiado!</p>}
      <button
        data-testid={`${index}-horizontal-favorite-btn`}
        src={blackHeart} onClick={handleFavorite}
      >
        <img src={blackHeart} alt="favorite" />
      </button>
    </div>
  );
}

export default FavoriteReceipeCard;

FavoriteReceipeCard.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
