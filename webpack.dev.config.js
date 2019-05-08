const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");


module.exports = {

  entry: {
    'main': './src/scripts/controllers/main.js'

  },



  output: {

    filename: 'bundle.js',
    path: path.resolve(__dirname, 'distt/'),
    publicPath: ''

  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'distt/'),
        index: 'index.html',
        port: 9000


  },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']

      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }

      ]
   },
   plugins: [

    new DashboardPlugin(),

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
     }),
    new HtmlWebpackPlugin({
      filename: 'future-features.html',

      template: './src/future-features.html',
     })


   ]
};
