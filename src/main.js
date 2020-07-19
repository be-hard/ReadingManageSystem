import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/reset.css"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import '@/plugin/element.js'
import axios from "axios"
Vue.config.productionTip = false
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/"
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
