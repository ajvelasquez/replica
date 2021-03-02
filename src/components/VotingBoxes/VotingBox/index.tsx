import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useDispatch } from "react-redux";
import VoteType from "../../../models/enums/VoteType";
import Topic from "../../../models/interfaces/Topic";
import { selectOption, voteTopic } from "../../../state/ducks/topics";
import { BoxContainer, VotesCounter } from "./styles";

const VotingBox = ({ title, date, content, votes, id }: Topic) => {
  const dispatch = useDispatch();

  const positivePercentage = (
    (votes.likes / (votes.likes + votes.dislikes)) *
    100
  ).toFixed(1);
  const negativePercentage = (
    (votes.dislikes / (votes.likes + votes.dislikes)) *
    100
  ).toFixed(1);

  return (
    <BoxContainer data-testid="box-container">
      <StaticImage
        src="./../../../images/planets.jpeg"
        alt="Planets between the starts"
        placeholder="blurred"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
        loading="eager"
        width={880}
        height={1100}
      />
      <div className="title">
        <div className="title__icon">
          <FontAwesomeIcon icon={faThumbsUp} size="lg" fixedWidth />
        </div>
        <div className="title__container">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="content container">
        <p>{date}</p>
        <p>{content}</p>
      </div>
      <div className="buttons container">
        <button
          onClick={() => dispatch(selectOption(id, VoteType.LIKE))}
          data-testid="like-btn"
          aria-label="I like it"
        >
          <FontAwesomeIcon icon={faThumbsUp} size="lg" fixedWidth />
        </button>
        <button
          onClick={() => dispatch(selectOption(id, VoteType.DISLIKE))}
          aria-label="I dislike it"
        >
          <FontAwesomeIcon icon={faThumbsDown} size="lg" fixedWidth />
        </button>
        <button onClick={() => dispatch(voteTopic(id))}>Vote Now</button>
      </div>
      <VotesCounter positivePercentage={positivePercentage}>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          {" fixedWidth "}
          <span>{positivePercentage}%</span>
        </div>
        <div>
          <span>{negativePercentage}%</span>{" "}
          <FontAwesomeIcon icon={faThumbsDown} size="lg" fixedWidth />
        </div>
      </VotesCounter>
    </BoxContainer>
  );
};

export default VotingBox;
