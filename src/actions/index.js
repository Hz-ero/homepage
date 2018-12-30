import { createAction, createAsyncAction } from "redux-action-tools";
import {
  ADD_SITE,
  DELETE_SITE,
  SHOW_RIGHT_DRAWER,
  CLOSE_RIGHT_DRAWER,
  PREVIEW_ICON,
  SELECT_RADIO,
  OPEN_COLOR_PICKER,
  CLOSE_COLOR_PICKER,
  PICK_ONE_COLOR
} from "./actionTypes.js";

let nextSiteId = 0;
export const addSite = createAction(ADD_SITE, siteInfo => ({
  id: nextSiteId++,
  siteInfo
}));

// ===============close/open right drawer==========
export const showRightDrawer = createAction(SHOW_RIGHT_DRAWER);

export const closeRightDrawer = createAction(CLOSE_RIGHT_DRAWER);

// =============color picker===============
export const selectRadio = createAction(SELECT_RADIO, index => ({
  radioSelected: index
}));

export const closeColorPicker = createAction(CLOSE_COLOR_PICKER);

export const openColorPicker = createAction(OPEN_COLOR_PICKER);

export const pickOneColor = createAction(PICK_ONE_COLOR, color => ({
  colorPicked: color
}));
// ======================================
export const previewIcon = createAction(PREVIEW_ICON, iconAdr => ({ iconAdr }));
