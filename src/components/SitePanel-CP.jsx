import React from 'react'
import Style from './style.css'
import { ClickAwayListener, Card, Button} from '@material-ui/core'

const SiteItem = (props) => {
  const { siteInfo } = props
  
  return (
    <div>
      <div className="name"></div>
      <div className="name">{siteInfo.siteName}</div>
    </div>
  )
}

const SitePanel = (props) => {
  const { siteArray, wantShowSiteAddForm, wantCloseSiteAddForm } = props

  const handleNewSite = (e) => {
    e.preventDefault()
    wantShowSiteAddForm()
  }

  const handleCloseForm = () => {
    wantCloseSiteAddForm()
  }

  return (
    <div>
      {
        siteArray.map(item => (
          <SiteItem key={item.id} index={item.id} siteInfo={item.siteInfo} />
        ))
      }
      {
        siteArray.length<6 ? (
          <Button className={Style.testButton} variant="contained" color="primary"
            onClick={handleNewSite}>新增</Button>
        ) : null
      }
    </div>
  )
}

export default SitePanel
