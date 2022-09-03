export async function fetchDrinksAPI() {
  try {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
}

export async function fetchMealsAPI() {
  try {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
}

// TENTATIVA FINAL //
// AJUDA DO THIAGO QUADROS //

export async function fetchCategoriesFoodsAPI() {
  try {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    console.log(data);
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
}

export async function fetchCategoriesDrinksAPI() {
  try {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
}

export async function fetchCategoriesFilter(filter, type) {
  if (type === 'meals') {
    try {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`);
      const response = await data.json();
      return response;
    } catch (error) {
      return error;
    }
  }
  if (type === 'drinks') {
    try {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`);
      const response = await data.json();
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const foodsDrinksDetails = async (url) => {
  const data = await fetch(url);
  const response = await data.json();
  if (url.includes('cocktail')) {
    return response.drinks[0];
  } return response.meals[0];
};

export const fetchCategories = async (foodRecipes) => {
  if (foodRecipes === 'meals') return fetchCategoriesFoodsAPI();
  // const fetchCategories2 = async (foodRecipes) => {

  return fetchCategoriesDrinksAPI();
};

/* export default fetchCategories; */
