import { Action } from "redux";

export default interface ExtendedAction extends Action {
  payload?: any;
}
