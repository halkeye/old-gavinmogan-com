'use strict';
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var evaluate = require('eval');
var Promise = require('bluebird');
var config = require('./src/js/config.js');

function GavinPlugin(options) {
  this.options = options || {};
}

GavinPlugin.prototype = new HtmlWebpackPlugin();
GavinPlugin.prototype.constructor = GavinPlugin;
GavinPlugin.prototype.emitHtml = function(compilation, htmlTemplateContent, templateParams, outputFilename) {
    var that = this;
    var scriptPath = 'bundle.js';
    var source = compilation.assets[scriptPath].source();
    var render = evaluate(source, /* filename: */ undefined, /* scope: */ undefined, /* noGlobals: */ true);
    var renderPromises = config.links.map(function(link) { return "/" + link.link; }).concat('/').map(function(outputPath) {
        var locals = { path: outputPath };
        return Promise
          .fromNode(render.bind(null, locals))
          .then(function(output) {
            output = htmlTemplateContent.replace('</body>', output+'</body>');
            output = output.replace('<script src="/' + scriptPath + '"></script>', '');
            HtmlWebpackPlugin.prototype.emitHtml.call(that, compilation, output, templateParams, path.join(outputPath, '/index.html'));
          })
          .catch(function(err) {
              console.log('err', err);
          });
    });
    return Promise.all(renderPromises).then(function() {
        delete compilation.assets[scriptPath];
    });
};

var defines = {};
if (process.env.NODE_ENV === 'production') {
    defines.GA_TRACKING_CODE = JSON.stringify('UA-89920-18');
}

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

module.exports = {
    entry: [
        './src/js/index'
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!'))
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

    plugins: [
        new webpack.DefinePlugin(defines),
        new ExtractTextPlugin('styles/[name]-[hash].css'),
        new GavinPlugin({ inject: true, template: './src/index.html' })
    ],

    resolve: {
        extensions: ['', '.jsx', '.js', '.sass', '.scss'],
        modulesDirectories: ['src', 'node_modules']
    }

};
