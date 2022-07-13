const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',
  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
      pathRewrite: { '^/api': '' },
    },
  },
  stats: 'minimal',

  module: {
    rules: [
      // ... other rules
    ],
  },
  plugins: [new Dotenv({ path: './.env.development' })].filter(Boolean),
});
