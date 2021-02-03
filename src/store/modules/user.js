// initial state
const state = () => ({
  token: localStorage.getItem('access_token') || null,
  isAuth: false,
  roles: ['user', 'sto'],
  fullname: "Иванов Иван Иванович"
})

// getters
const getters = {}

// actions
const actions = {
  retrieveToken(context, credentials) {
    return new Promise((resolve, reject) => {
      const token = credentials
      console.log(token)

      context.commit('login')
      resolve('success')
      // localStorage.setItem('access_token', token)
      // context.commit('retrieveToken', token)
    })
  },

  logout(context) {
    context.commit('logout')
  }
}

// mutations
const mutations = {
  retrieveToken(state, token) {
    state.token = token
  },

  login(state) {
    state.isAuth = true
  },

  logout(state) {
    state.isAuth = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}