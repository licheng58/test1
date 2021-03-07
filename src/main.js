import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //路由组件
import '@/permission' //路由配置
import store from "./store";
import '@/icons' //svg文件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");