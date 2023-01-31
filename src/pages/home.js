import Hero from "../components/hero/hero";
import RandomRecipes from "../components/randomRecipes/randomRecipes";
import SearchedRecipesApi from "../components/searchedRecipes/searchedRecipesApi";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchedRecipesApi />
      <RandomRecipes />
    </div>
  );
}