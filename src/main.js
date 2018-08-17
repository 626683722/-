// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// import VueCountdown from '@xkeshi/vue-countdown';
// Vue.component(VueCountdown.name, VueCountdown);

import './mock/mockServer'

import loading from './commen/img/loading.gif'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading
})

Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
