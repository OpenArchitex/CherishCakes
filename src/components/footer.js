import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => (
    <footer>
        <div className="container-fluid">
            <div className="mt-3 text-center">
                <div className="row">
                    <div className="mx-auto">
                        <ListGroup horizontal>
                            {/*<ListGroup.Item className="border-0"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></ListGroup.Item>*/}
                            <ListGroup.Item className="border-0"><a style={{color: "inherit"}} href="https://www.facebook.com/priyangasg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></ListGroup.Item>
                            <ListGroup.Item className="border-0"><a style={{color: "inherit"}} href="https://www.instagram.com/priyangasg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <p>
                    <small>
                        Powered by <a href="https://github.com/OpenArchitex" target="_blank" rel="noopener noreferrer">OpenArchitex</a>
                        &copy;{new Date().getFullYear()}. Code licensed under an {` `}
                        <a href="https://opensource.org/licenses/AGPL-3.0" target="_blank" rel="noopener noreferrer">AGPL-3.0 License</a>.
                    </small>
                </p>
            </div>
        </div>
    </footer>
)

export default Footer