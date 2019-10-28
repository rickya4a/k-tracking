import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import './assets/style.scss'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

// Create global filters
Vue.filter('formatDate', value => {
  return moment(String(value)).format('MMMM Do YYYY')
})

// axios global config and set HTTP Headers
Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers['Authorization'] = `Bearer ${token}`
}

// Create Vue instance
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');