import React from 'react';
import PropTypes from 'prop-types';

function HorizontalTopText({ recipe, index }) {
  return (
    <div>
      {recipe.category && <h3 data-testid={`${index}-horizontal-top-text`}>
        {`${recipe.area} - ${recipe.category}`}
      </h3>}
      {recipe.alcoholicOrNot && <h3 data-testid={`${index}-horizontal-top-text`}>
        {recipe.alcoholicOrNot}
      </h3>}
    </div>
  );
}

export default HorizontalTopText;

HorizontalTopText.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
