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
      favicon: path.resolve(__dirname, "..", "./src/assets/favicon.ico"),
      title: "React Webpack 5 Starter: Production",
      env: "production",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      filename: "index.html",
    }),
  ],
};
