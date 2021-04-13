import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    isModalAddFileActive: false,
    workerId: '',
    workers: {}
})

// getters
const getters = {
    isModalAddFileActive: state => state.isModalAddFileActive,
    getWorkers: state => actId => state.workers[actId],
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

    submitModalAddFile(state, { file, actId }) {
        let data = new FormData()
        data.append('file', file)
        data.append('keys', 'file')

        HTTP.post('/api/worker/' + state.state.workerId,
        data,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type': 'multipart/form-data'
            },
        })
        .then(res => {
            state.commit('addFile', {
                file: {
                    id: res.data.id,
                    name: res.data.name,
                    path: res.data.path
                },
                actId
            })
        })
        .catch(err => console.log(err))
    },

    addWorker(context, {actId, basic}) {
        return new Promise((resolve) => {
            let data = new FormData()
            data.append('actId', actId)
    
            basic.forEach((item, index) => {
                data.append(index + '-name', item.name)
                data.append(index + '-surname', item.surname)
                data.append(index + '-patronymic', item.patronymic)
                data.append(index + '-position', item.position)
                data.append(index + '-firm', item.firm)
                item.files.forEach((file, i) => {
                    data.append(index + '-files[' + i + ']', file)
                })
            })
    
            HTTP.post('api/worker', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                },
            })
            .then(res => {
                if(res.status == 200) {
                    context.dispatch('getWorkers', actId)
                    resolve('success')
                }
            })
        })
    },

    getWorkers(state, actId) {
        return new Promise((resolve, reject) => {
            // state.commit('getWorkers', []) //обнуляем карточку рабочих
            HTTP.get('/api/worker/' + actId,
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
            .then(res => {
                state.commit('getWorkers', { data: res.data, actId })
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
        .then(res => state.commit('changeWorkers', { data: res.data, actId: credentials.actId }))
    },

    deleteWorker(state, {id, actId}) {
        HTTP.post('/api/worker/detach',
        { actId }, 
        {
            headers: {
                Authorization: 'Bearer ' + state.rootState.user.token
            }
        })
        .then(res => {
            if(res.data) {
                state.commit('deleteWorker', { id, actId })
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

    getWorkers(state, { data, actId }) {
        state.workers = {...state.workers, [actId]: data}
    },

    changeWorkers(state, { data, actId}){
        const index = state.workers[actId].findIndex(item => item.id === data.id);
        state.workers[actId][index].approve_doc_status = data.approve_doc_status;
    },

    addFile(state, {file, actId}) {
        // state.workers = state.workers.map((worker) => {
        //     if(worker.id === state.workerId) {
        //         worker.files.push(file)
        //     }

        //     return worker
        // })
        let item = state.workers[actId].map((worker) => {
            if(worker.id === state.workerId) {
                worker.files.push(file)
            }

            return worker
        })

        state.workers = {...state.workers, [actId]: item}
        state.workerId = null
        state.isModalAddFileActive = false
    },

    deleteWorker(state, { id, actId }) {
        state.workers = state.workers[actId].filter((item) => item.id !== id)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}