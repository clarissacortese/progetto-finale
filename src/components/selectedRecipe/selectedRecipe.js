import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import SelectedRecipeView from "./selectedRecipeView";
import SelectedSimilarView from "./selectedSimilarView";
import recipesApi from "../recipesApi";
import "./selectedRecipe.css";

export default function SelectedRecipe() {
  let params = useParams();
  let name = params.name;

  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);

  const getRecipesDetails = useCallback(async () => {
    setDetails(await recipesApi.getRecipeDetails(name));
  }, [setDetails, name]);

  useEffect(() => {
    getRecipesDetails();
  }, [getRecipesDetails]);

  const getSimilarRecipes = useCallback(async () => {
    setSimilar(await recipesApi.getSimilarRecipes(name));
  }, [setSimilar, name]);

  useEffect(() => {
    getSimilarRecipes();
  }, [getSimilarRecipes]);

  return (
    <div className="mx-5 my-5 d-flex flex-column full-recipe">
      <SelectedRecipeView details={details} />
      <SelectedSimilarView similar={similar} />
    </div>
  );
}
