import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '布局',
    },
    // children: [{
    //   path: '/home',
    //   name: 'Home',
    //   component: () => import('@/views/Home'),
    //   meta: {
    //     title: "首页"
    //   }
    // }]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
