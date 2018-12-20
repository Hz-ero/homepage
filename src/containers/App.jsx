import React from 'react'
import RightDrawer_CT from './RightDrawer-CT'
import FullScreen_CP from '../components/FullScreen-CP.jsx'
import AddButton_CT from "./AddButton-CT";
import { CssBaseline } from '@material-ui/core'

const App = () => (
  <div>
    <CssBaseline />
    <AddButton_CT />
    <FullScreen_CP />
    <RightDrawer_CT />
  </div>
)

export default App