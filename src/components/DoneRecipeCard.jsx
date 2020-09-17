import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import share from '../images/shareIcon.svg';
import HorizontalTopText from './HorizontalTopText';

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

  if (!type) return <div>Carregando...</div>;

  return (
    <div key={recipe.id} className="food-card">
      <Link to={`${type}/${recipe.id}`}>
        <img
          className="food-photo" src={recipe.image}
          alt={recipe.name} data-testid={`${index}-horizontal-image`}
        />
      </Link>
      <HorizontalTopText recipe={recipe} index={index} />
      <Link to={`${type}/${recipe.id}`}>
        <h3 data-testid={`${index}-horizontal-name`}>
          {recipe.name}
        </h3>
      </Link>
      <h3 data-testid={`${index}-horizontal-done-date`}>{`Feita em: ${recipe.doneDate}`}</h3>
      <p data-testid={`${index}-${recipe.tags}-horizontal-tag`}>
        {recipe.tags}
      </p>
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
