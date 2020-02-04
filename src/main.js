import Vue from 'vue'
import App from './App.vue'
import router from "./router"; // Router config
import Bootstrap from 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.Bootstrap = Bootstrap

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


