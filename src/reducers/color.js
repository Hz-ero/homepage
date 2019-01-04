import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";
import colors from "../unit/colors";

const initState = {
  radioSelected: 1,
  colorSelected: colors[1],
  pickerSignal: false,
  outerNode: ""
};

const logSelectIndex = (state, action) => {
  return Object.assign({}, state, {
    radioSelected: action.payload.radioSelected,
    colorSelected: colors[action.payload.radioSelected]
  });
};

const setColorSelected = (state, action) => {
  return Object.assign({}, state, {
    colorSelected: action.payload.colorPicked
  });
};

const switchColorPicker = (state, action) => {
  return Object.assign({}, state, {
    pickerSignal: action.payload.pickerSignal
  });
};
const resetColorPicker = () => {
  return initState;
};
const setOuterNode = (state, action) => {
  return Object.assign({}, state, {
    outerNode: action.payload.outerNode
  });
};

const color = createReducer()
  .when(Types.SELECT_RADIO, logSelectIndex)
  .when(Types.PICK_ONE_COLOR, setColorSelected)
  .when(Types.SWITCH_COLOR_PICKER, switchColorPicker)
  .when(Types.RESET_COLOR_PICKER, resetColorPicker)
  .when(Types.SET_OUTER_NODE, setOuterNode)
  .build(initState);

export default color;
