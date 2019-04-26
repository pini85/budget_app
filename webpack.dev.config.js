const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:  './src/js/controller.js',

  output: {

    filename: 'bundle[contenthash].js',
    path: path.resolve(__dirname, 'distt/'),
    publicPath: ''

  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './distt'),
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }

      ]
   },
   plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'add.html',
      template: './src/html/add.html'
     })
   ]
};
