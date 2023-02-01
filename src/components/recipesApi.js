import axios from "axios";

export async function getRandomRecipes() {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random`,
    {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        number: 8,
        tags: "vegetarian",
      },
    }
  );

  return response.data.recipes;
}

export async function getSearchedRecipes() {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random`,
    {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        number: 8,
        tags: "vegetarian",
      },
    }
  );

  return response.data.recipes;
}

export async function getRecipeDetails(name) {
  const { data } = await axios.get(
    `https://api.spoonacular.com/recipes/${name}/information`,
    {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
      },
    }
  );

  return data;
}

export async function getSimilarRecipes(name) {
  const { data } = await axios.get(
    `https://api.spoonacular.com/recipes/${name}/similar`,
    {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
      },
    }
  );

  return data;
}

/* eslint-disable import/no-anonymous-default-export */
export default {
  getRandomRecipes,
  getRecipeDetails,
  getSimilarRecipes,
  getSearchedRecipes
};
