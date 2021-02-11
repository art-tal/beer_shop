// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {  // where we defined file patterns and their loaders
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                       options: {sourceMap: true}
                    },
                    {
                      loader: 'sass-loader',
                       options: {sourceMap: true}
                    },
                ],
                loader: "css-loader",
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
                loader: "css-loader",
            }
        ]
    },

    devServer: {  // configuration for webpack-dev-server
        overlay: true,
    },

    plugins: [
        new MiniCssExtractPlugin ({
            filename: "[name].css",
        })
    ]
};


