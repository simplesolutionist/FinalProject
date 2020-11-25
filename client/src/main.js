import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export const bus = new Vue()


import StarRating from 'vue-star-rating'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'

Vue.component('star-rating', StarRating);

Vue.use(BootstrapVue);
Vue.config.productionTip = false


import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css//all.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
