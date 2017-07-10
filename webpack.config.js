

var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');
var values = require('postcss-modules-values');

module.exports = {
    devtool: 'source-map',
    //页面入口文件配置
    entry: {
        index: './src/index.js'
    },
    //入口文件输出配置
    output: {

        path: __dirname,
        filename: "bundle.js"
        // publicPath: "/assets/" //发布时 指定资源引用路径
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                include: path.join(__dirname, "/src"),
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules!postcss-loader"
            },
            {
                test: /\.(png|jpg|svg)/,
                loaders: ['url', 'image-webpack-loader'],
            },
            {
                test: /\.scss$/,
                loader:'style!css!sass'
                // loader: ExtractTextPlugin.extract("style", 'css!sass') 
                //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 
                //loader:'style!css!sass'
            }
        ]
    },
    postcss: [
        values
    ]
};