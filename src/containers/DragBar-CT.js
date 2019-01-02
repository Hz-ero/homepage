import { connect } from "react-redux";
import DragBar_CP from "../components/DragBar-CP.jsx";
import { switchDragSignal, dragStart } from "../actions/index.js";

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantDragStart: (direction, refPosition) => {
    dispatch(switchDragSignal(true));
    dispatch(dragStart(direction, refPosition));
  },
  wantDragging: () => {}
});

const DragBar_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(DragBar_CP);

export default DragBar_CT;
