import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import color from './modules/color'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    color,
  },
  getters,
})

export default store
