// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/app.css'

import './assets/js/jquery.js'
import './assets/js/jquery.flot.js'

//让vue支持vue-resource

import VueResource from 'vue-resource'
Vue.use(VueResource);//支持VueResource这个插件


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
