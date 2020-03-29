import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/cherishcake-logo.svg"

const NavBar = ({ siteTitle }) => (
    <Navbar bg="light" variant="light" collapseOnSelect expand="sm" fixed="top" id="nav-bar-header">
        <Navbar.Brand>
            <a href="#top">
                <img
                    src={logo}
                    className="d-inline-block align-top mb-0"
                    width="250"
                    alt={siteTitle + " Logo"}
                />
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

NavBar.propTypes = {
    siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
    siteTitle: ``,
}

export default NavBar