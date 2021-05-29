const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: path.resolve(__dirname, "..", "./reports/index.html"),
      openAnalyzer: false,
    }),
  ],
};
