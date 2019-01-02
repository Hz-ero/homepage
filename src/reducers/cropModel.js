import { createReducer } from "redux-action-tools";
import {
  SWITCH_IMAGE_CROP,
  SWITCH_RESIZE_FLAG,
  RESIZE_START,
  RESIZEING,
  SWITCH_DRAG_FLAG,
  DRAG_START,
  DRAGGING,
  IMAGE_SIZE_ZOOM
} from "../actions/actionTypes";

const initState = {
  resizePosition: {
    top: 0,
    left: 0,
    length: 310
  },
  zoomPosition: {
    top: 0,
    left: 0,
    length: 310
  },
  direction: "",
  imageCropSignal: false,
  resizeFlag: false,
  dragFlag: false,
  refPosition: null
};

const switchImageCrop = (state, action) => {
  return Object.assign({}, state, {
    imageCropSignal: action.payload.imageCropSignal
  });
};
const switchResizeFlag = (state, action) => {
  return Object.assign({}, state, {
    resizeFlag: action.payload.resizeFlag
  });
};
const switchDragFlag = (state, action) => {
  return Object.assign({}, state, {
    dragFlag: action.payload.dragFlag
  });
};
const dragStart = (state, action) => {
  return Object.assign({}, state, {
    refPosition: action.payload.refPosition
  });
};
const resizeStart = (state, action) => {
  return Object.assign({}, state, {
    direction: action.payload.direction,
    refPosition: action.payload.refPosition
  });
};
const dragging = (state, action) => {
  let deltaX, deltaY;
  let newPosition = action.payload.newPosition;
  deltaX = newPosition.x - state.refPosition.x;
  deltaY = newPosition.y - state.refPosition.y;

  let newTop = state.resizePosition.top + deltaY;
  let newLeft = state.resizePosition.left + deltaX;
  let newLength = state.resizePosition.length;

  return setNewResizeState(state, newTop, newLeft, newLength, newPosition);
};
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
const imageSizeZoom = (state, action) => {
  let oldPosition = state.zoomPosition;
  let newLength = oldPosition.length * (1 + action.payload.multiValue);
  let newTop = oldPosition.top + (oldPosition.length - newLength) / 2;
  let newLeft = newTop;

  return Object.assign({}, state, {
    zoomPosition: { top: newTop, left: newLeft, length: newLength }
  });
};
const cropModel = createReducer()
  .when(SWITCH_IMAGE_CROP, switchImageCrop)
  .when(SWITCH_RESIZE_FLAG, switchResizeFlag)
  .when(SWITCH_DRAG_FLAG, switchDragFlag)
  .when(RESIZE_START, resizeStart)
  .when(RESIZEING, resizeing)
  .when(DRAGGING, dragging)
  .when(DRAG_START, dragStart)
  .when(IMAGE_SIZE_ZOOM, imageSizeZoom)
  .build(initState);

export default cropModel;

//------------------------------------
const setNewResizeState = (state, newTop, newLeft, newLength, newPosition) => {
  let newBorderX = newLeft + newLength;
  let newBorderY = newTop + newLength;

  if (newTop >= 0 && newLeft >= 0 && newBorderX <= 310 && newBorderY <= 310) {
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
