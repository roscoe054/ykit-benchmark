'use strict';

var path = require('path');
var webpack = require('webpack');

var viewNum = 10;
var entry = {};
Array.from({length: viewNum}, (item, i) => {
    i += 1;
    entry[`view${i}`] = `./app/view${i}/index.js`
})
entry.vendor = ['react', 'react-router'];

module.exports = {
    context: __dirname,
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    ],
    devServer: {
        port: 3000
    }
};
