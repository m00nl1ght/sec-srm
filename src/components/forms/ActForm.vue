<template>
    <v-form @submit.prevent="onSubmit">
        <v-text-field
            label="Номер договора"
            v-model="contractNumber"
        ></v-text-field>

        <v-text-field
            label="Номер ТЗ"
        ></v-text-field>

        <v-text-field
            label="Наличие ППР/ТК"
        ></v-text-field>

        <Coordinate v-bind:person="coordinator" />

        <Coordinate v-bind:person="representative" />

        <v-text-field
            label="Форма организации исполнителя"
        ></v-text-field>

        <v-text-field
            label="Организация исполнителя"
        ></v-text-field>

        <v-text-field
            label="ФИО представителя подрядчика"
        ></v-text-field>

        <v-text-field
            label="Должность представителя подрядчика"
        ></v-text-field>

        <v-text-field
            label="Описание работ"
        ></v-text-field>

        <v-text-field
            label="Место проведения работ"
        ></v-text-field>

        <v-date-picker
            v-model="dates"
            range
        ></v-date-picker>

        <v-btn type="submit">Submit</v-btn>
    </v-form>
</template>

<script>
import Coordinate from './items/Coordinate'

export default {
  components: { Coordinate },
    data: () => ({
        dates: [],

        contractNumber: "",
        tzNumber: "",

        coordinator: {
            surname: {label: "Фамилия координатора проекта"},
            name: {label: "Имя координатора проекта"},
            patronymic: {label: "Отчество координатора проекта"},
            position: {label: "Должность координатора проекта"},
        },

        representative: {
            surname: {label: "Фамилия представителя КЛААС"},
            name: {label: "Имя представителя КЛААС"},
            patronymic: {label: "Отчество представителя КЛААС"},
            position: {label: "Должность представителя КЛААС"},
        }

    }),

    methods: {
        onSubmit() {
            console.log('submit', this.contractNumber)
        }
    }
}
</script>