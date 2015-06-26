'use strict';
//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function NoErrorsPluginBeep() { }
NoErrorsPluginBeep.prototype.apply = function(compiler) {
  compiler.plugin('should-emit', function(compilation) {
    if(compilation.errors.length > 0) {
      process.stdout.write('Error \x07');
      return false;
    }
  });
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('should-record', function() {
      if(compilation.errors.length > 0) {
        process.stdout.write('Error \x07');
        return false;
      }
    });
  });
};

var sassLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src') + '&includePaths[]=' + path.resolve(__dirname, './node_modules')
];

var scssLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src') + '&includePaths[]=' + path.resolve(__dirname, './node_modules')
];

var lessLoaders = [
  'css-loader',
  'autoprefixer-loader?browsers=last 2 version',
  'less-loader?includePaths[]=' + path.resolve(__dirname, './src') + '&includePaths[]=' + path.resolve(__dirname, './node_modules')
  //'less'
];

var config = {
  entry: [
      'consolelog',
      'es5-shim',
      'es5-shim/es5-sham',
      'es6-shim',
      'es6-shim/es6-sham',
      'json3',
      'html5shiv/dist/html5shiv-printshiv.js',
      './src/js/index'
  ],
  module: {
    loaders: [
      {
        hotLoaderModule: 'react-hot',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!'))
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!'))
        //loader: 'style!css!less'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(gif|jpg|jpeg|png)$/, loader: 'file-loader' }
    ]
  },
  output: {
    filename: 'js/[name]-[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  plugins: [
    new NoErrorsPluginBeep(),
    new ExtractTextPlugin('styles/[name]-[hash].css'),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' })//,
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.DefinePlugin({GA_TRACKING_CODE: JSON.stringify('UA-89920-17')})
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.sass', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  }
};

module.exports = config;
