<template>
    <v-toolbar>
        <v-btn 
            @click="onDelete()"
            icon
        >
            <v-icon color="grey lighten-1">mdi-trash-can-outline</v-icon>
        </v-btn>

        <v-toolbar-title>{{this.title}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn 
            v-if="(status == 'new' || status == 'disapprove') && checkRole"
            @click="changeStatus('approve', id)"
            icon
        >
            <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

        <v-btn 
            v-if="(status == 'new' || status == 'approve') && checkRole"
            @click="changeStatus('disapprove', id)"
            icon
        >
            <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
        </v-btn>

        <v-btn icon @click="() => this.$store.dispatch('worker/openModalAddFile', id)">
            <v-icon>mdi-folder-plus</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
    props: ['title', 'id', 'status', 'actId'],

    methods: {
        openModal() {
            this.dialog = true;
        },

        closeModal() {
            this.dialog = false;
        },

        changeStatus(status, id){
            this.$store.dispatch('worker/changeStatus', { id, status, actId: this.actId })
        },

        onDelete() {
            this.$store.dispatch('worker/deleteWorker', { id: this.id, actId: this.actId })
        }
    },

    computed: {
        checkRole() {
            return this.$store.getters['user/checkRole']('sd')
        }
    }
}
</script>