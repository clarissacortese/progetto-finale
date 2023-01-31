import "./footer.css";
import Logo from "../atoms/logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-3 mt-auto">
      <div className="container-fluid d-flex justify-content-center">
        <Link to="/">
          <Logo height="40px" width="auto" />
        </Link>
      </div>
    </footer>
  );
}
