import Hero from "../components/hero/hero";
import RandomRecipes from "../components/randomRecipes/randomRecipes";
import SearchedRecipes from "../components/searchedRecipes/searchedRecipes";

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchedRecipes />
      <RandomRecipes />
    </div>
  );
}