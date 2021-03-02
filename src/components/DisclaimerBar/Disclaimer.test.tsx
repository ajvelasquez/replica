import { render } from "@testing-library/react";
import React from "react";
import DisclaimerBar from ".";

test("DisclaimerBar renders without crashing", () => {
  const { getByText } = render(<DisclaimerBar />);

  const searchCriteria = "Lorem, ipsum dolor.";
  const component = getByText(searchCriteria);
  expect(component).toHaveTextContent(searchCriteria);
});
