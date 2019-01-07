import { createReducer } from "redux-action-tools";
const _object = require("lodash/object");
import * as Types from "../actions/actionTypes";

const initState = {
  resizePosition: {
    top: 0,
    left: 0,
    length: 310
  },
  zoomPosition: {
    top: 0,
    left: 0,
    height: 310,
    width: 310
  },
  rotatePosition: null,
  rotateN: 0,
  direction: "",
  resizeFlag: false,
  dragFlag: false,
  refPosition: null,
  imageCropSignal: false,
  refImgSize: null,
  refImgData: null,
  cropImgData: null
};
const switchImageCrop = (state, action) => {
  if (action.payload.imageCropSignal === true) {
    // 返回新state
    return Object.assign({}, state, {
      imageCropSignal: action.payload.imageCropSignal
    });
  } else {
    return initState;
  }
};
const switchResizeFlag = (state, action) => {
  // 返回新state
  return Object.assign({}, state, {
    resizeFlag: action.payload.resizeFlag
  });
};
const switchDragFlag = (state, action) => {
  // 返回新state
  return Object.assign({}, state, {
    dragFlag: action.payload.dragFlag
  });
};
const dragStart = (state, action) => {
  // 返回新state
  return Object.assign({}, state, {
    refPosition: action.payload.refPosition
  });
};

const resizeStart = (state, action) => {
  // 返回新state
  return Object.assign({}, state, {
    direction: action.payload.direction,
    refPosition: action.payload.refPosition
  });
};
const setImgData = (state, action) => {
  // 返回新state
  return Object.assign({}, state, {
    refImgData: action.payload.refImgData
  });
};
const resetCropBox = (state, action) => {
  let newState = _object.omit(initState, [
    "refImgData",
    "cropImgData",
    "imageCropSignal",
    "refImgSize"
  ]);

  // 返回新state
  return Object.assign({}, state, newState);
};
const resetImgCrop = () => {
  return initState;
};
const finishCrop = (state, action) => {
  let newState = _object.omit(initState, [
    "zoomPosition",
    "refImgData",
    "cropImgData",
    "refImgSize"
  ]);

  // 返回新state
  return Object.assign({}, state, newState);
};

/*******************
 * 旋转次数（一次90deg）
 */
const rotateImg = (state, action) => {
  // 旋转次数（一次90deg）
  let newRotateN = state.rotateN + action.payload.rotateNumber;
  // 旋转以4次为一个周期，对转数除4求余
  newRotateN = newRotateN % 4;
  // 若为负数则+4转正
  if (newRotateN < 0) {
    newRotateN = newRotateN + 4;
  }

  // 返回新state
  return Object.assign({}, state, {
    rotateN: newRotateN
  });
};

/*************
 * 计算承载框新坐标
 */
const computeRotatePosition = (loadP, rotateN) => {
  if (rotateN === 0) {
    return loadP;
  }
  // 转换坐标系
  let transX = loadP.left + loadP.width / 2;
  let transY = loadP.top + loadP.height / 2;
  let _w, _h;
  for (let i = 0; i < rotateN; i++) {
    // 调换长和宽数值
    _w = loadP.height;
    _h = loadP.width;
    loadP.width = _w;
    loadP.height = _h;
  }

  loadP.left = transX - loadP.width / 2;
  loadP.top = transY - loadP.height / 2;
  return loadP;
};
/*********
 * 获取图片真实尺寸,设置显示框中的居中缩放
 */
const setRefImgSize = (state, action) => {
  let refImgSize = action.payload.refImgSize;
  let zoomHeight, zoomWidth, zoomTop, zoomLeft;
  if (refImgSize.height >= refImgSize.width) {
    zoomHeight = 310;
    zoomWidth = (310 * refImgSize.width) / refImgSize.height;
    zoomTop = 0;
    zoomLeft = (310 - zoomWidth) / 2;
  } else {
    zoomWidth = 310;
    zoomHeight = (310 * refImgSize.height) / refImgSize.width;
    zoomLeft = 0;
    zoomTop = (310 - zoomHeight) / 2;
  }
  // 返回新state
  return Object.assign({}, state, {
    zoomPosition: {
      top: zoomTop,
      left: zoomLeft,
      height: zoomHeight,
      width: zoomWidth
    },
    refImgSize: refImgSize
  });
};

/**
 * 缩放图像装载框
 */
const imageSizeZoom = (state, action) => {
  let zoomPosition = state.zoomPosition;
  let multiValue = action.payload.multiValue;
  let newHeight = zoomPosition.height * multiValue;
  let newWidth = zoomPosition.width * multiValue;

  let newTop = zoomPosition.top + (zoomPosition.height - newHeight) / 2;
  let newLeft = zoomPosition.left + (zoomPosition.width - newWidth) / 2;

  // 返回新state
  return Object.assign({}, state, {
    zoomPosition: {
      top: newTop,
      left: newLeft,
      height: newHeight,
      width: newWidth
    }
  });
};
/**
 * 拖拽：1.拖拽剪裁框 2.拖拽图像显示框 3.拖拽新剪裁框
 */
