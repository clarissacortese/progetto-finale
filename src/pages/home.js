import Hero from "../components/hero/hero"
import RandomRecipes from '../components/clientApi/randomRecipes.js';
import SearchedRecipesApi from '../components/clientApi/searchedRecipesApi';

export default function Home() {
  return (
    <div>
        <Hero />
        <SearchedRecipesApi />
        <RandomRecipes />
    </div>
  )
}