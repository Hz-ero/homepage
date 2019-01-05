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
  wantFinishImageCrop: () => {
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
  wantResetCropBox: () => {
    dispatch(Actions.resetCropBox());
    dispatch(Actions.cropImage());
  },
  wantRotateImg: rotateNumber => {
    dispatch(Actions.copyZoomPosition());
    dispatch(Actions.rotateImg(rotateNumber));
    dispatch(Actions.cropImage());
  }
});

const ImageCrop_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCrop_CP);

export default ImageCrop_CT;
