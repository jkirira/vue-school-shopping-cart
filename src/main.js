import Vue from 'vue'
import App from './App'
import store from "./store";
import currency from "./currency"

Vue.config.productionTip = false
Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
