import { useRecipeDetails } from "../recipesApi";
import Loading from "./Loading";
import Error from "./Error";

const RecipeDetails = ({ recipeId }) => {
  const { details, loading, error } = useRecipeDetails(recipeId);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div>
      <h2>{details.title}</h2>
      <p>Ready in {details.readyInMinutes} minutes</p>
      <p>Servings: {details.servings}</p>
      <p>Ingredients:</p>
      <ul>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <p>{details.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
