/*eslint-env node */
/*eslint quotes: [2, "single"], curly: 2*/
'use strict';
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var config = require('./src/js/config.js');

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

var paths = ['/'].concat(config.links.map(function(link) {
    return '/' + link.link;
}));

module.exports = {
    entry: [ './src/js/index' ],

    output: {
        filename: 'bundle-[hash].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        /* IMPORTANT!
         * You must compile to UMD or CommonJS
         * so it can be required in a Node context: */
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
        new StaticSiteGeneratorPlugin('main', paths, { /* locals */ })
    ],

    resolve: {
        extensions: ['', '.jsx', '.js', '.sass', '.scss'],
        modulesDirectories: ['src', 'node_modules']
    }

};
