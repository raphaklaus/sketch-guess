const webpack = require('webpack'),
  HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 9000
  },
  entry: './client/src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  output: {
    path: 'dist',
    filename: 'js/bundle-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebPackPlugin({template: 'client/src/index.html', inject: 'body'})
  ]
};
