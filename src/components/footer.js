import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => (
    <footer>
        <div className="mt-3 mx-auto text-center">
            <div className="row">
                <div className="mx-auto">
                    <ListGroup horizontal>
                        <ListGroup.Item className="list-group-item border-0"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></ListGroup.Item>
                        <ListGroup.Item className="list-group-item border-0"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></ListGroup.Item>
                        <ListGroup.Item className="list-group-item border-0"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <p>
                <small>
                    Powered by <a href="https://github.com/OpenArchitex/CherishCakes" target="_blank" rel="noopener noreferrer">CherishCakes</a>
                    &copy;{new Date().getFullYear()}. Code licensed under an {` `}
                    <a href="https://opensource.org/licenses/AGPL-3.0" target="_blank" rel="noopener noreferrer">AGPL-3.0 License</a>.
                </small>
            </p>
        </div>
    </footer>
)

export default Footer