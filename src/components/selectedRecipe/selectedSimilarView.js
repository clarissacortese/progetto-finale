import "./selectedRecipe.css";
import _ from "lodash";
import MyCard from "../atoms/card";

export default function SelectedSimilarView({ similar }) {
  return (
    <div>
      <h4 className="mt-5">Similar recipes:</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {similar.map((recipe) => {
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
    </div>
  );
}