import { connect } from "react-redux";
import SitePanel_CP from "../components/SitePanel-CP.jsx";
import { switchRightDrawer } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  if (!immu_state.sites.size) {
    return { siteArray: [] };
  } else {
    return { siteArray: immu_state.sites.toJS() };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseRightDrawer: () => {
    dispatch(switchRightDrawer(false));
  }
});

const SitePanel_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitePanel_CP);

export default SitePanel_CT;