const dragging = (state, action) => {
  if (compare(state.resizePosition, initState.resizePosition)) {
    return dragRefImgBox(state, action);
  } else {
    return dragResizeBox(state, action);
  }
};
/**
 * 调整剪裁框大小
 */
const resizeing = (state, action) => {
  let deltaX, deltaY;
  let newPosition = action.payload.newPosition;
  deltaX = newPosition.x - state.refPosition.x;
  deltaY = newPosition.y - state.refPosition.y;

  switch (state.direction) {
    case "n":
      return resizeCropperFromN(state, deltaX, deltaY, newPosition);
    case "e":
      return resizeCropperFromE(state, deltaX, deltaY, newPosition);
    case "s":
      return resizeCropperFromS(state, deltaX, deltaY, newPosition);
    case "w":
      return resizeCropperFromW(state, deltaX, deltaY, newPosition);

    case "ne":
      return resizeCropperFromNE(state, deltaX, deltaY, newPosition);
    case "se":
      return resizeCropperFromSE(state, deltaX, deltaY, newPosition);
    case "sw":
      return resizeCropperFromSW(state, deltaX, deltaY, newPosition);
    case "nw":
      return resizeCropperFromNW(state, deltaX, deltaY, newPosition);
  }
};
/**
 * 图像剪裁
 */
const cropImage = state => {
  let rotateImg = computeRotateImg(state);
  let cropImgData = computeCropImgData(rotateImg, state);

  // 返回新state
  return Object.assign({}, state, {
    cropImgData: cropImgData
  });
};

//------------定义reducer：cropModel------------------------
const cropModel = createReducer()
  .when(Types.SWITCH_IMAGE_CROP, switchImageCrop)
  .when(Types.SWITCH_RESIZE_FLAG, switchResizeFlag)
  .when(Types.SWITCH_DRAG_FLAG, switchDragFlag)
  .when(Types.RESIZE_START, resizeStart)
  .when(Types.RESIZEING, resizeing)
  .when(Types.DRAGGING, dragging)
  .when(Types.DRAG_START, dragStart)
  .when(Types.IMAGE_SIZE_ZOOM, imageSizeZoom)
  .when(Types.SET_IMG_DATA, setImgData)
  .when(Types.CROP_IMAGE, cropImage)
  .when(Types.FINISH_CROP, finishCrop)
  .when(Types.SET_REF_IMG_SIZE, setRefImgSize)
  .when(Types.RESET_CROP_BOX, resetCropBox)
  .when(Types.RESET_IMG_CROP, resetImgCrop)
  .when(Types.ROTATE_IMG, rotateImg)
  // .when(Types.COPY_ZOOM_POSITION, copyZoomPosition)
  .build(initState);

export default cropModel;

//------------------------------------
const setNewResizeState = (state, newTop, newLeft, newLength, newPosition) => {
  let newBorderX = newLeft + newLength;
  let newBorderY = newTop + newLength;

  if (newTop >= 0 && newLeft >= 0 && newBorderX <= 310 && newBorderY <= 310) {
    // 返回新state
    return Object.assign({}, state, {
      resizePosition: {
        top: newTop,
        left: newLeft,
        length: newLength
      },
      refPosition: newPosition
    });
  } else {
    return state;
  }
};

const resizeCropperFromN = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top + deltaY;
  let newLeft = state.resizePosition.left;
  let newLength = state.resizePosition.length - deltaY;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromE = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top - deltaX / 2;
  let newLeft = state.resizePosition.left;
  let newLength = state.resizePosition.length + deltaX;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromS = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top;
  let newLeft = state.resizePosition.left;
  let newLength = state.resizePosition.length + deltaY;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromW = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top + deltaX / 2;
  let newLeft = state.resizePosition.left + deltaX;
  let newLength = state.resizePosition.length - deltaX;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromNE = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top + deltaY;
  let newLeft = state.resizePosition.left;
  let newLength = state.resizePosition.length - deltaY;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromSE = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top;
  let newLeft = state.resizePosition.left;
  let newLength = state.resizePosition.length + deltaX;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromNW = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top + deltaY;
  let newLeft = state.resizePosition.left + deltaY;
  let newLength = state.resizePosition.length - deltaY;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
const resizeCropperFromSW = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.resizePosition.top;
  let newLeft = state.resizePosition.left + deltaX;
  let newLength = state.resizePosition.length - deltaX;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
