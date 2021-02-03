import Vue from 'vue'
import {store} from './store'
import App from './App.vue'
import {vuetify} from './plugins/vuetify'
import router from './router/index'


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
