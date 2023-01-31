import { useState, useEffect } from "react";

import recipesApi from "../recipesApi";
import RandomRecipesView from "./randomRecipesView";

export default function RandomRecipes() {
  const [randomData, setRandomData] = useState([]);

  const getRandomRecipes = async () => {
    setRandomData(await recipesApi.getRandomRecipes());
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return <RandomRecipesView recipes={randomData} />;
}