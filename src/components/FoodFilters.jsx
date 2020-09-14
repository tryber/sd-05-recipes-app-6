import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { foodCategoryApi } from '../service/foodApi';

export default function CategoryFilters() {
  const { filtersData, setFilters } = useContext(Context);
  useEffect(() => {
    foodCategoryApi().then((response) => {
      const data = ['All'];
      for (let i = 0; i < 5; i += 1) {
        data.push(response.meals[i].strCategory);
      }
      setFilters(data);
    });
  }, []);
  return (
    <div>
      {filtersData.map((filter) => (
        <button type="button" data-testid={`${filter}-category-filter`}>{filter}</button>
      ))}
    </div>
  );
}
