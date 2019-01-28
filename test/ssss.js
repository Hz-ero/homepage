const _object = require("lodash/object");
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
  refPosition: null,
  refImgData: null,
  newImgData: null
};

let newState = {
  resizePosition: {
    top: 0,
    left: 0,
    length: 310
  }
};
let x;
const compare = (origin, target) => {
  if (typeof target === "object") {
    if (typeof origin !== "object") return false;
    for (let key of Object.keys(target))
      if (!compare(origin[key], target[key])) return false;
    return true;
  } else return origin === target;
};
if (compare(newState.resizePosition, initState.resizePosition)) {
  x = true;
}
let m = -9 % 4;
m = m + 4;
m;

let url = "http://guancha.cn";
let prot = url.substr(0, 7);
prot;
