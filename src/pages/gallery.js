import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { graphql } from "gatsby";

const ImageGallery = ({ data, location }) => {
    const images = data.images.edges.map(obj => obj.node.childImageSharp);
    return (
        <Layout location={location}>
            <SEO title="Gallery" />
            <Gallery images={images}/>
        </Layout>
    )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "cake-gallery" } }
      sort: { fields: name }
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

export default ImageGallery