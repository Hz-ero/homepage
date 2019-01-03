import { List } from "immutable";
import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";

const submitSiteForm = (state, action) => {
  const newState = List(state);
  return newState.push({
    id: action.payload.id,
    siteInfo: action.payload.siteInfo
  });
};

const sites = createReducer()
  .when(Types.SUBMIT_SITE_FORM, submitSiteForm)
  .build([]);

export default sites;
