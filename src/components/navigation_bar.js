import React, {Component} from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import logo from "../images/default.png"
import "./layout.css"
class Navigation_Bar extends Component {
  render() {
    return (
        <Navbar bg="#FFFFFF" variant="light" expand='lg'>
            <Navbar.Brand href="#">
            <img
                src={logo}
                width="300"
                height="50"
                className="d-inline-block align-top"
                alt=""
            />{``}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#aboutus" className="w3-myfont">About Us</Nav.Link>
                <Nav.Link href="#faq" className = "w3-myfont">FAQ</Nav.Link>
                <Nav.Link href="#contactus" className="w3-myfont">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}
 

export default Navigation_Bar