import React, { useEffect, useContext } from 'react';
import { foodListAreasApi, foodByAreaApi, foodApi } from '../service/foodApi';
import Context from '../context/Context';

export default function FoodDropDown() {
  const { foodDropdown, setFoodDropdown, setFoodData } = useContext(Context);
  useEffect(() => {
    foodListAreasApi().then((response) => {
      const data = ['All'];
      response.meals.map((meal) => {
        data.push(meal.strArea);
        return '';
      });
      setFoodDropdown(data);
    });
  }, []);

  const changeHandler = () => {
    const sel = document.getElementById('area-dropdown');
    const value = sel.options[sel.selectedIndex].value;
    if (value === 'All') {
      foodApi().then((response) => {
        setFoodData(response);
      });
    } else {
      foodByAreaApi(value).then((response) => {
        setFoodData(response);
      });
    }
  };

  return (
    <select
      id="area-dropdown"
      data-testid="explore-by-area-dropdown"
      onChange={() => changeHandler()}
    >
      {foodDropdown.map((option) => (
        <option data-testid={`${option}-option`} value={option}>{option}</option>
      ))}
    </select>
  );
}
