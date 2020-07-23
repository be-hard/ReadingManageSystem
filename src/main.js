import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/reset.css"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import '@/plugin/element.js'
import axios from "axios"
Vue.config.productionTip = false;
if(process.env.NODE_ENV == 'development') require("@/plugin/mock1.js")
if(process.env.NODE_ENV == 'development') require("@/plugin/mock2.js")

axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/";
axios.interceptors.request.use(config=>{
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})
Vue.prototype.$http = axios;
Vue.directive("focus",{
  inserted(el){
    el.focus()
  }

})
Vue.filter (
  "info", (val) => {
    return val[0].split("/")[0]
  }
)
Vue.filter(
  "nameFilter",(val)=>{
    return val.length > 10 ? val.split("").splice(0,10).join("") + "..." : val
  }
)
 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
