import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { foodCategoryApi, foodByCategoryApi } from '../service/foodApi';

export default function CategoryFilters() {
  const { filtersData, setFilters, setFoodData } = useContext(Context);
  useEffect(() => {
    foodCategoryApi().then((response) => {
      const data = ['All'];
      for (let i = 0; i < 5; i += 1) {
        data.push(response.meals[i].strCategory);
      }
      setFilters(data);
    });
  }, []);

  const filterByCategory = (category) => {
    foodByCategoryApi(category).then((response) => {
      setFoodData(response);
    });
  };
  return (
    <div>
      {filtersData.map((filter) => (
        <button
          key={filter}
          type="button"
          data-testid={`${filter}-category-filter`}
          onClick={(event) => filterByCategory(event.target.innerHTML)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
