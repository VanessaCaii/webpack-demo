const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const base = require('./webpack.config.base.js');


module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist')     
    },
    module: {
        rules: [
            ...base.module.rules,
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            }
        ],
    },
};