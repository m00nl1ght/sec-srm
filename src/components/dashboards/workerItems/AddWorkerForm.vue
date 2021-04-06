<template>
    <v-form @submit.prevent="onSubmit">
        <div class="row mt-4 mb-5 worker" v-for="item in basic" :key="item.id">
            <div class="col-3 py-0">
                <v-text-field label="Фамилия" v-model="item.surname"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Имя" v-model="item.name"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Отчество" v-model="item.patronymic"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Должность" v-model="item.position"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Организация" v-model="item.firm"></v-text-field>
            </div>

            <div class="col-9 py-0">
                <v-file-input
                    small-chips
                    multiple
                    label="Прикрепить документы"
                    v-model="item.files"
                ></v-file-input>
            </div>
        </div>

        <div class="d-flex justify-space-between align-center mt-2"> 
        <SubmitButton />

        <AddCircleButton 
            @onClick="addRow"
        />
        </div>
    </v-form>

</template>

<script>
import AddCircleButton from '@/components/forms/button/AddCircleButton'
import SubmitButton from '@/components/forms/button/SubmitButton'
import { mapActions } from 'vuex'

export default {
    components: {AddCircleButton, SubmitButton},
    props: ['actId'],

    data () {
        return {
            id: 1,
            basic: [{ surname: "", name: "", patronymic: "", position: "", firm: "", files: [] }]
        }; 
    },

    methods: {
        ...mapActions("snackbar", ["showSnack"]),
        saveDetails() {
            this.showSnack({
                text: "Данные успешно сохранены!",
                color: "success",
                timeout: 3500,
            });
        },

        addRow() {
                this.id += 1;
                this.basic.push({
                    surname: "", 
                    name: "",
                    patronymic: "",
                    position: "",
                    firm: "",
                    files: []
                });
        },

        onSubmit() {
            let data = new FormData()
            data.append('actId', this.actId)

            this.basic.forEach((item, index) => {
               data.append(index + '-name', item.name)
               data.append(index + '-surname', item.surname)
               data.append(index + '-patronymic', item.patronymic)
               data.append(index + '-position', item.position)
               data.append(index + '-firm', item.firm)
               item.files.forEach((file, i) => {
                   data.append(index + '-files[' + i + ']', file)
               })
            })

            this.$http.post('api/worker', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })      
            .then(() => {
                this.id = 1
                this.basic = [{ surname: "", name: "", patronymic: "", position: "", firm: "", files: [] }]
                this.saveDetails()
                this.$emit('getWorkers', this.actId)
            })
        },

    }
}
</script>

<style scoped>
    .worker {
        background: #F1F8E9;
    }
</style>