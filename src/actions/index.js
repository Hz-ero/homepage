import { createAction, createAsyncAction } from "redux-action-tools";
import * as Types from "./actionTypes.js";

let nextSiteId = 0;

export const deleteSiteItem = createAction(
  Types.DELETE_SITE_ITEM,
  deleteId => ({
    deleteId
  })
);

// =============color picker===============
export const selectRadio = createAction(Types.SELECT_RADIO, index => ({
  radioSelected: index
}));

export const switchColorPicker = createAction(
  Types.SWITCH_COLOR_PICKER,
  pickerSignal => ({ pickerSignal })
);

export const pickOneColor = createAction(Types.PICK_ONE_COLOR, color => ({
  colorPicked: color
}));

export const setOuterNode = createAction(Types.SET_OUTER_NODE, outerNode => ({
  outerNode
}));
export const resetColorPicker = createAction(Types.RESET_COLOR_PICKER);

// ======================================
export const previewIcon = createAction(Types.PREVIEW_ICON, iconAdr => ({
  iconAdr
}));

// =================Right Drawer===================
export const inputSiteName = createAction(Types.INPUT_SITE_NAME, name => ({
  name
}));
export const inputSiteAddress = createAction(
  Types.INPUT_SITE_ADDRESS,
  address => ({
    address
  })
);
export const inputIconReference = createAction(
  Types.INPUT_ICON_REFERENCE,
  icon => ({
    icon
  })
);
export const inputAdrError = createAction(Types.INPUT_ADR_ERROR, adrError => ({
  adrError
}));
export const inputFaviconAdr = createAction(
  Types.INPUT_FAVICON_ADR,
  favicon => ({
    favicon
  })
);
export const switchRightDrawer = createAction(
  Types.SWITCH_RIGHT_DRAWER,
  rightDrawerSignel => ({
    rightDrawerSignel
  })
);

export const setSiteFlag = createAction(Types.SET_SITE_FLAG, siteFlag => ({
  siteFlag
}));

export const submitSiteForm = createAction(
  Types.SUBMIT_SITE_FORM,
  siteInfo => ({
    id: nextSiteId++,
    siteInfo
  })
);

// ===============image crop=======================
export const switchImageCrop = createAction(
  Types.SWITCH_IMAGE_CROP,
  imageCropSignal => ({ imageCropSignal })
);
export const switchResizeFlag = createAction(
  Types.SWITCH_RESIZE_FLAG,
  resizeFlag => ({
    resizeFlag
  })
);
export const switchDragFlag = createAction(
  Types.SWITCH_DRAG_FLAG,
  dragFlag => ({
    dragFlag
  })
);
export const resizeStart = createAction(
  Types.RESIZE_START,
  (direction, refPosition) => ({
    direction,
    refPosition
  })
);
export const resizeing = createAction(Types.RESIZEING, newPosition => ({
  newPosition
}));
export const dragging = createAction(Types.DRAGGING, newPosition => ({
  newPosition
}));
export const dragStart = createAction(Types.DRAG_START, refPosition => ({
  refPosition
}));
export const imageSizeZoom = createAction(
  Types.IMAGE_SIZE_ZOOM,
  multiValue => ({
    multiValue
  })
);
export const setImgData = createAction(Types.SET_IMG_DATA, refImgData => ({
  refImgData
}));
export const cropImage = createAction(Types.CROP_IMAGE);
export const finishCrop = createAction(Types.FINISH_CROP);
export const cleanImgCrop = createAction(Types.CLEAN_IMG_CROP);
export const setRefImgSize = createAction(
  Types.SET_REF_IMG_SIZE,
  refImgSize => ({
    refImgSize
  })
);
export const resetCropBox = createAction(Types.RESET_CROP_BOX);
export const resetImgCrop = createAction(Types.RESET_IMG_CROP);
export const rotateImg = createAction(Types.ROTATE_IMG, rotateNumber => ({
  rotateNumber
}));
export const copyZoomPosition = createAction(Types.COPY_ZOOM_POSITION);
