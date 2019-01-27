import { List } from "immutable";
import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";

const initState = {
  siteFlag: false,
  items: []
};

const submitSiteForm = (state, action) => {
  let siteItems = List(state.items);

  let newSiteItems = siteItems.push({
    id: action.payload.id,
    siteInfo: action.payload.siteInfo
  });

  return Object.assign({}, state, {
    items: newSiteItems
  });
};

const setSiteFlag = (state, action) => {
  return Object.assign({}, state, {
    siteFlag: action.payload.siteFlag
  });
};

const deleteSiteItem = (state, action) => {
  let siteItems = state.items.toArray();

  let findIndex = -1;
  do {
    findIndex += 1;
  } while (siteItems[findIndex].id !== action.payload.deleteId);

  siteItems.splice(findIndex, 1);

  return Object.assign({}, state, {
    items: List(siteItems)
  });
};

const sites = createReducer()
  .when(Types.SUBMIT_SITE_FORM, submitSiteForm)
  .when(Types.SET_SITE_FLAG, setSiteFlag)
  .when(Types.DELETE_SITE_ITEM, deleteSiteItem)
  .build(initState);

export default sites;
