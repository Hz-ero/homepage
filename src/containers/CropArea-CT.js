import { connect } from "react-redux";
import CropArea_CP from "../components/CropArea-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    iconColor: immu_state.color.colorSelected,
    radioSelected: immu_state.color.radioSelected,
    cropState: immu_state.cropModel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantResizeing: newPosition => {
    dispatch(Actions.resizeing(newPosition));
    dispatch(Actions.cropImage());
  },
  wantDragStart: refPosition => {
    dispatch(Actions.switchDragFlag(true));
    dispatch(Actions.dragStart(refPosition));
  },
  wantDragging: newPosition => {
    dispatch(Actions.dragging(newPosition));
    dispatch(Actions.cropImage());
  },
  wantDragEnd: () => {
    dispatch(Actions.switchDragFlag(false));
  },
  wantZoomImg: multiValue => {
    dispatch(Actions.imageSizeZoom(multiValue));
    dispatch(Actions.cropImage());
  },
  wantSetRefImgSize: refImgSize => {
    dispatch(Actions.setRefImgSize(refImgSize));
    dispatch(Actions.rotateImg(0));
    dispatch(Actions.cropImage());
  }
});

const CropArea_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropArea_CP);

export default CropArea_CT;
