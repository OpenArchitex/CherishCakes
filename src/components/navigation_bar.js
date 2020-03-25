import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import logo from "../images/cake_logo.svg"
class Navigation_Bar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
            />{``}
            CherishCakes
            </Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#menu">FAQ</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}
 

export default Navigation_Bar