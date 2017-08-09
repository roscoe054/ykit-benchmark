// module.exports = {     entry: './app/index.js',     output: {         filename: 'bundle.js'
// },     module: {         loaders: [             {                 test: /\.css$/,
// loader: 'style-loader!css-loader'             }, {                 test: /\.js[x]?$/,
//     exclude: /node_modules/,                 loader:
// 'babel-loader?presets[]=es2015&presets[]=react'             }         ]     } };
//
module.exports = {
    entry: './demoModule/app.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(css|styl)$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }, {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        extensions: [
            '.json', '.js', '.js', '.jsx'
        ]
    }
};
