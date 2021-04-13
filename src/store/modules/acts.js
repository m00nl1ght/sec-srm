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
        firm: {
            form: '',
            name: ''
        },
        work: {
            description: '',
            place: ''
        },
        coordinator: {
            name: '',
            surname: '',
            patronymic: '',
            position: ''
        },
        representative: {
            name: '',
            surname: '',
            patronymic: '',
            position: ''
        },
        contractor: {
            name: '',
            surname: '',
            patronymic: '',
            position: ''
        },
        datetime: {
            from_date: '',
            till_date: '',
            from_time: '',
            till_time: '',
            weekend: false
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
    },

    storeActs(context) {
        return new Promise((resolve) => {
            HTTP.post('api/act', {
                ...context.state.formData,
                map: context.rootState.maps.mapCheckedItems,
                checkboxes: context.rootState.checkboxBlock.checkBoxValue,
                roles: context.rootState.user.roles
            },
            {
                headers: {
                    Authorization: 'Bearer ' + context.rootState.user.token
                }
            })      
            .then(res => {
                if(res.data.status_code == 201) {
                    resolve('success')
                }
            })
        })
    }
  } 
  
  // mutations
  const mutations = {
    changeStatus(context, props) {
        context.acts[props.index].approvers = props.currentStatus
    },

    getActs(context, props) {
        context.acts = props
    },

    changeForm(context, props) {
        const strArr = props.name.split('-')
        const changedItem = context.formData[strArr[0]]

        changedItem[strArr[1]] = props.value
        
        context.formData = {
            ...context.formData, changedItem
        }
    },

    changeWeekend(context) {
        const datetime = context.formData.datetime
        datetime.weekend = !datetime.weekend

        context.formData = {
            ...context.formData, datetime
        }
    },

    resetForm(context) {
        context.formData = {
            contract: {
                number: '',
                url: ''
            },
            tz: {
                number: '',
                url: ''
            },
            firm: {
                form: '',
                name: ''
            },
            work: {
                description: '',
                place: ''
            },
            coordinator: {
                name: '',
                surname: '',
                patronymic: '',
                position: ''
            },
            representative: {
                name: '',
                surname: '',
                patronymic: '',
                position: ''
            },
            contractor: {
                name: '',
                surname: '',
                patronymic: '',
                position: ''
            },
            datetime: {
                from_date: '',
                till_date: '',
                from_time: '',
                till_time: '',
                weekend: false
            },
        }
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }