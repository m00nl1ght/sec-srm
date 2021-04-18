<template>
    <v-form @submit.prevent="onSubmit" ref="form">
        <div class="row mt-4 mb-5 worker" v-for="item in basic" :key="item.id">
            <div class="col-3 py-0">
                <v-text-field label="Фамилия" v-model="item.surname" :rules="[rules.required, rules.counter]"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Имя" v-model="item.name" :rules="[rules.required, rules.counter]"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Отчество" v-model="item.patronymic" :rules="[rules.required, rules.counter]"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Должность" v-model="item.position" :rules="[rules.required]"></v-text-field>
            </div>

            <div class="col-3 py-0">
                <v-text-field label="Организация" v-model="item.firm" :rules="[rules.required]"></v-text-field>
            </div>

            <div class="col-9 py-0">
                <v-file-input
                    accept="image/*, .pdf"
                    small-chips
                    multiple
                    label="Прикрепить документы"
                    v-model="item.files"
                ></v-file-input>
            </div>
        </div>

        <div class="d-flex justify-end align-center mt-2"> 
        <!-- <SubmitButton /> -->

        <!-- <AddCircleButton 
            @onClick="addRow"
        /> -->
        <SubmitCircleButton />
        </div>
    </v-form>

</template>

<script>
import AddCircleButton from '@/components/forms/button/AddCircleButton'
import SubmitButton from '@/components/forms/button/SubmitButton'
import SubmitCircleButton from '@/components/forms/button/SubmitCircleButton'
import { mapActions } from 'vuex'

export default {
    components: {AddCircleButton, SubmitButton, SubmitCircleButton},
    props: ['actId'],

    data () {
        return {
            id: 1,
            basic: [{ surname: "", name: "", patronymic: "", position: "", firm: "", files: [] }],
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length > 1 || 'Write full name'
            },
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
            if(this.$refs.form.validate()) {
                this.$store.dispatch('worker/addWorker', { actId: this.actId, basic: this.basic })
                .then((res) => {
                    if(res == 'success') {
                        this.id = 1
                        this.basic = [{ surname: "", name: "", patronymic: "", position: "", firm: "", files: [] }]
                        this.saveDetails()
                    }
                })
            }
        },

    }
}
</script>

<style scoped>
    .worker {
        background: #F1F8E9;
    }

</style>