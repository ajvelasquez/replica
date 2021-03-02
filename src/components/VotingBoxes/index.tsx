import * as React from "react";
import { useSelector } from "react-redux";
import Topic from "../../models/interfaces/Topic";
import { AppState } from "../../state/createStore";
import { Grid, Title } from "./styles";
import VotingBox from "./VotingBox";

const VotingBoxes = () => {
  const topics = useSelector((state: AppState) => state.topics.all);

  return (
    <div className="container">
      <Title>Vote!</Title>
      <Grid>
        {topics.map((topic: Topic) => (
          <VotingBox key={topic.id} {...topic} />
        ))}
      </Grid>
    </div>
  );
};

export default VotingBoxes;
