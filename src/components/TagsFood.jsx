import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TagsFood({ recipe, index }) {
  const [tagsFood, setTags] = useState([]);

  useEffect(() => {
    console.log(recipe);
    if (recipe.tags && typeof(recipe.tags) === 'string') {
      const tagsSeparated = recipe.tags.split(',');
      setTags([...tagsSeparated]);
    } else if (recipe.tags) {
      setTags([...recipe.tags])
    }
  }, []);

  if (!tagsFood) return null;

  return (
    <div>
      <p data-testid={`${index}-${tagsFood[0]}-horizontal-tag`}>
        {tagsFood[0]}
      </p>
      {tagsFood[1] && <p data-testid={`${index}-${tagsFood[1]}-horizontal-tag`}>
        {tagsFood[1]}
      </p>}

    </div>
  );
}

export default TagsFood;

TagsFood.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
