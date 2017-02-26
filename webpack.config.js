const webpack = require('webpack'),
  HtmlWebPackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  entry: ['./client/entry.js'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)(\?.+)?$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'client/app/'),
        loader: `ngtemplate-loader?relativeTo=${__dirname}/client/app/!html-loader`
      },
      {
        test: /\index.html$/,
        loader: 'html-loader?name=[name].[ext]'
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebPackPlugin({ template: 'client/index.html', inject: 'body' })
  ]
};
