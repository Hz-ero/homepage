import { connect } from "react-redux";
import RightDrawer_CP from "../components/RightDrawer-CP.jsx";
import {
  addSite,
  switchRightDrawer,
  previewIcon,
  switchColorPicker,
  inputSiteName,
  inputSiteAddress,
  submitSiteForm,
  switchImageCrop
} from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    siteForm: immu_state.siteForm,
    iconColor: immu_state.color.colorSelected
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
  }
});

const RightDrawer_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightDrawer_CP);

export default RightDrawer_CT;
