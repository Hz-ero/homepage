import { connect } from "react-redux";
import ImageCrop_CP from "../components/ImageCrop-CP.jsx";
import {
  switchColorPicker,
  switchImageCrop,
  switchResizeFlag,
  cropImage,
  finishCrop
} from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    cropState: immu_state.cropModel,
    iconColor: immu_state.color.colorSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseColorPicker: () => {
    dispatch(switchColorPicker(false));
  },
  wantCloseImageCrop: () => {
    dispatch(finishCrop());
  },
  wantResizeEnd: () => {
    dispatch(switchResizeFlag(false));
  },
  wantCropImage: () => {
    dispatch(cropImage());
  }
});

const ImageCrop_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCrop_CP);

export default ImageCrop_CT;
