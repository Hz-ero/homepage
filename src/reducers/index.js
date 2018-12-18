import { combineReducers } from 'redux-immutable'
import sites from './sites'

const appReducer = combineReducers({
  sites
})

export default appReducer
