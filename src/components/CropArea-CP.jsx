import React from "react";
import Style from "./style.css";
import DragBar_CT from "../containers/DragBar-CT";

const CropArea_CP = props => {
  const { cropState, iconColor, wantDragging } = props;
  let top = cropState.top.toString() + "px";
  let left = cropState.left.toString() + "px";
  let length = cropState.length.toString() + "px";

  const handleDragging = e => {
    e.preventDefault();
    e.stopPropagation();
    if (cropState.dragSignal) {
      let newPosition = { x: e.clientX, y: e.clientY };

      wantDragging(newPosition);
    }
  };
  return (
    <div
      style={{ backgroundColor: iconColor }}
      className={Style.cropWrapperBox}
      onMouseMove={e => handleDragging(e)}
    >
      <div className={Style.showImageBox} />
      <div className={Style.dragCropperBox} />
      <div
        style={{
          top: top,
          left: left,
          height: length,
          width: length
        }}
        className={Style.cropperBox}
      >
        <span className={Style.horizenSignBox} />
        <span className={Style.verticalSignBox} />
        <span className={Style.cropperCenter} />
        <DragBar_CT direction="n" useStyle={Style.cropperLineN} />
        <DragBar_CT direction="e" useStyle={Style.cropperLineE} />
        <DragBar_CT direction="s" useStyle={Style.cropperLineS} />
        <DragBar_CT direction="w" useStyle={Style.cropperLineW} />
        <DragBar_CT direction="n" useStyle={Style.cropperPointN} />
        <DragBar_CT direction="e" useStyle={Style.cropperPointE} />
        <DragBar_CT direction="s" useStyle={Style.cropperPointS} />
        <DragBar_CT direction="w" useStyle={Style.cropperPointW} />
        <DragBar_CT direction="nw" useStyle={Style.cropperPointNW} />
        <DragBar_CT direction="ne" useStyle={Style.cropperPointNE} />
        <DragBar_CT direction="sw" useStyle={Style.cropperPointSW} />
        <DragBar_CT direction="se" useStyle={Style.cropperPointSE} />
      </div>
    </div>
  );
};

export default CropArea_CP;
