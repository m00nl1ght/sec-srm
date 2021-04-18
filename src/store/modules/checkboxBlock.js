import {HTTP} from '@/plugins/axios'

// initial state
const state = () => ({
    actions: [],

    checkboxValue: {
        build: [],
        warm: [],
        another: []
    },

    checkboxHead: {
        build: 'Строительно-монтажные работы',
        warm: 'Тепловые установки',
        another: 'Другое'
    },

    checkboxArrMain: {
        build: {
        bm1: 'Строительство',
        bm2: 'Монтаж',
        bm3: 'Ввод в эксплуатацию',
        bm4: 'Капитальный ремонт',
        bm5: 'Консервация',
        bm6: 'Реконструкция',
        bm7: 'Утилизация(снос)-Демонтаж',
        },

        warm: {
        wm1: 'Монтаж',
        wm2: 'Тех. обслуживание',
        wm3: 'Ремонт',
        wm4: 'Демонтаж',
        },

        another: {
        am1: 'Размещение',
        am2: 'Монтаж',
        am3: 'Тех. обслуживание',
        am4: 'Ремонт',
        am5: 'Демонтаж',
        },
    },

    checkboxArrSub: {
        build: {
        bs1: 'Разборка зданий и сооружений при их реконструкции или сносе',
        bs2: 'Земляные работы',
        bs3: 'Устройство искуственных оснований и буровые работы',
        bs4: 'Бетонные работы',
        bs5: 'Монтажные работы',
        bs6: 'Каменные работы',
        bs7: 'Отделочные работы',
        bs8: 'Заготовка и сборка деревянных контрукций',
        bs9: 'Изоляционные работы',
        bs10: 'Кровельные работы',
        bs11: 'Монтаж инженерного оборудования зданий и сооружений',
        bs12: 'Испытание смонтированного оборудования и трубопроводов',
        bs13: 'Электромонтажные и наладочные работы',
        bs14: 'Работы по проходке горных выработок',
        },
        warm: {},
        another: {}
    }
})

// getters
const getters = {
    getActions: state => deadline => {
        return state.actions.filter(item => item.deadline == deadline)
    }
}

// actions
const actions = {
    changedForm(context, credentials) {
        let item = {}
        item[credentials.index] = credentials.value
        context.commit('changedForm', item)
    },

    getActions(context, credentials) {
        HTTP.post('api/getsafetyaction', credentials)
        .then(res => {
            if(res.status == 200) {
                context.commit('setActions', res.data)
            }
        })
    }
}

// mutations
const mutations = {
    changedForm(state, item)  {
        state.checkboxValue = {...state.checkboxValue, ...item}
    },

    resetForm(context) {
        context.checkboxValue = {
            build: [],
            warm: [],
            another: []
        }
    },

    setActions(context, data) {
        context.actions = data
    },

    setCheckboxValue(context, data) {
        context.checkboxValue = data
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}