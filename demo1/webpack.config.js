var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        home: './app/pages/home/index.js',
        detail: './app/pages/detail/index.js',
        list: './app/pages/list/index.js',
        vendor: ['react', 'react-router']
    },
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
    ]
};
