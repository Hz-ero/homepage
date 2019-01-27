import React from "react";
import Style from "./style.css";
import { Button } from "@material-ui/core";
import SitePanel_CT from "../containers/SitePanel-CT";

const FullScreen_CP = props => {
  const { wantCloseSiteAction } = props;
  const handleClickScreen = e => {
    e.preventDefault();
  };
  return (
    <div className={Style.fullBox} onclick={e => handleClickScreen(e)}>
      <SitePanel_CT />
    </div>
  );
};

export default FullScreen_CP;
