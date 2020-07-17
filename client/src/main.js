import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/base.css'

axios.defaults.baseURL = '/api/'
axios.interceptors.request.use((config) => {
  config.url = 'http://121.36.20.234:3000/' + config.url
  return config
})
Vue.prototype.$axios = axios

Vue.use(ElementUi)
document.title = 'draw'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
