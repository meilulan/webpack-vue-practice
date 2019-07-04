# 从零开始搭建一个简单的基于webpack的vue开发环境
> 注：基于webpack3.X的版本，webpack4.X的版本不适用

[TOC]

## 项目初始化

### 1. 安装node.js
### 2. 新建“webpack-vue-practice”文件夹
### 3. 初始化并获取package.json文件
```
cd webpack-vue-practice
npm init -y
```
“-y”表示将项目设置默认，以后可在package.json中更改

### 4. 在项目中安装webpack、vue等相关插件
```
npm install --save-dev webpack@3,webpack-dev-server@2
npm i --save-dev vue
```
### 5. 在项目根目录下新建“index.html”文件
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>基于webpack3.X的vue开发环境</title>
</head>
<body>
    
</body>
</html>
```
### 6. 在项目根目录下新建“webpack.config.js”配置文件
webpack.config.js
```html
const path = require('path');
const webpack = require('webpack');

module.exports = {
    
}
```
### 7. 在项目根目录下新建“src"文件夹，并在/src下新建“main.js”入口文件
到目前为止，项目目录的整体结构如下：

![webpack-vue-practice01](https://github.com/meilulan/webpack-vue-practice/blob/master/static/img/webpack-vue-practice01.png)

### 8. 在/src文件夹下新建测试js文件“util.js”
util.js
```
export default function say() {
    console.log("hello webpack!!");
}
```

### 9. 在main.js文件中引入util.js文件
main.js
```
import say from './util';
say();
```

## 配置

### 1. 配置webpack.config.js文件
webpack.config.js
```
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',//项目的入口文件
    output: {
        path: path.resolve(__dirname, './dist'),//项目的打包文件目录
        publicPath: '/dist/',//通过devServer访问路径
        filename: 'index.js'//打包后的文件名
    },
    devServer: {
        historyApiFallback: true,//如果找不到界面就返回默认首页index.html
        overlay: true//可以在浏览器打开的页面显示终端编译时产生的错误
    }
}
```

### 2. 配置package.json文件中的"scripts"对象
package.json
```
"scripts": {
    "dev": "webpack-dev-server --open --hot",
    "build": "webpack --progress --hide-modules"
  },
```

### 3. 修改index.html，引入打包后的文件
index.html
```
<body>
    <script src="/dist/build.js"></script>
</body>
```

### 4. 运行项目
```
npm run dev
```
可以发现浏览器自动打开了一个窗口，在浏览器的控制台里输出"hello webpack"
并且可以发现，我们随意修改util.js的文件，浏览器会自动刷新

### 5. 打包项目
```
npm run build
```
可以发现，在项目中自动新建了“/dist/build.js”的路径和文件

## 引入vue

### 1. 在main.js文件中引入vue，并在入口文件index.html中调用vue
main.js
```
import Vue from 'vue';
const vue = new Vue({
    el: "#app",
    data: {
        message:"hello webpack-vue"
    }
});
```

index.html
```
<div id="app">{{message}}</div>
```

### 2. 在webpack.config.js文件中的配置解析vue模块的引用
```
resolve: {//帮组webpack找到bundle中需要引入的模块代码，这些代码包含在每个require/import语句中
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
}
```
webpack.config.js文件的整体配置如下：
```
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',//项目的入口文件
    output: {
        path: path.resolve(__dirname, './dist'),//项目的打包文件目录
        publicPath: '/dist/',//通过devServer访问路径
        filename: 'build.js'//打包后的文件名
    },
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
```

## 引入scss和css
> 注：webpack默认只支持js的模块化，如需其他格式的文件当成模块引入，需要用到webpack的loader解析器

### 1. 在项目中安装css
终端
```
npm install --save-dev css-loader vue-style-loader
```

### 2. 在项目中安装scss
终端
```
npm install --save-dev node-sass sass-loader
```

### 3. 在webpack.config.js的modules中配置css和sass
```
module: {
    rules: [
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
        }
    ]
}
```
webpack.config.js整体配置如下：
```
const path = require('path');
const webpack = require('webpack');

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
            }
        ]
    },
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
```

### 4. 我们做个测试
在src目录下，新建“assets”目录，并在其下新建common.scss文件，写入以下样式
common.scss
```
body {
    color: rgb(0, 128, 0);
}
```
启动后，可以看到浏览器中的文字颜色已改变，说明scss文件已经起作用了