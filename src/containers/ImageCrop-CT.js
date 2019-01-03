import { connect } from "react-redux";
import ImageCrop_CP from "../components/ImageCrop-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    cropState: immu_state.cropModel,
    iconColor: immu_state.color.colorSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseColorPicker: () => {
    dispatch(Actions.switchColorPicker(false));
  },
  wantCloseImageCrop: () => {
    dispatch(Actions.finishCrop());
  },
  wantResizeEnd: () => {
    dispatch(Actions.switchResizeFlag(false));
  },
  wantCropImage: () => {
    dispatch(Actions.cropImage());
  },
  wantZoomImg: multiValue => {
    dispatch(Actions.imageSizeZoom(multiValue));
    dispatch(Actions.cropImage());
  },
  wantResetImgCrop: () => {
    dispatch(Actions.resetImgCrop());
    dispatch(Actions.cropImage());
  }
});

const ImageCrop_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCrop_CP);

export default ImageCrop_CT;
