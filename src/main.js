// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/uikit/css/uikit.min.css')
require('./assets/uikit/js/uikit-icons.min.js')
require('./assets/uikit/js/uikit.min.js')
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import underscore from 'vue-underscore';
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";


import App from './App.vue'
import { routes } from './routes'
// import vueKanban from 'vue-kanban'

// Vue.use(vueKanban)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFormGenerator);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
