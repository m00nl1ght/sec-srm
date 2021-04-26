<template>
    <ActForm @onSubmit='onSubmit'/>
</template>

<script>
import ActForm from "@/components/act/ActForm";
export default {
    props: ['id'],
    components: { ActForm },

    methods: {
        onSubmit(props) {
            this.$store.dispatch('acts/updateActs', this.id)
            .then(res => {
                if(res == 'success') {
                    props.done()
                }
            })
        }
    },

    beforeMount() {
        this.$store.dispatch('acts/editActs', this.id)
    }
}
</script>
