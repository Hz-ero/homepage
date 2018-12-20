import React from 'react'
import Style from './style.css'
import { Button } from "@material-ui/core"
import SitePanel_CT from "../containers/SitePanel-CT";

const FullScreen_CP = (props) => {

  return (
    <div className={Style.fullBox} >
      <SitePanel_CT />
    </div>
  )
}

export default FullScreen_CP
