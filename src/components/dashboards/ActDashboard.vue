<template>
    <v-expansion-panels>
        <ProgressLine :active="active" />
        
        <v-expansion-panel
            v-for="(item, index) in this.acts.acts" 
            :key="index"
            class="mb-2"
        >
        <v-expansion-panel-header>
            <div class="d-flex pa-1" :class="currentUserApproveStatus(item.approvers)">
                <div>{{ `${item.firm.name} c ${item.dates[0]} по ${item.dates[1]}` }}</div>
                
                <div class="ml-auto mr-3">Ваш статус согласования: {{ currentUserApproveStatus(item.approvers) }}</div>
            </div>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
            <ActCard 
                :item="item" 
                :index="index" 
                :currentStatus="currentUserApproveStatus(item.approvers)"
            />
        </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
import ActCard from '@/components/dashboards/ActCard'
import ProgressLine from '@/components/app/ProgressLine'
import {mapState} from 'vuex'

export default {
    components: {
        ActCard, ProgressLine
    },

    data: () => ({
        active: true
    }),

    methods: {
        currentUserApproveStatus(approves, userRoles = this.$store.state.user.roles) {
            let status = ""

            userRoles.forEach(element => {
                if(approves[element]) {
                    status = approves[element]
                }
            });

            return status
        }
    },

    computed: {
        ...mapState([
            'acts'
        ]),
    },

    mounted: function() {
        this.$store.dispatch('acts/getActs')
        .then(res => {
            if(res == 'success') {
                this.active = false
            }
        })
    }
}
</script>

<style scoped>
    .new {
        background: #CFD8DC;
    }

    .owner {
        background: cornflowerblue;
    }

    .approve {
        background:#C8E6C9;
    }

    .disapprove {
        background: #EF9A9A;
    }
        
    .close {
        background: #EF9A9A;
        text-decoration: line-through;
    }

</style>