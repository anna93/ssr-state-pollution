export default {
  state: {
    users: {},
  },
  mutations: {
    SET_USER: (state, date) => {
      state.users = date;
    }
  }
}