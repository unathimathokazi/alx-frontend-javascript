
const path = require("path");

module.exports = {
  entry: "./js/main.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        type: "javascript/esm",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map"
};
