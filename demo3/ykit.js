'use strict';

var path = require('path');

var viewNum = 20;
var entry = {};
Array.from({length: viewNum}, (item, i) => {
    i += 1;
    entry[`view${i}`] = `./app/view${i}/index.js`
})
entry.vendor = ['react', 'react-router'];

module.exports = {
    config: function() {
        return {
            exports : [],
            modifyWebpackConfig : function(baseConfig) {
                baseConfig.context = './'
                baseConfig.entry = entry
                baseConfig.output.local = baseConfig.output.prd = {
                    path: path.join(__dirname, 'dist'),
                    filename: '[name].js'
                }
                baseConfig.module.loaders.push({
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react'
                })
                baseConfig.resolve.extensions.push('.js', '.jsx')
                baseConfig.devtool = '';

                // 开启 server 优化的话需要关闭 CommonsChunkPlugin
                if(this.env !== 'local') {
                    baseConfig.plugins.push(
                        new this.webpack.optimize.CommonsChunkPlugin({
                            name: 'vendor', filename: 'vendor.js'
                        })
                    )
                }

                return baseConfig;
            }
        }
    }
};
