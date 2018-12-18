import { createAction, createAsyncAction } from 'redux-action-tools'
import { 
  ADD_SITE,
  DELETE_SITE } from "./actionTypes.js";

let nextSiteId = 0
export const addSite = createAction(ADD_SITE, (siteInfo) => ({
  id: nextSiteId++,
  siteInfo
}) )