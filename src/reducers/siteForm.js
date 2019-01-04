import { createReducer } from "redux-action-tools";
import * as Types from "../actions/actionTypes";

const initState = {
  name: "",
  address: "",
  icon: "",
  rightDrawerSignel: false
};

const inputSiteName = (state, action) => {
  return Object.assign({}, state, {
    name: action.payload.name
  });
};
const inputSiteAddress = (state, action) => {
  return Object.assign({}, state, {
    address: action.payload.address
  });
};
const inputIconReference = (state, action) => {
  return Object.assign({}, state, {
    icon: action.payload.icon
  });
};
const inputAdrError = (state, action) => {
  return Object.assign({}, state, {
    adrError: action.payload.adrError
  });
};
const inputFaviconAdr = (state, action) => {
  return Object.assign({}, state, {
    favicon: action.payload.favicon
  });
};
const switchRightDrawer = (state, action) => {
  const signal = action.payload.rightDrawerSignel;
  if (signal === true) {
    return Object.assign({}, state, {
      rightDrawerSignel: signal
    });
  } else {
    return initState;
  }
};

const siteForm = createReducer()
  .when(Types.INPUT_SITE_NAME, inputSiteName)
  .when(Types.INPUT_SITE_ADDRESS, inputSiteAddress)
  .when(Types.INPUT_ICON_REFERENCE, inputIconReference)
  .when(Types.INPUT_ADR_ERROR, inputAdrError)
  .when(Types.INPUT_FAVICON_ADR, inputFaviconAdr)
  .when(Types.SWITCH_RIGHT_DRAWER, switchRightDrawer)
  .build(initState);

export default siteForm;
