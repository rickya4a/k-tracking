import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import './assets/style.scss'
import vueHeadful from 'vue-headful'
import axios from 'axios'
import VueSession from 'vue-session'

Vue.use(VueSession)

Vue.component('vue-headful', vueHeadful)

Vue.config.productionTip = false

Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer' + token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');