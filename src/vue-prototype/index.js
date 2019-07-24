//挂着vue原型链上的属性
import Vue from 'vue'
import PubSub from 'pubsub-js'
import api from '../api/api'
import * as baseUrl from '../api/api.root.config'
Vue.config.productionTip = false
Vue.prototype.$api=api
Vue.prototype.$baseUrl=baseUrl
Vue.prototype.$PubSub=PubSub
console.log(process.env)
