import { connect } from 'react-redux'
import SitePanel_CP from '../components/SitePanel-CP.jsx'
import { showSiteAddForm } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantShowSiteAddForm: () => {
    dispatch(showSiteAddForm())
  }
})

const SitePanel_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitePanel_CP)

export default SitePanel_CT
