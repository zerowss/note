// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App'
// import router from './router'
import Home from './pages/Home.vue'
import Detial from './pages/Detail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/detail',
        component : Detial
    }
]

const router = new VueRouter({
    routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data(){
      return {
          transitionName : 'slide'
      }
  },
  watch : {
      '$router'(to,form){
          const toDepth = to.patha.substring(0,to.path.length - 2).split('/').length
          const fromDepth = from.path.substring(0,from.path.length - 2).split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
      }
  }
})
