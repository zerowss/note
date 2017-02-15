---
### 全局配置（Vue.config）
1.silent(是否显示所有的日志和警告)
```
Vue.config.silent = true;
```
2. keyCodes(为v-on自定义键位别名)
```
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  mediaPlayPause: 179,
  up: [38, 87]
}
```
---
### 全局API
1. Vue.extend(options)->创建一个‘子类’。需要注意的是data在这里必须是函数
2. Vue.nextTick([callback,context])->在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
3. Vue.directive(id,[definition])->注册或获取全局指令
4. Vue.filter(id,[definition])->注册或获取全局过滤器
5. Vue.component(id,[definition])->注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
6. Vue.use(plugin)->调用插件
7.Vue.mixin(mixin)->全局注册一个混合
8. Vue.compile(template)->在render函数中编译模版字符串，只在独立构建时有效。
```
var res = Vue.compile('<div><span>{{ msg }}</span></div>')
new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```
### 选项、数据
1. data
    - 实例创建之后，可以通过 vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的属性，因此访问 vm.a 等价于访问 vm.$data.a。
    - 以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、 API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性。
    - 注意，不应该对 data 属性使用箭头函数 (例如data: () => { return { a: this.myProp }})。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.myProp 将是 undefined。
2. props
    - props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
3. computed (计算属性)
4. methods （方法事件预处理）

---
### /dom
1. el 在实例挂载之后， 元素可以用 vm.$el 访问。
2. template 如果值以 # 开始，则它用作选项符，将使用匹配元素的 innerHTML 作为模板。常用的技巧是用 <script type="x-template"> 包含模板。
3. render 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。render 函数接收一个 createElement 方法作为第一个参数用来创建 VNode。

如果组件是一个函数组件，Render 函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。
