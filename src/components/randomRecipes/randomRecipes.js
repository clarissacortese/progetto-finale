import _ from "lodash";
import { Await, useLoaderData } from "react-router-dom";
import MyCard from "../atoms/card";

export default function RandomRecipes() {
  const recipes = useLoaderData();
  return (
    <div className="my-5">
      <h2 className="text-center">Recommended Vegetarian Recipes</h2>
      <Await
        resolve={recipes}
        errorElement={<div>We couldn't find any recipes to recommend you</div>}>
        <div className="d-flex flex-wrap justify-content-center">
          {recipes.map((recipe) => {
            return (
              <MyCard
                key={_.get(recipe, "id", "N/A")}
                title={_.get(recipe, "title", "sorry, something went wrong")}
                id={_.get(recipe, "id", "N/A")}
                img={`https://spoonacular.com/recipeImages/${_.get(
                  recipe,
                  "id",
                  "N/A"
                )}-556x370.jpg`}
              />
            );
          })}
        </div>
      </Await>
    </div>
  );
}
