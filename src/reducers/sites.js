import { List } from "immutable";
import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";

const initState = {
  editIndex: -1,
  siteFlag: false,
  items: []
};

const submitSiteForm = (state, action) => {
  let siteItems = List(state.items);

  //check url, if not completed
  let inputUrl = action.payload.siteInfo.address;
  let urlProt4http = inputUrl.substr(0, 7);
  let urlPort4https = inputUrl.substr(0, 8);
  if (urlProt4http === "http://" || urlPort4https === "https://") {
  } else {
    action.payload.siteInfo.address = "http://" + inputUrl;
  }

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

const setEditIndex = (state, action) => {
  return Object.assign({}, state, {
    editIndex: action.payload.editIndex
  });
};

const changeSiteInfo = (state, action) => {
  let siteItems = state.items.toArray();
  siteItems[action.payload.editIndex].siteInfo = action.payload.siteInfo;

  return Object.assign({}, state, {
    items: List(siteItems)
  });
};
const sites = createReducer()
  .when(Types.SUBMIT_SITE_FORM, submitSiteForm)
  .when(Types.SET_SITE_FLAG, setSiteFlag)
  .when(Types.DELETE_SITE_ITEM, deleteSiteItem)
  .when(Types.CHANGE_SITE_INFO, changeSiteInfo)
  .when(Types.SET_EDIT_INDEX, setEditIndex)
  .build(initState);

export default sites;
