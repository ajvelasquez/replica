import { render } from "@testing-library/react";
import React from "react";
import SubmitBar from ".";

test("SubmitBar renders without crashing", () => {
  const { getByText } = render(<SubmitBar />);

  const searchCriteria = "Submit";
  const component = getByText(searchCriteria);
  expect(component).toHaveTextContent(searchCriteria);
});
