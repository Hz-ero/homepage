import { createAction, createAsyncAction } from 'redux-action-tools'
import { 
  ADD_SITE,
  DELETE_SITE,
  SHOW_SITE_FORM,
  CLOSE_SITE_FORM } from "./actionTypes.js";

let nextSiteId = 0
export const addSite = createAction(ADD_SITE, (siteInfo) => ({
  id: nextSiteId++,
  siteInfo
}) )

export const showSiteAddForm = createAction(SHOW_SITE_FORM, () => ({
  signal: true
}))

export const closeSiteAddForm = createAction(CLOSE_SITE_FORM, () => ({
  signal: false
}))