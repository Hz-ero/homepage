import { connect } from "react-redux"
import SiteAdd_CP from "../components/SiteAdd-CP.jsx"
import { addSite } from "../actions"

const mapStateToProps = (state, ownProps) => ({
  // todoArray: state.todos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickAddSite: (siteInfo) => {
    dispatch(addSite(siteInfo))
  }
})

const SiteAdd_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteAdd_CP)

export default SiteAdd_CT