var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8222',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['client', 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};
