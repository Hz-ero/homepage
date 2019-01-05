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
    wantFinishImageCrop,
    wantCropImage,
    wantResizeEnd,
    wantResetCropBox,
    wantRotateImg,
    wantZoomImg
  } = props;
  const handleCloseColorPicker = e => {
    e.preventDefault();
    wantCloseColorPicker();
  };
  const handleCompleteCrop = e => {
    e.preventDefault();
    wantCropImage();
    wantFinishImageCrop();
  };
  const handleResizeEnd = e => {
    e.preventDefault();
    wantResizeEnd();
  };
  const handleResetCropBox = e => {
    e.preventDefault();
    wantResetCropBox();
  };
  const handleZoomInImg = e => {
    e.preventDefault();
    wantZoomImg(1.15);
  };
  const handleZoomOutImg = e => {
    e.preventDefault();
    wantZoomImg(0.85);
  };
  const handleRotateImg = (e, number) => {
    e.preventDefault();
    wantRotateImg(number);
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

        <ColorRadios_CT outerNode="imageCrop" />
        <div className={Style.adjustBox}>
          <div>
            <Button
              size="small"
              variant="contained"
              className={Style.leftButton}
              onClick={(e, number) => handleRotateImg(e, -1)}
            >
              {/* <RotateLeft /> */}
            </Button>
            <Button
              size="small"
              variant="contained"
              className={Style.rightButton}
              onClick={(e, number) => handleRotateImg(e, 1)}
            >
              {/* <RotateRight /> */}
            </Button>
          </div>
          <div>
            <Button
              size="small"
              variant="contained"
              className={Style.leftButton}
              onClick={e => handleZoomInImg(e)}
            >
              {/* <ZoomIn /> */}
            </Button>
            <Button
              size="small"
              variant="contained"
              className={Style.rightButton}
              onClick={e => handleZoomOutImg(e)}
            >
              {/* <ZoomOut /> */}
            </Button>
          </div>
          <Button
            size="small"
            variant="contained"
            className={Style.singleButton}
            onClick={e => handleResetCropBox(e)}
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
