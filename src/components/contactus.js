import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactUs = () => (
    <div className="row" id="contact-us">
        <div className="col-12 mt-5 mb-5 text-center">
            <h1>Give Us a Call!</h1>
            <p className="mt-3">Let us make your most amazing custom cake!</p>
            <div className="row">`
                <div className="col-xs-12 col-sm-4 offset-sm-2 text-center">
                    <div className="mb-3 mt-3 text-center">
                        <FontAwesomeIcon icon="phone" size="2x"/>
                    </div>
                    <a href="tel:+1 780 937-4989">+1 780 937-4989</a>
                </div>
                <div className="col-xs-12 col-sm-4 text-center">
                    <div className="mb-3 mt-3 text-center">
                        <FontAwesomeIcon icon={['far', 'envelope']} size="2x"/>
                    </div>
                    <a href="mailto:cherishcakes@gmail.com">priyanga@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
)

export default ContactUs