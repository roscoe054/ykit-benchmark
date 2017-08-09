var baseConfig = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

baseConfig.plugins.push(new UglifyJSPlugin({
    parallel: {
        cache: false,
        workers: 4
    }
}))

module.exports = baseConfig
