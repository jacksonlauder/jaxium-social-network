import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './styles/style.css'
import _ from 'lodash'

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  vuetify,
  _,
  render: h => h(App)
}).$mount('#app')
