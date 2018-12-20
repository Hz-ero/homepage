import { createReducer } from 'redux-action-tools'
import { SHOW_RIGHT_DRAWER, CLOSE_RIGHT_DRAWER } from "../actions/actionTypes.js";

const setSignalToTrue = (state, action) => {

  return true
}

const setSignalToFalse = (state, action) => {

  return false
}

const signal = createReducer()
  .when(SHOW_RIGHT_DRAWER, setSignalToTrue)
  .when(CLOSE_RIGHT_DRAWER, setSignalToFalse)
  .build(false)

export default signal