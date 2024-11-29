const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  entry: {
    styles: "./src/styles/styles.scss",
    scripts: "./src/ts/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
    // publicPath: "/sourcecode/dist/",
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css", ".scss"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
    new MonacoWebpackPlugin({
      languages: ["typescript", "javascript"],
      filename: "workers/[name].worker.js",
    }),
  ],
};
