import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '',
    redirect: '/home',
    component: () => import('../views/layout/layout.vue'),
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页',
        icon: 'icon-yonghu'
      },
    }, ],
  },

  {
    path: '/pro',
    redirect: '/pro/pro_list',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '商品',
      icon: 'icon-yonghu'
    },
    children: [{
      path: '/pro_list',
      name: 'pro_list',
      component: () => import('@/views/pro/proList/proList.vue'),
      meta: {
        title: '商品列表',
        icon: 'icon-yonghu'
      },
    }, ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router