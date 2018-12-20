import { connect } from "react-redux"
import AddButton_CP from "../components/AddButton-CP.jsx"
import { showRightDrawer } from "../actions"

const mapStateToProps = (state, ownProps) => {
  
  const immu_state = state.toObject()
  return {
    signal: immu_state.signal
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantShowRightDrawer: () => {
    dispatch(showRightDrawer())
  }
})

const AddButton_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton_CP)

export default AddButton_CT