import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import { Button, ConfigProvider, Menu, message } from 'ant-design-vue'
import startQianKun from './micro/index'
import './mock/mock'

Vue.use(Button)
Vue.use(ConfigProvider)
Vue.use(Menu)
Vue.prototype.$message = message

Vue.config.productionTip = false

// 启动qiankun
startQianKun()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
