import {BASE_API_URL} from './api.root.config'
import md5 from 'blueimp-md5'
import axios from 'axios'
import qs from 'qs'
import {Loading,Message} from 'element-ui'
//request请求
function request(url="", method="GET", data={},isLoading=false ) {
  return new Promise((resolve, reject) => {
    let promise,loadingInstance
    if (isLoading){
      loadingInstance=loading()
    }
    if (method==="GET"){
      promise=axios({method: 'GET', url: BASE_API_URL+url, params:data})
    }else {
      promise=axios({method:'POST',url:BASE_API_URL+url,data:qs.stringify(data)})
    }
    promise.then(res => {
      if (loadingInstance){
        loadingInstance.close()
      }
      if (res.data.code===100){
        resolve(res.data)
      }else if (res.data.msg) {
        Message({message:res.data.msg,type:'error'})
        reject(res.data)
      }else {
        Message({message:"请求出错，请稍后再试！",type:'error'})
        reject(res)
      }
    }).catch(error => {
      if (loadingInstance){
        loadingInstance.close()
      }
      Message({message:"请求出错，请稍后再试！",type:'error'})
      reject(error)
    })
  })
}
//上传文件
function uploadFiles(url="", data={},isLoading=false) {
  return new Promise((resolve, reject) => {
    let promise,loadingInstance
    if (isLoading){
      loadingInstance=loading()
    }
    let params=getAuth()
    data=Object.assign(params,data)
    let formData=new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key,data[key])
    })
    promise=axios({
      headers: { "Content-Type": "multipart/form-data" },
      method: 'POST',
      url:BASE_API_URL+url,
      data:formData
    })
    promise.then(res => {
      if (loadingInstance){
        loadingInstance.close()
      }
      if (res.data.code===100){
        resolve(res.data)
      }else if (res.data.msg) {
        Message({message:res.data.msg,type:'error'})
        reject(res.data)
      }else {
        Message({message:"文件上传失败,请稍后再试！",type:'error'})
        reject(res)
      }
    }).catch(error => {
      if (loadingInstance){
        loadingInstance.close()
      }
      Message({message:"文件上传失败,请稍后再试！",type:'error'})
      reject(error)
    })
  })
}
//loading动画
function loading() {
  return Loading.service({
    text:'努力加载中···',
    spinner:'el-icon-loading',
    background:'rgba(0, 0, 0, 0)',
    customClass:'el-loading-custom'
  })
}
//get请求
function get(url,isLoading=false) {
  let params=getAuth()
  return request(url,"GET", params,isLoading)
}
//post请求
function post(url,data,isLoading=false) {
  let params=getAuth()
  if (data){
    params=Object.assign(params,data)
  }
  return request(url,"POST", params,isLoading)
}
function getAuth() {
  let timestamp=new Date().valueOf()
  let expires_in=1800
  let secret_key='40809bd2cadc8a1ad40c777fba04bbaa';
  let encryped_str=md5([secret_key,timestamp,expires_in,].join(''))
  return {timestamp,expires_in,encryped_str}
}

export default {
  request,
  get,
  post,
  uploadFiles
}
