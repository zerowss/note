----
### 主要是记录自己在使用webpack时候经常用到的一些指令，防止忘记
---
基础目录
```
webpack_demo
|--src
|  |--pages
|  |  |--index
|  |  |  |--index.js
|--views_dev
|  |--index.html
|--webpack.config.js
|--package.json
```
生产环境配置
```
$ npm init // 生成项目依赖文件配置 package.json
$ npm install webpack -g // 全局安装webpack
$ cd.> webpack.config.js // 在项目根目录下，新建 webpack.config.js 文件
```
文件配置
1. html页面
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>首页</title>
</head>
<body>
    <div>哈喽，world</div>
    <script src="../asset/dev/main.js"></script>
</body>
</html>
```
2. js文件
```
// src/pages/index/index.js
console.log('I am in index/index.js, haha4');
```
3.webpack 打包配置(webpack.config.js)

```
// webpack.config.js
module.exports = {
// 入口：要进行处理的实例（js）
entry: './src/pages/index/index.js',
// 出口：输出配置
output: {
    // 输出到哪个目录
    path: './asset/dev/',
    // 静态资源的引用路径
    publicpath: '/asset/dev/',
    // 实例最终输出的名字
    filename: '[name].js'
}
};

```
4. 运行 直接在cmd webpack
5. 使用绝对路径
```
// webpack.config.js
module.exports = {
    resolve: {
        // 定义别名
        alias: {
            plugins: 'D:/your/path/webpack_demo/src/plugins'
        }
    }
}
```
注 ：当 require() 的第一单词是 alias 中的，将被匹配。
6. 使用其他类型的问文件
```
// webpack.config.js
module.exports = {
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'babel'
        }]
    }
};
```
7. 文件自动webpack-dev-server
```
npm i webpack-dev-server -D
```
8.webpack -w 文件自动编译
