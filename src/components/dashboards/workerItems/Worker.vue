<template>
    <v-row>    
        <ProgressLine :active="active"/>

        <ActWorkerCard 
            :workers='workers'
            :actId='actId' 
        />

        <AddWorkerForm
            :actId='actId'
            @getWorkers='getWorkers' 
        />
        
        <AddFileModal />
    </v-row>
</template>

<script>
import AddWorkerForm from '@/components/dashboards/workerItems/AddWorkerForm'
import ActWorkerCard from '@/components/dashboards/workerItems/ActWorkerCard'
import AddFileModal from '@/components/dashboards/workerItems/AddFileModal'
import ProgressLine from '@/components/app/ProgressLine'

// import {HTTP} from '@/plugins/axios'

export default {
    props: ['actId'],
    components: {AddWorkerForm, ActWorkerCard, AddFileModal, ProgressLine},

    data: () => ({
        active: true
    }),

    methods: {
        getWorkers() {
            this.active = false
            this.$store.dispatch('worker/getWorkers', this.actId)
            .then(res => {
                if(res == 'success') {
                    this.active = false
                }
            })
        }
    },

    computed: {
        workers() {
            return this.$store.getters['worker/getWorkers']
        }
    },

    mounted() {
        this.$store.dispatch('worker/getWorkers', this.actId)
        .then(res => {
            if(res == 'success') {
                this.active = false
            }
        })
    }
}
</script>