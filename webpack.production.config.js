const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    'main': './src/scripts/controller.js'
  },

  output: {

    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'distt/'),
    publicPath: ''

  },
  mode: 'production',
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [  MiniCssExtractPlugin.loader, 'css-loader']

      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }

      ]
   },
   plugins: [

    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunks: ['css']
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'add.html',
      chunks: ['main'],
      template: './src/add.html'
     })

   ]
};
