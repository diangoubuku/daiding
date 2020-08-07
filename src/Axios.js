import Vue from 'vue'
import store from './Store.js'
import axios from 'axios';
import router from './router'
import $ from 'jquery'


axios.defaults.headers.post['UserType'] = 'agentSysUser';
var logdata = "";
if(localStorage.getItem("logdata") && localStorage.getItem("logdata").length > 10){
  logdata = JSON.parse(localStorage.getItem("logdata"))
}
axios.defaults.headers.post['Authorization'] = logdata.tokenType + logdata.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
      let src = ''
      for (let item in data) {
        src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
      }
      return src
    }]

    
axios.interceptors.response.use((res) => {
  if (res.status === 654) { // 百度云请求超时检测
    window.alert('请求超时！')
  }
//下面的注释仅仅只针对于该项目，别的项目需要打开  
/*  if (res.data.code !== 200) {
    window.alert('数据返回有误')
    return Promise.reject(res)
  }*/
  return res
}, (error) => {
  console.log('promise error:' + error)
  return Promise.reject(error)
})

Vue.prototype.$http = axios;
export default axios