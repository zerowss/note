
---
组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展。

1. 基本的创建一个Vue实例就生成一个最基本的组件。要注册一个全局的组件可以使用Vue.component(tagName,options)
```
Vue.component('my-component', {
  // 选项
})
```

2. 组件在注册之后，便可以在父实例的模块中以自定义元素 <my-component></my-component> 的形式使用。要确保在初始化根实例 之前 注册了组件：
```
<div id="example">
  <my-component></my-component>
</div>


// 注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
// 创建根实例
new Vue({
  el: '#example'
})
```
当使用 DOM 作为模版时（例如，将 el 选项挂载到一个已存在的元素上）, 你会受到 HTML 的一些限制，因为 Vue 只有在浏览器解析和标准化 HTML 后才能获取模版内容。尤其像这些元素 <ul> ， <ol>， <table> ， <select> 限制了能被它包裹的元素， <my-row> 只能出现在其它元素内部。变通的方案是使用特殊的 is 属性：
```
<table>
  <tr is="my-row"></tr>
</table>
```
3.使用组件时，大多数可以传入到 Vue 构造器中的选项可以在注册组件时使用，有一个例外： ==data 必须是函数==


```
<body >
    <div id="example">
        <my-exmp></my-exmp>
        <my-exmp></my-exmp>
        <my-exmp></my-exmp>
    </div>
</body>

<script>
    var data = {content : 0};
    Vue.component('my-exmp' , {
        template : '<button @click = "content += 1">{{content}}</button>',
        data : function () {
            return data;
        }
    });
    new Vue({
        el : '#example'
    })
</script>
```
4.在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息
-   Prop
    - 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。
    - prop 是父组件用来传递数据的一个自定义属性。子组件需要显式地用 props 选项声明 “prop”：
- 