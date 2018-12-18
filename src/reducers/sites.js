import { List } from 'immutable'
import { createReducer } from 'redux-action-tools'
import { 
  ADD_SITE,
  DELETE_SITE } from "../actions/actionTypes.js";

const handle_addSite = (state, action) => {
  const newState = List(state)
  return newState.push({
    id: action.payload.id,
    siteInfo: action.payload.siteInfo
  })
}

const sites = createReducer()
  .when(ADD_SITE, handle_addSite)
  .build([])

export default sites