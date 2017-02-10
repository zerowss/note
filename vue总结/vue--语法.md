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
    

---
注意有坑：
1.v-on可以绑定多种类型的方法，但是用v-on绑定多个click事件（即同一类型事件绑定多个方法），就只会绑定第一个事件。
2.vue实例只可以绑定一个元素（el为实例提供挂载元素）
3.记录一个简单的例子，如何让v-for循环出来的列表的click事件只对当前对应的元素有效
```
<body >
    <div >
        <ul id="app">
            <li v-for='item of items' @click='toggle(item)'>
                <span v-show='item.show'>{{item.content}}</span>
            </li>
        </ul>
    </div>
</body>

<script>
    new Vue({
        el:'#app',
        data : function () {
            return {
                items:[
                    {
                        content : '1 item',
                        show : true
                    },
                    {
                        content : '2 item',
                        show : true
                    },
                    {
                        content : '3 item',
                        show : true
                    }
                ]
            }
        },
        methods : {
            toggle : function (item) {
                item.show = !item.show;
            }
        }
    })
</script>
```
**从数据角度出发，定义号数据结构，操作数据**


---
#### 过滤器（本质上都是函数）用 | 进行连接，支持链式调用
- 作用----用于用户输入数据后进行处理，返回一个数据结果
- 可以在任何出现表达式的地方添加过滤器
- 可以接受参数，参数写在过滤器名称后面，以空格分割. 其中过滤器函数始终以表达式的值作为第一个参数，带引号的参数当作字符串处理，布带引号的参数当作是数据属性名称来处理
```
{{ message | filter 'arg1' arg2  }}
```
- 内置过滤器（1.0版本）
    - capitalize 首字母转换为大写形式
    - uppercase 所有字母转换为大写形式
    - lowercase 所有字母转换为小写形式
    - json (JSON.stringify()的简版)将表达式的值转换为JSON字符串，可以接受一个类型为Number的参数，指定缩近距离
    - limitBy 限制==数组==为开始的前N个元素
    - filterBy 按条件在数组中搜索
    - orderBy 返回排序后的数组
    - currency 讲数字值转换为货币形式输出

---
## 自定义过滤器
- 全剧函数 Vue.filter(ID,function(){})
- Vue 2.x 中，过滤器只能在 mustache 绑定和 v-bind 表达式（从 2.1.0 开始支持）中使用，因为过滤器设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换，你应该使用计算属性。
- 可以写在全局也可以写在实例中，采用全局时，需要写在实例化之前。执行顺序有关

---
## 计算属性
1. vue实例中的computed
```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
