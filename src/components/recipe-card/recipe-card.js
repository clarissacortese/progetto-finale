import {Card, CardImg, CardBody, CardTitle,
       CardSubtitle} from "reactstrap";
import MyButton from "../atoms/button/button";
import {Link} from "react-router-dom";

export default function RecipeCard(props) {
  return (
    <div>
        <Card style={{width: "16rem", margin: "20px", textDecoration: "none"}}>
            <CardImg
            alt={props.title}
            src={props.img}
            top
            width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6">Vegetarian recipe</CardSubtitle>
                <Link className="card-link"
                to={"/recipe/" + props.id}><MyButton text="Read More" /></Link>
            </CardBody>
        </Card>      
    </div>
  )
}