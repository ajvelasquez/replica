import { render } from "@testing-library/react";
import React from "react";
import Showcase from ".";

test("Showcase renders without crashing", () => {
  const { getByText } = render(<Showcase />);

  const searchCriteria = "Replica";
  const component = getByText(searchCriteria);
  expect(component).toHaveTextContent(searchCriteria);
});
