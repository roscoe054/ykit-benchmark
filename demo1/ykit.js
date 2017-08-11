'use strict';

var path = require('path');

module.exports = {
    config: function() {
        return {
            exports : [],
            modifyWebpackConfig : function(baseConfig) {
                baseConfig.context = './'
                baseConfig.entry = {
                    view1: './app/view1/index.js',
                    view2: './app/view2/index.js',
                    view3: './app/view3/index.js',
                    vendor: ['react', 'react-router']
                }
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
