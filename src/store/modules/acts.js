import {HTTP} from '@/plugins/axios'

const state = () => ({
    acts: [],
    formData: {
        contract: {
            number: '',
            url: ''
        },
        tz: {
            number: '',
            url: ''
        },
    }
  })
  
  // getters
  const getters = {
      getactbyid: state => id => {
         return state.acts[id]
      }
  }
  
  // actions
  const actions = {
    changeStatus(context, props) {
        let currentStatus = context.state.acts[props.index].approvers

        props.roles.forEach(elem => {
            if(currentStatus[elem]) {
                let item = {}
                item[elem] = props.status

                currentStatus = {
                    ...currentStatus, ...item
                }
            }
        })

        HTTP.post(
            'api/act/changestatus', 
            {
                currentStatus,
                id: context.state.acts[props.index].id
            },
            {
                headers: {
                    Authorization: 'Bearer ' + context.rootState.user.token
                }
            }
        )
        .then(response => {
            if(response.data === 'success') {
                context.commit('changeStatus', {
                    currentStatus,
                    index: props.index
                })
            }
        })
    },

    addAct(context, data) {
        return new Promise((resolve, reject) => {
            HTTP.post('api/act', data, 
            {
                headers: {
                    Authorization: 'Bearer ' + context.rootState.user.token
                }
            })
            .then(() => resolve('success'))
            .catch(err => console.log(err))
        })

    },

    getActs(context) {
        return new Promise((resolve) => {
            HTTP.get('api/act', {
                headers: {
                  Authorization: 'Bearer ' + context.rootState.user.token
                }
            })
            .then(response => {
                let acts = response.data.map((item) => {
                    return ({
                        id: item.id,
                        approvers: JSON.parse( item.approve.approval ),
                        checkboxs: JSON.parse( item.checkbox.options ),
                        dates: [item.from_date, item.till_date],
                        times: [item.from_time, item.till_time],
                        weekend: item.weekend,
                
                        contract: { number: item.contract_number, url: item.contract_url },
    
                        tz: { number: item.tz_number, url: item.tz_url },
    
                        firm: { form: "ООО", name: item.visitor.firm.name, },
                        work: { description: item.description, place: item.place },
    
                        person: {
                            coordinator: {
                                surname: item.employee[0].surname,
                                name: item.employee[0].name,
                                patronymic: item.employee[0].patronymic,
                                position: item.employee[0].position
                            },
                
                            representative: {
                                surname: item.employee[1].surname,
                                name: item.employee[1].name,
                                patronymic: item.employee[1].patronymic,
                                position: item.employee[1].position
                            },
                
                            contractor: {
                                surname: item.visitor.surname,
                                name: item.visitor.name,
                                patronymic: item.visitor.patronymic,
                                position: item.visitor.position,
                            }
                        },
    
                        maps: JSON.parse( item.map.maps ),
                    })
                })
                context.commit('getActs', acts)

                resolve('success')
            })
        })
    }
  } 
  
  // mutations
  const mutations = {
    changeStatus(state, props) {
        state.acts[props.index].approvers = props.currentStatus
    },

    getActs(state, props) {
        state.acts = props
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }