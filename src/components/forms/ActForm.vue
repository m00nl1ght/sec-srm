<template>
    <v-form 
        class="px-8 pt-5" 
        @submit.prevent="onSubmit"
        ref="form"
        v-model="valid"
    >

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
            :checkedItems='mapChecked'
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

import {mapState, mapActions} from 'vuex'


export default {
    components: { Person, Contract, Tz, Work, Firm, CheckboxBlock, Datetime, Maps, SubmitButton },

    data: () => ({
        valid: true,
    }),

    methods: {
        ...mapActions("snackbar", ["showSnack"]),

        onChange(elem) {
            this.$store.commit('acts/changeForm', {
                name: elem.name,
                value: elem.value
            })
        },
        onSubmit() {
            if(this.$refs.form.validate()) {
                this.$store.dispatch('acts/storeActs')
                .then(res => {
                    if(res == 'success') {
                        this.showSnack({
                            text: "Данные успешно сохранены!",
                            color: "success",
                            timeout: 3500,
                        })

                        this.$router.push({ name: 'home'})
                    }
                })
            } else {
                this.showSnack({
                    text: "Данные заполненны некорректно!",
                    color: "error",
                    timeout: 3500,
                });
            }
        },

        onChangeMap(checked) {
            this.$store.dispatch('maps/checkedItem', checked)
        }
    },

    computed: {
        ...mapState('acts', [
            'formData'
        ]),

        mapChecked: {
            get() {
                return this.$store.getters['maps/getCheckedItems']
            },
            set(value) {
                this.$store.dispatch('maps/checkedItem', value)
            }
        }
    }
}
</script>

<style scoped>
    .map-block {
        height: 450px;
    }
</style>


