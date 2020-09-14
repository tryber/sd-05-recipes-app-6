import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { drinkCategoryApi, drinkByCategoryApi } from '../service/drinkApi';

export default function CategoryFilters() {
  const { filtersData, setFilters, setDrinkData } = useContext(Context);
  useEffect(() => {
    drinkCategoryApi().then((response) => {
      const data = ['All'];
      for (let i = 0; i < 5; i += 1) {
        data.push(response.drinks[i].strCategory);
      }
      setFilters(data);
    });
  }, []);

  const filterByCategory = (category) => {
    drinkByCategoryApi(category).then((response) => {
     setDrinkData(response);
    });
  }
  return (
    <div>
      {filtersData.map((filter) => (
        <button
          key={filter}
          type="button"
          data-testid={`${filter}-category-filter`}
          value={filter}
          onClick={(event) => filterByCategory(event.target.value)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
