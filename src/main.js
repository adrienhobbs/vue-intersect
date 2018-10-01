import Vue from 'vue'
import App from './App.vue'
import VueIntersect from './lib/index'

Vue.use(VueIntersect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
