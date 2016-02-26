var path = require('path');
var webpack = require('webpack');
var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  entry: './main.js',
  output: { 
    path: __dirname, 
    filename: PROD ? 'bundle.min.js' : 'bundle.js' 
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [],
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
  }
};
