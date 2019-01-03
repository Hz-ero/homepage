import { connect } from "react-redux";
import ColorRadios_CP from "../components/ColorRadios-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    colorState: immu_state.color,
    outerNode: ownProps.outerNode
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantClickSelectRadio: index => {
    dispatch(Actions.selectRadio(index));
  },
  wantOpenColorPicker: () => {
    dispatch(Actions.switchColorPicker(true));
  },
  wantPickOneColor: color => {
    dispatch(Actions.pickOneColor(color));
  },
  wantSetOuterNode: outerNode => {
    dispatch(Actions.setOuterNode(outerNode));
  }
});

const ColorRadios_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorRadios_CP);

export default ColorRadios_CT;
