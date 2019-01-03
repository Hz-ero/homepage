import { createAction, createAsyncAction } from "redux-action-tools";
import {
  ADD_SITE,
  DELETE_SITE,
  PREVIEW_ICON,
  SELECT_RADIO,
  SWITCH_COLOR_PICKER,
  OPEN_COLOR_PICKER,
  CLOSE_COLOR_PICKER,
  PICK_ONE_COLOR,
  INPUT_SITE_NAME,
  INPUT_SITE_ADDRESS,
  INPUT_ICON_REFERENCE,
  INPUT_ADR_ERROR,
  INPUT_FAVICON_ADR,
  SWITCH_RIGHT_DRAWER,
  SUBMIT_SITE_FORM,
  SWITCH_IMAGE_CROP,
  SWITCH_RESIZE_FLAG,
  RESIZE_START,
  RESIZEING,
  SWITCH_DRAG_FLAG,
  DRAGGING,
  DRAG_START,
  IMAGE_SIZE_ZOOM,
  SET_IMG_DATA,
  CROP_IMAGE,
  FINISH_CROP,
  SET_REF_IMG_SIZE
} from "./actionTypes.js";

let nextSiteId = 0;

// =============color picker===============
export const selectRadio = createAction(SELECT_RADIO, index => ({
  radioSelected: index
}));

export const switchColorPicker = createAction(
  SWITCH_COLOR_PICKER,
  colorPickerSignal => ({ colorPickerSignal })
);

export const pickOneColor = createAction(PICK_ONE_COLOR, color => ({
  colorPicked: color
}));

// ======================================
export const previewIcon = createAction(PREVIEW_ICON, iconAdr => ({ iconAdr }));

// =================Right Drawer===================
export const inputSiteName = createAction(INPUT_SITE_NAME, name => ({ name }));
export const inputSiteAddress = createAction(INPUT_SITE_ADDRESS, address => ({
  address
}));
export const inputIconReference = createAction(INPUT_ICON_REFERENCE, icon => ({
  icon
}));
export const inputAdrError = createAction(INPUT_ADR_ERROR, adrError => ({
  adrError
}));
export const inputFaviconAdr = createAction(INPUT_FAVICON_ADR, favicon => ({
  favicon
}));
export const switchRightDrawer = createAction(
  SWITCH_RIGHT_DRAWER,
  rightDrawerSignel => ({
    rightDrawerSignel
  })
);
export const submitSiteForm = createAction(SUBMIT_SITE_FORM, siteInfo => ({
  id: nextSiteId++,
  siteInfo
}));

// ===============image crop=======================
export const switchImageCrop = createAction(
  SWITCH_IMAGE_CROP,
  imageCropSignal => ({ imageCropSignal })
);
export const switchResizeFlag = createAction(
  SWITCH_RESIZE_FLAG,
  resizeFlag => ({
    resizeFlag
  })
);
export const switchDragFlag = createAction(SWITCH_DRAG_FLAG, dragFlag => ({
  dragFlag
}));
export const resizeStart = createAction(
  RESIZE_START,
  (direction, refPosition) => ({
    direction,
    refPosition
  })
);
export const resizeing = createAction(RESIZEING, newPosition => ({
  newPosition
}));
export const dragging = createAction(DRAGGING, newPosition => ({
  newPosition
}));
export const dragStart = createAction(DRAG_START, refPosition => ({
  refPosition
}));
export const imageSizeZoom = createAction(IMAGE_SIZE_ZOOM, multiValue => ({
  multiValue
}));
export const setImgData = createAction(SET_IMG_DATA, refImgData => ({
  refImgData
}));
export const cropImage = createAction(CROP_IMAGE);
export const finishCrop = createAction(FINISH_CROP);
export const setRefImgSize = createAction(SET_REF_IMG_SIZE, refImgSize => ({
  refImgSize
}));
