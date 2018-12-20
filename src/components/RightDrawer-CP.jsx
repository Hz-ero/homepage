import React from 'react'
import Style from './style.css'
import { Drawer, Button } from "@material-ui/core";

const RightDrawer = (props) => {
  let siteAdrInput, siteNameInput
  const { signal, clickAddSite, wantCloseRightDrawer } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    let siteInfo = {
      siteAdr: siteAdrInput.value,
      siteName: siteNameInput.value
    }
    clickAddSite(siteInfo)
    handleCloseForm()
  }

  const handleCloseForm = () => {

    wantCloseRightDrawer()
    siteAdrInput.value = ''
    siteNameInput.value = ''
  }

  return (
    <div >
      <Drawer anchor="right" open={signal} onClose={handleCloseForm} variant="temporary">
        <input id="site-adr" ref={input => siteAdrInput = input} />
        <input id="site-name" ref={input => siteNameInput = input}/>
        <Button variant="contained" color="primary"
        onClick={handleSubmit}
        >确认</Button>
      </Drawer>
    </div>
  )
}

export default RightDrawer
