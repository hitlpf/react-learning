const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin'); // 压缩js的插件
const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
module.exports = env => {
    return merge(baseConfig, {
        // 用于调试, inline-source-map模式效率比较高, 所以在dev模式下推荐使用这个
        devtool: 'inline-source-map',
        // devtool: 'source-map',
        mode: 'development',
        // 设置dev服务器
        devServer: {
            // 设置端口号,默认8080
            port: 8000,
            inline:true,  //缺少该配置，刷新页面时会出现路由错误
            historyApiFallback:true  //缺少该配置，刷新页面时会出现路由错误
        },
        output: {
            path: resolve('dist'),
            filename: "[name].bundle.js",
            chunkFilename: '[name].bundle.js' //import('').then() 这种懒加载生成的文件的命名规则
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: false,
                    default: false,
                    vendor_test: {
                        test: (module, chunks)=>{
                            return /test/.test(module.resource)
                        },
                        name: 'vendor_test',
                        chunks: "all",
                        minSize: 0
                    },
                    vendor_react: {
                        // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        test: (module) => {
                            return /[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(module.resource);
                        }, // 直接使用 test 来做路径匹配，抽离react相关代码
                        name: 'vendor_react',
                        chunks: 'all',
                        priority: 20,
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        priority: 10,
                        minSize: 0
                    }
                }
            }
        },
        plugins: [
            // 在js中注入全局变量process.env用来区分环境
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development'),
                }
            }),
        ],
    });
}
