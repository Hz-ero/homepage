import { connect } from "react-redux";
import ColorRadios_CP from "../components/ColorRadios-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();

  return {
    radioSelected: immu_state.color.radioSelected,
    colorSelected: immu_state.color.colorSelected,
    pickerSignal: immu_state.color.pickerSignal
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
  wantWheelZoom: multiValue => {
    dispatch(Actions.imageSizeZoom(multiValue));
  }
});

const ColorRadios_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorRadios_CP);

export default ColorRadios_CT;
