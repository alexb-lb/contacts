const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (environment) => {
  const isProduction = environment === 'production';

  return {
    mode: process.env.NODE_ENV,
    entry: {main: './client/app.js'},
    output: {
      path: path.join(__dirname, 'client', 'public', 'dist'),
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {loader: "babel-loader"}
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(path.join(__dirname, 'client', 'public', 'dist'), {} ),
      new MiniCssExtractPlugin({filename: 'styles.[contenthash].css'}),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: path.join(__dirname, 'client', 'public', 'app.html'),
        filename: 'app.html'
      }),
      new WebpackMd5Hash()
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
      devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'client', 'public'),
        historyApiFallback: {index: '/dist/app.html'},
        publicPath: '/dist/'
      }
  };
};
