import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {Carousel} from "react-bootstrap";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image"

const JumbotronElement = () => {
    const query = useStaticQuery(graphql`
      query {
        image1: file(relativePath: { eq: "candle-cake.jpg" }) {
          ...squareImage
        }
        image2: file(relativePath: { eq: "wedding-cake.jpg" }) {
          ...squareImage
        }
        image3: file(relativePath: { eq: "gift.jpg" }) {
          ...squareImage
        }
      }
      
      fragment squareImage on File {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }`
    )

    return (
        <Jumbotron fluid className="p-0">
            <Container fluid className="p-0">
                <Carousel>
                    <Carousel.Item>
                        <Img
                            className="d-block w-100"
                            fluid={query.image1.childImageSharp.fluid}
                            alt={query.image1.relativePath}
                        />
                        <Carousel.Caption>
                            <h3>Custom Cakes to Cherish Every Moment!</h3>
                            <p>Cherish the beautiful memories for sometimes these are the blessings that you are left with.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img
                            className="d-block w-100"
                            fluid={query.image2.childImageSharp.fluid}
                            alt={query.image1.relativePath}
                        />

                        <Carousel.Caption>
                            <h3>Let Us Make Your Wedding Cake!</h3>
                            <p>Life is a cake and love is the icing on top of it. Without love, it becomes difficult to swallow life.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img
                            className="d-block w-100"
                            fluid={query.image3.childImageSharp.fluid}
                            alt={query.image1.relativePath}
                        />

                        <Carousel.Caption>
                            <h3>Cakes For Every Occasion!</h3>
                            <p>Where there is cake, there is hope. And there is always cake.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Jumbotron>
    )
}

export default JumbotronElement
