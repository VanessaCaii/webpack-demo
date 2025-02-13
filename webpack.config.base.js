const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    
    output: {
        filename: 'index.[contenthash].js'     
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '你今天好吗',
            template: 'src/assets/test.html'
        }) 
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.styl$/i,                
                use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader: "stylus-loader",
                  }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "less-loader",
                }
            ]
        },
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`, even if `sass-embedded` is available
                  implementation: require("dart-sass"),
                },
              },
            ],
          },
        ],
      },
};