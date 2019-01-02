import { List } from "immutable";
import { createReducer } from "redux-action-tools";
import { SUBMIT_SITE_FORM, DELETE_SITE } from "../actions/actionTypes.js";

const submitSiteForm = (state, action) => {
  const newState = List(state);
  return newState.push({
    id: action.payload.id,
    siteInfo: action.payload.siteInfo
  });
};

const sites = createReducer()
  .when(SUBMIT_SITE_FORM, submitSiteForm)
  .build([]);

export default sites;
