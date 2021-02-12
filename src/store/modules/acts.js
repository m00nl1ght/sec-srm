// initial state
const state = () => ({
    acts: [
        {
        checkboxs: {
            build: ['bm1', 'bm3','bs1', 'bs8'],
            warm: [],
            another: []
        },

        dates: ["10-12-2020", "22-12-2020"],
        times: ["9:00", "18:00"],
        weekend: true,

        approvers: {sto: "new", cc: "approve", sd: "disapprove"},

        contract: {
            number: "111",
            url: "ссылка на договор"
        },

        tz: {
            number: "222",
            url: "Ссылка та техническое задание"
        },

        firm: {
            form: "ООО",
            name: "Рога и копыта"
        },

        work: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            place: "Склад сырья, пятый с краю"
        },

        person: {
            coordinator: {
                surname: "Иванов",
                name: "Иван",
                patronymic: "Иванович",
                position: "Руководитерь проекта"
            },

            representative: {
                surname: "Петров",
                name: "Петр",
                patronymic: "Петрович",
                position: "Представитель КЛААС",
            },

            contractor: {
                surname: "Сидоров",
                name: "Сидор",
                patronymic: "Сидорович",
                position: "Представитель подрядчика",
            }
        }

        },
        {
            dates: ["10-12-2020", "22-12-2020"],
            times: ["7:00", "22:00"],
            weekend: false,

            approvers: {sto: "disapprove", cc: "approve", sd: "new"},
            checkboxs: {
                build: ['bm2', 'bm5','bs1', 'bs8'],
                warm: [],
                another: []
            },
    
            contract: {
                number: "111",
                url: "ссылка на договор"
            },
    
            tz: {
                number: "222",
                url: "Ссылка та техническое задание"
            },
    
            firm: {
                form: "ООО",
                name: "Рога и копыта"
            },
    
            work: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                place: "Склад сырья, пятый с краю"
            },
    
            person: {
                coordinator: {
                    surname: "Иванов",
                    name: "Иван",
                    patronymic: "Иванович",
                    position: "Руководитерь проекта"
                },
    
                representative: {
                    surname: "Петров",
                    name: "Петр",
                    patronymic: "Петрович",
                    position: "Представитель КЛААС",
                },
    
                contractor: {
                    surname: "Сидоров",
                    name: "Сидор",
                    patronymic: "Сидорович",
                    position: "Представитель подрядчика",
                }
            }
    
        },
        {
            dates: ["10-12-2020", "22-12-2020"],
            times: ["1:00", "8:00"],
            weekend: false,
            approvers: {sto: "approve", cc: "new", sd: "disapprove"},
            checkboxs: {
                build: ['bm1', 'bm6','bs1', 'bs8'],
                warm: ['wm2'],
                another: []
            },
    
            contract: {
                number: "111",
                url: "ссылка на договор"
            },
    
            tz: {
                number: "222",
                url: "Ссылка та техническое задание"
            },
    
            firm: {
                form: "ООО",
                name: "Рога и копыта"
            },
    
            work: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                place: "Склад сырья, пятый с краю"
            },
    
            person: {
                coordinator: {
                    surname: "Иванов3",
                    name: "Иван3",
                    patronymic: "Иванович3",
                    position: "Руководитерь проекта"
                },
    
                representative: {
                    surname: "Петров3",
                    name: "Петр3",
                    patronymic: "Петрович3",
                    position: "Представитель КЛААС",
                },
    
                contractor: {
                    surname: "Сидоров",
                    name: "Сидор",
                    patronymic: "Сидорович",
                    position: "Представитель подрядчика",
                }
            }
    
        },
    ]
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
        context.commit('changeStatus', props)
    }
  }
  
  // mutations
  const mutations = {
    changeStatus(state, props) {
        console.log(props.roles)
        props.roles.forEach(elem => {
            if(state.acts[props.index].approvers[elem]) {
                console.log(elem)
            }
        })

        // state.acts[props.index].approvers[props.role] = props.status
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }