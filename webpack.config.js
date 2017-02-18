const webpack = require('webpack'),
  HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  entry: './client/js/entry.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
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
      }
    ]
  },
  output: {
    path: 'dist',
    filename: 'js/bundle-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebPackPlugin({ template: 'client/index.html', inject: 'body' })
  ]
};
