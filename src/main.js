import Vue from 'vue'
import App from './Root.vue'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
