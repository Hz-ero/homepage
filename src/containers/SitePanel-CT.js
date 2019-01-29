import { connect } from "react-redux";
import SitePanel_CP from "../components/SitePanel-CP.jsx";
import * as Actions from "../actions";

const mapStateToProps = (state, ownProps) => {
  const immu_state = state.toObject();
  if (!immu_state.sites.items.size) {
    return { siteArray: [] };
  } else {
    return {
      siteFlag: immu_state.sites.siteFlag,
      siteArray: immu_state.sites.items.toJS(),
      drawerFlag: immu_state.siteForm.drawerFlag
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  wantCloseRightDrawer: () => {
    dispatch(Actions.switchRightDrawer(false));
    dispatch(Actions.resetColorPicker());
    dispatch(Actions.switchImageCrop(false));
  },
  wantShowSiteAction: () => {
    dispatch(Actions.setSiteFlag(true));
  },
  wantCloseSiteAction: () => {
    dispatch(Actions.setSiteFlag(false));
  },
  wantDeleteSite: index => {
    dispatch(Actions.deleteSiteItem(index));
  },
  wantSetEditIndex: editIndex => {
    dispatch(Actions.setEditIndex(editIndex));
  },
  wantEditInDrawer: siteInfo => {
    dispatch(Actions.editInDrawer(siteInfo));
  }
});

const SitePanel_CT = connect(
  mapStateToProps,
  mapDispatchToProps
)(SitePanel_CP);

export default SitePanel_CT;
