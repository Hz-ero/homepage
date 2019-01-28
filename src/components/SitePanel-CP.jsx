import React from "react";
// import { ClearRounded, Create } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import Style from "./style.css";

const SiteItem = props => {
  const {
    siteFlag,
    siteInfo,
    index,
    wantShowSiteAction,
    wantDeleteSite
  } = props;

  const handleClickOpenSite = e => {
    e.preventDefault();
    window.open(siteInfo.address, "_blank");
  };

  const handleContextMenu = e => {
    e.preventDefault();
    wantShowSiteAction();
    console.log("youjiandanji");
    return false;
  };

  const handleDeleteSite = e => {
    e.preventDefault();
    e.stopPropagation();
    wantDeleteSite(index);
  };

  return (
    <div className={Style.siteBox}>
      <div
        className={Style.iconBox}
        onClick={e => handleClickOpenSite(e)}
        onContextMenu={e => handleContextMenu(e)}
      >
        {/* ------文字图标框------- */}
        <div
          style={{
            backgroundColor: siteInfo.iconColor,
            display: siteInfo.iconData === null ? "block" : "none"
          }}
          className={
            siteInfo.radio === 0 ? Style.siteIconWithImg : Style.siteIcon
          }
        >
          <div className={Style.iconName}>{siteInfo.shortName}</div>
        </div>
        {/* ------图片图标框------- */}
        <div
          style={{
            backgroundColor: siteInfo.iconColor,
            display: siteInfo.iconData === null ? "none" : "block"
          }}
          className={
            siteInfo.radio === 0 ? Style.siteIconWithImg : Style.siteIcon
          }
        >
          <img src={siteInfo.iconData} className={Style.iconImg} />
        </div>
        {/* ------修改按钮------- */}
        <div
          style={{ display: siteFlag === false ? "none" : "flex" }}
          className={Style.editSiteBox}
        >
          <Fab variant="outlined" className={Style.editSiteBtn}>
            {/* <Create fontSize="large" /> */}
          </Fab>
        </div>
        {/* ------删除按钮------- */}
        <div
          style={{ display: siteFlag === false ? "none" : "block" }}
          className={Style.deleteBox}
          onClick={e => handleDeleteSite(e)}
        >
          {/* <ClearRounded /> */}
        </div>
      </div>
      <div className={Style.siteName}>{siteInfo.name}</div>
    </div>
  );
};

const SitePanel_CP = props => {
  const {
    siteFlag,
    siteArray,
    wantCloseRightDrawer,
    wantShowSiteAction,
    wantCloseSiteAction,
    wantDeleteSite
  } = props;
  const handleClickScreen = e => {
    e.preventDefault();
    wantCloseRightDrawer();
    wantCloseSiteAction();
  };
  return (
    <div onClick={e => handleClickScreen(e)} className={Style.fullBox}>
      <div className={Style.sitesPanel}>
        {siteArray.map(item => (
          <SiteItem
            key={item.id}
            index={item.id}
            siteInfo={item.siteInfo}
            siteFlag={siteFlag}
            wantShowSiteAction={wantShowSiteAction}
            wantDeleteSite={wantDeleteSite}
          />
        ))}
      </div>
    </div>
  );
};

export default SitePanel_CP;
