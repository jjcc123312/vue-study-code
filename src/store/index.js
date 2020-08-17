import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modulesA from './modules/modulesA'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 公共状态
    count: 0,
    firstName: '',
    lastName: ''
  },
  mutations,
  actions,
  getters,
  modules: {
    modulesA
  }
})
