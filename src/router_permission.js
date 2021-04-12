import router from './router/index'
import store from '@/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/cookie' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // console.log(to);
  NProgress.start()
  // 存在token
  if (getToken()) {
    // 1-path为/login时，跳转到首页
    if (to.path === '/login') {
      next({
        path: '/',
      })
      NProgress.done()
    } else {
      // 2-store中权限数组不为空-放行 ，如果为空，获取数据，如果执行刷新 ，那么store路由为空，此时需要重新添加路由
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserRoles').then((res) => {
          let menus = res.data.menus //路由数组
          let username = res.data.username //用户名
          store
            .dispatch('GenerateRoutes', {
              menus,
              username,
            })
            .then(() => {
              // 动态添加路由
              router.addRoutes(store.getters.addRouters)
              router.options.routes = router.options.routes.concat(
                store.getters.addRouters,
              )
              next({
                ...to,
                replace: true,
              })
            })
        })
      } else {
        next()
      }
    }
  } else {
    // 如果没有token，如果是login页面就放行，否者就跳转到登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
