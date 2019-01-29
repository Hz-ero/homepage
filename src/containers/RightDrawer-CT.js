import { connect } from "react-redux";
import * as Actions from "../actions";
import RightSider_CP from "../components/RightSider-CP.jsx";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    siteForm: immu_state.siteForm,
    iconColor: immu_state.color.colorSelected,
    radioSelected: immu_state.color.radioSelected,
    cropState: immu_state.cropModel,
    editIndex: immu_state.sites.editIndex
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseColorPicker: () => {
    dispatch(Actions.switchColorPicker(false));
  },
  wantInputSiteName: value => {
    dispatch(Actions.inputSiteName(value));
  },
  wantInputSiteAddress: value => {
    dispatch(Actions.inputSiteAddress(value));
  },
  wantSubmitSiteForm: value => {
    dispatch(Actions.submitSiteForm(value));
  },
  wantOpenImageCrop: () => {
    dispatch(Actions.switchImageCrop(true));
  },
  wantSetImgData: refImgData => {
    dispatch(Actions.setImgData(refImgData));
  },
  wantCloseRightDrawer: () => {
    dispatch(Actions.switchRightDrawer(false));
    dispatch(Actions.resetColorPicker());
    dispatch(Actions.switchImageCrop(false));
  },
  wantResetImgCrop: () => {
    dispatch(Actions.resetImgCrop());
  },
  wantChangeSiteInfo: (siteInfo, editIndex) => {
    dispatch(Actions.changeSiteInfo(siteInfo, editIndex));
  }
});

const RightDrawer_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSider_CP);

export default RightDrawer_CT;
