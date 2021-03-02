import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Banner } from "./styles";

const DisclaimerBar = () => {
  return (
    <div className="container">
      <Banner>
        <div className="close-icon">
          <button>
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
        <div className="title">
          <p>Lorem, ipsum dolor.</p>
          <h2>Lorem.</h2>
        </div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          incidunt perferendis sunt architecto laboriosam dolores aspernatur
          eaque ab inventore optio!
        </div>
        <div className="close-icon-md">
          <button>
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
      </Banner>
    </div>
  );
};

export default DisclaimerBar;
