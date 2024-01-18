import PropTypes from "prop-types"
import React from "react"
import logo from "../images/cherishcake-logo.svg"
import { Link } from "gatsby"
import { Nav, Navbar, NavLink } from "react-bootstrap"

const NavBar = ({ siteTitle, location }) => {
  return (
    <Navbar bg="light" variant="light" collapseOnSelect expand="sm" fixed="top">
      <Navbar.Brand className="p-3">
        <Link to="/">
          <img
            src={logo}
            className="d-inline-block align-top mb-0"
            width="210"
            alt={siteTitle + " Logo"}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        {location && location.pathname === "/" && (
          <Nav className="ml-auto nav-links">
            <NavLink href="/gallery/">Past Creations</NavLink>
            <NavLink href="#about-us">About Us</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#contact-us">Contact Us</NavLink>
          </Nav>
        )}
        {location && location.pathname === "/gallery/" && (
          <Nav className="ml-auto nav-links">
            <NavLink href="/">Home</NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
