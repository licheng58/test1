import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/cookie' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 存在token,path为/login时，跳转到首页
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/login',
      })
      NProgress.done()
    } else {
      // 如果path不是login页面，判断路由数组长度，如果为空，发送请求获取权限菜单，如果有权限菜单，就放行
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserRoles').then((res) => {
          // 拉取用户信息
          // console.log(res);

          next()
          // let menus = res.data.menus;
          // let username = res.data.username;
          //   store.dispatch('GenerateRoutes', {
          //     menus,
          //     username
          //   }).then(() => { // 生成可访问的路由表
          //     router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
          //     next({
          //       ...to,
          //       replace: true
          //     })
          //   })
          // }).catch((err) => {
          //   store.dispatch('FedLogOut').then(() => {
          //     Message.error(err || 'Verification failed, please login again')
          //     next({
          //       path: '/'
          //     })
          //   })
        })
      } else {
        // 如果有哦权限参数
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
