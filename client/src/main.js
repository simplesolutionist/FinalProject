import Vue from 'vue'
import App from './App.vue'
import router from './router'
export const bus = new Vue()



import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css//all.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
