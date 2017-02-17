---
.vue文件构成一个个我们需要的组件，其中单文件组件由template/style/script组成
    - template
        - 放置组件的html元素的组成部分，是整个组建的模板构成，注意的是template下只能由一个根元素存在
    - style
        - style里的样式表在项目运行的时候会生成一个style标签，插入到index.html的head标签里，如果组件里的style标签为空，则会在index.html的head里插入一个空的style标签，所以，建议大家，这个组件没有用到css，就不要写一个空的style，直接省略就好。
        - style可以设置scoped属性，匹配当前组件的样式，避免冲突
    - script
        - 放置js代码，导出组件，可以通过属性price和title传递数据。
