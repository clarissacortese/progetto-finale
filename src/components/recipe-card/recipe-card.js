import {Card, CardImg, CardBody, CardTitle,
       CardSubtitle, Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./recipe-card.css";

export default function RecipeCard(props) {
  return (
    <div>
        <Card style={{width: "16rem", margin: "20px"}}>
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
                <Button className="card-button"><Link className="card-link"
                to={"/recipe/" + props.id}>Read More</Link></Button>
            </CardBody>
        </Card>      
    </div>
  )
}