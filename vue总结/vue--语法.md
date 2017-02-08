------------------------------
# 语法

- 插值 ：使用｛｛｝｝，双大括号回吧里面的值全部当作字符串来处理，如果值是HTML片段，则可以使用三个大括号来绑定，上代码
```
<div>logo : {{{ logo }}}</div>
logo : '<span>DDFF</span>'
```
- 表达式 ： javascript表达式和过滤器构成。表达式是各种数值、变量、运算符的综合体
```
{{ centes/100 }} 
{{ true ? 1 : 0 }}
{{ example.split(",") }}
```
- 指令 : 带有V-前缀的特殊特性，其值限定为绑定表达式。当表达式的值发生变化时，将这个变化也放映到DOM上

---

# 指令

1. v-if（生成/移除一个元素）
```
<div id="box">
    <p v-if="greeting">hello</p>
</div>
var exm = new Vue({
    el : '#box',
    data : {
        greeting : false
    }
});
```
（因为v-if是一个指令，需要将它添加到一个元素上。但是如果想切换多个元素，则可以把<template> 元素当作包装元素，并在其上使用v-if，最终的渲染结果不会包含他）

```
<div id="example">
    <!-- <p v-if="greeting">hello</p> -->
    <template v-if="greeting">
        <h1>tittle</h1>
        <p>sssssss</p>
        <p>aaaaaaa</p>
    </template>
</div>
var exm = new Vue({
    el : '#example',
    data : {
        greeting : false
    }
});
```

2.v-show (显示/隐藏HTML元素,相当于style = "display:none".注:不支持<template>语法)

```
<div id="box">
    <p v-show="greeting">hello</p>
</div>
var exm = new Vue({
    el : '#box',
    data : {
        greeting : false
    }
});
```
v-if/v-show功能相似，区别在哪：v-if是操作DOM元素，V-show则只是基于css
的切换。v-if有更高的切换消耗，v-show有更高的初始渲染消耗，因此，需要频繁的切换使用v-show，在运行时条件不大可能改变使用v-if。

3.v-else（必须跟着v-if/v-show，才能充当else功能）
```
<div id="box1">
    <p v-if="ok"> wos</p>
    <p v-else="ok">sow</p>
</div>
var box1 = new Vue({
        el : '#box1',
        data : {
            ok : false
        }
    });
    
```
v-show用在组件上时，以为指令的优先级v-sels会有坑，所以不要这样做
```
<div v-show="con"></div>
<p v-else="con"></p>

<!--不要这么做，用如下的方式-->
<div v-show="con"></div>
<p v-show="!con"></p>
```
4.v-model(用来在input/select/text/checkbox/radio等表单控件元素上创建双向数据绑定)

```
<div id="example">
        <form action="#" >
            姓名：<input type="text" v-model="datas.name" placeholder=""><br>
            性别：
            <input type="radio" id="man" value="one" v-model="datas.sex">
            <label for="man">男</label>
            <input type="radio" id="male" value="two" v-model="datas.sex">
            <label for="male">女</label><br>
            兴趣：
            <input type="checkbox" id="book" value="book" v-model="datas.interest">
            <label for="book">阅读</label>
            <input type="checkbox" id="swim" value="swim" v-model="datas.interest">
            <label for="swim">游泳</label>
            <input type="checkbox" id="game" value="game" v-model="datas.interest">
            <label for="game">游戏</label>
            <input type="checkbox" id="song" value="song" v-model="datas.interest">
            <label for="song">唱歌</label><br>
            身份：
            <select  v-model="datas.identity">
                <option value="teacher" >教师</option>
                <option value="doctor" >医生</option>
                <option value="lawyer" >律师</option>
            </select>
        </form>
        <p>姓名：{{ datas.name }}</p>
        <p>性别：{{ datas.sex }}</p>
        <p>兴趣：{{ datas.interest }}</p>
        <p>身份：{{ datas.identity }}</p>
    </div>
    
<script>
     new Vue({
        el:'#example',
        data : {
            datas : {
                name :'',
                sex:'',
                interest :[],
                identity :''
            }
        }
    })
</script>    
```
注意：需要在同一个id下操作

v-model可以设置的参数（修饰符） 
:   number : 将用户的输入自动转换为Number类型，如果原值的转换结果为NaN，则返回原值
:   lazy : 默认，v-model在input事件中同步输入框的值与数据，lazy可以将数据的改变在change事件中发生
:   debounce : 设置一个最小的延时同步输入框的值与数据（vue2.0被废弃）
:   trim 去除出入内容前后空格
```
<body >
    <div id="example">
        <input type="text" v-model.lazy="msg" >
        <p>{{msg}}</p>
    </div>
</body>
<script>
     new Vue({
        el:'#example',
        data : {
            msg : '到底修改了没有'
        }
    })
</script>
```
5.v-for 指令根据一组数组的选项列表进行渲染。 v-for 指令需要以 item in items 形式的特殊语法， items 是源数据数组并且 item 是数组元素迭代的别名。拥有对父作用域属性的完全访问权限
```
<body >
    <div id="example">
        <ul id="demo">
            <li v-for="item in items" >
                {{item.msg}}
            </li>
        </ul>
    </div>
</body>
<script>
     new Vue({
        el:'#demo',
        data : {
            items : [
                {msg:'顺风车'},
                {msg:'专车'}
            ]
        }
    })
</script>
```
v-for还可以设置一个索引值如下（注意是包在()中的，用逗号隔开），可以用 of 替代 in 作为分隔符
```
<body >
    <div id="example">
        <ul id="demo">
            <li v-for="(item, index) of items" >
                {{item.msg}} - {{index}}
            </li>
        </ul>
    </div>
</body>
<script>
     new Vue({
        el:'#demo',
        data : {
            items : [
                {msg:'顺风车'},
                {msg:'专车'}
            ]
        }
    })
</script>
```
同v-if一样template也可以包裹v-for指令

```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>
```
==v-for遍历obj也是一样的不同的是可以设置三个参数分别代表value/key/index==
```
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }} : {{ value }}
</div>
```

v-for 也可以取整数。在这种情况下，它将重复多次模板
```
<div>
  <span v-for="n in 10">{{ n }}</span>
</div>
```
Vue 不能检测以下变动的数组：
:   当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue
:   当你修改数组的长度时，例如： vm.items.length = newLength

替代方法
:   Vue.set(example1.items, indexOfItem, newValue) / example1.items.splice(indexOfItem, 1, newValue)
:   example1.items.splice(newLength)

6.v-text : 更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值.

7. v-html : 更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 .
8. v-bind 动态地绑定一个或多个特性，或一个组件 prop 到表达式。(缩写：)
9. v-on : 勇于绑定事件监听器（缩写@）
-   .stop - 调用 event.stopPropagation()。
-   .prevent - 调用 event.preventDefault()。
-   .capture - 添加事件侦听器时使用 capture 模式。
-   .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
-   .{keyCode | keyAlias}只当事件是从侦听器绑定的元素本身触发时才触发回调。
-   .native - 监听组件根元素的原生事件。
```
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>
<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>
<!-- 缩写 -->
<button @click="doThis"></button>
<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>
<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>
<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>
<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>
<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">
<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">
```

10. v-pre : 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
11. v-cloak : 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
12. v-once : 只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
    
