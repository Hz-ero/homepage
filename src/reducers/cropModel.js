import { createReducer } from "redux-action-tools";
import {
  SWITCH_IMAGE_CROP,
  SWITCH_DRAG_SIGNAL,
  DRAG_START,
  DRAGGING
} from "../actions/actionTypes";

const initState = {
  top: 0,
  left: 0,
  length: 310,
  direction: "",
  imageCropSignal: false,
  dragSignal: false,
  refPosition: null
};

const computeNewLengthNE = (length, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return length + deltaX;
  } else {
    return length - deltaY;
  }
};
const computeNewLengthSE = (length, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return length + deltaX;
  } else {
    return length + deltaY;
  }
};
const computeNewLeftSW = (left, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return left + deltaX;
  } else {
    return left - deltaY;
  }
};
const computeNewTopNE = (top, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return top - deltaX;
  } else {
    return top + deltaY;
  }
};

const switchImageCrop = (state, action) => {
  return Object.assign({}, state, {
    imageCropSignal: action.payload.imageCropSignal
  });
};
const switchDragSignal = (state, action) => {
  return Object.assign({}, state, {
    dragSignal: action.payload.dragSignal
  });
};
const dragStart = (state, action) => {
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

  switch (state.direction) {
    case "n":
      return resizeCropperFromN(state, deltaX, deltaY, newPosition);
    case "e":
      return resizeCropperFromE(state, deltaX, deltaY, newPosition);

    case "s":
      return Object.assign({}, state, {
        length: state.length + deltaY,
        refPosition: action.payload.newPosition
      });
    case "w":
      return Object.assign({}, state, {
        top: state.top + deltaX / 2,
        left: state.left + deltaX,
        length: state.length - deltaX,
        refPosition: action.payload.newPosition
      });
    case "ne":
      return Object.assign({}, state, {
        top: computeNewTopNE(state.top, deltaX, deltaY),
        length: computeNewLengthNE(state.length, deltaX, deltaY),
        refPosition: action.payload.newPosition
      });
    case "se":
      return Object.assign({}, state, {
        length: computeNewLengthSE(state.length, deltaX, deltaY),
        refPosition: action.payload.newPosition
      });
    case "sw":
      return Object.assign({}, state, {
        left: computeNewLeftSW(state.left, deltaX, deltaY),
        length: computeNewLengthSW(state.length, deltaX, deltaY),
        refPosition: action.payload.newPosition
      });
    case "nw":
      return Object.assign({}, state, {
        top: computeNewTopNW(state.top, deltaX, deltaY),
        left: computeNewLeftNW(state.left, deltaX, deltaY),
        length: computeNewLengthNW(state.length, deltaX, deltaY),
        refPosition: action.payload.newPosition
      });
  }
};
const computeNewLengthNW = (length, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return length - deltaX;
  } else {
    return length - deltaY;
  }
};
const computeNewLeftNW = (left, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return left + deltaX;
  } else {
    return left + deltaY;
  }
};
const computeNewTopNW = (top, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return top + deltaX;
  } else {
    return top + deltaY;
  }
};
const computeNewLengthSW = (length, deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return length - deltaX;
  } else {
    return length + deltaY;
  }
};
const cropModel = createReducer()
  .when(SWITCH_IMAGE_CROP, switchImageCrop)
  .when(SWITCH_DRAG_SIGNAL, switchDragSignal)
  .when(DRAG_START, dragStart)
  .when(DRAGGING, dragging)
  .build(initState);

export default cropModel;

//------------------------------------
const resizeCropperFromN = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.top + deltaY;
  let newLeft = state.left;
  let newLength = state.length - deltaY;
  let newBorderX = newLeft + newLength;
  let newBorderY = newTop + newLength;

  if (newTop >= 0 && newLeft >= 0 && newBorderX <= 310 && newBorderY <= 310) {
    return Object.assign({}, state, {
      top: newTop,
      length: newLength,
      refPosition: newPosition
    });
  } else {
    return state;
  }
};
const resizeCropperFromE = (state, deltaX, deltaY, newPosition) => {
  let newTop = state.top - deltaX / 2;
  let newLeft = state.left;
  let newLength = state.length + deltaX;
  let newBorderX = newLeft + newLength;
  let newBorderY = newTop + newLength;

  if (newTop >= 0 && newLeft >= 0 && newBorderX <= 310 && newBorderY <= 310) {
    return Object.assign({}, state, {
      top: newTop,
      length: newLength,
      refPosition: newPosition
    });
  } else {
    return state;
  }
};
//------------------------------------
