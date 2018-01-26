// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/uikit/css/uikit.min.css')
require('./assets/uikit/js/uikit-icons.min.js')
require('./assets/uikit/js/uikit.min.js')

import Vue from 'vue'
import VueRouter from 'vue-router'
import underscore from 'vue-underscore';

import App from './App.vue'
import { routes } from './routing_table'
// import vueKanban from 'vue-kanban'

// Vue.use(vueKanban)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
