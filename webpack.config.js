const path = require("path");

module.exports = (env) => {
  // console.log("env", env);
  const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
  const TerserPlugin = require("terser-webpack-plugin");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  let plugins = [new MiniCssExtractPlugin()];
  let optimization = {};

  if (env.production) {
    optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin(),
      ],
    };
  }

  return {
    mode: "development",
    entry: "./scripts/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname),
    },
    devServer: {
      contentBase: path.join(__dirname),
      compress: true,
      port: 8090,
    },
    devtool: env.local ? "inline-source-map" : "nosources-source-map",
    optimization,
    plugins,
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
};
