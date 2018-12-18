import { combineReducers } from 'redux-immutable'
import sites from './sites'
import signal from './signal'

const appReducer = combineReducers({
  sites,
  signal
})

export default appReducer
