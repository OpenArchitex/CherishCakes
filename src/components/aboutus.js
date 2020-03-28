import React from "react";
import logo from "../images/about-us.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AboutUs = () => (
    <div className="row" id="about-us">
        <div className="col-xs-12 col-sm-6">
            <img
                src={logo}
                className="d-inline-block align-top mb-0"
                width="400"
                alt="Woman Holding Cake"
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
                I would love to make your perfect custom cake! Please contact me to to get started!
            </p>
        </div>
    </div>
)

export default AboutUs