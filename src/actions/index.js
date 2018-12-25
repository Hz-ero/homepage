import { createAction, createAsyncAction } from "redux-action-tools";
import {
  ADD_SITE,
  DELETE_SITE,
  SHOW_RIGHT_DRAWER,
  CLOSE_RIGHT_DRAWER,
  PREVIEW_ICON
} from "./actionTypes.js";

let nextSiteId = 0;
export const addSite = createAction(ADD_SITE, siteInfo => ({
  id: nextSiteId++,
  siteInfo
}));

export const showRightDrawer = createAction(SHOW_RIGHT_DRAWER, () => ({
  signal: true
}));

export const closeRightDrawer = createAction(CLOSE_RIGHT_DRAWER, () => ({
  signal: false
}));

export const previewIcon = createAction(PREVIEW_ICON, iconAdr => ({ iconAdr }));
