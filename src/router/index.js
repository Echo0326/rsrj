/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'


//路由模块
import HomeRouter from '../pages/home/homeRouter'
import ProductRouter from "../pages/product/productRoute"
import ServiceRouter from "../pages/service/serviceRoute"
import AboutUsRoute from "../pages/aboutUs/aboutUsRoute"
import ContactUsRoute from "../pages/contactUs/contactUsRoute"
import EmptyRouter from '../pages/empty/emptyRouter'

//声明使用路由
Vue.use(VueRouter);

export default new VueRouter({
  //配置路由
  mode: 'history',
  routes:[
    ...HomeRouter,
    ...ProductRouter,
    ...ServiceRouter,
    ...AboutUsRoute,
    ...ContactUsRoute,
    ...EmptyRouter
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
