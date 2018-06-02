const path = require('path');

const nodeExternals = require('webpack-node-externals');
const nodemonWebpack = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
    ]
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    new nodemonWebpack()
  ]
};
