const path = require('path');
const webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',//项目的入口文件
    output: {
        path: path.resolve(__dirname, './dist'),//项目的打包文件目录
        publicPath: '/dist/',//通过devServer访问路径
        filename: 'build.js'//打包后的文件名
    },
    //处理项目中不同类型的模块
    module: {
        rules: [
            //vue单文件组件
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                }
            },
            //css
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            //scss为扩展名的sass
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            //sass为扩展名的sass
            {
                test: /\.sass$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            //babel
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //图片
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
    ],
    devServer: {
        historyApiFallback: true,//如果找不到界面就返回默认首页index.html
        overlay: true//可以在浏览器打开的页面显示终端编译时产生的错误
    },
    resolve: {//帮组webpack找到bundle中需要引入的模块代码，这些代码包含在每个require/import语句中
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}