import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { fontAwesomeIcons } from '../helpers/fontawesomeicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import MainContent from "../components/main-content";
import AboutUs from "../components/aboutus";
import ContactUs from "../components/contactus";
import FAQ from "../components/faq";
import "typeface-roboto";
import "typeface-dancing-script"
import JumbotronElement from "../components/jumbotron";

library.add(fontAwesomeIcons)

const IndexPage = ({location}) => (
  <>
      <JumbotronElement/>
      <Layout location={location}>
          <SEO title="Home" />
          <MainContent/>
          <AboutUs/>
          <FAQ/>
          <hr/>
          <ContactUs/>
          <hr/>
      </Layout>
  </>
)

export default IndexPage
