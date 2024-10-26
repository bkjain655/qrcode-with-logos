const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: "./src/index.ts",
  output: {
    filename: "qrcode-with-logos.min.js", //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, "./lib"),
    library: "QrCodeWithLogo",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
    ]
  },
  mode: "production"
};