import { createReducer } from "redux-action-tools";
import {
  SWITCH_RIGHT_DRAWER,
  INPUT_SITE_NAME,
  INPUT_SITE_ADDRESS,
  INPUT_ICON_REFERENCE,
  INPUT_ADR_ERROR,
  INPUT_FAVICON_ADR
} from "../actions/actionTypes";

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
    return Object.assign({}, state, initState);
  }
};

const siteForm = createReducer()
  .when(INPUT_SITE_NAME, inputSiteName)
  .when(INPUT_SITE_ADDRESS, inputSiteAddress)
  .when(INPUT_ICON_REFERENCE, inputIconReference)
  .when(INPUT_ADR_ERROR, inputAdrError)
  .when(INPUT_FAVICON_ADR, inputFaviconAdr)
  .when(SWITCH_RIGHT_DRAWER, switchRightDrawer)
  .build(initState);

export default siteForm;
