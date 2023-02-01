import SelectedRecipeView from "./selectedRecipeView";
import SelectedSimilarView from "./selectedSimilarView";
import { Await, useLoaderData } from "react-router-dom";

export default function SelectedRecipe() {
  const {details, similar} = useLoaderData();

  return (
    <div className="mx-5 my-5 d-flex flex-column full-recipe">
      <Await resolve={details}
        errorElement={<div>There are no instructions for this recipe, sorry</div>}>
      <SelectedRecipeView details={details} />
      </Await>
      <Await resolve={similar}
        errorElement={<div>We couldn't find any similar recipes to recommend you</div>}>
      <SelectedSimilarView similar={similar} />
      </Await>
    </div>
  );
}