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
let deleteId = 2;
let aa = [{ id: 0 }, { id: 1 }, { id: 2 }];
let findIndex = -1;
do {
  findIndex += 1;
  console.log(aa[findIndex]);
} while (aa[findIndex].id !== deleteId);
aa.splice(findIndex, 1);
findIndex;
aa;
