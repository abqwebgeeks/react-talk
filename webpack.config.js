require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');

var jsxTest = /\.jsx?/;
var jsxPath = path.join(__dirname, 'src/javascripts');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/javascripts/main.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: jsxTest,
        loaders: ['react-hot'],
        include: jsxPath
      },
      {
        test: jsxTest,
        loader: 'babel-loader',
        include: jsxPath,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(path.join(__dirname, './src/stylesheets'))
    ]
  },
  devServer: {
    contentBase: './public'
  }
}
