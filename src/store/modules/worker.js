import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    isModalAddFileActive: false,
    workerId: '',
    workers: []
})

// getters
const getters = {
    isModalAddFileActive: state => state.isModalAddFileActive,
    getWorkers: state => state.workers,
    workerId: state => state.workerId
}

// actions
const actions = {
    openModalAddFile(state, id) {
        state.commit('setWorkerId', id)
        state.commit('modalAddFileToggle')
    },

    closeModalAddFile(state) {
        state.commit('modalAddFileToggle')
    },

    submitModalAddFile(state, file) {
        HTTP.post('/api/worker/' + state.state.workerId,
        file,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(res => {
            state.commit('addFile', {
                id: res.data.id,
                name: res.data.name,
                path: res.data.path
            })
        })
        .catch(err => console.log(err))
    },

    getWorkers(state, actId) {
        return new Promise((resolve, reject) => {
            state.commit('getWorkers', []) //обнуляем карточку рабочих
            HTTP.get('/api/worker/' + actId,
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
            .then(res => {
                state.commit('getWorkers', res.data)
                resolve('success')
            })
            .catch(err => reject(err))
        })
    },

    changeStatus(state, credentials) {
        HTTP.put('/api/worker/' + credentials.id, 
        {
            'key': 'status',
            'status': credentials.status
        },
        {
            headers: {
                Authorization: 'Bearer ' + state.rootState.user.token
            }
        })
        .then(res => state.commit('changeWorkers', res.data))
    },

    deleteWorker(state, credentials) {
        HTTP.post('/api/worker/detach',
        credentials, 
        {
            headers: {
                Authorization: 'Bearer ' + state.rootState.user.token
            }
        })
        .then(res => {
            if(res.data) {
                state.commit('deleteWorker', credentials.id)
            }
        })
    }
}

// mutations
const mutations = {
    setWorkerId(state, id) {
        state.workerId = id
    },

    modalAddFileToggle(state) {
        state.isModalAddFileActive = !state.isModalAddFileActive
    },

    getWorkers(state, credentials) {
        state.workers = credentials
    },

    changeWorkers(state, credentials){
        const index = state.workers.findIndex(item => item.id === credentials.id);
        state.workers[index].approve_doc_status = credentials.approve_doc_status;
    },

    addFile(state, file) {
        state.workers = state.workers.map((worker) => {
            if(worker.id === state.workerId) {
                worker.files.push(file)
            }

            return worker
        })

        state.workerId = null
        state.isModalAddFileActive = false
    },

    deleteWorker(state, id) {
        state.workers = state.workers.filter((item) => item.id !== id)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}