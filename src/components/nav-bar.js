import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/cherishcake-logo.svg"
import { Link } from 'gatsby'

const NavBar = ({ siteTitle, location }) => {
    const navbarBrandLink = (location && location.pathname === "/")? "#top": "/";

    return (
        <Navbar bg="light" variant="light" collapseOnSelect expand="sm" fixed="top">
            <Navbar.Brand>
                <Link to={navbarBrandLink}>
                    <img
                        src={logo}
                        className="d-inline-block align-top mb-0"
                        width="250"
                        alt={siteTitle + " Logo"}
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                {location && location.pathname === "/" &&
                <Nav className="ml-auto">
                    <Link to="/gallery/" className="nav-link">Past Creations</Link>
                    <Link to="#about-us" className="nav-link">About Us</Link>
                    <Link to="#faq" className="nav-link">FAQ</Link>
                    <Link to="#contact-us" className="nav-link">Contact Us</Link>
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