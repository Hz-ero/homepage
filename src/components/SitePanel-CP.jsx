import React from 'react'
import Style from './style.css'

const SiteItem = (props) => {
  const { siteInfo } = props
  
  return (
    <div className={Style.siteBox}>
      <div className={Style.siteIcon}></div>
      <div className={Style.siteName}>{siteInfo.siteName}</div>
    </div>
  )
}

const SitePanel = (props) => {
  const { siteArray } = props  

  return (
    <div className={Style.sitesPanel}>
      {
        siteArray.map(item => (
          <SiteItem key={item.id} index={item.id} siteInfo={item.siteInfo} />
        ))
      }
    </div>
  )
}

export default SitePanel
