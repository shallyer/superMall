// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' 
import router from "./router"
import store  from "./store"
 
// 什么是前端渲染 什么是后端渲染
// 后端渲染  jsp/php  jsp=>java server page  服务器直接渲染好页面 返回给客户端显示
// 前后端分离   
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
store,
  components: { App },
  template: '<App/>'
})
