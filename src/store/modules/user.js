import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
  token: localStorage.getItem('access_token') || null,
  isAuth: false,
  roles: ['user', 'sto'],
  fullname: "Иванов Иван Иванович"
})

// getters
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.isAuth,
}

// actions
const actions = {
  retrieveToken(context, credentials) {
    return new Promise((resolve, reject) => {
      HTTP.post('api/login', credentials)

      .then(resp => {
        localStorage.setItem('access_token', resp.data.token)

        context.commit('retrieveToken', resp.data.token)
        context.commit('login')

        resolve('success')
      })

      .catch(err => {
        console.log(err)
        reject(err)
      })
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
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}