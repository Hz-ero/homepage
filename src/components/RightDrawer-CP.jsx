import React from 'react'
import Style from './style.css'
import { Slide, Button, ClickAwayListener } from "@material-ui/core"

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

  const handleClickAway = () => {

    wantCloseRightDrawer()
    siteAdrInput.value = ''
    siteNameInput.value = ''
  }

  return (
    <div>        
      <Slide direction="left" in={signal} mountOnEnter unmountOnExit>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={Style.sideDrawer}></div>
        </ClickAwayListener>     
      </Slide>
    </div>
  )
}

{
  // <div className={Style.siteForm}>
  //         <label>
  //           <div className={Style.siteIcon}></div>
  //         </label>
  //         <label>
  //           <span>标题</span>
  //           <div>
  //             <input type="text" className={Style.inputField} 
  //                 ref={input => siteNameInput = input}/>
  //           </div>
  //         </label>
  //         <label>
  //           <span>网址</span>
  //           <div>
  //             <input type="text" className={Style.inputField} 
  //                 ref={input => siteAdrInput = input} />
  //           </div>
  //         </label>
  //         <button></button>
  //         <label>
  //           <span></span>
  //           <div>
  //             <input type="text" className={Style.inputField}/>
  //           </div>
  //         </label>
  //         <Button variant="contained" color="primary"
  //             onClick={handleSubmit} className={Style.testButton}
  //             >确认</Button>
  //       </div>   
}

export default RightDrawer
