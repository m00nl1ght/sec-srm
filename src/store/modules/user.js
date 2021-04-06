import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
  token: localStorage.getItem('access_token') || null,
  authStatus: null,
  roles: [],
  fullname: "",

  ACT_ROLES: ['sto', 'cc', 'sd']
})

// getters
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.isAuth,
  token: state => state.token,
  checkRole: state => role => state.roles.includes(role),
  actRole: state => {
    let result = state.ACT_ROLES.filter(v1 => {
      return state.roles.some(v2 => v1 == v2)
    })
    
    return result
  }
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
    localStorage.removeItem('access_token')
    context.commit('logout')
  },

  getUser(context){
    HTTP.post('api/getuser', null, {
      headers: {
        Authorization: 'Bearer ' + context.state.token
      }
    })
    .then(response => {
      context.commit('setUser', response)
    })
  }
}

// mutations
const mutations = {
  retrieveToken(state, token) {
    state.token = token
  },

  login(state) {
    state.authStatus = 'login'
  },

  logout(state) {
    state.authStatus = 'logout'
    state.token = null
  },

  setUser(state, credentials) {
    state.roles = credentials.data.roles,
    state.fullname = credentials.data.name
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}