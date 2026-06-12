export const getRandomRecipe = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );

  const data = await response.json();

  return data.meals[0];
};

export const getCategories = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  const data = await response.json();

  return data.categories;
};

export const getRecipes = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s='
  );

  const data = await response.json();

  return data.meals;
};