const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "production",
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "The Economist Auth",
      env: "production",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
