//挂着vue原型链上的属性
import Vue from 'vue'
import api from '../api/api'
import * as baseUrl from '../api/api.root.config'
Vue.config.productionTip = false
Vue.prototype.$api=api
Vue.prototype.$baseUrl=baseUrl
console.log(process.env)
