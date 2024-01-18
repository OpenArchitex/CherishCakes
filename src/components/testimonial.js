import React from "react"
import { Carousel } from "react-bootstrap"
import Container from "react-bootstrap/Container"

const Testimonial = () => (
  <Container fluid className="mt-5 mb-5">
    <h1>What Others Say...</h1>
    <Carousel
      className="testimonialCarousel"
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <div align="center">
          <img
            className="d-block w-15"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light"
            alt="avatar1"
          />
        </div>
        <Carousel.Caption>
          <p>
            Thank you soo much. The cake was soo good and it was the best of
            all!
          </p>
          <h5 style={{ paddingBottom: "20px" }}>Katuuo</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div align="center">
          <img
            className="d-block w-15"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Happy&eyebrowType=SadConcernedNatural&mouthType=Smile&skinColor=Tanned"
            alt="avatar2"
          />
        </div>
        <Carousel.Caption>
          <p>
            Priyanga... just want to say thank you very much for the gorgeous
            cake for my daughter!!! Everyone loved it and the cake was so
            delicious! Going to pass your name along to my friends if you don't
            mind!{" "}
            <span role="img" aria-label="emoji">
              😃
            </span>
          </p>
          <h5 style={{ paddingBottom: "20px" }}>Julie</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div align="center">
          <img
            className="d-block w-15"
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Kurt&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Side&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            alt="avatar3"
          />
        </div>
        <Carousel.Caption>
          <p>
            Thank you for the beautiful cake Priyanga. It was delicious!{" "}
            <span role="img" aria-label="emoji">
              😃
            </span>
          </p>
          <h5 style={{ paddingBottom: "20px" }}>Kavitha</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr />
  </Container>
)

export default Testimonial
