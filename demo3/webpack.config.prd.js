var baseConfig = require('./webpack.config.js');
var webpack = require('webpack');

baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
}))

module.exports = baseConfig
