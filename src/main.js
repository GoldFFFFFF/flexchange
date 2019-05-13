import Vue from 'vue'
import App from './App'
import ajax from '@/global/ajax'
import store from '@/global/store'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$ajax = ajax
const app = new Vue(App)
app.$mount()
