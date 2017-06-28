

var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {

    //页面入口文件配置
    entry: {
        index: './src/index.jsx'
    },
    //入口文件输出配置
    output: {

        path: path.join(__dirname, "/assets"),
        filename: "bundle.js",
        // publicPath: "/assets/" //发布时 指定资源引用路径
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            include: path.join(__dirname, "/src"),
            loader: "babel-loader",
        }]
    }
};