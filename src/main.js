import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import 'lib-flexible'
import store from "./store";
import { XInput, Group } from 'vux'

Vue.component('x-input', XInput)
Vue.component('group', Group)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
})
