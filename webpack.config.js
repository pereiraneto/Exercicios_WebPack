const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    plugins:[
        new extractTextPlugin('app.css')
    ],
    module:{
        rules:[{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['react']
            }
        }, {
            test: /\.css?$/,
            loader: extractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}