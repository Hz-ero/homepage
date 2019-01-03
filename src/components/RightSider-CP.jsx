import React from "react";
import Style from "./style.css";
// import ColorRadios_CT from "../containers/ColorRadios-CT";
import {
  Slide,
  Button,
  ClickAwayListener,
  AppBar,
  Typography,
  Toolbar,
  TextField
} from "@material-ui/core";
import ColorRadios_CT from "../containers/ColorRadios-CT";

const RightSider_CP = props => {
  const {
    siteForm,
    iconColor,
    cropState,
    wantCloseColorPicker,
    wantInputSiteName,
    wantInputSiteAddress,
    wantSubmitSiteForm,
    wantSetImgData,
    wantOpenImageCrop,
    wantCloseRightDrawer
  } = props;

  const handleCloseColorPicker = e => {
    e.preventDefault();
    wantCloseColorPicker();
  };

  const handleNameInput = input => {
    wantInputSiteName(input.target.value);
  };
  const handleAddressInput = input => {
    wantInputSiteAddress(input.target.value);
  };

  const handleCancel = e => {
    e.preventDefault();
    wantCloseRightDrawer();
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newSiteInfo = {
      name: siteForm.name,
      address: siteForm.address,
      icon: siteForm.icon,
      iconColor: iconColor
    };
    wantSubmitSiteForm(newSiteInfo);
  };

  const handleImgInputChanged = e => {
    e.preventDefault();
    let imgFile = e.target.files[0];
    let imgReader = new FileReader();
    imgReader.onload = reader => {
      let refImgData = reader.target.result;

      wantSetImgData(refImgData);
      wantOpenImageCrop();
    };
    imgReader.readAsDataURL(imgFile);
  };
  const handleClickImgInput = e => {
    e.stopPropagation();
  };
  return (
    <div onClick={e => handleCloseColorPicker(e)}>
      <Slide
        direction="left"
        in={siteForm.rightDrawerSignel}
        mountOnEnter
        unmountOnExit
      >
        <div className={Style.sideDrawer}>
          {/* ========AppBar=================== */}
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                添加网址
              </Typography>
            </Toolbar>
          </AppBar>
          <form encType="mutipart/form-data" className={Style.siteForm}>
            {/* ------输入标题------- */}
            <div className={Style.formSection}>
              <TextField
                className={Style.repeatInput}
                variant="outlined"
                label="标题"
                value={siteForm.name}
                onChange={input => handleNameInput(input)}
              />
            </div>
            {/* ------输入地址------- */}
            <div className={Style.formSection}>
              <TextField
                className={Style.repeatInput}
                variant="outlined"
                label="地址"
                value={siteForm.address}
                onChange={input => handleAddressInput(input)}
              />
            </div>
            {/* ------图标------- */}
            <div className={Style.formSection}>
              <div className={Style.siteIconBox}>
                <div
                  style={{ backgroundColor: iconColor }}
                  className={Style.siteIcon}
                >
                  <img src={cropState.newImgData} className={Style.resultImg} />
                </div>
                <div className={Style.fileInputBox}>
                  <span className={Style.fileInputBtn}>选择图标</span>
                  {/* -------------test------------ */}
                  <input
                    id="imgInput"
                    className={Style.fileInput}
                    type="file"
                    accept="image/*"
                    onClick={e => handleClickImgInput(e)}
                    onChange={e => handleImgInputChanged(e)}
                  />
                </div>
              </div>
            </div>
            {/* ------背景选择------- */}
            <ColorRadios_CT outerNode="rightSider" />
            {/* ------按钮------- */}
            <div className={Style.formSection}>
              <div className={Style.actionButtons}>
                <Button
                  variant="contained"
                  color="default"
                  onClick={e => handleCancel(e)}
                  className={Style.actionButton}
                >
                  取消
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={e => handleSubmit(e)}
                  className={Style.actionButton}
                >
                  确认
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Slide>
    </div>
  );
};

export default RightSider_CP;
