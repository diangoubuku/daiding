// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import FastClick from 'fastclick'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/animate.min.css'
import './assets/css/swiper.min.css'
import './assets/js/bootstrap.min.js'
import './assets/js/swiper.min.js'
import './assets/css/style.css'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client';
let Base64 = require('js-base64').Base64;
import store from './Store.js'//这里的store必须是小写，这问题搞了一天，记住！
import axios from './Axios.js'
import FilterConfig from "./Filter.js"
import Api from "./Api.js"


Vue.prototype.$Api = Api;

Vue.config.productionTip = false
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  axios,
  router,
  components: { App },
  template: '<App/>'
})
