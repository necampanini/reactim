const webpack = require('webpack');
const path = require('path');

var PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry : {
        'home': path.join(PATHS.src, "index.js"),
        'products': path.join(PATHS.src, "products.js")
    },

    output : {
        path: path.join(PATHS.dist, 'js'),
        filename: '[name].entry.js',
        chunkFilename: '[id].chunk.js'
    },

    externals : {
        'jquery': 'jQuery'
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: [/\.js?/, /\.jsx?/],
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //     // $: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
        //     // jQuery: path.join(__dirname, "node_modules", "jquery/dist/jquery"),
        // })
    ]
}