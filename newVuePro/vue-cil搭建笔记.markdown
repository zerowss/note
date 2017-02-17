---
1. 全局安装vue-cli( 如果安装失败，可以使用 npm cache clean 清理缓存，然后再重新安装 )
```
npm install -g vue-cli
```
2. vue-V 查看是否安装成功
    - 此处出现vue不是内部命令的情况，说明全局安装失败，需要查看npm 全局安装目录，我自己的就是npm全局安装目录与环境配置不一致，需要在cmd命令行中查看npm的全局安装目录是哪里，然后进行修改从而保持一致。用‘npm config ls’查看prefix,若不一致，修改用‘npm config set prefix 自己的目录’这个指令

3. 命令行中进入到项目目录
```
vue init webpack myVue
```
myVue 是自定义的项目名称，命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹

4. 配置完成后，可以看到目录下多出了一个项目文件夹，里面就是 vue-cli 创建的一个基于 webpack 的 vue.js 项目,然后进入项目目录（cd myVue），使用 cnpm 安装依赖
```
cnpm install
```
5. 然后启动项目
```
npm run dev
```
6. 自己的项目文件都需要放到 src 文件夹下,项目开发完成之后，可以输入 ```npm run build``` 来进行打包工作,打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看.项目上线时，只需要将 dist 文件夹放到服务器就行了。
