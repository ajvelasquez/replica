import { combineReducers, createStore as reduxCreateStore } from "redux";
import topics, { State as TopicState } from "./ducks/topics";

export interface AppState {
  topics: TopicState;
}

let createStore;
const reducer = combineReducers({
  topics,
});
const initialState = {};

if (typeof window !== `undefined`) {
  createStore = () =>
    reduxCreateStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
  createStore = () => reduxCreateStore(reducer, initialState);
}

export default createStore;