//------------------------------------

//---比较两个对象深度相等----
const compare = (origin, target) => {
  if (typeof target === "object") {
    if (typeof origin !== "object") return false;
    for (let key of Object.keys(target))
      if (!compare(origin[key], target[key])) return false;
    return true;
  } else return origin === target;
};
//--------------------------
const dragResizeBox = (state, action) => {
  let deltaX, deltaY;
  let newPosition = action.payload.newPosition;
  deltaX = newPosition.x - state.refPosition.x;
  deltaY = newPosition.y - state.refPosition.y;

  let newTop = state.resizePosition.top + deltaY;
  let newLeft = state.resizePosition.left + deltaX;
  let newLength = state.resizePosition.length;

  let newBorderX = newLeft + newLength;
  let newBorderY = newTop + newLength;

  if (newBorderX > 310 || newBorderY > 310) {
    return state;
  } else {
    return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
  }
};
//--------------------------
const dragRefImgBox = (state, action) => {
  let deltaX, deltaY;
  let newPosition = action.payload.newPosition;
  deltaX = newPosition.x - state.refPosition.x;
  deltaY = newPosition.y - state.refPosition.y;

  let newTop = state.zoomPosition.top + deltaY;
  let newLeft = state.zoomPosition.left + deltaX;
  let newHeight = state.zoomPosition.height;
  let newWidth = state.zoomPosition.width;

  // 返回新state
  return Object.assign({}, state, {
    zoomPosition: {
      top: newTop,
      left: newLeft,
      height: newHeight,
      width: newWidth
    },
    refPosition: newPosition
  });
};
//--------------------------
/**
 * 将当前用户图像通过Canvas计算处旋转后的图像
 *
 * @param {*} state
 */
const computeRotateImg = state => {
  //当前用户图像
  let currentImg = new Image();
  currentImg.src = state.refImgData;
  // 旋转后的Canvas
  let rotateCanvas = document.createElement("canvas");
  // 旋转后的图像
  let rotateImg = new Image();

  //计算旋转后的画布尺寸
  let _width = state.refImgSize.width;
  let _height = state.refImgSize.height;
  let _rotateN = state.rotateN;
  let _coordArr = [0, _width, _height, 0, 0];
  for (let i = 0; i < _rotateN; i++) {
    _coordArr[0] = _coordArr[4];
    _coordArr[4] = _coordArr[3];
    _coordArr[3] = _coordArr[2];
    _coordArr[2] = _coordArr[1];
    _coordArr[1] = _coordArr[0];
    let w = _height;
    let h = _width;
    _width = w;
    _height = h;
  }
  rotateCanvas.height = _height;
  rotateCanvas.width = _width;
  let ctx = rotateCanvas.getContext("2d");
  ctx.translate(_coordArr[3], _coordArr[4]);
  ctx.rotate((_rotateN * 90 * Math.PI) / 180);
  ctx.drawImage(currentImg, 0, 0);

  // 讲Canvas转化为图像
  let rotateImgData = rotateCanvas.toDataURL("image/png");
  rotateImg.src = rotateImgData;

  return rotateImg;
};

const computeCropImgData = (rotateImg, state) => {
  // 生成一个Canvas
  let cropCanvas = document.createElement("canvas");
  cropCanvas.height = 96;
  cropCanvas.width = 96;

  // 计算旋转后的承载框坐标尺寸
  let rotatePosition;
  let _position = {
    top: state.zoomPosition.top,
    left: state.zoomPosition.left,
    height: state.zoomPosition.height,
    width: state.zoomPosition.width
  };
  if (state.rotateN % 2 === 0) {
    rotatePosition = _position;
  } else {
    rotatePosition = computeRotatePosition(_position, state.rotateN);
  }

  // 计算Canvas所需参数
  let multiForImgSize, multiForBoxSize;
  if (state.refImgSize.height >= state.refImgSize.width) {
    multiForImgSize = state.refImgSize.height / 310;
    multiForBoxSize = state.zoomPosition.height / 310;
  } else {
    multiForImgSize = state.refImgSize.width / 310;
    multiForBoxSize = state.zoomPosition.width / 310;
  }
  let sx = (state.resizePosition.left - rotatePosition.left) * multiForImgSize;
  let sy = (state.resizePosition.top - rotatePosition.top) * multiForImgSize;
  let sLength =
    (state.resizePosition.length * multiForImgSize) / multiForBoxSize;

  // 绘制Canvas
  cropCanvas
    .getContext("2d")
    .drawImage(rotateImg, sx, sy, sLength, sLength, 0, 0, 96, 96);
  // Canvas转成图片信息
  let cropImgData = cropCanvas.toDataURL("image/png");
  return cropImgData;
};
