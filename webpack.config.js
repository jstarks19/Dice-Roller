const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
