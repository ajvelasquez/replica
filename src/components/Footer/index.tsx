import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div>
          <ul>
            <li>
              <a href="#">Terms and services</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#" aria-label="Follow us on Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>

            <li>
              <a href="#" aria-label="Follow us on Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li>
              <a href="#" aria-label="Follow us on Linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
