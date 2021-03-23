// import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    cols: 12,
    rows: 8
})

// getters
const getters = {
    getCols: state => state.cols,
    getRows: state => state.rows
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}