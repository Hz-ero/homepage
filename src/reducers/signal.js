import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";

const setSignalToTrue = (state, action) => {
  return true;
};

const setSignalToFalse = (state, action) => {
  return false;
};

// const setImgSrc = (state, action) => {
//   const iconDom = document.getElementById("siteIcon");
//   console.log("siteIcon:", action.payload.iconAdr);

//   iconDom.style.backgroundImage = "url(" + action.payload.iconAdr + ")";
//   iconDom.style.backgroundSize = "100% 100%";
//   return true;
// };

const signal = createReducer()
  .when(Types.SHOW_RIGHT_DRAWER, setSignalToTrue)
  .when(Types.CLOSE_RIGHT_DRAWER, setSignalToFalse)
  // .when(PREVIEW_ICON, setImgSrc)
  .build(false);

export default signal;
