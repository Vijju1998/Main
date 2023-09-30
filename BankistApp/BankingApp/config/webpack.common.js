const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const paths = require('./paths');
const deps = require('../package.json').dependencies;

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [`${paths.src}/index`],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets`,
          to: 'assets',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Project Title',
      favicon: `${paths.public}/favicon.ico`,
      template: `${paths.public}/index.html`, // template file
      filename: 'index.html', // output file
    }),
    new ModuleFederationPlugin({
      // provide a unique module name
      name: 'chrome',
      // filename: 'remoteEntry.js',
      // uncomment and configure
      // if you are exposing modules
      // exposes: {
      //   // expose each component
      //   './ExampleComponent': './src/components/ExampleComponent',
      // },
      // uncomment and configure if you are a host module
      // remotes: {
      //   example1: 'app1@http://localhost:3001/remoteEntry.js',
      //   example2: 'app2@http://localhost:3002/remoteEntry.js',
      // },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
        'react-query': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-query'],
        },
        axios: {
          singleton: true,
          eager: true,
          requiredVersion: deps['axios'],
        },
      },
    }),
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },

      // load translation files
      {
        test: /\.po/,
        use: ['@lingui/loader'],
      },
    ],
  },
};
