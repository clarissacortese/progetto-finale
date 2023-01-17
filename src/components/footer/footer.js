import "./footer.css";
import logo from "../../imgs/logo.png";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-3 mt-auto">
      <div className="container-fluid d-flex justify-content-center">
        <Link to="/"><img src={logo} height="40" alt="logo" /></Link>
      </div>
    </footer>
  )
}