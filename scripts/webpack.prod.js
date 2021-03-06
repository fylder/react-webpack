const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanAfterEveryBuildPatterns: ['dist'],
        //     allowExternal: true
        // }),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
})
