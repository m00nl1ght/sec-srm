<template>
    <v-list class="row">
        <v-list-item 
            v-for="(item, index) in workers" 
            :key="index"
            :class="classObj(item.approve_doc_status)">

            <v-list-item-content>
                <Toolbar
                    :title="`${item.surname} ${item.name.slice(0, 1)}. ${item.patronymic.slice(0, 1)}.`"
                    :status="item.approve_doc_status"
                    :id="item.id"
                    :actId="actId"
                />

                <v-list-item-subtitle
                    class="text--primary"
                    v-text="'Компания: ' + item.firm"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="'Должность: ' + item.position"></v-list-item-subtitle>

                <ul>
                    <li v-for="(doc, i) in item.files" :key="i">
                        <a target="_blank" :href="filePath + doc.path">{{doc.name}}</a>
                    </li>
                </ul> 
            </v-list-item-content>

        </v-list-item>
    </v-list>
</template>

<script>
import CONFIG from '@/config/config.js'
import Toolbar from '@/components/dashboards/workerItems/Toolbar'

export default {
    components: {Toolbar},
    props: ['actId', 'workers'],

    computed: {
        filePath() {
            return CONFIG.FILE_PATH
        },
    },

    methods: {
        classObj(status) {
            return {
                'approve': status == 'approve',
                'disapprove': status == 'disapprove',
            }
        }
    }
}
</script>

<style scoped>
    .approve{
        background: #DCEDC8;
    }

    .disapprove{
        background: #EF9A9A;
    }
</style>