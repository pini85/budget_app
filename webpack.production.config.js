const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');



module.exports = {
  entry: {
     'main': './src/scripts/index.js'


  },


  output: {

    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'distt/'),
    publicPath:'https://my-amazing-budget-app.netlify.com/'

  },
  mode: 'production',
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [  MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']

      },
      {
        test: /\.s?css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      }
      ]
   },
   plugins: [

    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),

    new webpack.LoaderOptionsPlugin( {
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
     }),

   new HtmlWebpackPlugin({
      filename: 'add.html',
      template: './src/add.html'
     }),

    new HtmlWebpackPlugin({
      filename: 'expense.html',
      template: './src/expense.html',
     }),

    new HtmlWebpackPlugin({
      filename: 'income.html',

      template: './src/income.html',
     }),

    new HtmlWebpackPlugin({
      filename: 'overview.html',

      template: './src/overview.html',
     }),

    new HtmlWebpackPlugin({
      filename: 'statistics.html',

      template: './src/statistics.html',
     })

   ]
};
