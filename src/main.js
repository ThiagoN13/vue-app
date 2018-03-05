// CSS
import './assets/css/style.css'

import Vue from 'vue'
import Root from './Root.vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'

Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(Root)
}).$mount('#app')

