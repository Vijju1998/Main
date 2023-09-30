const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = {
  entry:`${paths.src}/index.tsx`,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        //typescript and javascript file
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      // css file
      {
        test: /\.(css|scss)?$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      //image
      {
        test: /\.(png|jp(e*)g|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  //dist is a directory in which boundled file stored
  output: {
    path:`${paths.build}`,
    filename: '[name].bundle.js',
    publicPath:'/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        {
        from:`${paths.src}/assets`,
        to:'assets',
        globOptions:{
          dot:true,
          gitignore:true,
        },
    },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template:`${paths.public}/index.html`,
      favicon:`${paths.src}/assets/icons/favicon.png`,
    }),
    
  ],
};
module.exports = commonConfig;
