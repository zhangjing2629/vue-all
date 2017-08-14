import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import routerConfig from './assets/js/router.config.js';

import axios from "axios";

import './assets/css/base.css';
import './assets/css/index.css';
// import './assets/css/mydoc.css';

import store from "./store/index.js";

Vue.prototype.$http = axios;

Vue.use(VueRouter);

var router = new VueRouter({
  routes:routerConfig,
  mode:"history",
  scrollBehavior:function(){
      y:0;
  }

});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

});
