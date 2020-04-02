/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./nav-bar"
import "./layout.css"
import JumbotronElement from "./jumbotron"
import Footer from "./footer";

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
        header: '#nav-bar-header'
    })
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata.title} />
      <JumbotronElement/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
