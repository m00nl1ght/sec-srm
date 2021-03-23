<template>
    <v-list class="row">
        <v-list-item 
            v-for="(item, index) in workers" 
            :key="index"
            class="list-item mb-2">
            
            <v-list-item-content>
                <v-list-item-title 
                    v-text="`${item.surname} ${item.name.slice(0, 1)}. ${item.patronymic.slice(0, 1)}.`">
                </v-list-item-title>

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.firm"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.position"></v-list-item-subtitle>

                <ul>
                    <li v-for="(doc, i) in item.files" :key="i">
                        <a :href="filePath + doc.path">{{doc.name}}</a>
                    </li>
                </ul> 
            </v-list-item-content>

            <v-list-item-action>
                <v-btn>
                    <v-icon
                    color="grey lighten-1"
                    >
                    mdi-trash-can-outline
                    </v-icon>
                </v-btn>

            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
import CONFIG from '@/config/config.js'

export default {
    props: ['actId', 'workers'],

    mounted(){
        this.$emit('getWorkers', this.actId)
    },

    computed: {
        filePath() {
            return CONFIG.FILE_PATH
        }
    }
}
</script>

<style scoped>
    .list-item{
        background: #DCEDC8;
    }
</style>