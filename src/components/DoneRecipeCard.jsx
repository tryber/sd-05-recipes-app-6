import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import share from '../images/shareIcon.svg';

function DoneRecipeCard({ recipe, index }) {
  const [linkCopiado, setLinkCopiado] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(`http://localhost:3000/comidas/${recipe.idMeal}`);
    setLinkCopiado(true);
  };

  return (
    <div key={recipe.id} className="food-card">
      <Link to="">
        <img
          className="food-photo" src={recipe.image}
          alt={recipe.name} data-testid={`${index}-horizontal-image"`}
        />
      </Link>
      {recipe.category && <h3>{recipe.category}</h3>}
      {recipe.alcoholicOrNot && <h3>{recipe.alcoholicOrNot}</h3>}
      <Link to=""><h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3></Link>
      <h3>{`Feita em: ${recipe.doneDate}`}</h3>
      <p data-testid={`${index}-{tagName}-horizontal-tag`}>tag</p>
      <p>tag</p>
      <button data-testid={`${index}-horizontal-share-btn`} src={share} onClick={handleClick}>
        <img src={share} alt="share" />
      </button>
      {linkCopiado && <p>Link copiado!</p>}
    </div>
  );
}

export default DoneRecipeCard;

DoneRecipeCard.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
