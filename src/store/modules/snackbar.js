// initial state
const state = () => ({
    text: "",
    color: "",
    timeout: "",
  })

// getters
const getters = {
    getCols: state => state.cols,
    getRows: state => state.rows
}

// actions
const actions = {
    showSnack({ commit }, payload) {
      commit("SHOW_MESSAGE", payload);
    },
  }

// mutations
const mutations = {
    SHOW_MESSAGE(state, payload) {
      state.text = payload.text;
      state.color = payload.color;
      state.timeout = payload.timeout;
    },
  }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
