var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
  path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js|jsx$/, loader: ['babel-loader'], query: { presets: ['es2015', 'stage-3', 'react'] } }
    ]
  }
};
