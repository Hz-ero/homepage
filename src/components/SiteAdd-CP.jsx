import React from 'react'
import Style from './style.css'

const SiteAdd = (props) => {
  let siteAdrInput, siteNameInput
  const { signal, clickAddSite, wantCloseSiteAddForm } = props

  const handleSubmit = (e) => {
    e.preventDefault()

    let siteInfo = {
      siteAdr: siteAdrInput.value,
      siteName: siteNameInput.value
    }
    clickAddSite(siteInfo)
    siteAdrInput = ''
    siteNameInput = ''
  }

  const handleCloseForm = (e) => {
    e.preventDefault()

    wantCloseSiteAddForm()
    siteAdrInput = ''
    siteNameInput = ''
  }

  return (
    <div className={signal?Style.show:Style.close} >
      <form className={Style.box} onSubmit={handleSubmit} >
        <input type="text" 
        ref={input => siteAdrInput = input} />
        <input type="text" 
        ref={input => siteNameInput = input} />
        <input type="submit" value="添加"/>
        <button onClick={handleCloseForm} >取消</button>
      </form>
    </div>
  )
}

export default SiteAdd
