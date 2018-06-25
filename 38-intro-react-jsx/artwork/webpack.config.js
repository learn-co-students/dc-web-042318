const path = require("path");

const config = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
