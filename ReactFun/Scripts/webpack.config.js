const webpack = require('webpack');
const path = require('path');

var PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry : {
        'home': path.join(PATHS.src, "index.jsx")
    },

    output : {
        path: path.join(PATHS.dist, 'js'),
        filename: '[name].entry.js',
        chunkFilename: '[id].chunk.js'
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
        function () {
            this.plugin('watch-run', function (watching, callback) {
                console.log('\nBegin compile at ' + new Date());
                callback();
            })
        }
    ]
}