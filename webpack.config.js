const path = require('path');
const devServer = require('./webpack.devserver.config.js');

module.exports = {
  entry: {
    js: ['babel-polyfill', './src/index.jsx'],
  },
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
  },
  devServer,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: [{
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react', 'stage-1'],
          },
        }],
      },
      {
        test: /\.global\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /^((?!\.global).)*\.css$/,
        exclude: [/node_modules/],
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
