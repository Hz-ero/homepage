import { connect } from "react-redux";
import RightDrawer_CP from "../components/RightDrawer-CP.jsx";
import { addSite, closeRightDrawer, previewIcon } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    signal: immu_state.signal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantAddSite: siteInfo => {
    dispatch(addSite(siteInfo));
  },
  wantCloseRightDrawer: () => {
    dispatch(closeRightDrawer());
  },
  wantPreviewIcon: iconAdr => {
    dispatch(previewIcon(iconAdr));
  }
});

const RightDrawer_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightDrawer_CP);

export default RightDrawer_CT;
