export default {
  state: {
    items: {}
  },
  mutations: {
    SET_ITEMS: (state, date) => {
      state.items = date;
    }
  }
}