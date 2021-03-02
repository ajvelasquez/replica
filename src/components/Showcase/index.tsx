import {
  faSearch,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import nighSky from "./../../images/night-sky.jpeg";
import {
  BackgroundImg,
  BarBottom,
  Nav,
  NavLinks,
  ShowcaseCard,
  ShowcaseCardButton,
  ShowcaseCardContent,
  ShowcaseContainer,
} from "./styles";
import { StaticImage } from "gatsby-plugin-image";

const Showcase = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <ShowcaseContainer>
      <StaticImage
        src="./../../images/night-sky.jpeg"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
        loading="eager"
      />
      <div className="container">
        <Nav click={click}>
          <h1>Replica</h1>

          <NavLinks click={click}>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#about-us">About Us</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#search" aria-label="Search">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </NavLinks>
          <div className="burguer-menu" onClick={handleClick}>
            <div className="burguer-menu__line"></div>
          </div>
        </Nav>
      </div>
      <div className="container">
        <ShowcaseCard>
          <ShowcaseCardContent>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className="subtitle">Lorem, ipsum dolor.</p>
            <p className="summary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              neque aspernatur, similique nobis tempore omnis vero recusandae
              error atque. Ullam doloremque id perferendis dolorem error
              assumenda repellendus dolores. Adipisci, reprehenderit labore
              laborum ratione iste ab, impedit itaque consequuntur eius culpa
              quam ut libero possimus dolores necessitatibus atque molestias
              beatae ducimus?
            </p>
            <a className="wiki-link" href="#wiki">
              See more here.
            </a>
          </ShowcaseCardContent>
          <ShowcaseCardButton>
            <button className="bg-primary" aria-label="I like it">
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button className="bg-secondary" aria-label="I dislike it">
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </ShowcaseCardButton>
        </ShowcaseCard>
      </div>
      <BarBottom>
        <div>Closing in</div>
        <div>
          22 <span>Days</span>
        </div>
      </BarBottom>
    </ShowcaseContainer>
  );
};

export default Showcase;
