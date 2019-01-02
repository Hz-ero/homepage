import { connect } from "react-redux";
import ResizeBar_CP from "../components/ResizeBar-CP.jsx";
import { switchResizeFlag, resizeStart } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  return {
    cropState: immu_state.cropModel,
    iconColor: immu_state.color.colorSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantResizeStart: (direction, refPosition) => {
    dispatch(switchResizeFlag(true));
    dispatch(resizeStart(direction, refPosition));
  },
  wantResizeing: () => {}
});

const ResizeBar_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeBar_CP);

export default ResizeBar_CT;
