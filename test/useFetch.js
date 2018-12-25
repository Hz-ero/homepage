const fetch = require("node-fetch");

const imgAdr =
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545666349994&di=574003ea9994ab78d2a8a34b258489ed&imgtype=0&src=http%3A%2F%2Fwscdn.alimg.xiaoka.tv%2F20170418%2F527%2F500%2F34888011%2F527500c26463043fbb161fc762c7290a.jpg";

const getImg = () => {
  fetch(imgAdr)
    .then(res => res.blob())
    .then(data => {
      const value = data;
      console.log(value);
    });
};

// getImg();

const ff = async () => {
  let pp = fetch(imgAdr);

  let resu = await pp;
  let ddaa = await resu.blob();
  let smie = ddaa;
  console.log(smie);
};

ff();
