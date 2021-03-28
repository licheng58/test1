import {
  loginApi,
  getUserInfo
} from '@/views/login/api'
import {
  setToken,
  getToken,
  removeToken
} from '@/utils/cookie'
const user = {
  state: {
    token: getToken(),
    roles: []
  },

  mutations: {
    // token
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // roles
    SET_USER: (state, payload) => {
      state.roles = payload
    }

  },

  actions: {
    // 登录
    Login({
      commit
    }, loginForm) {
      return new Promise((resolve, reject) => {
        loginApi(loginForm).then(res => {
          const data = res.data;
          const token = data.tokenHead + data.token
          setToken(token)
          commit('SET_TOKEN', token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },


    // 获取userinfo
    GetUserRoles({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          console.log(res);
          const roles = res.data.roles
          commit('SET_USER', roles)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })

    }
  }
}

export default user