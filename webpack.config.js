const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var extractPlugin = new ExtractTextPlugin({
//     filename: 'main.css'
// })

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool : 'source-map',
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                //exclude: /node_modules/,
                //use: extractPlugin.extract({
                    use: ["style-loader","css-loader","sass-loader"]
               // })
                
                    
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}