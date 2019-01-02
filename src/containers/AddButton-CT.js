import { connect } from "react-redux";
import AddButton_CP from "../components/AddButton-CP.jsx";
import { switchRightDrawer } from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  if (!immu_state.sites.size) {
    return { siteArray: [] };
  } else {
    return { siteArray: immu_state.sites.toJS() };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantShowRightDrawer: () => {
    dispatch(switchRightDrawer(true));
  }
});

const AddButton_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton_CP);

export default AddButton_CT;
