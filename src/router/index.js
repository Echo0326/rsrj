/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'


//路由模块
import Home from '../pages/home/Home'
import Empty from '../pages/empty/Empty'
import Father from '../pages/test-brother/father'

//声明使用路由
Vue.use(VueRouter);

export default new VueRouter({
  //配置路由
  mode: 'history',
  routes:[
    {
      path:'/',
      component:Home,
      meta:{
        title:"主页",
      }
    },
    {
      path:'/empty',
      component:Empty,
      meta:{
        title:"抱歉,出错了,寻找不到页面",
      }
    },
    {
      path:'/father',
      component:Father
    },
    {
      path:'*',
      redirect:'/empty',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
