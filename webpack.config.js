const webpack = require("webpack");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new OpenBrowserPlugin({ url: "http://localhost:9000" })
  ]
};
