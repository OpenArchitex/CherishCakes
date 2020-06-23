import { graphql} from 'gatsby'
import React from 'react'
import NavBar from "../components/nav-bar"
import Layout from "../components/layout"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const IndexPage = ({ data }) => {
    const images = data.images.edges.map(({ node }) => node.childImageSharp)
    return (
        <Layout>
        <div> 
            <h1>Gatsby image gallery demo</h1>
            <p>A very simple page to demo the gallery component.</p>
            <Gallery images={images} />
        </div>
        </Layout>
    )
  }
  
  export const query = graphql`
    query ImagesForGallery {
      images: allFile(
        filter: { relativeDirectory: { eq: "cake-gallary" } }
       
      ) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 270, maxHeight: 270) {
                ...GatsbyImageSharpFluid
              }
              full: fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `

  
  export default IndexPage