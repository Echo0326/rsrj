import {BASE_API_URL} from './api.root.config'
import md5 from 'blueimp-md5'
import axios from 'axios'
import qs from 'qs'
//request请求
function request(url="", method="GET", data={},isLoading=false ) {
  return new Promise((resolve, reject) => {
    let index,promise
    if (isLoading){index = layer.load(2)}
    if (method==="GET"){
      //get请求拼接字符串
      let dataStr = ''
      //处理url本身带过来的参数
      if (url.indexOf('?')>-1){
        dataStr+=url.split('?')[1]+'&'
        url=url.split('?')[0]
      }
      //拼接data里面的参数
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise=axios.get(BASE_API_URL+url)
    }else {
      promise=axios.post(BASE_API_URL+url,qs.stringify(data))
    }
    promise.then(res => {
      layer.close(index)
      if (res.data.code===100){
        resolve(res.data)
      }else {
        layer.msg(res.data.msg)
        reject(res)
      }
    }).catch(error => {
      layer.close(index)
      layer.msg("请求出错，请稍后再试！")
      reject(error)
    })
  })
}
//get请求
function get(url,isLoading=false) {
  let params=getCode()
  return request(url,"GET", params,isLoading)
}
//post请求
function post(url,data,isLoading=false) {
  let params=getCode()
  if (data){
    params=Object.assign(params,data)
  }
  return request(url,"POST", params,isLoading)
}
function getCode() {
  let timestamp=new Date().valueOf()
  let expires_in=1800
  let secret_key='40809bd2cadc8a1ad40c777fba04bbaa';
  let encryped_str=md5([secret_key,timestamp,expires_in,].join(''))
  return {timestamp,expires_in,encryped_str}
}


export default {
  request,
  get,
  post
}
