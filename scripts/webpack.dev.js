const webpack = require('webpack'); //to access built-in plugins
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(), //显示模块的相对路径
        new webpack.HotModuleReplacementPlugin() // 启动热加载功能
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
        // host: '127.0.0.1',
        // port: 8080
    }
});