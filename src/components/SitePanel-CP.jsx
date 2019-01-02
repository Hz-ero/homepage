import React from "react";
import Style from "./style.css";

const SiteItem = props => {
  const { siteInfo } = props;

  return (
    <div className={Style.siteBox}>
      <div className={Style.siteIcon} />
      <div className={Style.siteName}>{siteInfo.siteName}</div>
    </div>
  );
};

const SitePanel_CP = props => {
  const { siteArray, wantCloseRightDrawer } = props;
  const handleCloseRightDrawer = e => {
    e.preventDefault();
    wantCloseRightDrawer();
  };
  return (
    <div onClick={e => handleCloseRightDrawer(e)} className={Style.fullBox}>
      <div className={Style.sitesPanel}>
        {siteArray.map(item => (
          <SiteItem key={item.id} index={item.id} siteInfo={item.siteInfo} />
        ))}
      </div>
    </div>
  );
};

export default SitePanel_CP;
