export const foodApi = () => ( // requisito 26
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export const foodCategoryApi = () => ( // requisito 27
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export const foodIdApi = (id) => ( // requisito 34
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export const foodRecApi = () => (
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') // requisito 36
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export const foodRandomApi = () => ( // requisito 75
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);
