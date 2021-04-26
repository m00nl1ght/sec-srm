<template>
    <ActForm @onSubmit='onSubmit'/>
</template>

<script>
import ActForm from "@/components/act/ActForm";

export default {
    components: {
        ActForm
    },

    methods: {
        onSubmit(props) {
            this.$store.dispatch('acts/storeActs')
            .then(res => {
                if(res == 'success') {
                    props.done()
                }
            })
        }
    },

    beforeMount() {
        this.$store.commit('checkboxBlock/resetForm')
    }
}
</script>