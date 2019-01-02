import { createReducer } from "redux-action-tools";
import {
  SELECT_RADIO,
  PICK_ONE_COLOR,
  SWITCH_COLOR_PICKER
} from "../actions/actionTypes.js";
import colors from "../unit/colors";

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
    pickerSignal: action.payload.colorPickerSignal
  });
};

const color = createReducer()
  .when(SELECT_RADIO, logSelectIndex)
  .when(PICK_ONE_COLOR, setColorSelected)
  .when(SWITCH_COLOR_PICKER, switchColorPicker)
  .build({
    radioSelected: 0,
    colorSelected: colors[0],
    pickerSignal: false
  });

export default color;
