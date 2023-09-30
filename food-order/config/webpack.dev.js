const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const paths = require('./paths')
const devConfig = {
  mode: 'development',
  devtool:'inline-source-map',
  devServer:{
    historyApiFallback:true,
    static:paths.build,
    compress:true,
    hot:true,
    port:8080,
    proxy:{
      '/api':'http://localhost:8080',
      pathRewrite:{'^/api':''},
    }
  }
};

module.exports = merge(commonConfig, devConfig);
