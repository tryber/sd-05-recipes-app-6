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

export const foodIngredienteApi = (ingrediente) => ( // requisito 14
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodNomeApi = (nome) => ( // requisito 14
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodLetraApi = (letra) => ( // requisito 14
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodByCategoryApi = (category) => ( // requisito 28
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodListAreasApi = () => ( // requisito 80
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodByAreaApi = (area) => ( // requisito 80
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const foodListIngApi = () => ( // requisito 76
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
