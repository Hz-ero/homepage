import React from 'react'
import Style from './style.css'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


const AddButton = (props) => {
  const {siteArray, wantShowRightDrawer} = props
  
  const handleShowSidePanel = (e) => {
    e.preventDefault()
    wantShowRightDrawer()
  }

  return (
    <div className={Style.addButton}>
      <div className={siteArray.length<16 ? Style.show : Style.hidden}>
        <Fab size="medium" color="secondary" aria-label="Add" 
            onClick={handleShowSidePanel}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  )
}

export default AddButton