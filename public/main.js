// CSS
import './assets/css/style.css'
import './assets/css/reset.css'

import Vue from 'vue'
import Root from './Root.vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale })
Vue.use(Vuex)
Vue.use(VueResource)

new Vue({
  router,
  render: h => h(Root)
}).$mount('#app')

