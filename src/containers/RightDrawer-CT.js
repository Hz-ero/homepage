import { connect } from "react-redux";
import {
  addSite,
  switchColorPicker,
  inputSiteName,
  inputSiteAddress,
  submitSiteForm,
  switchImageCrop,
  setImgData
} from "../actions";
import RightSider_CP from "../components/RightSider-CP.jsx";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    siteForm: immu_state.siteForm,
    iconColor: immu_state.color.colorSelected,
    cropState: immu_state.cropModel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseColorPicker: () => {
    dispatch(switchColorPicker(false));
  },
  wantInputSiteName: value => {
    dispatch(inputSiteName(value));
  },
  wantInputSiteAddress: value => {
    dispatch(inputSiteAddress(value));
  },
  wantSubmitSiteForm: value => {
    dispatch(submitSiteForm(value));
  },
  wantOpenImageCrop: () => {
    dispatch(switchImageCrop(true));
  },
  wantSetImgData: refImgData => {
    dispatch(setImgData(refImgData));
  }
});

const RightDrawer_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSider_CP);

export default RightDrawer_CT;
