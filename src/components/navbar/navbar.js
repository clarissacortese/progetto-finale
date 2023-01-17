import {useState} from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
import {
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import logo from "../../imgs/logo.png";

export default function Menu(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
  <div className="px-5">
  <Navbar {...args}>
    <Link to="/"><img alt="logo" src={logo} id="nav-logo" className="nav-logo" /></Link>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
    <Nav className="ms-auto" navbar>
      <NavItem>
        <Link to="/about" className="nav-link">ABOUT</Link>
      </NavItem>
      <NavItem>
        <Link to="/contacts" className="nav-link">CONTACTS</Link>
      </NavItem>
    </Nav>
    </Collapse>
  </Navbar>
  </div>
  );
}