import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Gallery from "@browniebroke/gatsby-image-gallery"
import { graphql } from "gatsby"

const ImageGallery = ({ data, location }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)
  console.log(images)
  return (
    <Layout location={location}>
      <SEO title="Gallery" />
      <Gallery images={images} />
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "cake-gallery" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default ImageGallery
