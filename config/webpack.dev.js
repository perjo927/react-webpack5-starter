const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    port: 2000,
    contentBase: path.resolve(__dirname, "..", "./dist"),
    watchContentBase: true,
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "..", "./src/assets/favicon.ico"),
      title: "React Webpack 5 Starter: Development",
      env: "development",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
