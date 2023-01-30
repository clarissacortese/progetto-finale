import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import _ from "lodash";
import FullRecipe from '../fullRecipe/fullRecipe';
import RecipeCard from '../recipe-card/recipe-card';

export default function SelectedRecipe() {

  const API_KEY = process.env.REACT_APP_API_KEY;

    let params = useParams();
    const [details, setDetails] = useState({});
    const [similar, setSimilar] = useState([]);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [fetchDetailsError, setFetchDetailsError] = useState(null);

    const fetchDetails = useCallback(async () => {
      try {
        setLoadingDetails(true);
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information`, {
          params: {
            apiKey: API_KEY
          }
        });
        setDetails(data);
      } catch (error) {
        console.error(error);
        setFetchDetailsError(error);
      } finally {
        setLoadingDetails(false);
      }}, [API_KEY, params.name]);

    const fetchSimilar = useCallback(async () => {
      try {
        const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/similar?apiKey=${API_KEY}`);
        setSimilar(data);
      } catch (error) {
        console.error(error);
      }
    }, [API_KEY, params.name])

    useEffect(() => {
        fetchDetails();     
    }, [fetchDetails]);

    useEffect(() => {
      fetchSimilar();     
  }, [fetchSimilar]);

  if (loadingDetails) {
    return (<div>Loading...</div>);
  } else if (fetchDetailsError) {
    return (<div>Errore: {fetchDetailsError.message}</div>);
  }
  else {
    return (
    <div>
      <FullRecipe title={_.get(details, 'title', 'sorry, something went wrong')} src={_.get(details, 'image', 'N/A')}
      time={_.get(details, 'readyInMinutes', 'unspecified')} serving={_.get(details, 'servings', 'unspecified')}
      ingrList={details.extendedIngredients?.map((ingredient) => {
        return (<li key={_.get(ingredient, 'id', 'N/A')}>{_.get(ingredient, 'original', '')}</li>)
      })}
      summ={{__html: _.get(details, 'summary', '')}}
      instr={{__html: _.get(details, 'instructions', 'Sorry, there are no instructions for this recipe.')}}
       />
      <div>
      <div className="d-flex flex-wrap justify-content-center">
        {similar.map((recipe) => {
        return (
            <RecipeCard key={_.get(recipe, 'id', 'N/A')} title={_.get(recipe, 'title', 'sorry, something went wrong')} id={_.get(recipe, 'id', 'N/A')}
            img={`https://spoonacular.com/recipeImages/${_.get(recipe, 'id', 'N/A')}-556x370.jpg`}
            />
        );
      })}  
      </div>
      </div>  
    </div>
  )
}}