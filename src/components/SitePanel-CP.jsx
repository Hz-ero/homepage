import React from 'react'
import Style from './style.css'

const SitePanel = (props) => {
  const { wantShowSiteAddForm } = props

  const handleNewSite = (e) => {
    e.preventDefault()
    wantShowSiteAddForm()
  }

  return (
    <div>
      <button>siteOne</button>
      <button onClick={handleNewSite} >新增</button>
    </div>
  )
}

export default SitePanel
