export default {
  // ensure data for rendering given list type
  FETCH_USER_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_USER', new Date())
  },

  FETCH_ITEM_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ITEMS', new Date())
  }
}
