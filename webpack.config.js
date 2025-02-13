const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'     
    },
        plugins: [new HtmlWebpackPlugin({
            title: '来吃饭啦',
            template: 'src/assets/test.html'
          }
        )],
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["css-loader"],
              },
            ],
          },
  };