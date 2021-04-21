import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由组件
import '@/router_permission' //路由配置
import store from './store' //vuex
import '@/icons' //svg文件
import '@/styles/index.scss' //公共样式
import './fonts/iconfont.css' //图标
import drag from './utils/drag' //拖拽
Vue.use(drag)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //element-样式
import './styles/element-variables.scss' //更改主题颜色
// Vue.use(ElementUI) //使用elementUI
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 }) //使用elementUI

const bus = new Vue()
Vue.prototype.$bus = bus

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
