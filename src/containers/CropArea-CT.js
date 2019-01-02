import { connect } from "react-redux";
import CropArea_CP from "../components/CropArea-CP.jsx";
import {
  resizeing,
  switchDragFlag,
  dragStart,
  dragging,
  imageSizeZoom
} from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    iconColor: immu_state.color.colorSelected,
    cropState: immu_state.cropModel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantResizeing: newPosition => {
    dispatch(resizeing(newPosition));
  },
  wantDragStart: refPosition => {
    dispatch(switchDragFlag(true));
    dispatch(dragStart(refPosition));
  },
  wantDragging: newPosition => {
    dispatch(dragging(newPosition));
  },
  wantDragEnd: () => {
    dispatch(switchDragFlag(false));
  },
  wantWheelZoom: multiValue => {
    dispatch(imageSizeZoom(multiValue));
  }
});

const CropArea_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropArea_CP);

export default CropArea_CT;
