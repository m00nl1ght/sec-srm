<template>
    <v-form class="px-8 pt-5" @submit.prevent="onSubmit">

        <Contract :contract="contract" @onChange="onChangeElem" />

        <Tz :tz="tz" @onChange="onChangeElem" />

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

        <Datetime :datetime="datetime" @onChange="onChangeElem" @onChangeCheckbox="onChangeCheckbox" />

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
        },

        mapCheckedItems: []

    }),

    methods: {
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
        },

        onChangeCheckbox() {
            this.datetime.weekend.value = !this.datetime.weekend.value
        },

        onChangeMap(e) {
            if(this.mapCheckedItems.indexOf(e) != -1){
                this.mapCheckedItems = this.mapCheckedItems.filter((elem) => elem != e)
            } else {
                this.mapCheckedItems.push(e)
            }
        }
    },  
}
</script>

<style scoped>
    .map-block {
        height: 450px;
    }
</style>


