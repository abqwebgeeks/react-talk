var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/javascripts/main.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './public'
  }
}
