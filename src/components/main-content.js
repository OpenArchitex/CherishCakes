import React from "react";
import cake1 from "../images/featured-cakes/cake1.jpg";
import cake2 from "../images/featured-cakes/cake2.jpg";
import cake3 from "../images/featured-cakes/cake3.jpg";
import cake4 from "../images/featured-cakes/cake4.jpg";
import cake5 from "../images/featured-cakes/cake5.jpg";
import cake6 from "../images/featured-cakes/cake6.jpg";
import cake7 from "../images/featured-cakes/cake7.jpg";
import {Button} from "react-bootstrap";

const MainContent = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 col-sm-5 mb-3">
                <section className="mb-3">
                    <h1>Creative Designs</h1>
                    <p>We believe that cakes are not just a sweet but an art in itself. The true quality of a cake comes from
                        its creative design handmade with the best of ingredients and a little bit of love!
                    </p>
                    <Button variant="primary" href="/gallery">View Gallery</Button>
                </section>
                <section>
                    <img
                        src={cake1}
                        className="d-inline-block align-top mb-0 img-fluid"
                        alt={cake1.displayName + " Logo"}
                    />
                </section>
            </div>
            <div className="col-xs-12 col-sm-7">
                <img
                    src={cake2}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake2.displayName + " Logo"}
                />
            </div>
        </div>
        <div className="row mt-3 mb-3">
            <div className="col-xs-12 col-sm-6 mb-3">
                <img
                    src={cake3}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake3.displayName + " Logo"}
                />
            </div>
            <div className="col-xs-12 col-sm-6">
                <img
                    src={cake4}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake4.displayName + " Logo"}
                />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-xs-12 col-sm-6">
                <img
                    src={cake5}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake5.displayName + " Logo"}
                />
            </div>
            <div className="col-xs-12 col-sm-6">
                <img
                    src={cake6}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake6.displayName + " Logo"}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12">
                <img
                    src={cake7}
                    className="d-inline-block align-top mb-0 img-fluid"
                    alt={cake7.displayName + " Logo"}
                />
            </div>
        </div>
        <hr/>
    </div>
)

export default MainContent