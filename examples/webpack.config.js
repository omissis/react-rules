var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },

      { test: /\.woff$/,   loader: "null" },
      { test: /\.woff2$/,  loader: "null" },
      { test: /\.ttf$/,    loader: "null" },
      { test: /\.eot$/,    loader: "null" },
      { test: /\.svg$/,    loader: "null" }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^react-rules/,
      path.resolve(__dirname, '../modules')
    )
  ]
};
