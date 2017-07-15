import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import users from './users.js'
import items from './items.js'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      items,
      users
    },
    actions,
    mutations,
    getters,
    strict: true
  })
}
