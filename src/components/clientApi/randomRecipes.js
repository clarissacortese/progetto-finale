import {useState, useEffect} from 'react';
import RecipeCard from '../recipe-card/recipe-card';
import _ from "lodash";

export default function RandomRecipes() {

    const [randomData, setRandomData] = useState([]);
    
    const getRandomRecipes = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`);
      const data = await api.json();
      setRandomData(data.recipes);
    };
    
    useEffect(() => {
      getRandomRecipes();
  }, []);
  
  return (
    <div className="my-5">
      <h2 className="text-center">Recommended Vegetarian Recipes</h2>
      <div className="d-flex flex-wrap justify-content-center">
      {randomData.map((recipe) => {
        return (
            <RecipeCard key={_.get(recipe, 'id', 'N/A')}
            title={_.get(recipe, 'title', 'sorry, something went wrong')}
            id={_.get(recipe, 'id', 'N/A')}
            img={`https://spoonacular.com/recipeImages/${_.get(recipe, 'id', 'N/A')}-556x370.jpg`}
            />
        );
      })}
      </div>
    </div>
  )
}