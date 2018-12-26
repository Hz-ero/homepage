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

const missionOne = () => {
  setTimeout(() => {
    console.log("mission 1 done");
    return Promise.resolve();
  }, 1000);
};

const missionTwo = () => {
  console.log("mission 2 done");
};

const doMission = async () => {
  await missionOne();
  missionTwo();
};

function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint("hello world", 1000);
