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
### 7. 在项目更目录下新建“src"文件夹，并在/src下新建“main.js”入口文件
到目前为止，项目目录的整体结构如下：
![webpack-vue-practice01](https://github.com/meilulan/webpack-vue-practice/blob/master/static/img/webpack-vue-practice01.png)
