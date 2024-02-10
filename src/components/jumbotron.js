import React from "react"
import Container from "react-bootstrap/Container"
import { Carousel, CarouselItem } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  `)

  return (
    <Container fluid className="p-0">
      <Carousel indicators={false}>
        <CarouselItem>
          <GatsbyImage
            image={query.image1.childImageSharp.gatsbyImageData}
            alt={query.image1.relativePath}
          />
          <Carousel.Caption>
            <h3>Custom Cakes to Cherish Every Moment!</h3>
            <p>
              Cherish the beautiful memories for sometimes these are the
              blessings that you are left with.
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <GatsbyImage
            image={query.image2.childImageSharp.gatsbyImageData}
            alt={query.image2.relativePath}
          />
          <Carousel.Caption>
            <h3>Let Us Make Your Wedding Cake!</h3>
            <p>
              Life is a cake and love is the icing on top of it. Without love,
              it becomes difficult to swallow life.
            </p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <GatsbyImage
            image={query.image3.childImageSharp.gatsbyImageData}
            alt={query.image3.relativePath}
          />
          <Carousel.Caption>
            <h3>Cakes For Every Occasion!</h3>
            <p>Where there is cake, there is hope. And there is always cake.</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </Container>
  )
}

export default JumbotronElement
