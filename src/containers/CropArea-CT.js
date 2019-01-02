import { connect } from "react-redux";
import CropArea_CP from "../components/CropArea-CP.jsx";
import { dragging } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    iconColor: immu_state.color.colorSelected,
    cropState: immu_state.cropModel
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantDragging: newPosition => {
    dispatch(dragging(newPosition));
  }
});

const CropArea_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(CropArea_CP);

export default CropArea_CT;
