import Vue from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(bootstrap);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
