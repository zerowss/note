// webpack.config.js
module.exports = {
    //自定义路径（当require中的第一个单词是alias中的，将被匹配）
    resolve : {
        alias : {
            plugins : 'D:/github/note/newWebpack/webpack_demo/src/plugins'
        }
    },
    module : {
        loaders : [{
            test : /\.css$/,
            loader : 'style!css'
        }]
    },
    // 入口：要进行处理的实例（js）
    entry: './src/page/index/index.js',
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
