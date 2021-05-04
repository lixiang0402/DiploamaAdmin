import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import './http/api.js'

Vue.mixin({
  computed: {
    uploadUrl() {
      return 'http://localhost:3333/upload'
    },
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token}`,
      }
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
