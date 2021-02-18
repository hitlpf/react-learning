const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
    entry: {
        main: resolve('app/main.js'),
        head: resolve('app/head.js'),
        // pageA: resolve('app/pageA.js'),
        // pageB: resolve('app/pageB.js')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // 只编译app文件夹下的文件
                include: resolve('app'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    }
                }
            },
            {
                test: /\.html$/,
                include: resolve('app'),
                loader: 'html-loader'
            },
            {
                test: /\.(less)$/,
                include: resolve('app'),
                use: [
                   'style-loader',
                   'css-loader',
                   'less-loader'
               ]
           },
           {
                test: /\.css$/,
                loader: 'css-loader'
           },
           {
               test: /\.(png|jpg|gif|svg)$/,
               loader: `url-loader`
           },
           {
               test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
               loader: `file-loader`
           }
        ]
    },
    resolve: {
        // 设置路径别名
        alias: {
            '@': resolve('app'),
        },
        // 文件后缀自动补全, 就是你import文件的时候如果没写后缀名就会优先找下面这几个
        extensions: [ '.js', '.jsx' ],
    },
    // 第三方依赖，可以写在这里，不打包
    externals: {},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('template/app.html'),
            inject: true, // 为true会默认插入生成的js
            cache: false,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyJS: {
                    compress: {
                        sequences: false
                    }
                },
                minifyCSS: true,
                ignoreCustomFragments: [/<%[^>]+%\>/, /\{%[^}]+%\}/, /\{\{[^}]+\}\}/]
            }
        })
    ]
}
