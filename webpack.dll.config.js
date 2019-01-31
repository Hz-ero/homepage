const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    bundle: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
      "react-router-dom",
      "redux-thunk",
      "lodash",
      "react-color",
      "@material-ui/core",
      "@material-ui/icons",
      "immutable",
      "redux-immutable",
      "redux-action-tools",
      "babel-polyfill"
      //其他库
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].dll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: "./build/bundle.manifest.json",
      name: "[name]_[hash]",
      context: __dirname
    })
  ]
};
