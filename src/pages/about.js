import SpoonacularLogo from "../imgs/spoonacular-logo.svg";
import Food from "../imgs/food.jpg";

export default function About() {
  return (
    <div className="mx-5 mt-5" style={{
      border: "10px dotted #FA8000",
      padding: "20px"
    }}>
      <div className="d-flex align-items-center flex-wrap">
        <img className="about-imgs m-2" src={SpoonacularLogo} alt="Spoonacular logo"/>
        <p className="m-3" style={{width: "80%"}}><a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer" className="external-link">Spoonacular's API</a> provides access to thousands of recipes,
        based on the user's varied nutritional requirements and other specific needs.
        This API is curated in detail and rich in information.
        </p>
      </div>
      <div className="d-flex align-items-center flex-wrap">
        <p className="m-3" style={{width: "80%"}}>
        The VegTable app was created with the aim of simplifying the search for vegetarian recipes
        according to specific parameters, chosen by the user,
        with the ultimate goal of making it faster and more fun to approach the vegetarian lifestyle.
        </p>
        <img className="about-imgs m-2" src={Food} alt="Vegetarian food"/>
      </div>
    </div>   
  )
}