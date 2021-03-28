import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import color from './modules/color'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    color,
    user,
  },
  getters,
})

export default store