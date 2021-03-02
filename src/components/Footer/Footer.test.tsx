import { render } from "@testing-library/react";
import React from "react";
import Footer from ".";

test("Footer renders without crashing", () => {
  const { getByText } = render(<Footer />);

  const searchCriteria = "Terms and services";
  const component = getByText(searchCriteria);
  expect(component).toHaveTextContent(searchCriteria);
});
