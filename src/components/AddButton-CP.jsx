import React from 'react'
import Style from './style.css'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


const AddButton = (props) => {
  const {signal, wantShowRightDrawer} = props
  
  const handleShowSidePanel = (e) => {
    e.preventDefault()
    wantShowRightDrawer()
  }

  return (
    <div className={Style.addButton}>
      <Fab size="medium" color="secondary" aria-label="Add" 
          onClick={handleShowSidePanel}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddButton