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
    roles: [],
    username: '',
  },

  mutations: {
    // token
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // roles
    SET_USER: (state, payload) => {
      state.roles = payload
    },
    // username
    SET_USERNAME: (state, payload) => {
      state.username = payload
    },


  },

  actions: {
    // 登录
    Login({
      commit
    }, loginForm) {
      return new Promise((resolve, reject) => {
        loginApi(loginForm)
          .then((res) => {
            const data = res.data
            const token = data.tokenHead + data.token
            setToken(token)
            commit('SET_TOKEN', token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 获取userinfo
    GetUserRoles({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            // console.log(res)
            const data = res.data
            if (data.roles && data.roles.length > 0) {
              commit('SET_USER', data.roles) //权限名称
            } else {
              reject('error=roles')
            }
            commit('SET_USERNAME', data.username) //用户名
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
  },
}

export default user