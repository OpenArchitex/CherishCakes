import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/cherishcake-logo.svg"
import { Link } from 'gatsby'

const NavBar = ({ siteTitle, location }) => {
    const navbarBrandLink = (location && location.pathname === "/")? "#top": "/";

    return (
        <Navbar bg="light" variant="light" collapseOnSelect expand="sm" fixed="top" id="nav-bar-header">
            <Navbar.Brand>
                <Link to={navbarBrandLink}>
                    <img
                        src={logo}
                        className="d-inline-block align-top mb-0"
                        width="210"
                        alt={siteTitle + " Logo"}
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                {location && location.pathname === "/" &&
                <Nav className="ml-auto">
                    <Nav.Link href="/gallery/" className="nav-link">Past Creations</Nav.Link>
                    <Nav.Link href="#about-us" className="nav-link">About Us</Nav.Link>
                    <Nav.Link href="#faq" className="nav-link">FAQ</Nav.Link>
                    <Nav.Link href="#contact-us" className="nav-link">Contact Us</Nav.Link>
                </Nav>
                }
                {location && location.pathname === "/gallery/" &&
                <Nav className="ml-auto">
                    <Link to="/" className="nav-link">Home</Link>
                </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

NavBar.propTypes = {
    siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
    siteTitle: ``,
}

export default NavBar