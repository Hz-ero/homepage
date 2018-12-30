import { createReducer } from "redux-action-tools";
import {
  SELECT_RADIO,
  OPEN_COLOR_PICKER,
  CLOSE_COLOR_PICKER,
  PICK_ONE_COLOR
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

const setPickerSignalTrue = (state, action) => {
  return Object.assign({}, state, {
    pickerSignal: true
  });
};

const setPickerSignalFalse = (state, action) => {
  return Object.assign({}, state, {
    pickerSignal: false
  });
};

const color = createReducer()
  .when(SELECT_RADIO, logSelectIndex)
  .when(OPEN_COLOR_PICKER, setPickerSignalTrue)
  .when(CLOSE_COLOR_PICKER, setPickerSignalFalse)
  .when(PICK_ONE_COLOR, setColorSelected)
  .build({
    radioSelected: 0,
    colorSelected: colors[0],
    pickerSignal: false
  });

export default color;
