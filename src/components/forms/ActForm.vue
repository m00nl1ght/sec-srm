<template>
    <v-form class="px-8 pt-5" @submit.prevent="onSubmit">

        <Contract 
            :title='{ number: "Номер договора", url: "Ссылка на договор"}'
            :value="formData.contract"
            @onChange="onChange"
        />

        <Tz 
            :title='{ number: "Номер ТЗ", url: "Ссылка на ТЗ"}'
            :value="formData.tz"
            @onChange="onChange"
        />

        <Person
            :label='{ name: "Имя координатора проекта", surname: "Фамилия координатора проекта", patronymic: "Отчество координатора проекта", position: "Должность координатора проекта"}'
            :value="formData.coordinator"
            :nameKey="'coordinator'"
            @onChange="onChange"
        />

        <Person
            :label='{ name: "Имя представителя КЛААС", surname: "Фамилия представителя КЛААС", patronymic: "Отчество представителя КЛААС", position: "Должность представителя КЛААС"}'
            :value="formData.representative"
            :nameKey="'representative'"
            @onChange="onChange"
        />

        <Firm 
            :title='{ name: "Название организации исполнителя", form: "Форма организации исполнителя"}'
            :value="formData.firm"
            @onChange="onChange"
        />

        <Person
            :label='{ name: "Имя представителя подрядчика", surname: "Фамилия представителя подрядчика", patronymic: "Отчество представителя подрядчика", position: "Должность представителя подрядчика"}'
            :value="formData.contractor"
            :nameKey="'contractor'"
            @onChange="onChange"
        />

        <Work 
            :title='{ description: "Описание работ", place: "Место проведения работ"}'
            :value="formData.firm"
            @onChange="onChange"
        />

        <Datetime
            :label='{ from_date: "C", till_date: "По", from_time: "C", till_time: "По", weekend: "Включая выходные"}'
            :value="formData.datetime"
            :nameKey="'datetime'"
            @onChange="onChange"
            @onChangeCheckbox="() => this.$store.commit('acts/changeWeekend')" 
        />

        <Maps 
            class="map-block"
            :checkedItems='mapCheckedItems'
            @onChange='onChangeMap'
        /> 

        <CheckboxBlock></CheckboxBlock>

        <SubmitButton />
    </v-form>
</template>

<script>
import Contract from './items/Contract'
import Tz from './items/Tz'
import Work from './items/Work'
import Firm from './items/Firm'
import Person from './items/Person'
import CheckboxBlock from './CheckboxBlock'
import Datetime from './items/Datetime'
import Maps from '@/components/maps/Maps'
import SubmitButton from '@/components/forms/button/SubmitButton'

import {mapState} from 'vuex'


export default {
    components: { Person, Contract, Tz, Work, Firm, CheckboxBlock, Datetime, Maps, SubmitButton },

    data: () => ({
        datetime: {
            from_date: {label: "C", name: "datetime-from_date", value:""},
            till_date: {label: "По", name: "datetime-till_date", value:""},
            from_time: {label: "C", name: "datetime-from_time", value:""},
            till_time: {label: "По", name: "datetime-till_time", value:""},
            weekend: {label: "Включая выхоные", name: "datetime-weekend", value: false}
        },
        mapCheckedItems: []

    }),

    methods: {
        onChange(elem) {
            this.$store.commit('acts/changeForm', {
                name: elem.name,
                value: elem.value
            })
        },
        onSubmit() {
            const sendData = {
                coordinator: {
                    name: this.person.coordinator.name.value, 
                    surname: this.person.coordinator.surname.value,
                    patronymic: this.person.coordinator.patronymic.value,
                    position: this.person.coordinator.position.value
                },

                representative: {
                    name: this.person.representative.name.value, 
                    surname: this.person.representative.surname.value,
                    patronymic: this.person.representative.patronymic.value,
                    position: this.person.representative.position.value
                },

                contractor: {
                    name: this.person.contractor.name.value, 
                    surname: this.person.contractor.surname.value,
                    patronymic: this.person.contractor.patronymic.value,
                    position: this.person.contractor.position.value
                },

                datetime: {
                    from_date: this.datetime.from_date.value,
                    till_date: this.datetime.till_date.value,
                    from_time: this.datetime.from_time.value,
                    till_time: this.datetime.till_time.value,
                    weekend: this.datetime.weekend.value,
                },

                contract: {
                    number: this.contract.number.value,
                    url: this.contract.url.value,
                },

                tz: {
                    number: this.tz.number.value,
                    url: this.tz.url.value,
                },

                firm: {
                    form: this.firm.form.value,
                    name: this.firm.name.value,
                },

                work: {
                    description: this.work.description.value,
                    place: this.work.place.value,
                },

                checkboxes: this.$store.state.checkboxBlock.checkBoxValue,
                map: this.mapCheckedItems,
                
                roles: this.$store.state.user.roles
            }

            this.$http.post('api/act', sendData)      
            .then(res => console.log(res))
        },

        onChangeMap(e) {
            if(this.mapCheckedItems.indexOf(e) != -1){
                this.mapCheckedItems = this.mapCheckedItems.filter((elem) => elem != e)
            } else {
                this.mapCheckedItems.push(e)
            }
        }
    },

    computed: {
        ...mapState('acts', [
            'formData'
        ])
    }
}
</script>

<style scoped>
    .map-block {
        height: 450px;
    }
</style>


