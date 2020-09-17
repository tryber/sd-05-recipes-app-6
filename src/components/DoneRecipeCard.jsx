import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import share from '../images/shareIcon.svg';
import { useEffect } from 'react';

function DoneRecipeCard({ recipe, index }) {
  const [linkCopiado, setLinkCopiado] = useState(false);
  const [type, setType] = useState('');

  useEffect(() => {
/*     if (recipe.tags) {
      const tagsSeparated = recipe.tags.split(',');
      setTags([...tagsSeparated]);
    }; */
    if (recipe.type === 'comida') {
      setType('comidas');
    } else {
      setType('bebidas');
    }
  }, []);

  const handleClick = () => {
    if (recipe.type === 'comida') {
      navigator.clipboard.writeText(`http://localhost:3000/comidas/${recipe.id}`);
    } else {
      navigator.clipboard.writeText(`http://localhost:3000/bebidas/${recipe.id}`);
    }
    setLinkCopiado(true);
  };

  if (!type) return <div>Carregando...</div>
  return (
    <div key={recipe.id} className="food-card">
      <Link to={`${type}/${recipe.id}`}>
        <img
          className="food-photo" src={recipe.image}
          alt={recipe.name} data-testid={`${index}-horizontal-image`}
        />
      </Link>
      {recipe.category && <h3 data-testid={`${index}-horizontal-top-text`}>
        {`${recipe.area} - ${recipe.category}`}
      </h3>}
      {recipe.alcoholicOrNot && <h3 data-testid={`${index}-horizontal-top-text`}>
        {recipe.alcoholicOrNot}
      </h3>}
      <Link to={`${type}/${recipe.id}`}><h3 data-testid={`${index}-horizontal-name`}>
          {recipe.name}
        </h3>
      </Link>
      <h3 data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${recipe.doneDate}`}</h3>
      {recipe.tags && <p data-testid={`${index}-${recipe.tags}-horizontal-tag`}>
        {recipe.tags}
      </p>}
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
