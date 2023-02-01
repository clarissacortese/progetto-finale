import _ from "lodash";
import Time from "../../imgs/time.png";
import Servings from "../../imgs/servings.png";
import "./selectedRecipe.css";

export default function SelectedRecipeView({details}) {
  return (
    <div>
      <h2>{_.get(details, "title", "sorry, something went wrong")}</h2>
      <div className="d-flex flex-wrap">
        <img
          className="fullImg"
          src={_.get(details, "image", "N/A")}
          alt={_.get(details, "title", "sorry, something went wrong")}></img>
        <div className="info d-flex flex-column justify-content-around">
          <div className="d-flex">
            <img src={Servings} className="me-2" id="img-list1" alt="servings"></img>
            <p className="mt-2">
              <strong>Servings: </strong>
              {_.get(details, "servings", "unspecified")}
            </p>
          </div>
          <div className="d-flex">
            <img src={Time} className="me-2" id="img-list2" alt="time"></img>
            <p className="mt-2">
              <strong>Ready in minutes: </strong>
              {_.get(details, "readyInMinutes", "unspecified")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <ul>
          {details.extendedIngredients?.map((ingredient) => {
            return (
              <li key={_.get(ingredient, "id", "N/A")}>
                {_.get(ingredient, "original", "")}
              </li>
            );
          })}
        </ul>
        <br />
        <h3>Instructions:</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: _.get(details, "summary", ""),
          }}></p>
        <p
          dangerouslySetInnerHTML={{
            __html: _.get(
              details,
              "instructions",
              "Sorry, there are no instructions for this recipe."
            ),
          }}></p>
      </div>
    </div>
  );
}
