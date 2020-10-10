const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry:'./app/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test: /\.(js)$/, use:'babel-loader'},
            {test: /\.css$/, use:['style-loader','css-loader']},
            {test: /\.scss$/, use:['style-loader','sass-loader','css-loader']},
            {test: /\.(png|svg|jpg|gif)$/,use:'file-loader'}
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}