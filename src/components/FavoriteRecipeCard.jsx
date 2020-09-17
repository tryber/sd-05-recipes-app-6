import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import share from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import handleClickFavorite from '../service/handleFavoriteFood';
import HorizontalTopText from './HorizontalTopText';

function FavoriteReceipeCard({ recipe, index }) {
  const [linkCopiado, setLinkCopiado] = useState(false);
  const [isPresent, setIspresent] = useState(true);

  const [type, setType] = useState('');

  useEffect(() => {
    if (recipe.type === 'comida') {
      setType('comidas');
    } else {
      setType('bebidas');
    }
  }, []);

  const handleFavorite = () => {
    handleClickFavorite(false, recipe);
    setIspresent(false);
    console.log(localStorage.getItem('favoriteRecipes'));
  };

  const handleClick = () => {
    if (recipe.type === 'comida') {
      navigator.clipboard.writeText(`http://localhost:3000/comidas/${recipe.id}`);
    } else {
      navigator.clipboard.writeText(`http://localhost:3000/bebidas/${recipe.id}`);
    }
    setLinkCopiado(true);
  };

  if (!isPresent) return null;

  return (
    <div key={recipe.id} className="drink-card">
      <Link to={`${type}/${recipe.id}`}>
        <img className="drink-photo" src={recipe.image} alt={recipe.name} data-testid={`${index}-horizontal-image`} />
      </Link>
      <HorizontalTopText recipe={recipe} index={index} />
      <Link to={`${type}/${recipe.id}`}><h2 data-testid={`${index}-horizontal-name`}>{recipe.name}</h2></Link>
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
