const { merge } = require('webpack-merge');
const webpack = require('webpack');
var rm = require('rimraf');

const TerserPlugin = require('terser-webpack-plugin'); // 压缩js的插件
const AssetsPlugin = require('assets-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
rm(resolve('dist'),err=>{
    console.log(err);
});

module.exports = env => {
    return merge(baseConfig, {
        mode: 'production',
        output: {
            // publicPath: '//dlweb.sogoucdn.com/wapsearch/',
            path: resolve('dist'),
            filename: "[name].[chunkhash:8].bundle.js",
            chunkFilename: '[name].[chunkhash:8].bundle.js' //import('').then() 这种懒加载生成的文件的命名规则
        },
        optimization: {
            minimize: true,// 压缩js，删除js中无用的webpack代码
            minimizer: [
                new TerserPlugin({
                    // cache: true,
                    // parallel: true,
                    // source-map: false,
                    // exclude: /\.(min|zepto)\.ts$/,
                    terserOptions: {
                        output: {
                            "beautify": false,
                            "quote_keys": true
                        }
                    }
                })
            ],
            runtimeChunk: {
                name: 'manifest'
            },
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: false,
                    default: false,
                    vendor_test: {
                        name: 'vendor_test', // chunk的名字，默认为true，表示根据生成的chunk，自动生成文件名
                        chunks: "all",
                        priority: 20, // 因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
                        minChunks: 2, // 在分割之前，这个代码块最小应该被引用的次数, 即被引用两次以上才单独打出来
                        minSize: 0,  // 抽取出来的文件在压缩前的最小大小，即小于这个值不会拆分，默认为30K
                        test: (module, chunks)=>{
                            return /test/.test(module.resource)
                        }
                    },
                    vendor_react: {
                        test: (module) => {
                            return /[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(module.resource);
                        }, // 直接使用 test 来做路径匹配，抽离react相关代码
                        name: 'vendor_react',
                        chunks: 'all',
                        priority: 10
                    },
                    vendor_common: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor_common',
                        chunks: 'all',
                        priority: 5,
                        minSize: 0
                    }
                }
            }
        },
        plugins: [
            // 在js中注入全局变量process.env用来区分环境
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                }
            }),
            new AssetsPlugin({
                path: resolve('dist'),
                filename: 'assets.json',
                includeManifest: 'manifest'
            })
        ],
    });
}