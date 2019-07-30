//挂着vue原型链上的属性
import Vue from 'vue'
import PubSub from 'pubsub-js'
import api from '../api/api'
import * as baseUrl from '../api/api.root.config'
import {Loading,MessageBox,Notification,Message} from 'element-ui'
Vue.config.productionTip = false
Vue.prototype.$api=api
Vue.prototype.$baseUrl=baseUrl
Vue.prototype.$pubSub=PubSub
Vue.prototype.$loading=Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
console.log(process.env)
