import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
/*加载翻译插件*/
import 'babel-polyfill'
/*加载过滤器*/
import './filters'
/*处理路由变化要做的事情*/
import './router/router-change'
/*挂载vue原型链上的属性*/
import './vue-prototype'
/*挂载ui插件类*/
import './vue-use-component'
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
})
