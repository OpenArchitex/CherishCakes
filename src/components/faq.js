import React from "react";

const FAQ = () => (
    <div className="container-fluid mt-5 mb-5">
        <div className="row" id="faq">
            <div className="col-xs-12 col-sm-12">
                <h1>Questions?</h1>
                <ul className="mt-3">
                    <li className="text-secondary">
                        What's the price of a customized cake design?
                    </li>
                    <p>Price is dependent upon the type of cake, size, design and fillings etc. <a href="#contact-us">Please contact me</a> to get a quote.</p>
                    <li className="text-secondary">
                        What cake flavors and fillings available?
                    </li>
                    <p>All major varieties of flavors and fillings are available.</p>
                    <li className="text-secondary">
                        Is a deposit required?
                    </li>
                    <p>Yes, a deposit of 50% of the price is required for the order to proceed.</p>
                    <li className="text-secondary">
                        What payment method can I use?
                    </li>
                    <p>We currently accept e-transfers and cash payments.</p>
                </ul>
            </div>
        </div>
    </div>
)

export default FAQ