const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
 const commonConfig = require('./webpack.common');
  const { merge } = require('webpack-merge');
 const paths = require('./paths');
const prodConfig = {
  mode: 'production',
   devtool: false,
   output: {
     path: paths.build,
     publicPath: '/',
     filename: 'js/[name].[contenthash].bundle.js',
   },
   module: {
     rules: [],
   },
    optimization: {
     minimize: true,
     minimizer: [
       // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
       '...',
       new CssMinimizerPlugin(),
     ],
   },
    performance: {
     hints: false,
     maxEntrypointSize: 512000,
     maxAssetSize: 512000,
   },
};

module.exports = merge(commonConfig, prodConfig);
