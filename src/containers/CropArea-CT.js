import { connect } from "react-redux";
import CropArea_CP from "../components/CropArea-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    iconColor: immu_state.color.colorSelected,
    cropState: immu_state.cropModel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantResizeing: newPosition => {
    dispatch(Actions.resizeing(newPosition));
  },
  wantDragStart: refPosition => {
    dispatch(Actions.switchDragFlag(true));
    dispatch(Actions.dragStart(refPosition));
  },
  wantDragging: newPosition => {
    dispatch(Actions.dragging(newPosition));
  },
  wantDragEnd: () => {
    dispatch(Actions.switchDragFlag(false));
  },
  wantWheelZoom: multiValue => {
    dispatch(Actions.imageSizeZoom(multiValue));
  },
  wantSetRefImgSize: refImgSize => {
    dispatch(Actions.setRefImgSize(refImgSize));
  }
});

const CropArea_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropArea_CP);

export default CropArea_CT;
