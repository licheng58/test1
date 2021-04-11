import {
  asyncRouterMap,
  constantRouterMap
} from '@/router/index'

const permission = {
  state: {
    routers: constantRouterMap, //总路由
    addRouters: [] //动态路由
  },

  mutations: {
    ADD_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
      // console.log(state.addRouters);
    }
  },

  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        const {
          menus
        } = data
        const {
          username
        } = data
        // console.log(menus);
        const asyncRouters = [...asyncRouterMap]
        // ....暂时不做权限删选--默认全部有权限
        commit('ADD_ROUTERS', asyncRouters)
        resolve()
      })
    }
  }
}

export default permission