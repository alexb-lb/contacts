const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const config = require('./config/config.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (environment) => {
  const isProduction = environment === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    mode: process.env.NODE_ENV,
    entry: ['babel-polyfill', './client/app.js'],
    output: {
      path: path.join(__dirname, 'client', 'public', 'dist'),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node-modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'sass-loader',
                options: {sourceMap: true}
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 3000,
      contentBase: path.join(__dirname, 'client', 'public'),
      historyApiFallback: {index: 'app.html'},
      publicPath: '/dist/'
    }
  }
};
