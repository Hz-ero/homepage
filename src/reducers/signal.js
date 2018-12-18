import { createReducer } from 'redux-action-tools'
import { SHOW_SITE_FORM, CLOSE_SITE_FORM } from "../actions/actionTypes.js";

const setSignalToTrue = (state, action) => {

  return true
}

const setSignalToFalse = (state, action) => {

  return false
}

const signal = createReducer()
  .when(SHOW_SITE_FORM, setSignalToTrue)
  .when(CLOSE_SITE_FORM, setSignalToFalse)
  .build(false)

export default signal