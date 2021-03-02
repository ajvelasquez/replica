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
            <a href="#">
              <li>Terms and services</li>
            </a>
            <a href="#">
              <li>Privacy policy</li>
            </a>
            <a href="#">
              <li>Work with us</li>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <a href="#">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
            </a>
            <a href="#">
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </a>
            <a href="#">
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
