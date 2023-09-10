const path = require('path');
const HtmlWebpackpPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js'
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackpPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}