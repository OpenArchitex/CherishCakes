import React from "react";
import PhotoOfCreator from "../images/about-us.jpg"

const AboutUs = () => (
    <div className="container-fluid mt-5 mb-5" id="about-us">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <img
                    src={PhotoOfCreator}
                    className="d-inline-block align-top mb-0"
                    width="400"
                    alt="About the Creator"
                />
            </div>
            <div className="col-xs-12 col-sm-5 order-first">
                <h1>Meet Priyanga</h1>
                <p>
                    When I first started making cakes for my family I never knew that it would become a lifelong passion. Since then I have created numerous custom cakes for all
                    sorts of occasions and truly enjoyed every single moment designing them!
                </p>
                <p>
                    I believe that the true essence of a cake comes from creative design elements as well as the best ingredients. I use all my creativity, passion and training to
                    produce uniquely crafted custom cakes especially for you!
                </p>
                <p>
                    I would love to make your perfect custom cake! <a href="#contact-us">Please contact me</a> to get started!
                </p>
            </div>
        </div>
        <hr/>
    </div>
)

export default AboutUs