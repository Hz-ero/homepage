import React from "react";
import { ClearRounded, Create } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Style from "./style.css";

const SiteItem = props => {
  const { siteInfo, wantShowSiteAction } = props;

  const handleClickOpenSite = e => {
    e.preventDefault();
    window.open("http://www.guancha.cn/", "_blank");
  };

  const handleContextMenu = e => {
    e.preventDefault();
    wantShowSiteAction();
    console.log("youjiandanji");
    return false;
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
        <div className={Style.editSiteBox}>
          <Button variant="outlined">
            <Create size="large" />
          </Button>
        </div>
        {/* ------删除按钮------- */}
        <div className={Style.deleteBox}>
          <ClearRounded />
        </div>
      </div>
      <div className={Style.siteName}>{siteInfo.name}</div>
    </div>
  );
};

const SitePanel_CP = props => {
  const { siteArray, wantCloseRightDrawer, wantShowSiteAction } = props;
  const handleCloseRightDrawer = e => {
    e.preventDefault();
    wantCloseRightDrawer();
  };
  return (
    <div onClick={e => handleCloseRightDrawer(e)} className={Style.fullBox}>
      <div className={Style.sitesPanel}>
        {siteArray.map(item => (
          <SiteItem
            key={item.id}
            index={item.id}
            siteInfo={item.siteInfo}
            wantShowSiteAction={wantShowSiteAction}
          />
        ))}
      </div>
    </div>
  );
};

export default SitePanel_CP;
