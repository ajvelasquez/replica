import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useDispatch } from "react-redux";
import VoteType from "../../../models/enums/VoteType";
import Topic from "../../../models/interfaces/Topic";
import { selectOption, voteTopic } from "../../../state/ducks/topics";
import PlanetsImg from "./../../../images/planets.jpeg";
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
      <img src={PlanetsImg} alt="someting" />
      <div className="title">
        <div className="title__icon">
          <FontAwesomeIcon icon={faThumbsUp} />
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
        <button onClick={() => dispatch(selectOption(id, VoteType.LIKE))} data-testid="like-btn">
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <button onClick={() => dispatch(selectOption(id, VoteType.DISLIKE))}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <button onClick={() => dispatch(voteTopic(id))}>Vote Now</button>
      </div>
      <VotesCounter positivePercentage={positivePercentage}>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} />{" "}
          <span>{positivePercentage}%</span>
        </div>
        <div>
          <span>{negativePercentage}%</span>{" "}
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
      </VotesCounter>
    </BoxContainer>
  );
};

export default VotingBox;
