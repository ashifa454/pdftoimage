const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
