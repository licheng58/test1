import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import color from './modules/color'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    color,
    user,
    permission
  },
  getters,
})

export default store