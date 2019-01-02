import { combineReducers } from "redux-immutable";
import sites from "./sites";
import siteForm from "./siteForm";
import color from "./color";
import cropModel from "./cropModel";

const appReducer = combineReducers({
  sites,
  siteForm,
  color,
  cropModel
});

export default appReducer;
