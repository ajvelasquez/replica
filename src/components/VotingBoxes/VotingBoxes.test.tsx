import React from "react";
import VotingBoxes from ".";
import data from "./../../state/data.json";
import { fireEvent, render, screen, act } from "./../../state/test-utils";

describe("<VotingBoxes /> component", () => {
  test("VotingBoxes with no items render without crashing", () => {
    const { getByText, queryAllByText } = render(<VotingBoxes />, {
      initialState: { topics: { all: [] } },
    });

    const searchCriteria = "Vote!";
    const component = getByText(searchCriteria);
    expect(component).toHaveTextContent(searchCriteria);
  });

  test("VotingBoxes and VotingBox render without crashing", () => {
    const { getByText, queryAllByText } = render(<VotingBoxes />, {
      initialState: { topics: { all: data } },
    });

    const searchCriteria = "Vote!";
    const component = getByText(searchCriteria);
    expect(component).toHaveTextContent(searchCriteria);

    const votingBoxItems = queryAllByText("Vote Now");
    expect(votingBoxItems).toHaveLength(4);
  });

  test("VotingBox components render without crashing", () => {
    const { queryAllByText } = render(<VotingBoxes />, {
      initialState: { topics: { all: data } },
    });

    const searchCriteria = "Vote Now";
    const votingBoxItems = queryAllByText(searchCriteria);
    votingBoxItems.map((votingBox) =>
      expect(votingBox).toHaveTextContent(searchCriteria)
    );
  });

  test("VotingBox component does not break after dispatching an action", async () => {
    const { getAllByTestId } = render(<VotingBoxes />, {
      initialState: { topics: { all: data } },
    });

    const searchCriteria = "box-container";
    const votingBoxItems = getAllByTestId(searchCriteria);
    const votingBox = votingBoxItems[0];
    expect(votingBox).toHaveTextContent("40.0%");

    const likeButtonList = getAllByTestId("like-btn");
    const likeButton = likeButtonList[0];
    fireEvent.click(likeButton);
  });
});
