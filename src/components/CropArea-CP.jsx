import React from "react";
import Style from "./style.css";
import ResizeBar_CT from "../containers/ResizeBar-CT";

const CropArea_CP = props => {
  const {
    cropState,
    iconColor,
    radioSelected,
    wantResizeing,
    wantDragStart,
    wantDragging,
    wantDragEnd,
    wantZoomImg,
    wantSetRefImgSize
  } = props;

  const handleResizeing = e => {
    e.preventDefault();
    e.stopPropagation();

    if (cropState.resizeFlag && !cropState.dragFlag) {
      let newPosition = { x: e.clientX, y: e.clientY };
      wantResizeing(newPosition);
    }
  };

  const handleDragStart = e => {
    e.preventDefault();
    e.stopPropagation();
    let refPosition = { x: e.clientX, y: e.clientY };

    wantDragStart(refPosition);
  };

  const handleDragging = e => {
    e.preventDefault();
    // e.stopPropagation();

    if (cropState.dragFlag && !cropState.resizeFlag) {
      let newPosition = { x: e.clientX, y: e.clientY };
      wantDragging(newPosition);
    }
  };

  const handleDragEnd = e => {
    e.preventDefault();
    // e.stopPropagation();
    wantDragEnd();
  };

  const handleWheelZoom = e => {
    e.preventDefault();
    wantZoomImg(1 + e.deltaY * -0.15);
  };

  const handleUserImgLoad = e => {
    e.preventDefault();
    wantSetRefImgSize({
      height: e.target.naturalHeight,
      width: e.target.naturalWidth
    });
  };

  return (
    <div
      style={{ backgroundColor: iconColor }}
      className={
        radioSelected === 0 ? Style.cropWrapperWithImg : Style.cropWrapper
      }
      onMouseMove={e => handleResizeing(e)}
      onWheel={e => handleWheelZoom(e)}
    >
      <div className={Style.showImageBox}>
        <div
          style={{
            top: cropState.zoomPosition.top,
            left: cropState.zoomPosition.left,
            height: cropState.zoomPosition.height,
            width: cropState.zoomPosition.width
          }}
          className={Style.zoomImageBox}
        >
          <img
            id="userImage"
            src={cropState.refImgData}
            alt="img"
            className={Style.userImage}
            onLoad={e => handleUserImgLoad(e)}
          />
        </div>
      </div>
      <div className={Style.remakeCropperBox} />
      <div
        style={{
          top: cropState.resizePosition.top,
          left: cropState.resizePosition.left,
          height: cropState.resizePosition.length,
          width: cropState.resizePosition.length
        }}
        className={Style.resizeCropperBox}
        onMouseDown={e => handleDragStart(e)}
        onMouseMove={e => handleDragging(e)}
        onMouseUp={e => handleDragEnd(e)}
      >
        <span className={Style.horizenSignBox} />
        <span className={Style.verticalSignBox} />
        <span className={Style.cropperCenter} />
        <ResizeBar_CT direction="n" useStyle={Style.cropperLineN} />
        <ResizeBar_CT direction="e" useStyle={Style.cropperLineE} />
        <ResizeBar_CT direction="s" useStyle={Style.cropperLineS} />
        <ResizeBar_CT direction="w" useStyle={Style.cropperLineW} />
        <ResizeBar_CT direction="n" useStyle={Style.cropperPointN} />
        <ResizeBar_CT direction="e" useStyle={Style.cropperPointE} />
        <ResizeBar_CT direction="s" useStyle={Style.cropperPointS} />
        <ResizeBar_CT direction="w" useStyle={Style.cropperPointW} />
        <ResizeBar_CT direction="nw" useStyle={Style.cropperPointNW} />
        <ResizeBar_CT direction="ne" useStyle={Style.cropperPointNE} />
        <ResizeBar_CT direction="sw" useStyle={Style.cropperPointSW} />
        <ResizeBar_CT direction="se" useStyle={Style.cropperPointSE} />
      </div>
    </div>
  );
};

export default CropArea_CP;
