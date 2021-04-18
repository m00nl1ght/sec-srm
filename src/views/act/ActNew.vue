<template>
    <ActForm @onSubmit='onSubmit'/>
</template>

<script>
import ActForm from "@/components/forms/ActForm";

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
    }
}
</script>