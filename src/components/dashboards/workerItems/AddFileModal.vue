<template>
    <v-row justify="center">
        <v-dialog
            :value="this.isOpen"
            persistent
            max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Добавить файл</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"

                            >
                                <v-file-input
                                    accept="image/*"
                                    label="File input"
                                    v-model="files"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="blue darken-1"
                        text
                        @click="() => this.$store.dispatch('worker/closeModalAddFile')"
                    >
                        Закрыть
                    </v-btn>

                    <v-btn
                        color="blue darken-1"
                        text
                        :disabled="disabled"
                        @click="onSubmit"
                    >
                        Добавить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        files: [],
        disabled: false
    }),

    methods: {
        onSubmit() {
            this.disabled = true
            setTimeout(() => this.disabled = false, 3000)

            let data = new FormData()
            data.append('file', this.files)
            data.append('keys', 'file')

            this.$store.dispatch('worker/submitModalAddFile', data)
        }
    },

    computed: {
        isOpen() {
            return this.$store.getters['worker/isModalAddFileActive']
        }
    }
}
</script>