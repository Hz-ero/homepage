import { connect } from "react-redux";
import ImageCrop_CP from "../components/ImageCrop-CP.jsx";
import {
  switchColorPicker,
  switchImageCrop,
  switchResizeFlag
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
    dispatch(switchImageCrop(false));
  },
  wantResizeEnd: () => {
    dispatch(switchResizeFlag(false));
  }
});

const ImageCrop_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCrop_CP);

export default ImageCrop_CT;
