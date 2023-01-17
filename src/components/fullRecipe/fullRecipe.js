import "./fullRecipe.css";
import Time from "../../imgs/time.png";
import Servings from "../../imgs/servings.png";

export default function FullRecipe(props) {
  return (
    <div className="mx-5 my-5 d-flex flex-column full-recipe">
        <h2>{props.title}</h2>
        <div className="d-flex flex-wrap">
            <img className="fullImg" src={props.src} alt={props.title}></img>
            <div className="info d-flex flex-column justify-content-around">
                <div className="d-flex">
                    <img src={Servings} className="img-list me-2" alt="servings"></img>
                    <p className="mt-2"><strong>Servings: </strong>{props.serving}</p>
                </div>
                <div className="d-flex">
                    <img src={Time} className="img-list me-2" alt="time"></img>
                    <p className="mt-2"><strong>Ready in minutes: </strong>{props.time}</p>
                </div>
            </div>
        </div>
        <div>
            <h3>Ingredients:</h3>
            <ul>{props.ingrList}</ul>
            <br />
            <h3>Instructions:</h3>
            <p dangerouslySetInnerHTML={props.summ}></p>
            <p dangerouslySetInnerHTML={props.instr}></p>
        </div>
        <h4 className="mt-5">Similar recipes:</h4>        
    </div>
  )
}