import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    title: '登录',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/404',
    title: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '',
    redirect: '/home',
    icon: 'icon-yonghu',
    title: '首页',
    component: () => import('../views/layout/layout.vue'),
    children: [{
      path: '/home',
      name: 'Home',
      icon: 'icon-yonghu',
      title: '首页',
      component: () => import('@/views/home/home'),
      meta: {
        title: '首页',
      },
    }, ],
  },

  {
    path: '/pro',
    redirect: '/pro/pro_list',
    icon: 'icon-yonghu',
    title: '商品',
    component: () => import('../views/layout/layout.vue'),
    meta: {
      title: '商品',
    },
    children: [{
      path: '/pro_list',
      name: 'pro_list',
      icon: 'icon-yonghu',
      title: '商品列表',
      component: () => import('@/views/pro/proList/proList.vue'),
      meta: {
        title: '商品列表',
      },
    }, ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router