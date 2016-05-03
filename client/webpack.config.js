var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8222',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: __dirname + '/',
    filename: "bundle.js"
  },
  devtool: 'source-map', //开启source-map可以去掉debugger模式
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
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: [
            'typecheck', 'transform-decorators-legacy', 'transform-runtime', 'antd'
          ]
        }
      }
    ],
  },
};
