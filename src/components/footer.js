import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ListGroupItem, ListGroup } from "react-bootstrap"

const Footer = () => (
  <footer>
    <div className="container-fluid">
      <div className="mt-3 text-center">
        <ListGroup horizontal className="justify-content-center">
          <ListGroupItem className="border-0">
            <a
              aria-label="facebook"
              style={{ color: "inherit" }}
              href="https://www.facebook.com/priyangasg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </ListGroupItem>
          <ListGroupItem className="border-0">
            <a
              aria-label="instagram"
              style={{ color: "inherit" }}
              href="https://www.instagram.com/priyangasg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </ListGroupItem>
        </ListGroup>
        <p>
          <small>
            Powered by{" "}
            <a
              href="https://github.com/OpenArchitex"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenArchitex
            </a>
            &copy;{new Date().getFullYear()}. Code licensed under an {` `}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </small>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
