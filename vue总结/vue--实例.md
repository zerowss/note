
---
### vue响应式原理
- 把一个普通 Javascript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。
- Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
```
var vm = new Vue({
  data:{
  a:1
  }
})
// `vm.a` 是响应的
vm.b = 2
// `vm.b` 是非响应
```
- ue 不允许在已经创建的实例上动态添加新的根级响应式属性(root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上
- 有时你想向已有对象上添加一些属性，但是，添加到对象上的新属性不会触发更新。在这种情况下可以创建一个新的对象，让它包含原对象的属性和新的属性
```
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```
- 由于 Vue 不允许动态添加根级响应式属性，所以你必须在初始化实例前声明根级响应式属性，哪怕只是一个空值.data 对象就像组件状态的概要，提前声明所有的响应式属性，可以让组件代码在以后重新阅读或其他开发人员阅读时更易于被理解。

---
## 过渡
- Vue 提供了 transition 的封装组件，将需要过渡动画的元素放到transition标签里
- 有4个css类名（在style中自己设置需要改变的css样式）,v-只是vue默认的前缀可以通过transition中的name属性自定义,<transition name="my-transition">
    - v-enter :  定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
    - v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。
    - v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
    - v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。

---
render 函数
```
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```
1.  render必须return一个HTML标签，组件选项，或者一个函数
2.  creatElement参数
    - creatElement('一个HTML标签，组件选项，或者一个函数'，{一个对应属性的数据对象}，[子节点])
    - 其中子节点必须唯一
3. render函数中使用javascript自带的方法
4. 使用jsx语法
```
new Vue({
  el: '#demo',
  render (h) {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
})
```

---
### 函数化组件
1. 在自定义组件中标记组件为functional，意味着没有data，没有实例(this).
```
Vue.component('my-component', {
  functional: true,
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function (createElement, context) {
    // ...
  },
  // Props 可选
  props: {
    // ...
  }
})
```
2. 组件需要的一切都是通过上下文传递
    -  props：提供props的对象
    - children ： VNode子节点的数组
    - slots ：slots对象
    - parent ： 对父组件的引用
    - data:传递给组建的data对象
3. 在添加functional：true之后，render函数增加contex参数，this.$slots.default更新为context.children,this.leve更新为context.props.level


---
### 自定义指令
```
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
/*
也可以注册局部指令，组件中接受一个 directives 的选项：*/

directives: {
  focus: {
    // 指令的定义---
  }
}

```

1. 可用的钩子函数
    - bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
    - inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
    - update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
    - componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
    - unbind: 只调用一次， 指令与元素解绑时调用。
2. 钩子函数被赋予了以下参数：
    - el: 指令所绑定的元素，可以用来直接操作 DOM 。
    - binding: 一个对象，包含以下属性：
        - name: 指令名，不包括 v- 前缀。
        - value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。
        - oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
        - expression: 绑定值的字符串形式。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。
        - arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。
        - modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
    - vnode: Vue 编译生成的虚拟节点
    - oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
 3. 如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法类型的 Javascript 表达式。
 ```
 <body >
     <div v-demo="{color:'red'}" id="app">
         {{message}}
     </div>
 </body>
 <script>
     Vue.directive('demo',function(el,binding){
         el.style.backgroundColor = binding.value.color;

     })
     new Vue({
         el:'#app',
         data :{
             message : 'hello word'
         }
     })
 </script>
 ```
---
#### 插件
1. Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器 , 第二个参数是一个可选的选项对象:
```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (options) {
    // 逻辑...
  }
}
```

2. 使用插件，通过全局方法 Vue.use() 使用插件:
```
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)
```

```
// 通过 Browserify 或 Webpack 使用 CommonJS 兼容模块
var Vue = require('vue')
var VueRouter = require('vue-router')
// 不要忘了调用此方法
Vue.use(VueRouter)
```
