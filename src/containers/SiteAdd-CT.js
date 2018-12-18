import { connect } from "react-redux"
import SiteAdd_CP from "../components/SiteAdd-CP.jsx"
import { addSite, closeSiteAddForm } from "../actions"

const mapStateToProps = (state, ownProps) => {
  
  const immu_state = state.toObject()
  return {
    signal: immu_state.signal
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickAddSite: (siteInfo) => {
    dispatch(addSite(siteInfo))
  },
  wantCloseSiteAddForm: () => {
    dispatch(closeSiteAddForm())
  }
})

const SiteAdd_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteAdd_CP)

export default SiteAdd_CT