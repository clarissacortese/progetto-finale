import {Button} from "reactstrap";
import "./button.css";

export default function MyButton(props) {
  return (
    <Button
    className="button"
    type="submit"
    style={props.style}>
      {props.link}
      {props.text}
    </Button>
  )
}
