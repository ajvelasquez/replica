import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import createStore from "./createStore";
import reducer from "./ducks/topics";

function render(
  ui,
  {
    initialState = {},
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
