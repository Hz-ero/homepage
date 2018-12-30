import { combineReducers } from "redux-immutable";
import sites from "./sites";
import signal from "./signal";
import color from "./color";

const appReducer = combineReducers({
  sites,
  signal,
  color
});

export default appReducer;
