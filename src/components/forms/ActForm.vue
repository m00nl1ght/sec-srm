<template>
    <v-form @submit.prevent="onSubmit">
        <Contract :contract="contract" />

        <Tz :tz="tz" @onChange="onChangeElem" />

        <v-text-field
            label="Наличие ППР/ТК"
        ></v-text-field>

        <Person
            v-bind:person="person.coordinator"
            @onChange="onChangePerson"
        />

        <Person
            v-bind:person="person.representative"
            @onChange="onChangePerson"
        />

        <Firm :firm="firm" @onChange="onChangeElem" />

        <Person
            v-bind:person="person.contractor"
            @onChange="onChangePerson"
        />

        <Work :work="work" @onChange="onChangeElem" />

        <v-date-picker
            v-model="dates"
            range
        ></v-date-picker>

        <CheckboxBlock></CheckboxBlock>

        <v-btn type="submit">Submit</v-btn>
    </v-form>
</template>

<script>
import Contract from './items/Contract'
import Tz from './items/Tz'
import Work from './items/Work'
import Firm from './items/Firm'
import Person from './items/Person'
import CheckboxBlock from './CheckboxBlock'


export default {
  components: { Person, Contract, Tz, Work, Firm, CheckboxBlock},
    data: () => ({
        dates: [],

        contract: {
            number: {label: "Номер договора", name: "contract-number", value:""},
            url: {label: "Ссылка на договор", name: "contract-url", value:""}
        },

        tz: {
            number: {label: "Номер ТЗ", name: "tz-number", value:""},
            url: {label: "Ссылка на ТЗ", name: "tz-url", value:""}
        },

        firm: {
            form: {label: "Форма организации исполнителя", name: "firm-form", value:""},
            name: {label: "Название организации исполнителя", name: "firm-name", value:""}
        },

        work: {
            description: {label: "Описание работ", name: "work-description", value:""},
            place: {label: "Место проведения работ", name: "work-place", value:""}
        },

        person: {
            coordinator: {
                surname: {label: "Фамилия координатора проекта", name: "coordinator-surname", value:""},
                name: {label: "Имя координатора проекта", name: "coordinator-name", value:""},
                patronymic: {label: "Отчество координатора проекта", name: "coordinator-patronymic", value:""},
                position: {label: "Должность координатора проекта", name: "coordinator-position", value:""},
            },

            representative: {
                surname: {label: "Фамилия представителя КЛААС", name: "representative-surname", value:""},
                name: {label: "Имя представителя КЛААС", name: "representative-name", value:""},
                patronymic: {label: "Отчество представителя КЛААС", name: "representative-patronymic", value:""},
                position: {label: "Должность представителя КЛААС", name: "representative-position", value:""},
            },

            contractor: {
                surname: {label: "Фамилия представителя подрядчика", name: "contractor-surname", value:""},
                name: {label: "Имя представителя подрядчика", name: "contractor-name", value:""},
                patronymic: {label: "Отчество представителя подрядчика", name: "contractor-patronymic", value:""},
                position: {label: "Должность представителя подрядчика", name: "contractor-position", value:""},
            }
        }

    }),

    methods: {
        onSubmit() {
            const sendData = {
                person: this.person,
                work: this.work,
                firm: this.firm,
                tz: this.tz,
                contract: this.contract,
                dates: this.dates
            }
        },

        onChangeElem(elem) {
            const strArr = elem.name.split('-')
            this[strArr[0]][strArr[1]].value = elem.value
        },

        onChangePerson(elem) {
            const strArr = elem.name.split('-')

            for (const iterator in this.person) {
                if (iterator == strArr[0]) {
                    for (const item in this.person[iterator]) {
                        if (item == strArr[1]) {
                            this.person[iterator][item].value = elem.value
                        }
                    }
                }

            }
        }
    }
}
</script>


