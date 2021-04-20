import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import acts from './modules/acts'
import maps from './modules/maps'
import snackbar from './modules/snackbar'
import worker from './modules/worker'
import checkboxBlock from './modules/checkboxBlock'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user,
        acts,
        checkboxBlock,
        maps,
        snackbar,
        worker
    },
})
