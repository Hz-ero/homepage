const _object = require("lodash/object");
import * as types from "../src/actions/actionTypes";
types;
const initState = {
  resizePosition: {
    top: 0,
    left: 0,
    length: 310
  },
  zoomPosition: {
    top: 0,
    left: 0,
    length: 310
  },
  direction: "",
  imageCropSignal: false,
  resizeFlag: false,
  dragFlag: false,
  refPosition: null,
  refImgData: null,
  newImgData: null
};

let newState = _object.omit(initState, ["refImgData", "newImgData"]);
newState;
