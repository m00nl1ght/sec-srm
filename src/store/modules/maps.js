// import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    cols: 12,
    rows: 8,
    mapCheckedItems: []
})

// getters
const getters = {
    getCols: context => context.cols,
    getRows: context => context.rows,
    getCheckedItems: context => context.mapCheckedItems
}

// actions
const actions = {
    checkedItem(context, checked) {
        if(context.state.mapCheckedItems.indexOf(checked) != -1){
            context.commit('setCheckedItems', context.state.mapCheckedItems.filter((elem) => elem != checked))
        } else {
            context.commit('setCheckedItems', [...context.state.mapCheckedItems, checked])
        }
    }
}

// mutations
const mutations = {
    setCheckedItems(context, arr) {
        context.mapCheckedItems = arr
    },

    resetForm(context) {
        context.mapCheckedItems = []
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}