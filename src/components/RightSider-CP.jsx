import React from "react";
import Style from "./style.css";
import {
  Slide,
  Button,
  AppBar,
  Typography,
  Toolbar,
  TextField
} from "@material-ui/core";
import ColorRadios_CT from "../containers/ColorRadios-CT";

const RightSider_CP = props => {
  const {
    siteForm,
    editIndex,
    iconColor,
    radioSelected,
    cropState,
    wantCloseColorPicker,
    wantInputSiteName,
    wantInputSiteAddress,
    wantSubmitSiteForm,
    wantSetImgData,
    wantOpenImageCrop,
    wantCloseRightDrawer,
    wantResetImgCrop,
    wantChangeSiteInfo
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

  // const handleCancel = e => {
  //   e.preventDefault();
  //   wantCloseRightDrawer();
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const newSiteInfo = {
      name: siteForm.name,
      shortName: siteForm.shortName,
      address: siteForm.address,
      iconData: cropState.cropImgData,
      iconColor: iconColor,
      radio: radioSelected
    };

    if (editIndex === -1) {
      wantSubmitSiteForm(newSiteInfo);
    } else {
      wantChangeSiteInfo(newSiteInfo, editIndex);
    }
    wantCloseRightDrawer();
  };
  const handleResetImgCrop = e => {
    e.preventDefault();
    wantResetImgCrop();
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
  const handleCallFileInput = e => {
    let fileInput = document.getElementById("imgInput");
    fileInput.click();
  };
  const handleEditImage = e => {
    e.preventDefault();
    wantOpenImageCrop();
  };
  return (
    <div onClick={e => handleCloseColorPicker(e)}>
      <Slide
        direction="left"
        in={siteForm.drawerFlag}
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
            {/* ------输入名称------- */}
            <div className={Style.formSection}>
              <TextField
                className={Style.repeatInput}
                variant="outlined"
                label="名称"
                value={siteForm.name}
                onChange={input => handleNameInput(input)}
              />
            </div>
            {/* ------输入网址------- */}
            <div className={Style.formSection}>
              <TextField
                className={Style.repeatInput}
                variant="outlined"
                label="网址"
                value={siteForm.address}
                onChange={input => handleAddressInput(input)}
              />
            </div>
            {/* ------图标------- */}
            <div className={Style.formSection}>
              <div className={Style.siteIconBox}>
                {/* ------文字图标框------- */}
                <div
                  style={{
                    backgroundColor: iconColor,
                    display: cropState.cropImgData === null ? "block" : "none"
                  }}
                  className={
                    radioSelected === 0 ? Style.siteIconWithImg : Style.siteIcon
                  }
                >
                  <div className={Style.iconName}>{siteForm.shortName}</div>
                </div>
                {/* ------图片图标框------- */}
                <div
                  style={{
                    backgroundColor: iconColor,
                    display: cropState.cropImgData === null ? "none" : "block"
                  }}
                  className={
                    radioSelected === 0 ? Style.siteIconWithImg : Style.siteIcon
                  }
                >
                  <img src={cropState.cropImgData} className={Style.iconImg} />
                </div>
                {/* ------图片操作框------- */}
                <div className={Style.fileInputBox}>
                  <div
                    style={{
                      display: cropState.cropImgData !== null ? "none" : "block"
                    }}
                    onClick={e => handleCallFileInput(e)}
                    className={Style.fileInputBtn}
                  >
                    选择图标
                  </div>
                  <div
                    onClick={e => handleEditImage(e)}
                    style={{
                      display: cropState.cropImgData !== null ? "block" : "none"
                    }}
                    className={Style.fileInputBtn}
                  >
                    编辑图标
                  </div>
                  <div
                    onClick={e => handleResetImgCrop(e)}
                    style={{
                      display: cropState.cropImgData !== null ? "block" : "none"
                    }}
                    className={Style.fileInputBtn}
                  >
                    删除图标
                  </div>
                  {/* -------------输入框------------ */}
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
              {/* <div className={Style.actionButtons}> */}
              {/* <Button
                  variant="contained"
                  color="default"
                  onClick={e => handleCancel(e)}
                  className={Style.actionButton}
                >
                  取消
                </Button> */}
              {/* </div> */}
              <Button
                variant="contained"
                color="primary"
                onClick={e => handleSubmit(e)}
                className={Style.actionButton}
              >
                确认
              </Button>
            </div>
          </form>
        </div>
      </Slide>
    </div>
  );
};

export default RightSider_CP;
