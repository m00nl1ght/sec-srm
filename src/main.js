import Vue from 'vue'
import {store} from './store'
import App from './App.vue'
import {vuetify} from './plugins/vuetify'
import router from './router/index'

Vue.config.productionTip = false

//axios
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.prototype.$http.defaults.baseURL = 'http://localhost:8000'

const token = localStorage.getItem('access_token')

if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] ='Bearer ' + token
}
//---------

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
