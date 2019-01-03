import React from "react";
import Style from "./style.css";
import { Button } from "@material-ui/core";
// import {
//   RotateLeft,
//   RotateRight,
//   ZoomIn,
//   ZoomOut,
//   Cached
// } from "@material-ui/icons";
import ColorRadios_CT from "../containers/ColorRadios-CT";
import CropArea_CT from "../containers/CropArea-CT";

const ImageCrop_CP = props => {
  const {
    cropState,
    iconColor,
    wantCloseColorPicker,
    wantCloseImageCrop,
    wantCropImage,
    wantResizeEnd
  } = props;
  const handleCloseColorPicker = e => {
    e.preventDefault();
    wantCloseColorPicker();
  };
  const handleCompleteCrop = e => {
    e.preventDefault();
    wantCropImage();
    wantCloseImageCrop();
  };
  const handleResizeEnd = e => {
    e.preventDefault();
    wantResizeEnd();
  };
  return (
    <div
      onMouseUp={e => handleResizeEnd(e)}
      onClick={e => handleCloseColorPicker(e)}
      style={{ display: cropState.imageCropSignal ? "flex" : "none" }}
      className={Style.fullScreenModel}
    >
      <div className={Style.imageCropBox}>
        {/* ================================= */}
        <CropArea_CT />
        {/* ================================= */}

        <ColorRadios_CT />
        <div className={Style.adjustBox}>
          <div>
            <Button
              size="small"
              variant="contained"
              className={Style.leftButton}
            >
              {/* <RotateLeft /> */}
            </Button>
            <Button
              size="small"
              variant="contained"
              className={Style.rightButton}
            >
              {/* <RotateRight /> */}
            </Button>
          </div>
          <div>
            <Button
              size="small"
              variant="contained"
              className={Style.leftButton}
            >
              {/* <ZoomIn /> */}
            </Button>
            <Button
              size="small"
              variant="contained"
              className={Style.rightButton}
            >
              {/* <ZoomOut /> */}
            </Button>
          </div>
          <Button
            size="small"
            variant="contained"
            className={Style.singleButton}
          >
            {/* <Cached /> */}
          </Button>
        </div>
        <Button
          onClick={e => handleCompleteCrop(e)}
          variant="contained"
          className={Style.switchModelButton}
        >
          确认
        </Button>
      </div>
    </div>
  );
};

export default ImageCrop_CP;
