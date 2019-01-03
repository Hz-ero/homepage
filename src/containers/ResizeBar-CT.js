import { connect } from "react-redux";
import ResizeBar_CP from "../components/ResizeBar-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    cropState: immu_state.cropModel,
    iconColor: immu_state.color.colorSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantResizeStart: (direction, refPosition) => {
    dispatch(Actions.switchResizeFlag(true));
    dispatch(Actions.resizeStart(direction, refPosition));
  }
});

const ResizeBar_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeBar_CP);

export default ResizeBar_CT;
